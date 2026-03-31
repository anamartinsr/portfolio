import Projects from "../components/Projects.jsx";

import LogoLoop from "../components/ui/LogoLoop.jsx";
import About from "../components/sections/About/index.jsx";
import Hero from "../components/sections/Hero/index.jsx";
import Experience from "../components/sections/Experience/index.jsx";
import Contact from "../components/sections/Contact/index.jsx";
import ContentCreator from "../components/sections/ContentCreator/index.jsx";

export default function Home() {
  const techLogos = [
    // --- Backend ---
    {
      src: "https://img.shields.io/badge/Node.js-C084FC?style=for-the-badge&logo=node.js&logoColor=white",
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      src: "https://img.shields.io/badge/Express-C084FC?style=for-the-badge&logo=express&logoColor=white",
      title: "Express.js",
      href: "https://expressjs.com",
    },
    {
      src: "https://img.shields.io/badge/Fastify-C084FC?style=for-the-badge&logo=fastify&logoColor=white",
      title: "Fastify",
      href: "https://fastify.dev",
    },
    {
      src: "https://img.shields.io/badge/Prisma-C084FC?style=for-the-badge&logo=prisma&logoColor=white",
      title: "Prisma",
      href: "https://www.prisma.io",
    },
    {
      src: "https://img.shields.io/badge/Sequelize-C084FC?style=for-the-badge&logo=sequelize&logoColor=white",
      title: "Sequelize",
      href: "https://sequelize.org",
    },

    // --- Banco de Dados ---
    {
      src: "https://img.shields.io/badge/PostgreSQL-C084FC?style=for-the-badge&logo=postgresql&logoColor=white",
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      src: "https://img.shields.io/badge/MySQL-C084FC?style=for-the-badge&logo=mysql&logoColor=white",
      title: "MySQL",
      href: "https://www.mysql.com",
    },
    {
      src: "https://img.shields.io/badge/MongoDB-C084FC?style=for-the-badge&logo=mongodb&logoColor=white",
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },

    // --- Frontend ---
    {
      src: "https://img.shields.io/badge/React-C084FC?style=for-the-badge&logo=react&logoColor=white",
      title: "React",
      href: "https://react.dev",
    },
    {
      src: "https://img.shields.io/badge/Vite-C084FC?style=for-the-badge&logo=vite&logoColor=white",
      title: "Vite",
      href: "https://vitejs.dev",
    },
    {
      src: "https://img.shields.io/badge/TailwindCSS-C084FC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      src: "https://img.shields.io/badge/TypeScript-C084FC?style=for-the-badge&logo=typescript&logoColor=white",
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },

    // --- Ferramentas Dev ---
    {
      src: "https://img.shields.io/badge/Insomnia-C084FC?style=for-the-badge&logo=insomnia&logoColor=white",
      title: "Insomnia",
      href: "https://insomnia.rest",
    },
    {
      src: "https://img.shields.io/badge/Postman-C084FC?style=for-the-badge&logo=postman&logoColor=white",
      title: "Postman",
      href: "https://www.postman.com",
    },
    {
      src: "https://img.shields.io/badge/Swagger-C084FC?style=for-the-badge&logo=swagger&logoColor=white",
      title: "Swagger",
      href: "https://swagger.io",
    },
    {
      src: "https://img.shields.io/badge/Git-C084FC?style=for-the-badge&logo=git&logoColor=white",
      title: "Git",
      href: "https://git-scm.com",
    },
    {
      src: "https://img.shields.io/badge/GitHub-C084FC?style=for-the-badge&logo=github&logoColor=white",
      title: "GitHub",
      href: "https://github.com",
    },

    // --- Infraestrutura ---
    {
      src: "https://img.shields.io/badge/Docker-C084FC?style=for-the-badge&logo=docker&logoColor=white",
      title: "Docker",
      href: "https://www.docker.com",
    },
    {
      src: "https://img.shields.io/badge/Nginx-C084FC?style=for-the-badge&logo=nginx&logoColor=white",
      title: "Nginx",
      href: "https://nginx.org",
    },
    {
      src: "https://img.shields.io/badge/Linux-C084FC?style=for-the-badge&logo=linux&logoColor=white",
      title: "Linux",
      href: "https://www.linux.org",
    },
  ];

  return (
    <div className="font-poppins">
      <Hero />
      <div className="bg-[var(--purple-6)]">
        <LogoLoop
          logos={techLogos}
          speed={90}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#C084FC"
          ariaLabel="Technology partners"
        />

        <About />
      </div>
      <div className="bg-background">
        <Projects />
      </div>
      <ContentCreator />
      <Experience />
      <Contact />
    </div>
  );
}
