import { useMemo, useState } from "react";

function getCategoryTitle(category, language) {
  return typeof category.title === "string"
    ? category.title
    : category.title[language];
}

export default function ExperienceSkillsGrid({
  categories,
  language = "pt",
  toggleLabels,
}) {
  const normalizedCategories = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        resolvedTitle: getCategoryTitle(category, language),
      })),
    [categories, language],
  );

  const [showMoreMobile, setShowMoreMobile] = useState(false);
  const mobileVisibleCategories = 2;

  const hasHiddenItemsOnMobile = normalizedCategories.some(
    (_, index) => index >= mobileVisibleCategories,
  );

  const seeMoreLabel =
    toggleLabels?.more ?? (language === "pt" ? "Ver mais" : "See more");
  const seeLessLabel =
    toggleLabels?.less ?? (language === "pt" ? "Ver menos" : "See less");

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:hidden">
        {(showMoreMobile
          ? normalizedCategories
          : normalizedCategories.slice(0, mobileVisibleCategories)
        ).map((category) => (
          <div key={category.resolvedTitle}>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[color:var(--color-purple-0)] opacity-90">
              {category.resolvedTitle}
            </h4>
            <div className="flex flex-col gap-2">
              {category.items.map((item) => (
                <span
                  key={`${category.resolvedTitle}-${item}`}
                  className="rounded-md bg-[color:var(--color-card-soft)] px-3 py-1 text-sm text-[color:var(--color-text-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-3">
        {normalizedCategories.map((category) => (
          <div key={category.resolvedTitle}>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[color:var(--color-purple-0)] opacity-90">
              {category.resolvedTitle}
            </h4>
            <div className="flex flex-col gap-2">
              {category.items.map((item) => (
                <span
                  key={`${category.resolvedTitle}-${item}`}
                  className="rounded-md bg-[color:var(--color-card-soft)] px-3 py-1 text-sm text-[color:var(--color-text-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {hasHiddenItemsOnMobile && (
        <div className="mt-5 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowMoreMobile((currentValue) => !currentValue)}
            className="flex items-center gap-5 px-6 hover:scale-105 rounded-md bg-[color:var(--color-primary)] py-3 font-semibold text-white hover:brightness-110 transition cursor-pointer"
          >
            {showMoreMobile ? seeLessLabel : seeMoreLabel}
          </button>
        </div>
      )}
    </>
  );
}
