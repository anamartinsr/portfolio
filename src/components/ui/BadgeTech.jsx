export default function BadgeTech({ tech }) {
  return (
    <span
      key={tech}
      className="px-3 py-1 text-sm rounded-md bg-[color:var(--card-soft)] text-(--white)"
    >
      {tech}
    </span>
  );
}
