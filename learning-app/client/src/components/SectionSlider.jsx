import { useState, useEffect, useRef, useCallback } from "react";
import Section from "./Section.jsx";
import { sectionColor } from "../sectionColors.js";

/**
 * SectionSlider — shows a topic's learning sections ONE AT A TIME as a carousel.
 *
 * A single header shows only the currently selected subtopic (emoji + title +
 * "N of M") flanked by ‹ / › buttons that move between sections; a progress bar
 * shows overall position. Content slides in on each change.
 *
 * Self-contained and reusable: give it an array of `sections`
 * ({ id, icon, title, body }). All carousel behavior + `.slider-*` styles live
 * here, so it's easy to restyle or replace.
 *
 * Props:
 *   sections   : Section[]                      (required)
 *   resetKey   : any — when it changes, jump back to the first section
 *   onFinish   : () => void — shown as a button on the final section
 *   finishLabel: string — label for that button (default "Finish")
 */
export default function SectionSlider({
  sections = [],
  resetKey,
  onFinish,
  finishLabel = "Finish",
}) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = back (drives slide direction)
  const stageRef = useRef(null);
  const touchX = useRef(null);
  const mounted = useRef(false);
  const indexRef = useRef(0); // synchronous mirror of `index` for rapid input

  const total = sections.length;

  // reset to the first section whenever the topic changes
  useEffect(() => {
    indexRef.current = 0;
    setIndex(0);
    setDir(1);
    mounted.current = false;
  }, [resetKey]);

  // move to any section. A synchronously-updated ref keeps back-to-back calls
  // (fast key presses / double taps) from sharing stale state.
  const go = useCallback(
    (target) => {
      const cur = indexRef.current;
      const next = Math.max(0, Math.min(total - 1, target));
      if (next === cur) return;
      indexRef.current = next;
      setDir(next >= cur ? 1 : -1);
      setIndex(next);
    },
    [total]
  );

  const goNext = useCallback(() => go(indexRef.current + 1), [go]);
  const goPrev = useCallback(() => go(indexRef.current - 1), [go]);

  // keyboard: ← / → move through (ignored while typing in a field)
  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // after a change, bring the slider's top into view (skip first mount)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const el = stageRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }, [index]);

  if (total === 0) return null;

  const section = sections[index];
  const isLast = index === total - 1;
  const isFirst = index === 0;
  const accent = sectionColor(section.id);

  // touch swipe (mobile)
  const onTouchStart = (e) => (touchX.current = e.changedTouches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 55) (dx < 0 ? goNext : goPrev)();
    touchX.current = null;
  };

  return (
    <div className="slider" ref={stageRef} style={{ "--c": accent }}>
      {/* carousel header: only the selected subtopic, with ‹ / › controls */}
      <div className="slider-carousel">
        <button
          className="carousel-arrow"
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous section"
        >
          ‹
        </button>

        <div key={section.id} className="carousel-current">
          <span className="carousel-emoji">{section.icon}</span>
          <div className="carousel-titles">
            <div className="carousel-count">
              Section {index + 1} of {total}
            </div>
            <div className="carousel-title">{section.title}</div>
          </div>
        </div>

        <button
          className="carousel-arrow"
          onClick={goNext}
          disabled={isLast}
          aria-label="Next section"
        >
          ›
        </button>
      </div>

      {/* overall progress */}
      <div className="slider-progress">
        <span style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {/* animated stage — key change remounts the card so it re-animates */}
      <div
        className="slider-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={section.id}
          className="slider-card"
          style={{ "--dx": dir > 0 ? "34px" : "-34px" }}
        >
          <Section
            section={section}
            index={index + 1}
            total={total}
            showHeader={false}
          />
        </div>
      </div>

      {/* on the last section, offer the hand-off to practice */}
      {isLast && onFinish && (
        <div className="slider-finish">
          <button className="slider-btn primary" onClick={onFinish}>
            {finishLabel} →
          </button>
        </div>
      )}
    </div>
  );
}
