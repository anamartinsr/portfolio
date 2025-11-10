import { Code, Layers, Server, Database, Workflow } from "lucide-react";
import { Card, CardContent } from "./CardExperience";

export default function Activities() {
  const activities = [
    {
      icon: <Code className="h-5 w-5 text-(--primary-color)" />,
      text: "Atuo no desenvolvimento de soluções escaláveis, com foco em backend, arquitetura de sistemas e integração entre serviços.",
    },
    {
      icon: <Code className="h-5 w-5 text-(--primary-color)" />,
      text: "Desenvolvo interfaces focadas em usabilidade, reduzindo a carga cognitiva do usuário e garantindo experiências intuitivas.",
    },
    {
      icon: <Server className="h-5 w-5 text-(--primary-color)" />,
      text: "Crio e evoluo APIs REST aplicando boas práticas de autenticação, versionamento, documentação técnica e testes automatizados.",
    },
    {
      icon: <Layers className="h-5 w-5 text-(--primary-color)" />,
      text: "Gerencio deploys e pipelines CI/CD em ambientes Linux e Nginx, garantindo estabilidade, automação e qualidade contínua nas entregas.",
    },
    {
      icon: <Database className="h-5 w-5 text-(--primary-color)" />,
      text: "Modelagem de bancos de dados SQL e NoSQL, orquestração de containers com Docker e comunicação eficiente entre microserviços.",
    },

    {
      icon: <Workflow className="h-5 w-5 text-(--primary-color)" />,
      text: "Atuo na gestão técnica de projetos, aplicando metodologias ágeis, conduzindo code reviews e levantamento de requisitos.",
    },
  ];

  return (
    <section id="activities" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            O que faço na prática
          </h2>
          <p className="text-xl text-muted-foreground">
            Principais atividades e responsabilidades técnicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((act, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition">
              <CardContent className="flex items-start space-x-4">
                <div>{act.icon}</div>
                <p className="text-muted-foreground leading-relaxed">
                  {act.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
