import Markdown from "./Markdown.jsx";
import { SECTION_COLOR } from "./TopicView.jsx";

// One learning-loop section: a color-tinted band (top rule + emoji +
// "SECTION N OF 7" kicker + name) followed by the body on the page canvas.
export default function Section({ section, index, total }) {
  const color = SECTION_COLOR[section.id] || "var(--red)";
  return (
    <section className="section-block" style={{ "--c": color }}>
      <header className="section-band">
        <span className="emoji">{section.icon}</span>
        <div>
          <div className="kicker">
            Section {index} of {total}
          </div>
          <h2>{section.title}</h2>
        </div>
      </header>
      <Markdown>{section.body}</Markdown>
    </section>
  );
}
