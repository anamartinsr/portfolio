const getTechLogoColor = () => {
  if (typeof document === "undefined") return "#7217c7";

  const rootStyles = getComputedStyle(document.documentElement);
  const color =
    rootStyles.getPropertyValue("--color-primary").trim() ||
    rootStyles.getPropertyValue("--color-primary").trim() ||
    "#7217c7";

  return color.startsWith("#") ? color.slice(1) : color;
};

export const TECH_LOGO_COLOR = getTechLogoColor() || "#7217c7";

function badgeUrl(label, logo, color = TECH_LOGO_COLOR) {
  return `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=for-the-badge&logo=${encodeURIComponent(logo)}&logoColor=white`;
}

export const techLogos = [
  // Backend
  {
    src: badgeUrl("Node.js", "node.js"),
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    src: badgeUrl("Express", "express"),
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    src: badgeUrl("Fastify", "fastify"),
    title: "Fastify",
    href: "https://fastify.dev",
  },
  {
    src: badgeUrl("Prisma", "prisma"),
    title: "Prisma",
    href: "https://www.prisma.io",
  },
  {
    src: badgeUrl("Sequelize", "sequelize"),
    title: "Sequelize",
    href: "https://sequelize.org",
  },

  // Banco de dados
  {
    src: badgeUrl("PostgreSQL", "postgresql"),
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    src: badgeUrl("MySQL", "mysql"),
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    src: badgeUrl("MongoDB", "mongodb"),
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },

  // Frontend
  {
    src: badgeUrl("React", "react"),
    title: "React",
    href: "https://react.dev",
  },
  { src: badgeUrl("Vite", "vite"), title: "Vite", href: "https://vitejs.dev" },
  {
    src: badgeUrl("TailwindCSS", "tailwind-css"),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    src: badgeUrl("TypeScript", "typescript"),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },

  // Ferramentas Dev
  {
    src: badgeUrl("Insomnia", "insomnia"),
    title: "Insomnia",
    href: "https://insomnia.rest",
  },
  {
    src: badgeUrl("Postman", "postman"),
    title: "Postman",
    href: "https://www.postman.com",
  },
  {
    src: badgeUrl("Swagger", "swagger"),
    title: "Swagger",
    href: "https://swagger.io",
  },
  { src: badgeUrl("Git", "git"), title: "Git", href: "https://git-scm.com" },
  {
    src: badgeUrl("GitHub", "github"),
    title: "GitHub",
    href: "https://github.com",
  },

  // Infraestrutura
  {
    src: badgeUrl("Docker", "docker"),
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    src: badgeUrl("Nginx", "nginx"),
    title: "Nginx",
    href: "https://nginx.org",
  },
  {
    src: badgeUrl("Linux", "linux"),
    title: "Linux",
    href: "https://www.linux.org",
  },
];
