import { SiGithub } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import Tecnologym from "../assets/tecnologym.png";
import ApiAgendamento from "../assets/agendamento.png";
import UrlShortener from "../assets/url_shortener.png";

const projects = [
  {
    title: "URL Shortener (100k+ URLs)",
    description:
      "Gerador de URLs escalável, capaz de processar até 100 milhões de encurtamentos por dia, desenvolvido com Node.js, TypeScript, Redis, Cassandra e Docker, aplicando princípios de Clean Architecture e System Design. O projeto inclui testes automatizados com Jest e Supertest, além de documentação via Swagger.",
    img: UrlShortener,
    techs: [
      "Clean Architecture",
      "TypeScript",
      "Redis",
      "Cassandra",
      "Docker",
      "Node.js",
      "Express",
      "Swagger",
      "Jest",
      "Supertest",
      "System Design",
      "Joi",
    ],
    codeLink: "https://github.com/anamartinsr/url_shortener",
  },
  {
    title: "Technology Gym",
    description:
      "Projeto template moderno para academias, desenvolvido com foco em performance, escalabilidade e facilidade de customização. Permite criar rapidamente interfaces responsivas e funcionais, integrando componentes reutilizáveis e práticas modernas de desenvolvimento com TypeScript, React e Vite. Ideal para academias ou estúdios que buscam uma solução flexível, visualmente atraente e fácil de manter.",
    img: Tecnologym,
    techs: ["TypeScript", "React", "Vite", "TailwindCSS"],
    codeLink: "https://github.com/anamartinsr/technology_gym",
    projectLink: "https://technologym.vercel.app/",
  },
  {
    title: "Api de Agendamento de Consultas",
    description:
      "API desenvolvida para gerenciar o agendamento de consultas, integração de disponibilidade, histórico e notificações por e-mail, com foco em escalabilidade, segurança e manutenibilidade. Utiliza Node.js, Express, PostgreSQL e Prisma, seguindo princípios de Clean Architecture e boas práticas de desenvolvimento.",
    img: ApiAgendamento,
    techs: [
      "Express",
      "PostgreSQL",
      "Node.js",
      "Prisma",
      "JWT",
      "Swagger",
      "Husky",
      "CI/CD",
      "Docker",
    ],
    codeLink: "https://github.com/anamartinsr/agendamento_consultas_api",
  },
];

function ProjectCard({ project, reverse }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative">
        <img
          src={project.img}
          alt={project.title}
          className="rounded-lg shadow-2xl w-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-white">{project.title}</h3>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg max-w-md mx-auto text-center space-y-4">
          <p className="text-gray-200 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex justify-center gap-4 mt-2">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-(--primary-color)/50 text-(--white) rounded-md
                           hover:bg-(--white) hover:text-(--primary-color) transitiond transform hover:scale-105 shadow-sm"
              >
                <SiGithub />
                Ver código
              </a>
            )}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-(--primary-color)/50 text-(--white) rounded-md
                           hover:bg-(--white) hover:text-(--primary-color) transitiond transform hover:scale-105 shadow-sm"
              >
                <FiGlobe />
                Ver site
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.techs.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-(--primary-color)/50 text-(--white) rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20 px-6 md:px-16">
      <h2 className="text-5xl text-center md:text-6xl font-bold mb-12">
        <span className="text-gradient">Projetos</span>
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} reverse={idx % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
