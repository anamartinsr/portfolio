import { SiGithub } from "react-icons/si";
import Title from "../../Title";
import Button from "../../ui/Button";
import { getLanguageContent, sharedSocialLinks } from "../../../data/content";
import { useLanguage } from "../../../context/LanguageContext";
import Divider from "../../ui/Divider";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { language } = useLanguage();
  const { projects: projectContent } = getLanguageContent(language);

  return (
    <>
      <section
        id="projects"
        className="w-full text-center py-10 px-6 md:px-20 relative overflow-hidden"
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
      <Divider inverted />
    </>
  );
}
