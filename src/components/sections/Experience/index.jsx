import ExperienceCard from "./ExperienceCard";
import Title from "../../Title";
import experiences from "../../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-8 bg-gradiente">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Title
            text="Experiência"
            description="Minha jornada no desenvolvimento de software e tecnologia"
          />

          <div className="space-y-8">
            {experiences.map((experiences, index) => (
              <ExperienceCard key={index} exp={experiences} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
