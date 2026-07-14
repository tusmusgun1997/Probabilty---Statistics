import { useState } from "react";
import Markdown from "./Markdown.jsx";

const DIFF_LABEL = {
  "warm-up": "Warm-up",
  core: "Core",
  stretch: "Stretch",
};

// A practice question: solid difficulty tag, prompt, and a solution kept
// hidden behind a bordered reveal button (active recall beats passive reading).
export default function Question({ question, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="question-card" data-diff={question.difficulty}>
      <div className="question-head">
        <span className="diff-badge">{DIFF_LABEL[question.difficulty]}</span>
        <span className="question-index">Exercise {index}</span>
        <span className="question-id">{question.id}</span>
      </div>

      <div className="question-prompt">
        <Markdown>{question.prompt}</Markdown>
      </div>

      <button className="reveal-btn" onClick={() => setOpen((v) => !v)}>
        {open ? "Hide solution" : "Reveal solution"}
      </button>

      {open && (
        <div className="question-solution">
          <div className="sol-label">Solution</div>
          <Markdown>{question.solution}</Markdown>
        </div>
      )}
    </div>
  );
}
