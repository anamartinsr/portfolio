import { GraduationCap, Code, Server, Users } from "lucide-react";
import CardAbout from "./CardAbout";
import AboutHeader from "./HeaderAbout";
import GlassCard from "./GlassCard";
import StatsGroup from "./StatsGroup";

export default function About() {
  return (
    <section
      className="w-full gradient-subtle py-24 px-6 md:px-20 relative overflow-hidden"
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

            {/* <GlassCard
              title="Habilidades Interpessoais"
              text="Tenho perfil analítico e colaborativo, com boa comunicação técnica e foco em organização.
Busco alinhar tecnologia e estratégia para entregar soluções práticas, eficientes e de impacto real.
Sou proativa, detalhista e comprometida com resultados consistentes."
            /> */}
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* <CardAbout
              icon={<GraduationCap className=" w-12" />}
              title="Formação"
              text="Graduanda em Sistemas de Informação — Universidade Estácio de Sá (2023–2026)."
              delay={300}
            /> */}
            {/* <CardAbout
              icon={<Server className="w-12" />}
              title="Atuação Técnica"
              text="Desenvolvimento back-end com Node.js, Express e bancos de dados SQL e NoSQL, além de integrações entre serviços e APIs externas."
              delay={400}
            /> */}
            {/* <CardAbout
              icon={<Users className=" w-12" />}
              title="Organização e Processos"
              text="Definição de padrões de desenvolvimento, documentação técnica e estruturação de projetos para garantir consistência e manutenibilidade."
              delay={500}
            />
            <CardAbout
              icon={<Code className="w-12" />}
              title="Desenvolvimento Full Stack"
              text="Experiência também no front-end com React, TailwindCSS e boas práticas de UX, garantindo interfaces acessíveis e intuitivas."
              delay={600}
            /> */}
          </div>
        </div>

        {/* <div className="mt-20 flex justify-center">
          <StatsGroup items={[{ value: "2+", label: "Anos de experiência" }]} />
        </div> */}
      </div>
    </section>
  );
}
