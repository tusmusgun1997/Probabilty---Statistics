import Markdown from "./Markdown.jsx";
import { sectionColor } from "../sectionColors.js";

// One learning-loop section. By default it renders its own color-tinted band
// (emoji + "SECTION N OF M" kicker + title); pass showHeader={false} when the
// container already provides that header (e.g. the SectionSlider carousel).
// `--c` stays set on the wrapper either way so the body's callouts stay tinted.
export default function Section({ section, index, total, showHeader = true }) {
  const color = sectionColor(section.id);
  return (
    <section className="section-block" style={{ "--c": color }}>
      {showHeader && (
        <header className="section-band">
          <span className="emoji">{section.icon}</span>
          <div>
            <div className="kicker">
              Section {index} of {total}
            </div>
            <h2>{section.title}</h2>
          </div>
        </header>
      )}
      <Markdown>{section.body}</Markdown>
    </section>
  );
}
