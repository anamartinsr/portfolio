import {
  getExperienceCardBorderClass,
  getExperienceRowClass,
  getExperienceTimelineDotClass,
} from "../../../utils/timelineHelpers";

export default function ExperienceTimelineItem({ exp, index, language }) {
  const rowClass = getExperienceRowClass(index);
  const cardBorderClass = getExperienceCardBorderClass(index);
  const timelineDotClass = getExperienceTimelineDotClass(index);

  return (
    <div className="relative">
      <div className={`${rowClass} items-center md:justify-between w-full`}>
        <div className="md:w-[45%] mb-4 md:mb-0">
          <div
            className={`bg-[color:var(--surface-card)] p-8 rounded-xl ${cardBorderClass}`}
          >
            <span className="text-xs font-bold text-(--primary-color) mb-2 block uppercase tracking-widest">
              {exp.period[language]}
            </span>
            <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-1">
              {exp.title[language]}
            </h3>
            <h4 className="text-[color:var(--text-primary)]/80 font-medium mb-4">
              {exp.company}
            </h4>
            {exp.description && (
              <p className="text-sm text-[color:var(--text-primary)]/80 mb-4">
                {exp.description[language]}
              </p>
            )}
            <ul className="text-sm text-[color:var(--text-primary)] space-y-2 list-none">
              {exp.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{`> ${highlight}`}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full ${timelineDotClass} -translate-x-1/2 z-10 border-4 border-[color:var(--black)]`}
        />

        <div className="hidden md:block md:w-[45%]" />
      </div>
    </div>
  );
}
