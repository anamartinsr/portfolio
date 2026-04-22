export default function BadgeTech({ tech }) {
  return (
    <span
      key={tech}
      className="px-3 py-1 text-sm rounded-md bg-[color:var(--color-card-soft)] text-[color:var(--color-text-primary)]"
    >
      {tech}
    </span>
  );
}
