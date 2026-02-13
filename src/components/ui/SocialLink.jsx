export default function SocialLink({ href, hoverColor, Icon, size }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-(--white) hover:text-[${hoverColor}] transition`}
    >
      <Icon size={size} strokeWidth={1.5} />
    </a>
  );
}
