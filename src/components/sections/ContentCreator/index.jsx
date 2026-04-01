import CreatorPhoneMockup from "./CreatorPhoneMockup";
import CreatorFloatingIcons from "./CreatorFloatingIcons";
import FloatingCards from "./FloatingCards";
import BackgroundBlurs from "../../illustration/BackgroundBlurs";
import Title from "../../Title";
import {
  contentCreatorData,
  floatingCardsData,
  backgroundBlurs,
} from "../../../data/contentCreator";

export default function ContentCreator() {
  const { eyebrow, heading, highlight, description } = contentCreatorData;

  return (
    <section
      id="content-creator"
      className="relative overflow-hidden bg-[color:var(--black)] py-24 px-6 md:px-16"
    >
      <BackgroundBlurs blurs={backgroundBlurs} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="relative h-[680px] md:h-[720px]">
          <CreatorPhoneMockup />
          <CreatorFloatingIcons />
          <FloatingCards cards={floatingCardsData} />
        </div>

        <div>
          <Title
            eyebrow={eyebrow}
            text={heading}
            highlight={highlight}
            description={description}
            align="left"
          />
        </div>
      </div>
    </section>
  );
}
