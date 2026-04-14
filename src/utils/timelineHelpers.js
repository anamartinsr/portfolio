export function getExperienceRowClass(index) {
  return index % 2 === 0
    ? "flex flex-col md:flex-row"
    : "flex flex-col md:flex-row-reverse";
}

export function getExperienceCardBorderClass(index) {
  if (index % 2 === 0) {
    return "border-r-0 md:border-r-4 border-(--primary-color)";
  }

  return "border-l-0 md:border-l-4 border-[color:var(--text-primary)]/20";
}

export function getExperienceTimelineDotClass(index) {
  if (index === 0) {
    return "bg-(--primary-color) shadow-[0_0_15px_rgba(192,132,252,0.8)]";
  }

  return "bg-[color:var(--text-primary)]/30";
}
