import Tecnologym from "../assets/tecnologym.png";
import UrlShortener from "../assets/url_shortener.png";
import DocuSend from "../assets/docusend.png";
import { Linkedin, Mail, MapPin } from "lucide-react";

export const sharedSocialLinks = {
  tiktok: "https://www.tiktok.com/@anamartins.dev",
  youtube: "https://www.youtube.com/@anamartinsdev",
  github: "https://github.com/anamartinsr",
  linkedin: "https://linkedin.com/in/anamartinsr/",
  instagram: "https://www.instagram.com/anamartins.dev",
  x: "https://x.com/anamartinsdev",
  linktree: "https://linktr.ee/anamartinsr",
};

const sharedTechCategories = [
  {
    title: { pt: "Backend", en: "Backend" },
    items: ["JavaScript", "TypeScript", "Node.js", "Nest.js", "REST APIs"],
  },
  {
    title: { pt: "Banco de dados", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: { pt: "Arquitetura", en: "Architectures" },
    items: ["MVC", "Microservices", "Client-Server", "Clean Architecture"],
  },
  {
    title: { pt: "Qualidade", en: "Quality" },
    items: ["TDD", "Unit tests", "Integration", "Jest", "Vitest", "Supertest"],
  },
  {
    title: { pt: "DevOps", en: "DevOps" },
    items: ["Docker", "GitHub Actions (CI/CD)", "Nginx", "Linux", "AWS"],
  },
  {
    title: { pt: "Frontend", en: "Frontend" },
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Styled Components",
      "HTML",
      "CSS",
    ],
  },
  {
    title: {
      pt: "Documentação e versionamento",
      en: "Documentation and versioning",
    },
    items: ["Swagger", "Git", "GitHub"],
  },
  {
    title: { pt: "Metodologias ágeis", en: "Agile methodologies" },
    items: ["Scrum", "Kanban", "Jira", "Trello"],
  },
  {
    title: { pt: "Idiomas", en: "Languages" },
    items: ["Intermediate English (B1)"],
  },
];

const sharedExperience = [
  {
    title: {
      pt: "Desenvolvedora Full Stack ll",
      en: "Full Stack Developer II",
    },
    company: "CIEEMG",
    period: { pt: "Mar 2026 - Presente", en: "Mar 2026 - Present" },
    description: {
      pt: "Atuo com maior autonomia técnica no desenvolvimento de aplicações full stack, colaborando em decisões de arquiteturas, definição de padrões de projeto e no desenvolvimento e evolução de sistemas internos e externos com foco em automação e integrações entre serviços.",
      en: "I work with greater technical autonomy in the development of full-stack applications, collaborating in architectural decisions, defining design patterns, and developing and evolving internal and external systems with a focus on automation and service integrations.",
    },
    technologies: [],
    highlights: [],
  },
  {
    title: { pt: "Desenvolvedora Full Stack I", en: "Full Stack Developer I" },
    company: "CIEEMG",
    period: { pt: "Jan 2024 - Mar 2026", en: "Jan 2024 - Mar 2026" },
    description: {
      pt: "Atuo no desenvolvimento de aplicações web completas, participando do backend ao frontend, manutenção e otimização de APIs legadas com foco em automação de processos e regras de negócio.",
      en: "I work on full web application development, from backend to frontend, including maintenance and optimization of legacy APIs with a focus on process automation and business rules.",
    },
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
      "REST APIs",
      "Project architecture",
      "Design System",
      "API integrations",
      "Database modeling",
      "React",
      "Tailwind CSS",
      "Agile methodologies - Scrum",
      "Git and GitHub",
      "Microservices",
      "Jest",
      "React Testing Library",
      "Vitest",
      "Supertest",
      "Redis",
      "Python",
      "Storybook",
    ],
    highlights: [],
  },
];

const sharedProjects = [
  {
    title: {
      pt: "URL Shortener (100k+ URLs)",
      en: "URL Shortener (100k+ URLs)",
    },
    description: {
      pt: "API de encurtamento de URLs escalável, capaz de processar até 100 milhões de encurtamentos por dia. O projeto aplica princípios de Clean Architecture, separação de responsabilidades e conceitos de System Design voltados a sistemas distribuídos.",
      en: "A scalable URL shortening API capable of processing up to 100 million shortens per day. The project applies Clean Architecture principles, separation of concerns, and System Design concepts for distributed systems.",
    },
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
    projectLink: null,
  },
  {
    title: { pt: "Technology Gym", en: "Technology Gym" },
    description: {
      pt: "Site de academia com apresentação de planos, atividades e matrícula online, com estrutura moderna e foco em experiência do usuário, performance e arquitetura escalável.",
      en: "A gym website with plan presentation, activities, and online sign-up, built with a modern structure and a focus on user experience, performance, and scalable architecture.",
    },
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
  {
    title: { pt: "DocuSend", en: "DocuSend" },
    description: {
      pt: "DocuSend é uma aplicação de envio de documentos, permitindo que os usuários enviem arquivos de forma rápida e segura, com integração de API, validação de dados e testes automatizados, utilizando tecnologias modernas para garantir uma experiência eficiente e confiável.",
      en: "DocuSend is a document delivery app that lets users send files quickly and securely, with API integration, data validation, and automated tests, using modern technologies to ensure an efficient and reliable experience.",
    },
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
    projectLink: null,
  },
  {
    title: { pt: "DocuSign Integration", en: "DocuSign Integration" },
    description: {
      pt: "Integração com a plataforma DocuSign para assinatura eletrônica de documentos, permitindo que os usuários enviem e assinem contratos digitalmente, com foco em segurança e conformidade.",
      en: "Integration with the DocuSign platform for electronic document signing, allowing users to send and sign contracts digitally with a focus on security and compliance.",
    },
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
    projectLink: null,
  },
];

const sharedContactInfo = {
  email: {
    title: { pt: "Email", en: "Email" },
    value: "martinnrs.ana@gmail.com",
    href: "mailto:martinnrs.ana@gmail.com",
    highlight: true,
    icon: <Mail />,
  },
  linkedin: {
    title: { pt: "LinkedIn", en: "LinkedIn" },
    value: "Ana Martins",
    href: sharedSocialLinks.linkedin,
    icon: <Linkedin />,
  },
  location: {
    title: { pt: "Localização", en: "Location" },
    value: {
      pt: "Belo Horizonte - MG, Brasil",
      en: "Belo Horizonte - MG, Brazil",
    },
    icon: <MapPin />,
    description: "",
    href: null,
  },
};

const sharedContentCreator = {
  eyebrow: { pt: "Criadora de conteúdo", en: "Content creator" },
  heading: { pt: "Conteúdo com foco em", en: "Content focused on" },
  highlight: { pt: "tecnologia e carreira", en: "technology and career" },
  description: {
    pt: "Compartilho tutoriais, boas práticas e bastidores reais do dia a dia como desenvolvedora para ajudar pessoas que estão evoluindo na área de tecnologia.",
    en: "I share tutorials, best practices, and real behind-the-scenes moments from my day-to-day as a developer to help people growing in tech.",
  },
  communityMockup: {
    title: { pt: "Comunidade", en: "Community" },
    tabActive: { pt: "Novas", en: "Newsfeed" },
    tabInactive: { pt: "Explorar", en: "Explore" },
    communityLabel: { pt: "Minha Comunidade", en: "My Community" },
    post: {
      author: "Ana Martins",
      timeAgo: "30 mins",
      content: {
        pt: "Programação e Tecnologia",
        en: "Programming and Technology",
      },
    },
  },
  navItems: {
    pt: ["INICIO", "EXPLORAR", "CHAT", "COMUNIDADE"],
    en: ["HOME", "EXPLORE", "CHAT", "COMMUNITY"],
  },
  actions: {
    pt: ["Gostei", "Comentar", "Compartilhar"],
    en: ["Like", "Comment", "Share"],
  },
  floatingCards: {
    pt: [
      {
        id: "mana",
        type: "message",
        content:
          "Ótimo conteudo, Ana! Adorei as dicas sobre arquitetura de software.",
        position: "right-4 top-20",
      },
      {
        id: "profile",
        type: "profile",
        handle: "@anamartins.dev",
        likes: "23k Likes",
        bio: "Dicas, projetos e minhas experiências no mundo tech",
        position: "right-0 top-[255px]",
        followButton: "+ Seguir",
      },
    ],
    en: [
      {
        id: "mana",
        type: "message",
        content: "Great content, Ana! Loved the tips on software architecture.",
        position: "right-4 top-20",
      },
      {
        id: "profile",
        type: "profile",
        handle: "@anamartins.dev",
        likes: "23k Likes",
        bio: "Tips, projects, and my experiences in the tech world",
        position: "right-0 top-[255px]",
        followButton: "+ Follow",
      },
    ],
  },
};

const sharedFooter = {
  location: {
    pt: "Belo Horizonte, MG - Brasil",
    en: "Belo Horizonte, MG - Brazil",
  },
  email: "martinnrs.ana@gmail.com",
  backToTopTarget: "#hero",
  backToTopLabel: { pt: "Voltar ao topo", en: "Back to top" },
  copyrightOwner: "Ana Martins",
  rightsText: { pt: "Todos os direitos reservados", en: "All rights reserved" },
  navLinks: {
    pt: [
      { href: "#hero", label: "Início" },
      { href: "#about", label: "Sobre" },
      { href: "#projects", label: "Projetos" },
      { href: "#experience", label: "Experiência" },
      { href: "#contact", label: "Contato" },
    ],
    en: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
  },
};

export const contentByLanguage = {
  pt: {
    header: {
      navLinks: [
        { href: "#hero", label: "Início" },
        { href: "#about", label: "Sobre mim" },
        { href: "#projects", label: "Projetos" },
        { href: "#experience", label: "Experiência" },
        { href: "#contact", label: "Contato" },
      ],
      toggleThemeAriaLabel: "Ativar modo claro",
      toggleThemeTitle: "Modo claro",
      toggleThemeAltAriaLabel: "Ativar modo escuro",
      toggleThemeAltTitle: "Modo escuro",
      openMenuAriaLabel: "Abrir menu",
      closeMenuAriaLabel: "Fechar menu",
      switchLanguageLabel: "EN",
      switchLanguageAriaLabel: "Trocar para inglês",
    },
    hero: {
      introBadge: { top: "HELLO", bottom: "I'm" },
      name: "Ana Martins",
      focusSentence: "Software Developer",
      cta: "Ver Projetos",
      scrollLabel: "Ver mais",
    },
    about: {
      eyebrow: "Sobre",
      text: "Sobre mim",
      description:
        "Gosto de entender o todo, da regra de negócio à arquitetura, para criar sistemas que sejam realmente úteis, escaláveis e bem estruturados.",
      experienceTitle: "Experiência",
      experienceText: "Desenvolvedora Full Stack com 2 anos de experiência.",
      cardTitle: "Representante no colegiado da faculdade",
      cardText:
        "Represento os alunos de Sistemas de Informação no colegiado da instituição, contribuindo ativamente em decisões acadêmicas e promovendo melhorias na comunicação, organização e qualidade do curso.",
      categories: sharedTechCategories,
    },
    experience: {
      eyebrow: "Trajetória",
      text: "Experiência",
      highlight: "Profissional",
      technologiesTitle: "Tecnologias",
      cta: "Ver minha jornada",
      experiences: sharedExperience,
    },
    projects: {
      eyebrow: "Portfólio",
      text: "Projetos",
      description:
        "Projetos que desenvolvi aplicando na prática conceitos de desenvolvimento, arquitetura e tecnologia.",
      codeButton: "Ver código",
      siteButton: "Ver site",
      cta: "Ver mais projetos",
      projects: sharedProjects,
    },
    contact: {
      eyebrow: "Conexão",
      text: "Meus Contatos",
      button: "Conectar",
      contactInfo: sharedContactInfo,
    },
    contentCreator: {
      eyebrow: sharedContentCreator.eyebrow.pt,
      heading: sharedContentCreator.heading.pt,
      highlight: sharedContentCreator.highlight.pt,
      description: sharedContentCreator.description.pt,
      communityMockup: {
        title: sharedContentCreator.communityMockup.title.pt,
        tabActive: sharedContentCreator.communityMockup.tabActive.pt,
        tabInactive: sharedContentCreator.communityMockup.tabInactive.pt,
        communityLabel: sharedContentCreator.communityMockup.communityLabel.pt,
        post: {
          author: sharedContentCreator.communityMockup.post.author,
          timeAgo: sharedContentCreator.communityMockup.post.timeAgo,
          content: sharedContentCreator.communityMockup.post.content.pt,
        },
      },
      navItems: sharedContentCreator.navItems.pt,
      actions: sharedContentCreator.actions.pt,
      floatingCards: sharedContentCreator.floatingCards.pt,
      floatingIcons: [
        {
          id: "tiktok",
          positionClass: "absolute -right-20 -top-8 z-20",
          outerSizeClass: "h-20 w-20 md:h-24 md:w-24",
          innerSizeClass: "h-12 w-12 md:h-14 md:w-14",
          innerStyle: { backgroundColor: "#000000" },
          href: sharedSocialLinks.tiktok,
          label: "Abrir TikTok",
          icon: "tiktok",
          iconClassName: "h-10 w-10 text-white border rounded-full p-1",
        },
        {
          id: "youtube",
          positionClass: "absolute -right-12 bottom-2 z-20",
          outerSizeClass: "h-14 w-14 md:h-16 md:w-16",
          innerSizeClass: "h-9 w-9 md:h-10 md:w-10",
          innerStyle: { backgroundColor: "#FF0000" },
          href: sharedSocialLinks.youtube,
          label: "Abrir YouTube",
          icon: "youtube",
          iconClassName: "h-6 w-6 text-white",
        },
        {
          id: "github",
          positionClass: "absolute -left-6 bottom-16 z-20",
          outerSizeClass: "h-14 w-14 md:h-16 md:w-16",
          innerSizeClass: "h-9 w-9 md:h-10 md:w-10",
          innerStyle: { backgroundColor: "#24292f" },
          href: sharedSocialLinks.github,
          label: "Abrir GitHub",
          icon: "github",
          iconClassName: "h-6 w-6 text-white",
        },
        {
          id: "instagram",
          positionClass: "absolute -right-2 top-16 z-20",
          outerSizeClass: "h-20 w-20 md:h-24 md:w-24",
          innerSizeClass: "h-12 w-12 md:h-14 md:w-14",
          innerStyle: {
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          },
          href: sharedSocialLinks.instagram,
          label: "Abrir Instagram",
          icon: "instagram",
          iconClassName: "h-7 w-7 text-white",
        },
      ],
    },
    footer: {
      location: sharedFooter.location.pt,
      email: sharedFooter.email,
      backToTopTarget: sharedFooter.backToTopTarget,
      backToTopLabel: sharedFooter.backToTopLabel.pt,
      copyrightOwner: sharedFooter.copyrightOwner,
      rightsText: sharedFooter.rightsText.pt,
      navLinks: sharedFooter.navLinks.pt,
      columns: [
        {
          id: "nav",
          title: "Navegação",
          links: sharedFooter.navLinks.pt,
          columnClassName: "flex flex-col gap-3 text-sm font-medium",
          linkClassName: "hover:text-(--white) transition",
        },
        {
          id: "contact",
          title: "Contato",
          links: [
            {
              href: `mailto:${sharedFooter.email}`,
              label: sharedFooter.email,
            },
          ],
          columnClassName: "flex flex-col gap-2 text-sm",
          linkClassName: "hover:text-(--white) transition",
        },
      ],
    },
    notFound: {
      label: "Página não encontrada",
      backButton: "Voltar para a página inicial",
      requestPath: "> REQUEST_PATH: /unknown-route",
      statusCode: "> STATUS_CODE: 404_NOT_FOUND",
      redirectHome: "> REDIRECT_HOME: AVAILABLE",
    },
  },
  en: {
    header: {
      navLinks: [
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About me" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
      ],
      toggleThemeAriaLabel: "Enable light mode",
      toggleThemeTitle: "Light mode",
      toggleThemeAltAriaLabel: "Enable dark mode",
      toggleThemeAltTitle: "Dark mode",
      openMenuAriaLabel: "Open menu",
      closeMenuAriaLabel: "Close menu",
      switchLanguageLabel: "PT",
      switchLanguageAriaLabel: "Switch to Portuguese",
    },
    hero: {
      introBadge: { top: "HELLO", bottom: "I'm" },
      name: "Ana Martins",
      focusSentence: "Software Developer",
      cta: "View Projects",
      scrollLabel: "See more",
    },
    about: {
      eyebrow: "About",
      text: "About me",
      description:
        "I like understanding the whole picture, from business rules to architecture, to build systems that are truly useful, scalable, and well structured.",
      experienceTitle: "Experience",
      experienceText: "Full Stack Developer with 2 years of experience.",
      cardTitle: "Representative on the university board",
      cardText:
        "I represent Systems Information students on the institution's board, actively contributing to academic decisions and promoting improvements in communication, organization, and course quality.",
      categories: sharedTechCategories,
    },
    experience: {
      eyebrow: "Journey",
      text: "Professional",
      highlight: "Experience",
      technologiesTitle: "Technologies",
      cta: "See my journey",
      experiences: sharedExperience,
    },
    projects: {
      eyebrow: "Portfolio",
      text: "Projects",
      description:
        "Projects I have built by applying development, architecture, and technology concepts in practice.",
      codeButton: "View code",
      siteButton: "View site",
      cta: "See more projects",
      projects: sharedProjects,
    },
    contact: {
      eyebrow: "Connection",
      text: "My Contacts",
      button: "Connect",
      contactInfo: {
        email: {
          title: { pt: "Email", en: "Email" },
          value: "martinnrs.ana@gmail.com",
          href: "mailto:martinnrs.ana@gmail.com",
          highlight: true,
          icon: <Mail />,
        },
        linkedin: {
          title: { pt: "LinkedIn", en: "LinkedIn" },
          value: "Ana Martins",
          href: sharedSocialLinks.linkedin,
          icon: <Linkedin />,
        },
        location: {
          title: { pt: "Localização", en: "Location" },
          value: {
            pt: "Belo Horizonte - MG, Brasil",
            en: "Belo Horizonte - MG, Brazil",
          },
          description: "",
          href: null,
          icon: <MapPin />,
        },
      },
    },
    contentCreator: {
      eyebrow: sharedContentCreator.eyebrow.en,
      heading: sharedContentCreator.heading.en,
      highlight: sharedContentCreator.highlight.en,
      description: sharedContentCreator.description.en,
      communityMockup: {
        title: sharedContentCreator.communityMockup.title.en,
        tabActive: sharedContentCreator.communityMockup.tabActive.en,
        tabInactive: sharedContentCreator.communityMockup.tabInactive.en,
        communityLabel: sharedContentCreator.communityMockup.communityLabel.en,
        post: {
          author: sharedContentCreator.communityMockup.post.author,
          timeAgo: sharedContentCreator.communityMockup.post.timeAgo,
          content: sharedContentCreator.communityMockup.post.content.en,
        },
      },
      navItems: sharedContentCreator.navItems.en,
      actions: sharedContentCreator.actions.en,
      floatingCards: sharedContentCreator.floatingCards.en,
      floatingIcons: [
        {
          id: "tiktok",
          positionClass: "absolute -right-20 -top-8 z-20",
          outerSizeClass: "h-20 w-20 md:h-24 md:w-24",
          innerSizeClass: "h-12 w-12 md:h-14 md:w-14",
          innerStyle: { backgroundColor: "#000000" },
          href: sharedSocialLinks.tiktok,
          label: "Open TikTok",
          icon: "tiktok",
          iconClassName: "h-10 w-10 text-white border rounded-full p-1",
        },
        {
          id: "youtube",
          positionClass: "absolute -right-12 bottom-2 z-20",
          outerSizeClass: "h-14 w-14 md:h-16 md:w-16",
          innerSizeClass: "h-9 w-9 md:h-10 md:w-10",
          innerStyle: { backgroundColor: "#FF0000" },
          href: sharedSocialLinks.youtube,
          label: "Open YouTube",
          icon: "youtube",
          iconClassName: "h-6 w-6 text-white",
        },
        {
          id: "github",
          positionClass: "absolute -left-6 bottom-16 z-20",
          outerSizeClass: "h-14 w-14 md:h-16 md:w-16",
          innerSizeClass: "h-9 w-9 md:h-10 md:w-10",
          innerStyle: { backgroundColor: "#24292f" },
          href: sharedSocialLinks.github,
          label: "Open GitHub",
          icon: "github",
          iconClassName: "h-6 w-6 text-white",
        },
        {
          id: "instagram",
          positionClass: "absolute -right-2 top-16 z-20",
          outerSizeClass: "h-20 w-20 md:h-24 md:w-24",
          innerSizeClass: "h-12 w-12 md:h-14 md:w-14",
          innerStyle: {
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          },
          href: sharedSocialLinks.instagram,
          label: "Open Instagram",
          icon: "instagram",
          iconClassName: "h-7 w-7 text-white",
        },
      ],
    },
    footer: {
      location: sharedFooter.location.en,
      email: sharedFooter.email,
      backToTopTarget: sharedFooter.backToTopTarget,
      backToTopLabel: sharedFooter.backToTopLabel.en,
      copyrightOwner: sharedFooter.copyrightOwner,
      rightsText: sharedFooter.rightsText.en,
      navLinks: sharedFooter.navLinks.en,
      columns: [
        {
          id: "nav",
          title: "Navigation",
          links: sharedFooter.navLinks.en,
          columnClassName: "flex flex-col gap-3 text-sm font-medium",
          linkClassName: "hover:text-(--white) transition",
        },
        {
          id: "contact",
          title: "Contact",
          links: [
            {
              href: `mailto:${sharedFooter.email}`,
              label: sharedFooter.email,
            },
          ],
          columnClassName: "flex flex-col gap-2 text-sm",
          linkClassName: "hover:text-(--white) transition",
        },
      ],
    },
    notFound: {
      label: "Page not found",
      backButton: "Back to home page",
      requestPath: "> REQUEST_PATH: /unknown-route",
      statusCode: "> STATUS_CODE: 404_NOT_FOUND",
      redirectHome: "> REDIRECT_HOME: AVAILABLE",
    },
  },
};

export function getLanguageContent(language) {
  return contentByLanguage[language] ?? contentByLanguage.pt;
}
