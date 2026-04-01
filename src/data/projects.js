import Tecnologym from "../assets/tecnologym.png";
import ApiAgendamento from "../assets/agendamento.png";
import UrlShortener from "../assets/url_shortener.png";
import DocuSend from "../assets/docusend.png";

const projects = [
  {
    title: "URL Shortener (100k+ URLs)",
    description:
      "API de encurtamento de URLs escalável, capaz de processar até 100 milhões de encurtamentos por dia. O  projeto aplica princípios de Clean Architecture, separação de responsabilidades e conceitos de System Design voltados a sistemas distribuídos.",
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
      "Site de academia com apresentação de planos, atividades e matrícula online, com estrutura moderna e foco em experiência do usuário, performance e arquitetura escalável.",
    img: Tecnologym,
    techs: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Husky",
      "Github Actions CI/CD",
      "Vercel",
      "Vitest",
      "Testing Library",
      "Zod",
    ],
    codeLink: "https://github.com/anamartinsr/technology_gym",
    projectLink: "https://technologym.vercel.app/",
  },
  // {
  //   title: "Api de Agendamento de Consultas",
  //   description:
  //     "API desenvolvida para gerenciar o agendamento de consultas, integração de disponibilidade, histórico e notificações por e-mail, com foco em escalabilidade, segurança e manutenibilidade",
  //   img: ApiAgendamento,
  //   techs: [
  //     "Express",
  //     "PostgreSQL",
  //     "Node.js",
  //     "Prisma",
  //     "JWT",
  //     "Swagger",
  //     "Husky",
  //     "CI/CD",
  //     "Docker",
  //   ],
  //   codeLink: "https://github.com/anamartinsr/agendamento_consultas_api",
  // },
  {
    title: "DocuSend",
    description:
      "DocuSend é uma aplicação de envio de documentos, permitindo que os usuários enviem arquivos de forma rápida e segura, com integração de API, validação de dados e testes automatizados, utilizando tecnologias modernas para garantir uma experiência eficiente e confiável.",
    img: DocuSend,
    techs: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Github Actions CI/CD",
      "Vercel",
      "Vitest",
      "Testing Library",
      "E2E Testing",
      "Zod",
      "API integration",
    ],
    codeLink: "https://github.com/anamartinsr/docuSend",
  },
  {
    title: "DocuSign Integration",
    description:
      "Integração com a plataforma DocuSign para assinatura eletrônica de documentos, permitindo que os usuários enviem e assinem contratos digitalmente, com foco em segurança e conformidade.",
    img: DocuSend,
    techs: [
      "Node.js",
      "TypeScript",
      "Express",
      "Jest",
      "helmet",
      "Zod",
      "API integration",
    ],
    codeLink: "https://github.com/anamartinsr/docusign-integration",
  },
];

export default projects;
