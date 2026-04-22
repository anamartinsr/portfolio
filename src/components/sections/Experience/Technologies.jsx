import BadgeTech from "../../ui/BadgeTech";

export default function ExperienceTechnologies({
  technologiesTitle,
  technologies,
}) {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="p-2 md:p-4">
        <h3 className="text-sm text-center font-semibold uppercase tracking-[0.25em] text-white mb-4">
          {technologiesTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech) => (
            <BadgeTech key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
