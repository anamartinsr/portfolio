import Projects from "../components/Projects.jsx";

import LogoLoop from "../components/ui/LogoLoop.jsx";
import About from "../components/sections/About/index.jsx";
import Hero from "../components/sections/Hero/index.jsx";
import Experience from "../components/sections/Experience/index.jsx";
import Contact from "../components/sections/Contact/index.jsx";

export default function Home() {
  const techLogos = [
    // --- Backend ---
    {
      src: "https://img.shields.io/badge/Node.js-000?style=for-the-badge&logo=node.js&logoColor=white",
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      src: "https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white",
      title: "Express.js",
      href: "https://expressjs.com",
    },
    {
      src: "https://img.shields.io/badge/Fastify-000?style=for-the-badge&logo=fastify&logoColor=white",
      title: "Fastify",
      href: "https://fastify.dev",
    },
    {
      src: "https://img.shields.io/badge/Prisma-000?style=for-the-badge&logo=prisma&logoColor=white",
      title: "Prisma",
      href: "https://www.prisma.io",
    },
    {
      src: "https://img.shields.io/badge/Sequelize-000?style=for-the-badge&logo=sequelize&logoColor=white",
      title: "Sequelize",
      href: "https://sequelize.org",
    },

    // --- Banco de Dados ---
    {
      src: "https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresql&logoColor=white",
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      src: "https://img.shields.io/badge/MySQL-000?style=for-the-badge&logo=mysql&logoColor=white",
      title: "MySQL",
      href: "https://www.mysql.com",
    },
    {
      src: "https://img.shields.io/badge/MongoDB-000?style=for-the-badge&logo=mongodb&logoColor=white",
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },

    // --- Frontend ---
    {
      src: "https://img.shields.io/badge/React-000?style=for-the-badge&logo=react&logoColor=white",
      title: "React",
      href: "https://react.dev",
    },
    {
      src: "https://img.shields.io/badge/Vite-000?style=for-the-badge&logo=vite&logoColor=white",
      title: "Vite",
      href: "https://vitejs.dev",
    },
    {
      src: "https://img.shields.io/badge/TailwindCSS-000?style=for-the-badge&logo=tailwind-css&logoColor=white",
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      src: "https://img.shields.io/badge/TypeScript-000?style=for-the-badge&logo=typescript&logoColor=white",
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },

    // --- Ferramentas Dev ---
    {
      src: "https://img.shields.io/badge/Insomnia-000?style=for-the-badge&logo=insomnia&logoColor=white",
      title: "Insomnia",
      href: "https://insomnia.rest",
    },
    {
      src: "https://img.shields.io/badge/Postman-000?style=for-the-badge&logo=postman&logoColor=white",
      title: "Postman",
      href: "https://www.postman.com",
    },
    {
      src: "https://img.shields.io/badge/Swagger-000?style=for-the-badge&logo=swagger&logoColor=white",
      title: "Swagger",
      href: "https://swagger.io",
    },
    {
      src: "https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git&logoColor=white",
      title: "Git",
      href: "https://git-scm.com",
    },
    {
      src: "https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white",
      title: "GitHub",
      href: "https://github.com",
    },

    // --- Infraestrutura ---
    {
      src: "https://img.shields.io/badge/Docker-000?style=for-the-badge&logo=docker&logoColor=white",
      title: "Docker",
      href: "https://www.docker.com",
    },
    {
      src: "https://img.shields.io/badge/Nginx-000?style=for-the-badge&logo=nginx&logoColor=white",
      title: "Nginx",
      href: "https://nginx.org",
    },
    {
      src: "https://img.shields.io/badge/Linux-000?style=for-the-badge&logo=linux&logoColor=white",
      title: "Linux",
      href: "https://www.linux.org",
    },
  ];

  return (
    <div className="font-poppins">
      <Hero />
      <div className="bg-(--black)">
        <LogoLoop
          logos={techLogos}
          speed={90}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000"
          ariaLabel="Technology partners"
        />

        <About />
      </div>
      <div className="bg-background">
        <Projects />
      </div>
      <Experience />
      <Contact />
    </div>
  );
}
