import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./CardExperience";

export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedora Full Stack Júnior",
      company: "CIEEMG",
      period: "Jun 2024 - Presente",
      location: "Presencial",
      description:
        "Atuo no desenvolvimento e evolução de sistemas internos, com foco em arquitetura backend, integrações entre serviços, automação de deploys e implementação de APIs escaláveis que sustentam os processos e regras de negócio da organização..",
      achievements: [
        "Desenvolvi APIs REST com Node.js, Express e MySQL e documentação com Swagger.",
        "Participo da padronização dos projetos e conduzo code reviews para garantir qualidade e consistência.",
        "Realizo deploys e atualizações em servidores Nginx, configurando ambientes e pipelines de entrega contínua.",
        "Implementei integrações com APIs externas em Node.js, criando padrões internos e otimizando o desenvolvimento.",
        "Projetei um sistema completo com Node.js, Express, MySQL e React, envolvendo regras de negócio e relatórios escaláveis.",
        "Aplicamos metodologias ágeis, como Kanban, para otimizar o fluxo e promover colaboração entre equipes.",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Express",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Swagger",
        "JavaScript",
        "Nginx",
        "Linux",
        "CI/CD",
        "APIs REST",
        "Arquitetura de projetos",
        "Integrações de APIs",
        "Modelagem de banco de dados",
        "React",
        "Tailwind CSS",
        "Metodologias Ágeis",
        "Git e GitHub",
        "Microserviços",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Experiência
            </h2>
            <p className="text-xl text-muted-foreground">
              Minha jornada no desenvolvimento de software e tecnologia
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card p-6">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold  mb-2">{exp.title}</h3>
                      <h4 className="text-lg text-(--primary-color) font-medium mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold mb-3 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-(--primary-color)" />
                      Principais Conquistas
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-muted-foreground flex items-start"
                        >
                          <span className="w-2 h-2 bg-(--primary-color) rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">
                      Tecnologias Utilizadas
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-(--primary-color)/50 text-(--white) rounded-full border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
