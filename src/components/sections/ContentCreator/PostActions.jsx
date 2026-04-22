import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";

export default function PostActions() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);

  return (
    <div className="flex gap-4 text-xs text-[color:var(--color-text-primary)]/55">
      {contentCreator.actions.map((action) => (
        <span key={action}>{action}</span>
      ))}
    </div>
  );
}
