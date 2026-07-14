import { useState, useEffect } from "react";
import SectionSlider from "./SectionSlider.jsx";
import Question from "./Question.jsx";

export default function TopicView({ data, isDone, onToggleDone, onNavigate }) {
  const { module, topic, prev, next } = data;
  const [tab, setTab] = useState("learn");

  // reset to the Learn tab whenever we open a different topic
  useEffect(() => setTab("learn"), [topic.id]);

  const goPractice = () => {
    setTab("questions");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <SectionSlider
          sections={topic.sections}
          resetKey={topic.id}
          onFinish={topic.questions.length > 0 ? goPractice : undefined}
          finishLabel="Try the exercises"
        />
      ) : (
        <div className="questions">
          <p className="questions-intro">
            Try each one <strong>before</strong> revealing the solution. Work it
            through on paper first — that struggle is where the learning happens.
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
