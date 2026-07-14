// Maps a section's "kind" (its stable emoji-derived id from the data generator)
// to its accent color variable. Shared by Section, SectionSlider, and TopicView
// so the color-coded learning rhythm is defined in exactly one place.
export const SECTION_COLOR = {
  hook: "var(--c-hook)",
  intuition: "var(--c-intuition)",
  formalism: "var(--c-formalism)",
  simulate: "var(--c-simulate)",
  "ds-payoff": "var(--c-ds-payoff)",
  pitfalls: "var(--c-pitfalls)",
  recall: "var(--c-recall)",
};

export const sectionColor = (id) => SECTION_COLOR[id] || "var(--red)";
