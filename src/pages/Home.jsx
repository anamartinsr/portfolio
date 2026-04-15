import Projects from "../components/sections/Projects/index.jsx";
import LogoLoop from "../components/ui/LogoLoop.jsx";
import About from "../components/sections/About/index.jsx";
import Hero from "../components/sections/Hero/index.jsx";
import Experience from "../components/sections/Experience/index.jsx";
import Contact from "../components/sections/Contact/index.jsx";
import ContentCreator from "../components/sections/ContentCreator/index.jsx";
import { techLogos, TECH_LOGO_COLOR } from "../data/techLogos";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-[color:var(--color-primary)]">
        <LogoLoop
          logos={techLogos}
          speed={85}
          direction="left"
          logoHeight={30}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor={`#${TECH_LOGO_COLOR}`}
          ariaLabel="Technology partners"
        />
      </div>
      <About />
      <Projects />
      <ContentCreator />
      <Experience />
      <Contact />
    </div>
  );
}
