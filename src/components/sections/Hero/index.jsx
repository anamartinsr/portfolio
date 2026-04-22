import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

import TrueFocus from "./effects/TrueFocus";
import BackgroundDark from "../../../assets/background_dark.png";
import BackgroundLight from "../../../assets/background_light.png";
import IntroBadge from "./IntroBadge";
import ScrollDownButton from "./ScrollDownButton";
import Button from "../../ui/Button";
import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const { hero } = getLanguageContent(language);

  const getTheme = () =>
    document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const heroBackground = theme === "light" ? BackgroundLight : BackgroundDark;

  return (
    <div
      id="hero"
      className="relative h-screen overflow-hidden bg-[color:var(--color-hero-bg)]"
    >
      <img
        src={heroBackground}
        alt="Background"
        className="hero-bg-image absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <IntroBadge
          topText={hero.introBadge.top}
          bottomText={hero.introBadge.bottom}
        />
        <br />
        <h1 className="mb-8 text-5xl font-bold text-[color:var(--color-hero-text)]">
          {hero.name}
        </h1>
        <TrueFocus sentence={hero.focusSentence} />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center gap-5">
        <Button href="#projects" target="_self" icon={FaCode}>
          {hero.cta}
        </Button>
        <ScrollDownButton />
      </div>
    </div>
  );
}
