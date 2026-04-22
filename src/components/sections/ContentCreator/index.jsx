import CreatorPhoneMockup from "./CreatorPhoneMockup";
import CreatorFloatingIcons from "./CreatorFloatingIcons";
import FloatingCards from "./FloatingCards";
import Title from "../../ui/Title";
import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";

export default function ContentCreator() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);

  return (
    <section
      id="content-creator"
      className="relative overflow-hidden bg-[color:var(--color-black)] py-20 px-6 md:px-16"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="relative h-[680px] md:h-[720px]">
          <CreatorPhoneMockup />
          <CreatorFloatingIcons />
          <FloatingCards cards={contentCreator.floatingCards} />
        </div>

        <div>
          <Title
            eyebrow={contentCreator.eyebrow}
            text={contentCreator.heading}
            highlight={contentCreator.highlight}
            description={contentCreator.description}
            align="left"
          />
        </div>
      </div>
    </section>
  );
}
