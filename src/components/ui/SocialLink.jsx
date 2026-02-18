export default function SocialLink({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-(--white) hover:text-(--primary-color) transition`}
    >
      <Icon strokeWidth={1.5} />
    </a>
  );
}
