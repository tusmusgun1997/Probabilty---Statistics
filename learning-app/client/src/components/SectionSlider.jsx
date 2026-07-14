import { useState, useEffect, useRef, useCallback } from "react";
import Section from "./Section.jsx";
import { sectionColor } from "../sectionColors.js";

/**
 * SectionSlider — renders a topic's learning sections one at a time as an
 * interactive, animated step-through (instead of one long scroll).
 *
 * Self-contained and reusable: give it an array of `sections`
 * ({ id, icon, title, body }) and it handles stepping, the progress stepper,
 * keyboard arrows, swipe, and slide animation. Everything slider-specific lives
 * in this file + its `.slider-*` styles, so it's easy to restyle or replace.
 *
 * Props:
 *   sections   : Section[]                      (required)
 *   resetKey   : any — when it changes, jump back to the first step
 *   onFinish   : () => void — called from the final step's primary button
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
  const [seen, setSeen] = useState(() => new Set([0]));
  const stageRef = useRef(null);
  const touchX = useRef(null);
  const mounted = useRef(false);
  const indexRef = useRef(0); // synchronous mirror of `index` for rapid input

  const total = sections.length;

  // reset to the first step whenever the topic changes
  useEffect(() => {
    indexRef.current = 0;
    setIndex(0);
    setDir(1);
    setSeen(new Set([0]));
    mounted.current = false;
  }, [resetKey]);

  // mark the current step "seen" whenever it changes (however we got there)
  useEffect(() => {
    setSeen((prev) => (prev.has(index) ? prev : new Set(prev).add(index)));
  }, [index]);

  // jump to any step. Uses a synchronously-updated ref so back-to-back calls
  // (fast key presses / double taps) accumulate instead of sharing stale state.
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

  // keyboard: ← / → step through (ignore while typing in a field)
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

  // after a step change, bring the slider's top into view (skip first mount)
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
      {/* progress stepper — clickable, colored per section kind */}
      <div className="slider-steps" role="tablist" aria-label="Lesson sections">
        {sections.map((s, i) => (
          <button
            key={s.id}
            className={
              "slider-step" +
              (i === index ? " current" : "") +
              (seen.has(i) ? " seen" : "")
            }
            style={{ "--c": sectionColor(s.id) }}
            onClick={() => go(i)}
            title={`${i + 1}. ${s.title}`}
            aria-label={`Go to section ${i + 1}: ${s.title}`}
          >
            <span className="slider-step-dot">{s.icon}</span>
            <span className="slider-step-label">{s.title}</span>
          </button>
        ))}
      </div>

      {/* thin overall progress bar */}
      <div className="slider-progress">
        <span style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {/* the animated stage — key forces a fresh mount so it re-animates */}
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
          <Section section={section} index={index + 1} total={total} />
        </div>
      </div>

      {/* footer navigation */}
      <div className="slider-nav">
        <button className="slider-btn ghost" onClick={goPrev} disabled={index === 0}>
          ← Back
        </button>

        <span className="slider-count">
          {index + 1} <span className="of">/ {total}</span>
        </span>

        {isLast ? (
          <button className="slider-btn primary" onClick={onFinish} disabled={!onFinish}>
            {finishLabel} →
          </button>
        ) : (
          <button className="slider-btn primary" onClick={goNext}>
            Next: {sections[index + 1].title} →
          </button>
        )}
      </div>
    </div>
  );
}
