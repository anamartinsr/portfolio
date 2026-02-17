import { Calendar } from "lucide-react";
import BadgeTech from "../../ui/BadgeTech";

export default function ExperienceCard({ exp }) {
  return (
    <div
      className="group relative rounded-2xl p-8 glass-card overflow-hidden
      hover:scale-105 transition-transform duration-500 ease-out
      hover:shadow-glow animate-slide-up min-h-[240px]
      flex flex-col items-center text-center"
    >
      <div
        className="top-border absolute top-0 left-0 right-0 h-1 
        bg-gradient-to-r from-primary via-accent to-primary-glow 
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />

      <div className="relative z-10 text-left">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>

            <h4 className="text-lg text-(--primary-color) font-medium mb-2">
              {exp.company}
            </h4>

            <p className="text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </div>

          <div className="flex flex-col md:items-end text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 mr-2" />
              {exp.period}
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-3">Tecnologias Utilizadas</h5>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <BadgeTech key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
