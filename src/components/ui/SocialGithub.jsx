import { Github } from "lucide-react";

export default function SocialGitHub({ size }) {
  return (
    <a
      href="https://github.com/anamartinsr"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-(--white) hover:text-(--purple-6) transition`}
    >
      <Github size={size} strokeWidth={1.5} />
    </a>
  );
}
