export default function Button({
  href,
  children,
  icon: Icon,
  target = "_blank",
}) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-(--white)
                text-(--primary-color)  font-bold rounded-md
                 hover:bg-(--gray) hover:text-(--black)
                 transition transform hover:scale-105 shadow-sm"
    >
      {Icon && <Icon />}
      {children}
    </a>
  );
}
