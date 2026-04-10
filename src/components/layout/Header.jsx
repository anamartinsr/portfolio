import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import SocialLinkedin from "../ui/SocialLinkedin";
import SocialGitHub from "../ui/SocialGithub";
import { getLanguageContent } from "../../data/content";
import { useLanguage } from "../../context/LanguageContext";

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
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    const preferredLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    setTheme(preferredLight ? "light" : "dark");
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
      className={`fixed w-full  top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--header-bg-scrolled)] shadow-sm"
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
                  className={`relative py-2 px-3 transition-colors
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[color:var(--header-underline)]
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300
                           hover:after:w-full text-[color:var(--header-text)] ${
                             isActive
                               ? "after:w-full"
                               : "hover:text-[color:var(--header-text-hover)]"
                           }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <span
            className={`text-[11px] font-semibold transition-colors ${
              language === "pt" ? "text-gray-300" : "text-gray-400"
            }`}
          >
            PT
          </span>

          <button
            onClick={toggleLanguage}
            className="relative w-14 h-7 rounded-full overflow-hidden cursor-pointer transition-all duration-300
               shadow-inner bg-gray-200"
            aria-label={header.switchLanguageAriaLabel}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-300
                  opacity-90`}
              style={{
                backgroundImage:
                  language === "pt"
                    ? "url('https://flagcdn.com/w320/br.png')"
                    : "url('https://flagcdn.com/w320/gb.png')",
              }}
            />

            <div
              className="absolute inset-0 rounded-full 
  shadow-[inset_0_9px_6px_rgba(0,0,0,0.35),inset_0_-2px_3px_rgba(255,255,255,0.4)]"
            />

            <div
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300
                  shadow-[0_10px_10px_rgba(0,0,0,0.35)]
                  ${language === "pt" ? "translate-x-0" : "translate-x-7"}`}
            />
          </button>

          <span
            className={`text-[11px] font-semibold transition-colors ${
              language === "en" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            EN
          </span>
          <button
            onClick={toggleTheme}
            className="text-[color:var(--header-text)] border border-[color:var(--header-text)]/30 rounded-full p-2 cursor-pointer transition-all duration-200 hover:border-[color:var(--header-text-hover)] hover:text-[color:var(--header-text-hover)] hover:scale-105 active:scale-95"
            aria-label={
              theme === "dark"
                ? header.toggleThemeAriaLabel
                : header.toggleThemeAltAriaLabel
            }
            title={
              theme === "dark"
                ? header.toggleThemeTitle
                : header.toggleThemeAltTitle
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[color:var(--header-text)]"
            aria-label={
              open ? header.closeMenuAriaLabel : header.openMenuAriaLabel
            }
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden backdrop-blur-md bg-[color:var(--header-bg-mobile)] px-6 py-4 space-y-4">
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
                    ? "text-(--primary-color)"
                    : "text-[color:var(--header-text)] hover:text-[color:var(--header-text-hover)]"
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
