import { getLanguageContent } from "../../../data/content";
import { useLanguage } from "../../../context/useLanguage";

export default function Card() {
  const { language } = useLanguage();
  const { contact } = getLanguageContent(language);
  const contactInfo = [
    contact.contactInfo.email,
    contact.contactInfo.linkedin,
    contact.contactInfo.location,
  ];

  return (
    <div
      className="group relative rounded-2xl p-8 glass-card overflow-hidden
      hover:shadow-glow animate-slide-up min-h-[240px]
      flex flex-col items-center text-center"
    >
      <div
        className="top-border absolute top-0 left-0 right-0 h-1 
        bg-gradient-to-r from-primary via-accent to-primary-glow 
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />

      <div className="flex flex-col w-full gap-6">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            onClick={() => info.href && window.open(info.href, "_blank")}
            className={`
              rounded-2xl 
              p-3 glass-card 
              flex gap-4 items-start text-left
              ${info.highlight ? "md:col-span-2 border-primary/40" : ""}
              ${info.href ? "cursor-pointer" : ""}
            `}
          >
            <div className="mb-4 p-2 rounded-xl gradient-badge-icon">
              <div className="text-[color:var(--color-purple-0)]">
                {info.icon}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                {typeof info.title === "string"
                  ? info.title
                  : info.title[language]}
              </h4>

              <p className="text-sm text-muted-foreground">
                {typeof info.value === "string"
                  ? info.value
                  : info.value[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
