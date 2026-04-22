import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SocialLinkedin from "../../ui/SocialLinkedin";
import SocialGitHub from "../../ui/SocialGithub";
import HeaderSwitches from "./HeaderSwitches";
import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";

const THEME_STORAGE_KEY = "portfolio-theme";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("hero");
  const { language, toggleLanguage } = useLanguage();
  const { header } = getLanguageContent(language);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = header.navLinks.map(({ href }) => href.slice(1));

    const handleSectionTracking = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && marker >= section.offsetTop - 80) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleSectionTracking();
    window.addEventListener("scroll", handleSectionTracking, { passive: true });
    window.addEventListener("resize", handleSectionTracking);

    return () => {
      window.removeEventListener("scroll", handleSectionTracking);
      window.removeEventListener("resize", handleSectionTracking);
    };
  }, [header.navLinks]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--color-header-bg-scrolled)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <SocialGitHub />
          <SocialLinkedin />
        </div>

        <ul className="hidden md:flex space-x-6">
          {header.navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);

            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setActiveSection(href.slice(1))}
                  className={`relative py-2 px-2 text-sm transition-colors
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[color:var(--color-header-underline)]
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300
                           hover:after:w-full text-[color:var(--color-header-text)] rounded-md hover:bg-[color:var(--color-header-hover-bg)] ${
                             isActive
                               ? "after:w-full"
                               : "hover:text-[color:var(--color-header-text-hover)]"
                           }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <HeaderSwitches
            language={language}
            toggleLanguage={toggleLanguage}
            header={header}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[color:var(--color-header-text)]"
            aria-label={
              open ? header.closeMenuAriaLabel : header.openMenuAriaLabel
            }
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden backdrop-blur-md bg-[color:var(--color-header-bg-mobile)] px-6 py-4 space-y-4">
          {header.navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);

            return (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setActiveSection(href.slice(1));
                  setOpen(false);
                }}
                className={`block transition-colors ${
                  isActive
                    ? "text-[color:var(--color-primary)]"
                    : "text-[color:var(--color-header-text)] hover:text-[color:var(--color-header-text-hover)]"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
