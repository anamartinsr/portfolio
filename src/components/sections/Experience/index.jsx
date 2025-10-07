import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './CardExperience';

export default function Experience () {
const experiences = [
  {
    title: "Desenvolvedora Full Stack Júnior",
    company: "CIEEMG",
    period: "Jun 2024 - Presente",
    location: "Presencial",
   description:
      "Atuo no desenvolvimento e manutenção de sistemas internos, com foco em arquitetura backend, integração entre serviços e entregas escaláveis que atendem às regras de negócio da organização.",
    achievements: [
      "Criei APIs REST do zero utilizando Node.js, Express e MySQL, aplicando boas práticas de versionamento, autenticação e documentação técnica com Swagger.",
      "Participo da organização e padronização dos projetos, conduzindo code reviews e definindo estruturas arquiteturais para garantir consistência, qualidade e manutenção a longo prazo.",
      "Realizo deploy e atualizações em servidores Nginx, configurando ambientes estáveis e pipelines de entrega contínua para integração e publicação de aplicações.",
      "Desenvolvi integrações com APIs externas usando Node.js, que se tornaram padrões internos para novas implementações, otimizando o tempo de desenvolvimento e reduzindo retrabalho.",
      "Liderei a transformação de dashboards Power BI em aplicações web completas, criando APIs em Node.js e interfaces em React, com foco em acessibilidade, usabilidade e visualização eficiente de dados.",
      "Projetei e implementei um sistema completo com Node.js, Express, MySQL e React, responsável por gerenciar cadastros, solicitações e históricos de forma automatizada. O projeto envolveu modelagem de dados, definição de regras de negócio, fluxos de aprovação, autenticação e geração de relatórios, garantindo alta escalabilidade e manutenibilidade.",
      "No dia a dia, aplicamos metodologias ágeis, como Kanban, para otimizar o fluxo de trabalho, acompanhar entregas e promover colaboração entre equipes e colaboradores."
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "React",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Swagger",
      "JavaScript",
      "Nginx",
      "Linux",
      "CI/CD"
    ]
  }
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
              <Card 
                key={index}
                className="glass-card p-6"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold  mb-2">
                        {exp.title}
                      </h3>
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
                          className="px-3 py-1 text-xs font-medium bg-(--primary-color)/10 text-(--primary-color) rounded-full border"
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
};

