import { Linkedin } from "lucide-react";
import { sharedSocialLinks } from "../../data/content";

export default function SocialLinkedin({
  size,
  href = sharedSocialLinks.linkedin,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[color:var(--header-text)] hover:text-[color:var(--header-text-hover)] transition"
    >
      <Linkedin size={size} strokeWidth={1.5} />
    </a>
  );
}
