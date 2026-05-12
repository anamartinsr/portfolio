import { Linkedin } from "lucide-react";
import { sharedSocialLinks, sharedSocialAria } from "../../data/content";
import { useLanguage } from "../../context/useLanguage";

export default function SocialLinkedin({
  size,
  href = sharedSocialLinks.linkedin,
  className,
}) {
  const { language } = useLanguage();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sharedSocialAria.linkedin?.[language]}
      title={sharedSocialAria.linkedin?.[language]}
      className={
        className ??
        "text-[color:var(--color-header-text)] hover:text-[color:var(--color-header-text-hover)] transition"
      }
    >
      <Linkedin size={size} strokeWidth={1.5} />
    </a>
  );
}
