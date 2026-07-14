import Markdown from "./Markdown.jsx";
import { sectionColor } from "../sectionColors.js";

// One learning-loop section: a color-tinted band (top rule + emoji +
// "SECTION N OF M" kicker + name) followed by the body on the page canvas.
export default function Section({ section, index, total }) {
  const color = sectionColor(section.id);
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
