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
Gosto de entender o todo, da regra de negócio à arquitetura, para criar sistemas que sejam realmente úteis, escaláveis e bem estruturados.
Tenho olhar analítico, curiosidade constante e acredito que o código certo é aquele que simplifica o trabalho das pessoas e gera valor para quem usa.
Sigo aprendendo, evoluindo e compartilhando conhecimento, sempre em busca de entregar mais do que apenas software: experiências eficientes, claras e humanas."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <GlassCard
              title="Experiência Técnica"
              text="Tenho sólida experiência no desenvolvimento de sistemas, atuando desde a modelagem de dados até a entrega e manutenção de aplicações em produção.
Domino a criação de APIs escaláveis aplicando princípios de arquitetura limpa, autenticação segura e documentação.
"
            />

            <GlassCard
              title="Habilidades Interpessoais"
              text="Tenho perfil analítico e colaborativo, com facilidade em comunicação técnica e organização de processos. 
          Valorizo o aprendizado contínuo e a clareza na execução, buscando sempre alinhar tecnologia, equipe e estratégia. 
          Sou proativa, detalhista e comprometida com a entrega de soluções que realmente resolvem problemas e otimizam o dia a dia das pessoas."
            />
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardAbout
              icon={<GraduationCap className=" w-12" />}
              title="Formação"
              text="Graduanda em Sistemas de Informação — Universidade Estácio de Sá (2023–2026)."
              delay={300}
            />
            <CardAbout
              icon={<Server className="w-12" />}
              title="Atuação Técnica"
              text="Desenvolvimento back-end com Node.js, Express e bancos de dados SQL e NoSQL, além de integrações entre serviços e APIs externas."
              delay={400}
            />
            <CardAbout
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
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <StatsGroup
            items={[
              { value: "2+", label: "Anos de experiência" },
              { value: "7+", label: "Projetos entregues" },
              { value: "∞", label: "Aprendizado contínuo" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
