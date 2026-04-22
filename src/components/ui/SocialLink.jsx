export default function SocialLink({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[color:var(--color-text-primary)] hover:text-[color:var(--color-primary)] transition`}
    >
      <Icon strokeWidth={1.5} />
    </a>
  );
}
