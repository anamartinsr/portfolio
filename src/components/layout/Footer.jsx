import { MapPin, Mail, ArrowUp } from "lucide-react";
import ScrollToSection from "../../utils/scroll";
import { getLanguageContent } from "../../data/content";
import { useLanguage } from "../../context/useLanguage";
import SocialGitHub from "../ui/SocialGithub";
import SocialLinkedin from "../ui/SocialLinkedin";

export default function Footer() {
  const { language } = useLanguage();
  const { footer } = getLanguageContent(language);
  const footerColumns = footer.columns;

  return (
    <footer className="bg-[color:var(--color-footer-bg)] text-[color:var(--color-footer-text)] py-12 px-5 border-t border-[color:var(--color-footer-border)] relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-2 flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <SocialGitHub
              size={40}
              className="text-[color:var(--color-footer-text)] hover:text-[color:var(--color-text-primary)] transition-colors"
            />
            <SocialLinkedin
              size={40}
              className="text-[color:var(--color-footer-text)] hover:text-[color:var(--color-text-primary)] transition-colors"
            />
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {footer.location}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.id} className={column.columnClassName}>
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              {column.title}
            </span>

            {column.id === "contact" ? (
              <div className="flex items-center gap-2">
                <Mail size={18} />
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={column.linkClassName}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : (
              column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={column.linkClassName}
                >
                  {link.label}
                </a>
              ))
            )}

            {column.id === "contact" && (
              <button
                onClick={() => ScrollToSection(footer.backToTopTarget)}
                className="flex items-center gap-1 text-xs text-[color:var(--color-footer-text)] hover:text-[color:var(--color-text-primary)] mt-2 animate-bounce text-muted-foreground transition-colors cursor-pointer"
              >
                <ArrowUp size={16} /> {footer.backToTopLabel}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 h-px w-full max-w-6xl bg-[color:var(--color-footer-border)]" />

      <div className="max-w-6xl mx-auto px-6 mt-4 text-center text-xs text-[color:var(--color-footer-text-muted)]">
        © {new Date().getFullYear()} {footer.copyrightOwner} -{" "}
        {footer.rightsText}
      </div>
    </footer>
  );
}
