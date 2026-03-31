export default function BadgeTech({ tech }) {
  return (
    <span
      key={tech}
      className="px-4 py-2 text-xs font-medium 
                bg-(--surface-card) text-(--white) rounded-full"
    >
      {tech}
    </span>
  );
}
