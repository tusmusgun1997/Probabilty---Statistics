// Course navigation: phase labels → modules (with progress bar + n/m count)
// → topic rows with checkbox states (empty box / red ✓ / active highlight).
// Upcoming modules from the course roadmap render locked, like the design.
const UPCOMING = [
  {
    number: "09",
    title: "DS Special Topics",
    phase: "Phase V — The Data-Science Frontier",
    topics: ["Entropy & KL Divergence", "Markov Chains"],
  },
];

export default function Sidebar({ course, activeId, completed, onSelect, open }) {
  if (!course) return <aside className="sidebar" />;

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <nav>
        {course.modules.map((mod, i) => {
          const done = mod.topics.filter((t) => completed.has(t.id)).length;
          // only print a phase label when it changes from the previous module
          const newPhase = mod.phase !== course.modules[i - 1]?.phase;
          return (
            <div key={mod.id}>
              {newPhase && <div className="nav-phase">{mod.phase}</div>}
              <section className="nav-module">
                <div className="nav-module-head">
                  <span className="nav-module-num">{mod.number}</span>
                  <span className="nav-module-title">
                    {mod.title.split(":")[0]}
                  </span>
                  <span className="nav-module-count">
                    {done}/{mod.topics.length}
                  </span>
                </div>
                <div className="nav-module-bar">
                  <span
                    style={{ width: `${(done / mod.topics.length) * 100}%` }}
                  />
                </div>
                {mod.topics.map((t) => {
                  const isDone = completed.has(t.id);
                  return (
                    <button
                      key={t.id}
                      className={`nav-topic ${activeId === t.id ? "active" : ""}`}
                      onClick={() => onSelect(t.id)}
                    >
                      <span className={`box ${isDone ? "done" : ""}`}>
                        {isDone ? "✓" : ""}
                      </span>
                      <span className="num">{t.number}</span>
                      <span>{t.title}</span>
                    </button>
                  );
                })}
              </section>
            </div>
          );
        })}

        {UPCOMING.map((mod) => (
          <div key={mod.number}>
            {mod.phase && <div className="nav-phase">{mod.phase}</div>}
            <section className="nav-module locked">
              <div className="nav-module-head">
                <span className="nav-module-num">{mod.number}</span>
                <span className="nav-module-title">{mod.title}</span>
                <span className="nav-lock">🔒</span>
              </div>
              {mod.topics.map((t, i) => (
                <button key={t} className="nav-topic" disabled>
                  <span className="box" />
                  <span className="num">
                    {mod.number}.{i + 1}
                  </span>
                  <span>{t}</span>
                </button>
              ))}
            </section>
          </div>
        ))}
      </nav>
    </aside>
  );
}
