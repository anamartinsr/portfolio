export function getExperienceRowClass(index) {
  return index % 2 === 0
    ? "flex flex-col md:flex-row"
    : "flex flex-col md:flex-row-reverse";
}

export function getExperienceCardBorderClass(index) {
  if (index % 2 === 0) {
    return "border-r-0 md:border-r-4 border-[color:var(--color-primary)]";
  }

  return "border-l-0 md:border-l-4 border-[color:var(--color-text-primary)]/20";
}

export function getExperienceTimelineDotClass(index) {
  if (index === 0) {
    return "bg-[color:var(--color-primary)] shadow-[0_0_15px_rgba(192,132,252,0.8)]";
  }

  return "bg-[color:var(--color-text-primary)]/30";
}
