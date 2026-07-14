import { useState, useEffect, useRef } from "react";
import Section from "./Section.jsx";
import Question from "./Question.jsx";

// Map section ids → their accent color variable (the 7-stage learning loop).
export const SECTION_COLOR = {
  hook: "var(--c-hook)",
  intuition: "var(--c-intuition)",
  formalism: "var(--c-formalism)",
  simulate: "var(--c-simulate)",
  "ds-payoff": "var(--c-ds-payoff)",
  pitfalls: "var(--c-pitfalls)",
  recall: "var(--c-recall)",
};

export default function TopicView({ data, isDone, onToggleDone, onNavigate }) {
  const { module, topic, prev, next } = data;
  const [tab, setTab] = useState("learn");
  const [activeSection, setActiveSection] = useState(topic.sections[0]?.id);
  const sectionRefs = useRef({});

  // reset when the topic changes
  useEffect(() => {
    setTab("learn");
    setActiveSection(topic.sections[0]?.id);
  }, [topic.id]);

  // track which section is in view → drives the rail's filled square
  useEffect(() => {
    if (tab !== "learn") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.dataset.sid);
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );
    Object.values(sectionRefs.current).forEach(
      (el) => el && observer.observe(el)
    );
    return () => observer.disconnect();
  }, [tab, topic.id]);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const goPractice = () => {
    setTab("questions");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <article className="topic">
      <div className="chips">
        <span className="chip red">
          Module {module.number} · Topic {topic.number.split(".")[1] || topic.number}
        </span>
        <span className={`chip ${isDone ? "green" : ""}`}>
          {isDone ? "✓ +40 XP earned" : "+40 XP on completion"}
        </span>
      </div>

      <h1 className="topic-title">{topic.title}</h1>
      {topic.oneLiner && <p className="topic-oneliner">{topic.oneLiner}</p>}

      <div className="meta-row">
        <span className="meta">⏱ ~45 min</span>
        <span className="meta">{topic.sections.length} sections</span>
        <span className="meta">{topic.questions.length} exercises</span>
        <button
          className={`done-btn ${isDone ? "is-done" : ""}`}
          onClick={onToggleDone}
        >
          {isDone ? "✓ Completed" : "Mark complete"}
        </button>
      </div>

      <div className="tabs">
        <button
          className={`tab ${tab === "learn" ? "active" : ""}`}
          onClick={() => setTab("learn")}
        >
          Learn
        </button>
        <button
          className={`tab ${tab === "questions" ? "active" : ""}`}
          onClick={() => setTab("questions")}
        >
          Questions · {topic.questions.length}
        </button>
      </div>

      {tab === "learn" ? (
        <div className="learn">
          <div className="rail">
            {topic.sections.map((s) => (
              <button
                key={s.id}
                className={`rail-item ${activeSection === s.id ? "on" : ""}`}
                style={{ "--c": SECTION_COLOR[s.id] }}
                onClick={() => scrollToSection(s.id)}
              >
                <span className="sq" />
                {s.title}
              </button>
            ))}
          </div>
          <div className="sections">
            {topic.sections.map((s, i) => (
              <div
                key={s.id}
                data-sid={s.id}
                ref={(el) => (sectionRefs.current[s.id] = el)}
              >
                <Section section={s} index={i + 1} total={topic.sections.length} />
              </div>
            ))}
            {topic.questions.length > 0 && (
              <div className="cta-row">
                <button className="cta" onClick={goPractice}>
                  Ready? Try the exercises →
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="questions">
          <p className="questions-intro">
            Try each one <strong>before</strong> revealing the solution. For
            anything computational, write the simulation first — that struggle
            is where the learning happens.
          </p>
          {topic.questions.map((q, i) => (
            <Question key={q.id} question={q} index={i + 1} />
          ))}
        </div>
      )}

      <nav className="topic-nav">
        <button
          className="topic-nav-btn prev"
          disabled={!prev}
          onClick={() => prev && onNavigate(prev.id)}
        >
          {prev ? (
            <>
              <span className="dir">← Prev · {prev.number}</span>
              <span className="lbl">{prev.title}</span>
            </>
          ) : (
            <span className="lbl">Start of the course</span>
          )}
        </button>
        <button
          className="topic-nav-btn next"
          disabled={!next}
          onClick={() => next && onNavigate(next.id)}
        >
          {next ? (
            <>
              <span className="dir">Next · {next.number} →</span>
              <span className="lbl">{next.title}</span>
            </>
          ) : (
            <span className="lbl">End of the course — for now</span>
          )}
        </button>
      </nav>
    </article>
  );
}
