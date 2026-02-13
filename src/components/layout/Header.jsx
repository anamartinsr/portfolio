import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import SocialLink from "../ui/SocialLink";
import SocialLinkedin from "../ui/SocialLinkedin";
import SocialGitHub from "../ui/SocialGithub";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header
      className={`fixed w-full  top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-violet-800/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <SocialGitHub />
          <SocialLinkedin />
        </div>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative py-2 px-3 text-(--white) font-semibold transition-colors
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-(--purple-0)
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-(--white)"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden backdrop-blur-md px-6 py-4 space-y-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-(--white) hover:text-(--gray) transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
