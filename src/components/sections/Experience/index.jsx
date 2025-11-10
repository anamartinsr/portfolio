import { Calendar } from "lucide-react";
import { Card, CardContent } from "./CardExperience";
import Activities from "./ActivitiesSection";

export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedora Full Stack",
      company: "CIEEMG",
      period: "Jun 2024 - Presente",
      description:
        "Responsável pela arquitetura, desenvolvimento e evolução de sistemas internos, com foco em backend, automação e integrações entre serviços.",
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
        "Design System",
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
    <section id="experience" className="py-8">
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
                    </div>
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
      <Activities />
    </section>
  );
}
