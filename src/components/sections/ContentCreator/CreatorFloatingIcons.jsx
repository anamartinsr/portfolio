import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/LanguageContext";

function IconBubble({
  positionClass,
  outerSizeClass,
  innerSizeClass,
  innerStyle,
  href,
  label,
  children,
}) {
  return (
    <div className={positionClass}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="inline-flex"
      >
        <div
          className={`flex ${outerSizeClass} items-center justify-center rounded-full bg-surface/80 backdrop-blur-md shadow-[0px_12px_28px_rgba(28,28,23,0.18)] cursor-pointer`}
        >
          <div
            className={`flex ${innerSizeClass} items-center justify-center rounded-full`}
            style={innerStyle}
          >
            {children}
          </div>
        </div>
      </a>
    </div>
  );
}

function SocialIcon({ icon, className }) {
  if (icon === "tiktok") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.6 3H13v12.17a2.91 2.91 0 1 1-2-2.76V8.74a6.52 6.52 0 1 0 5.6 6.43V9.86a6.84 6.84 0 0 0 4 1.32V7.58a3.85 3.85 0 0 1-4-4.58z" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.35.78 1.04.78 2.1v3.12c0 .3.2.65.79.55a11.53 11.53 0 0 0 7.85-10.91C23.5 5.66 18.35.5 12 .5z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8zm4.2 2.7A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5zm0 1.8A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3zm6.1-2.1a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3z" />
    </svg>
  );
}

export default function CreatorFloatingIcons() {
  const { language } = useLanguage();
  const { contentCreator } = getLanguageContent(language);

  return (
    <>
      {contentCreator.floatingIcons.map((item) => (
        <IconBubble
          key={item.id}
          positionClass={item.positionClass}
          outerSizeClass={item.outerSizeClass}
          innerSizeClass={item.innerSizeClass}
          innerStyle={item.innerStyle}
          href={item.href}
          label={item.label}
        >
          <SocialIcon icon={item.icon} className={item.iconClassName} />
        </IconBubble>
      ))}
    </>
  );
}
