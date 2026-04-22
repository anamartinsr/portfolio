import { SiGithub } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import Button from "../../ui/Button";
import BadgeTech from "../../ui/BadgeTech";

export default function ProjectCard({ project, reverse, language, copy }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center relative overflow-visible">
      <div className={reverse ? "md:order-2" : ""}>
        <img
          src={project.img}
          alt={project.title[language]}
          loading="lazy"
          decoding="async"
          className="rounded-lg w-full object-cover"
        />
      </div>

      <div className="space-y-4 relative ">
        <h3 className="text-3xl text-[color:var(--color-text-primary)]">
          {project.title[language]}
        </h3>

        <div
          className={`bg-[color:var(--color-card-soft)] backdrop-blur-md rounded-lg p-6 shadow-lg text-center space-y-4 z-10 ${reverse ? "-mr-1" : "-ml-1"}`}
        >
          <p className="leading-relaxed">{project.description[language]}</p>

          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {project.codeLink && (
              <Button href={project.codeLink} icon={SiGithub}>
                {copy.codeButton}
              </Button>
            )}

            {project.projectLink && (
              <Button href={project.projectLink} icon={FiGlobe}>
                {copy.siteButton}
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.techs.map((tech) => (
            <BadgeTech key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
