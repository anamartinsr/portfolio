import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import SocialLink from "../ui/SocialLink";
import ScrollToSection from "../../utils/scroll";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex gap-6 mb-4 md:mb-0">
            <SocialLink
              href="https://github.com/anamartinsr/"
              Icon={Github}
              hoverColor="#ca7bff"
            />
            <SocialLink
              href="https://www.linkedin.com/in/anamartinsr/"
              Icon={Linkedin}
              hoverColor="#0A66C2"
            />
          </div>

          <p className="text-sm text-gray-300 max-w-xs">
            Turning complex problems into simple solutions, one line at a time.
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-sm font-medium">
          <a href="#hero" className="hover:text-white transition">
            Início
          </a>
          <a href="#about" className="hover:text-white transition">
            Sobre
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projetos
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contato
          </a>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <a
              href="mailto:martinnrs.ana@gmail.com"
              className="hover:text-white transition"
            >
              martinnrs.ana@gmail.com
            </a>
          </div>

          <a
            href="#home"
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition mt-2"
          >
            <button
              onClick={() => ScrollToSection("#hero")}
              className="animate-bounce text-muted-foreground transition-colors cursor-pointer"
            >
              <ArrowUp size={16} /> Voltar ao topo
            </button>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ana Martins — Todos os direitos reservados
      </div>
    </footer>
  );
}
