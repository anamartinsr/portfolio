import CreatorPhoneMockup from "./CreatorPhoneMockup";
import CreatorFloatingIcons from "./CreatorFloatingIcons";
import FloatingCards from "./FloatingCards";
import Title from "../../ui/Title";
import { getLanguageContent, socialLinks } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";
import Social from "./Social";

export default function ContentCreator() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);

  return (
    <section
      id="content-creator"
      className="relative overflow-hidden bg-[color:var(--color-black)] px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 lg:order-1">
          <div className="relative h-[520px] sm:h-[620px] md:h-[680px] lg:h-[720px]">
            <CreatorPhoneMockup />
            <CreatorFloatingIcons />
            <div className="hidden sm:block">
              <FloatingCards cards={contentCreator.floatingCards} />
            </div>
          </div>
          <div className="mt-6 sm:hidden">
            <FloatingCards cards={contentCreator.floatingCards} mobileStack />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Title
            eyebrow={contentCreator.eyebrow}
            text={contentCreator.heading}
            highlight={contentCreator.highlight}
            description={contentCreator.description}
            align="left"
          />
          <div className="mt-4 text-center">
            <p className="text-[color:var(--color-text-muted)]">
              {contentCreator.subDescription}
            </p>
            <Social socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
