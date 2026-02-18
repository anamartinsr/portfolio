import { Linkedin } from "lucide-react";

export default function SocialLinkedin({ size }) {
  return (
    <a
      href="https://www.linkedin.com/in/anamartinsr"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-(--white) hover:text-(--blue) transition`}
    >
      <Linkedin size={size} strokeWidth={1.5} />
    </a>
  );
}
