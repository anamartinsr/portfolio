import { University } from "lucide-react";
import CardAbout from "./CardAbout";
import GlassCard from "./GlassCard";
import ExperienceSkillsGrid from "./ExperienceSkillsGrid";
import Title from "../../ui/Title";
import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";
import CircularText from "./Effects/CircularText";

export default function About() {
  const { language } = useLanguage();
  const { about } = getLanguageContent(language);

  return (
    <section
      className="w-full bg-gradiente py-10 px-6 md:px-20 relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Title
          eyebrow={about.eyebrow}
          text={about.text}
          description={about.description}
        />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <GlassCard title={about.experienceTitle}>
              <div className="space-y-8">
                <p>{about.experienceText}</p>
                <ExperienceSkillsGrid
                  categories={about.categories}
                  language={language}
                />
              </div>
            </GlassCard>
          </div>

          <div className="lg:w-1/2 gap-20 flex flex-col">
            <CardAbout
              icon={<University className="w-12" />}
              title={about.cardTitle}
              text={about.cardText}
              delay={300}
            />

            <CircularText
              text="SOFTWARE*DEVELOPER*"
              onHover="speedUp"
              spinDuration={50}
              className="custom-class"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
