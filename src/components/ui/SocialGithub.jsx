import { Github } from "lucide-react";

export default function SocialGitHub({ size }) {
  return (
    <a
      href="https://github.com/anamartinsr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[color:var(--header-text)] hover:text-[color:var(--header-text-hover)] transition"
    >
      <Github size={size} strokeWidth={1.5} />
    </a>
  );
}
