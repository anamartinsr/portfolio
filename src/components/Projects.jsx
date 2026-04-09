import { SiGithub } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import Title from "./Title";
import Button from "./ui/Button";
import BadgeTech from "./ui/BadgeTech";
import { getLanguageContent, sharedSocialLinks } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

function ProjectCard({ project, reverse, language, copy }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center relative overflow-visible">
      <div className={reverse ? "md:order-2" : ""}>
        <img
          src={project.img}
          alt={project.title[language]}
          loading="lazy"
          decoding="async"
          className="rounded-lg shadow-2xl w-full object-cover"
        />
      </div>

      <div className="space-y-4 relative ">
        <h3 className="text-3xl text-(--white)">{project.title[language]}</h3>

        <div
          className={`bg-[color:var(--card-soft)] backdrop-blur-md rounded-lg p-6 shadow-lg text-center space-y-4 z-10 ${reverse ? "-mr-20" : "-ml-20"}`}
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

export default function Projects() {
  const { language } = useLanguage();
  const { projects: projectContent } = getLanguageContent(language);

  return (
    <section
      id="projects"
      className="w-full text-center py-24 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Title
          eyebrow={projectContent.eyebrow}
          text={projectContent.text}
          description={projectContent.description}
        />

        <div className="max-w-6xl mx-auto space-y-24">
          {projectContent.projects.map((project, idx) => (
            <ProjectCard
              key={project.title[language]}
              project={project}
              language={language}
              copy={projectContent}
              reverse={idx % 2 !== 0}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-20">
          <Button href={sharedSocialLinks.github} icon={SiGithub}>
            {projectContent.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
