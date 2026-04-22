import { Linkedin } from "lucide-react";

import Title from "../../ui/Title";
import Button from "../../ui/Button";
import BackgroundGlow from "../../illustration/BackgroundGlow";
import { getLanguageContent, sharedSocialLinks } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";
import ExperienceTimelineItem from "./TimelineItem";
import ExperienceTechnologies from "./Technologies";
import BackgroundBlurs from "../../illustration/BackgroundBlurs";
import { backgroundBlurs } from "../../../data/contentCreator";

export default function Experience() {
  const { language } = useLanguage();
  const { experience } = getLanguageContent(language);
  const experiencesList = experience.experiences;

  const allTechnologies = [
    ...new Set(experiencesList.flatMap((exp) => exp.technologies)),
  ];

  return (
    <section id="experience" className="py-11 relative overflow-hidden">
      <BackgroundGlow />
      <BackgroundBlurs blurs={backgroundBlurs} />

      <div className="max-w-7xl mx-auto">
        <Title
          eyebrow={experience.eyebrow}
          text={experience.text}
          highlight={experience.highlight}
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[color:var(--color-surface-glass-border)] -translate-x-1/2" />

          {experiencesList.map((exp, index) => {
            return (
              <ExperienceTimelineItem
                key={index}
                exp={exp}
                index={index}
                language={language}
              />
            );
          })}
        </div>

        <ExperienceTechnologies
          technologiesTitle={experience.technologiesTitle}
          technologies={allTechnologies}
        />
      </div>
      <div className="flex justify-center items-center mt-12">
        <Button href={sharedSocialLinks.linkedin} icon={Linkedin}>
          {experience.cta}
        </Button>
      </div>
    </section>
  );
}
