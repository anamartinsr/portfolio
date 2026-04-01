import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

import TrueFocus from "./effects/TrueFocus";
import BackgroundDark from "../../../assets/background.png";
import BackgroundLight from "../../../assets/grainient-1774962431663.png";
import IntroBadge from "./IntroBadge";
import ScrollDownButton from "./ScrollDownButton";
import Button from "../../ui/Button";

export default function Hero() {
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
      className="relative h-screen overflow-hidden bg-[color:var(--hero-bg)]"
    >
      <img
        src={heroBackground}
        alt="Background"
        className="hero-bg-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <IntroBadge />
        <br />
        <h1 className="text-5xl mb-8 font-bold text-[color:var(--hero-text)]">
          Ana Martins
        </h1>
        <TrueFocus />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-5 justify-center">
        <Button href="#projects" target="_self" icon={FaCode}>
          Ver Projetos
        </Button>
        <ScrollDownButton />
      </div>
    </div>
  );
}
