import { Github } from "lucide-react";
import { sharedSocialLinks, sharedSocialAria } from "../../data/content";
import { useLanguage } from "../../context/useLanguage";

export default function SocialGitHub({
  size,
  href = sharedSocialLinks.github,
  className,
}) {
  const { language } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sharedSocialAria.github?.[language]}
      title={sharedSocialAria.github?.[language]}
      className={
        className ??
        "text-[color:var(--color-header-text)] hover:text-[color:var(--color-header-text-hover)] transition"
      }
    >
      <Github size={size} strokeWidth={1.5} />
    </a>
  );
}
