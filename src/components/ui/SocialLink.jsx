export default function SocialLink({ href, hoverColor, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white hover:text-[${hoverColor}] transition`}
    >
      <Icon size={40} strokeWidth={1.5} />
    </a>
  );
}
