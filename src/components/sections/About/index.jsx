import { University } from "lucide-react";
import CardAbout from "./CardAbout";
import GlassCard from "./GlassCard";
import ExperienceSkillsGrid from "./ExperienceSkillsGrid";
import Title from "../../Title";
import { aboutExperienceCategories } from "../../../data/aboutExperience";

export default function About() {
  return (
    <section
      className="w-full bg-gradiente py-24 px-6 md:px-20 relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Title
          eyebrow="Sobre"
          text="Sobre mim"
          description="
Gosto de entender o todo, da regra de negócio à arquitetura, para criar sistemas que sejam realmente úteis, escaláveis e bem estruturados."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <GlassCard title="Experiência">
              <div className="space-y-8">
                <p>Desenvolvedora Full Stack com 2 anos de experiência.</p>

                <ExperienceSkillsGrid categories={aboutExperienceCategories} />
              </div>
            </GlassCard>
          </div>

          <div className="lg:w-1/2 gap-6">
            <CardAbout
              icon={<University className=" w-12" />}
              title="Representante no colegiado da faculdade"
              text="Represento os alunos de Sistemas de Informação no colegiado da instituição, contribuindo ativamente em decisões acadêmicas e promovendo melhorias na comunicação, organização e qualidade do curso."
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
