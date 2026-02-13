import { Lightbulb } from "lucide-react";
import CardAbout from "./CardAbout";
import AboutHeader from "./HeaderAbout";
import GlassCard from "./GlassCard";
// import StatsGroup from "./StatsGroup";

export default function About() {
  return (
    <section
      className="w-full bg-gradiente py-24 px-6 md:px-20 relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <AboutHeader
          badge="Quem sou eu"
          title="Sobre mim"
          description="
Gosto de entender o todo, da regra de negócio à arquitetura, para criar sistemas que sejam realmente úteis, escaláveis e bem estruturados."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <GlassCard
              title="Experiência"
              text="Com foco em TypeScript e JavaScript (Node.js e React), possuo experiência em design de APIs e integração de sistemas, criando interfaces intuitivas com alta usabilidade cognitiva.
Experiência em produção com APIs REST, PostgreSQL, MySQL, MongoDB, Redis, Docker, CI/CD, Nginx, React, Tailwind CSS, testes unitários e de integração usando Jest e SuperTest.
Forte foco em regras de negócio, arquitetura limpa e design de sistemas..
"
            />
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardAbout
              icon={<Lightbulb className=" w-12" />}
              title="Criador de conteúdo técnico"
              text=""
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
