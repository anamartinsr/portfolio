import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/LanguageContext";

export default function NavFooter() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);

  return (
    <div className="grid grid-cols-5 gap-2 text-center text-[10px] text-[color:var(--color-text-primary)]/50">
      {contentCreator.navItems.map((item) => (
        <span
          key={item}
          className="font-semibold text-[color:var(--color-primary)]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
