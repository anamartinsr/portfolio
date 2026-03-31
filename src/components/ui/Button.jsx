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
      className="flex items-center gap-5 px-6 hover:scale-105 rounded-md bg-(--primary-color) py-3 font-semibold text-white hover:brightness-110 transition"
    >
      {Icon && <Icon />}
      {children}
    </a>
  );
}
