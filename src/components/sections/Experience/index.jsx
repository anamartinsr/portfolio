import ExperienceCard from "./ExperienceCard";
import Title from "../../Title";
import experiences from "../../../data/experience";
import Button from "../../ui/Button";
import { SiLinkedin } from "react-icons/si";

export default function Experience() {
  return (
    <section id="experience" className="py-8 bg-gradiente h-screen">
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

          <div className="flex justify-center items-center mt-20">
            <Button
              href="https://www.linkedin.com/in/anamartinsr/"
              icon={SiLinkedin}
              className="mt-8"
            >
              Ver minha jornada no desenvolvimento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
