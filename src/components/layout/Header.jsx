import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import SocialLinkedin from "../ui/SocialLinkedin";
import SocialGitHub from "../ui/SocialGithub";

const THEME_STORAGE_KEY = "portfolio-theme";
const NAV_LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "Sobre mim" },
  { href: "#projects", label: "Projetos" },
  { href: "#experience", label: "Experiência" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("hero");

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
    const sectionIds = NAV_LINKS.map(({ href }) => href.slice(1));

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
  }, []);

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
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);

            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setActiveSection(href.slice(1))}
                  className={`relative py-2 px-3 font-semibold transition-colors
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

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-[color:var(--header-text)] border border-[color:var(--header-text)]/30 rounded-full p-2 cursor-pointer transition-all duration-200 hover:border-[color:var(--header-text-hover)] hover:text-[color:var(--header-text-hover)] hover:scale-105 active:scale-95"
            aria-label={
              theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
            }
            title={theme === "dark" ? "Modo claro" : "Modo escuro"}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[color:var(--header-text)]"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden backdrop-blur-md bg-[color:var(--header-bg-mobile)] px-6 py-4 space-y-4">
          {NAV_LINKS.map(({ href, label }) => {
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
