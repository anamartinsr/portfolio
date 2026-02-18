export default function BadgeTech({ tech }) {
  return (
    <span
      key={tech}
      className="px-3 py-1 text-xs font-medium 
                bg-(--primary-color) text-(--white) rounded-full"
    >
      {tech}
    </span>
  );
}
