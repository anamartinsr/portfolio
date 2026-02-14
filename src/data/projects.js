import Tecnologym from "../assets/tecnologym.png";
import ApiAgendamento from "../assets/agendamento.png";
import UrlShortener from "../assets/url_shortener.png";

const projects = [
  {
    title: "URL Shortener (100k+ URLs)",
    description:
      "API de encurtamento de URLs escalável, capaz de processar até 100 milhões de encurtamentos por dia, com Node.js, TypeScript, Redis, Cassandra, Swagger e Docker, aplicando princípios de Clean Architecture e System Design, o projeto inclui testes automatizados com Jest e Supertest, além de documentação via Swagger.",

    img: UrlShortener,
    techs: [
      "Clean Architecture",
      "TypeScript",
      "Redis",
      "Cassandra",
      "Docker",
      "Node.js",
      "Express",
      "Logs",
      "Pino",
      "Rate Limiting",
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
      "Este projeto é um template moderno para academias, com foco em performance, escalabilidade e facilidade de customização. Ideal para academias ou estúdios que buscam uma solução flexível, visualmente atraente e fácil de manter.",
    img: Tecnologym,
    techs: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Husky",
      "Github Actions CI/CD",
      "Vercel",
    ],
    codeLink: "https://github.com/anamartinsr/technology_gym",
    projectLink: "https://technologym.vercel.app/",
  },
  {
    title: "Api de Agendamento de Consultas",
    description:
      "API desenvolvida para gerenciar o agendamento de consultas, integração de disponibilidade, histórico e notificações por e-mail, com foco em escalabilidade, segurança e manutenibilidade",
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

export default projects;
