import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { getCourse, getTopic } from "./api.js";
import Sidebar from "./components/Sidebar.jsx";
import TopicView from "./components/TopicView.jsx";

// --- tiny hash router: #/topic/<id> --------------------------------------
const topicFromHash = () => {
  const m = window.location.hash.match(/^#\/topic\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
};
const goToTopic = (id) => {
  window.location.hash = `#/topic/${encodeURIComponent(id)}`;
};

// --- progress persistence -------------------------------------------------
const DONE_KEY = "probstats.completed";
const loadDone = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(DONE_KEY) || "[]"));
  } catch {
    return new Set();
  }
};
const saveDone = (set) =>
  localStorage.setItem(DONE_KEY, JSON.stringify([...set]));

const THEME_KEY = "probstats.theme";

// --- study streak: consecutive days the app was opened ---------------------
const STREAK_KEY = "probstats.streak";
function computeStreak() {
  const today = new Date().toDateString();
  let data = { last: null, count: 0 };
  try {
    data = JSON.parse(localStorage.getItem(STREAK_KEY)) || data;
  } catch { /* fresh start */ }
  if (data.last !== today) {
    const yesterday = new Date(Date.now() - 864e5).toDateString();
    data = { last: today, count: data.last === yesterday ? data.count + 1 : 1 };
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
  }
  return data.count;
}

export default function App() {
  const [course, setCourse] = useState(null);
  const [activeId, setActiveId] = useState(topicFromHash());
  const [topicData, setTopicData] = useState(null);
  const [loadingTopic, setLoadingTopic] = useState(false);
  const [error, setError] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completed, setCompleted] = useState(loadDone);
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_KEY) || "light"
  );
  const [streak] = useState(computeStreak);

  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // ⌘K / Ctrl+K focuses search
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // load the nav tree once; default to the first topic if no hash
  useEffect(() => {
    getCourse()
      .then((data) => {
        setCourse(data);
        if (!topicFromHash()) {
          const first = data.modules[0]?.topics[0];
          if (first) goToTopic(first.id);
        }
      })
      .catch((e) => setError(e.message));
  }, []);

  // react to hash changes (back/forward, sidebar clicks, deep links)
  useEffect(() => {
    const onHash = () => setActiveId(topicFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // fetch the active topic whenever it changes
  useEffect(() => {
    if (!activeId) return;
    setLoadingTopic(true);
    setError(null);
    getTopic(activeId)
      .then((data) => {
        setTopicData(data);
        window.scrollTo({ top: 0, behavior: "instant" });
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoadingTopic(false));
  }, [activeId]);

  const select = useCallback((id) => {
    goToTopic(id);
    setSidebarOpen(false);
    setQuery("");
  }, []);

  const toggleDone = useCallback((id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      saveDone(next);
      return next;
    });
  }, []);

  // search across all topics
  const results = useMemo(() => {
    if (!course || query.trim().length < 2) return null;
    const q = query.trim().toLowerCase();
    const out = [];
    course.modules.forEach((m) =>
      m.topics.forEach((t) => {
        if ((t.title + " " + t.oneLiner).toLowerCase().includes(q))
          out.push(t);
      })
    );
    return out.slice(0, 8);
  }, [course, query]);

  if (error && !course) {
    return (
      <div className="fatal">
        <h1>Couldn't load the course</h1>
        <p>{error}</p>
        <p>Is the server running? Try <code>npm run server</code> (dev) then reload.</p>
      </div>
    );
  }

  const crumbModule = topicData?.module;
  const crumbTopic = topicData?.topic;

  return (
    <div className="app">
      <header className="topbar">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className="logo">∑</div>
        <span className="brand-title">Probability &amp; Statistics</span>
        {crumbModule && (
          <div className="crumb">
            <span>Module {crumbModule.number} · {crumbModule.title.split(":")[0]}</span>
            <span>/</span>
            <span className="here">{crumbTopic.title}</span>
          </div>
        )}
        <div className="topbar-right">
          <div className="search">
            <span className="mag">🔍</span>
            <input
              ref={searchRef}
              value={query}
              placeholder="Search course"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setQuery("");
                if (e.key === "Enter" && results?.length) select(results[0].id);
              }}
            />
            <span className="kbd">⌘K</span>
            {results && (
              <div className="search-results">
                {results.length === 0 ? (
                  <div className="none">No topics match "{query}"</div>
                ) : (
                  results.map((t) => (
                    <button key={t.id} onClick={() => select(t.id)}>
                      <span className="n">{t.number}</span>
                      <span>{t.title}</span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
          <div className="streak" title="Consecutive days studied">
            🔥 {streak}-day streak
          </div>
          <button
            className="theme-btn"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
        </div>
      </header>

      <div className="layout">
        {sidebarOpen && (
          <div className="scrim" onClick={() => setSidebarOpen(false)} />
        )}
        <Sidebar
          course={course}
          activeId={activeId}
          completed={completed}
          onSelect={select}
          open={sidebarOpen}
        />
        <main className="content">
          {loadingTopic && !topicData ? (
            <div className="loading">Loading…</div>
          ) : topicData ? (
            <TopicView
              data={topicData}
              isDone={completed.has(topicData.topic.id)}
              onToggleDone={() => toggleDone(topicData.topic.id)}
              onNavigate={select}
            />
          ) : (
            <div className="loading">Select a topic to begin.</div>
          )}
        </main>
      </div>
    </div>
  );
}
