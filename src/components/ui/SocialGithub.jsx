import { Github } from "lucide-react";
import { sharedSocialLinks } from "../../data/content";

export default function SocialGitHub({
  size,
  href = sharedSocialLinks.github,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[color:var(--header-text)] hover:text-[color:var(--header-text-hover)] transition"
    >
      <Github size={size} strokeWidth={1.5} />
    </a>
  );
}
