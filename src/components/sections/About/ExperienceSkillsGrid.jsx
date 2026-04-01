export default function ExperienceSkillsGrid({ categories }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.title}>
          <h4 className="text-xs uppercase tracking-widest text-(--purple-0) font-bold mb-3 opacity-90">
            {category.title}
          </h4>
          <div className="flex flex-col gap-2">
            {category.items.map((item) => (
              <span
                key={`${category.title}-${item}`}
                className="px-3 py-1 text-sm rounded-md bg-[color:var(--card-soft)] text-(--white)"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
