import { SiLinkedin } from "react-icons/si";

import experiences from "../../../data/experience";
import BadgeTech from "../../ui/BadgeTech";
import Title from "../../Title";
import Button from "../../ui/Button";
import BackgroundGlow from "../../illustration/BackgroundGlow";

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
    <section id="experience" className="py-11 relative overflow-hidden">
      <BackgroundGlow />

      <div className="max-w-7xl mx-auto">
        <Title
          eyebrow="Trajetória"
          text="Experiência"
          highlight="Profissional"
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[color:var(--surface-glass-border)] -translate-x-1/2" />

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
                          <li key={i}>{`> ${highlight}`}</li>
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
      <div className="flex justify-center items-center mt-12">
        <Button
          href="https://www.linkedin.com/in/anamartinsr/"
          icon={SiLinkedin}
        >
          Ver minha jornada
        </Button>
      </div>
    </section>
  );
}
