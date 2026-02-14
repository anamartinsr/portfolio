import { SiGithub } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import Title from "./Title";
import projects from "../data/projects";
import Button from "./ui/Button";

function ProjectCard({ project, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className={reverse ? "md:order-2" : ""}>
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="rounded-lg shadow-2xl w-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-(--gray)">{project.title}</h3>

        <div className="bg-(--white)/10 backdrop-blur-md rounded-lg p-6 shadow-lg text-center space-y-4">
          <p className="text-(--gray) text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {project.codeLink && (
              <Button href={project.codeLink} icon={SiGithub}>
                Ver código
              </Button>
            )}

            {project.projectLink && (
              <Button href={project.projectLink} icon={FiGlobe}>
                Ver site
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-(--primary-color) text-(--white) rounded-full"
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
    <section
      id="projects"
      className="relative text-center bg-(--black) py-20 px-6 md:px-16"
    >
      <Title
        text="Projetos"
        description="Projetos que desenvolvi aplicando na prática conceitos de desenvolvimento, arquitetura e tecnologia."
      />

      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            project={project}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
