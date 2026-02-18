import { Lightbulb, University } from "lucide-react";
import CardAbout from "./CardAbout";
import GlassCard from "./GlassCard";
import Title from "../../Title";

export default function About() {
  return (
    <section
      className="w-full bg-gradiente py-24 px-6 md:px-20 relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Title
          text="Sobre mim"
          description="
Gosto de entender o todo, da regra de negócio à arquitetura, para criar sistemas que sejam realmente úteis, escaláveis e bem estruturados."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <GlassCard title="Experiência">
              <div className="space-y-4">
                <p>
                  Desenvolvedora Full Stack com 2 anos de experiência no
                  desenvolvimento de APIs REST, integrações e sistemas
                  orientados a regras de negócio.
                </p>

                <ul className="space-y-2">
                  <li>
                    • <strong>Backend:</strong> JavaScript, TypeScript, Node.js,
                    APIs REST
                  </li>
                  <li>
                    • <strong>Bancos de dados:</strong> PostgreSQL, MySQL,
                    MongoDB, Redis
                  </li>
                  <li>
                    • <strong>Arquiteturas:</strong> MVC, Microsserviços,
                    Cliente-Servidor, Clean Architecture
                  </li>
                  <li>
                    • <strong>Qualidade:</strong> TDD, testes unitários e de
                    integração (Jest, Vitest, Supertest)
                  </li>
                  <li>
                    • <strong>DevOps:</strong> Docker, GitHub Actions (CI/CD),
                    Nginx, Linux, AWS
                  </li>
                  <li>
                    • <strong>Frontend:</strong> React, TailwindCSS,
                    Styled-components, HTML, CSS
                  </li>
                  <li>
                    • <strong>Documentação e versionamento:</strong> Swagger,
                    Git e GitHub
                  </li>
                  <li>
                    • <strong>Metodologias ágeis:</strong> Scrum, Kanban, Jira e
                    Trello
                  </li>
                  <li>
                    • <strong>Idiomas:</strong> Inglês intermediário (B1)
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardAbout
              icon={<Lightbulb className=" w-12" />}
              title="Criador de conteúdo técnico"
              text="Produzo conteúdos sobre desenvolvimento e tecnologia com foco em quem está começando na área, compartilhando o que aprendi ao longo da minha jornada na programação."
              delay={300}
              showSocial={true}
            />

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
