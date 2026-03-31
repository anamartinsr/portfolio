import experiences from "../../../data/experience";
import BadgeTech from "../../ui/BadgeTech";
import Title from "../../Title";

export default function Experience() {
  const allTechnologies = [
    ...new Set(experiences.flatMap((exp) => exp.technologies)),
  ];

  const getCardBorderClass = (index) => {
    if (index % 2 === 0) {
      return "border-r-0 md:border-r-4 border-(--primary-color)";
    } else {
      return "border-l-0 md:border-l-4 border-[color:var(--text-primary)]/20";
    }
  };

  const getTimelineDotClass = (index) => {
    if (index === 0) {
      return "bg-(--primary-color) shadow-[0_0_15px_rgba(192,132,252,0.8)]";
    } else {
      return "bg-[color:var(--text-primary)]/30";
    }
  };

  return (
    <section id="experience" className="py-18 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[620px] -translate-x-1/2 -translate-y-1/2 opacity-90">
        <div className="absolute inset-0 rounded-[46%_54%_52%_48%/44%_47%_53%_56%] bg-[radial-gradient(ellipse_at_center,rgba(202,123,255,0.3)_0%,rgba(114,23,199,0.16)_40%,rgba(114,23,199,0.06)_68%,rgba(12,3,36,0)_100%)] blur-[44px]" />
        <div className="absolute inset-[10%_9%_13%_9%] rounded-[51%_49%_45%_55%/56%_44%_56%_44%] bg-[radial-gradient(circle_at_50%_45%,rgba(202,123,255,0.16)_0%,rgba(114,23,199,0.08)_46%,rgba(114,23,199,0)_100%)] blur-[70px]" />
        <div className="absolute -inset-[20%] rounded-[48%_52%_50%_50%/52%_48%_52%_48%] bg-[radial-gradient(ellipse_at_center,rgba(202,123,255,0.08)_0%,rgba(114,23,199,0.035)_56%,rgba(10,4,30,0)_100%)] blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <Title
          eyebrow="Trajetória"
          text="Experiência"
          highlight="Profissional"
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[color:var(--surface-glass-border)] -translate-x-1/2"></div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const rowClass = isEven
              ? "flex flex-col md:flex-row"
              : "flex flex-col md:flex-row-reverse";

            return (
              <div key={index} className="relative">
                <div
                  className={`${rowClass} items-center md:justify-between w-full`}
                >
                  <div className={`md:w-[45%] mb-4 md:mb-0 `}>
                    <div
                      className={`bg-[color:var(--surface-card)] p-8 rounded-xl ${getCardBorderClass(index)}`}
                    >
                      <span className="text-xs font-bold text-(--primary-color) mb-2 block uppercase tracking-widest">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-[color:var(--text-primary)]/80 font-medium mb-4">
                        {exp.company}
                      </h4>
                      {exp.description && (
                        <p className="text-sm text-[color:var(--text-primary)]/80 mb-4">
                          {exp.description}
                        </p>
                      )}
                      <ul
                        className={`text-sm text-[color:var(--text-primary)] space-y-2 list-none`}
                      >
                        {exp.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full ${getTimelineDotClass(index)} -translate-x-1/2 z-10 border-4 border-[color:var(--black)]`}
                  ></div>

                  <div className="hidden md:block md:w-[45%]" />
                </div>
              </div>
            );
          })}
        </div>
        {/* tenho que padronizar a largura das seções */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="p-2 md:p-4">
            <h3 className="text-sm text-center font-semibold uppercase tracking-[0.25em] text-white mb-4">
              Tecnologias
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {allTechnologies.map((tech) => (
                <BadgeTech key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
