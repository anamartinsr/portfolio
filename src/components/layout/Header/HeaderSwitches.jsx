import { Moon, Sun } from "lucide-react";

export default function HeaderSwitches({
  language,
  toggleLanguage,
  header,
  theme,
  toggleTheme,
}) {
  const isPt = language === "pt";
  const isEn = language === "en";

  return (
    <>
      <span
        className={`text-[11px] font-semibold transition-colors ${
          isPt ? "font-bold text-gray-100" : "text-gray-200"
        }`}
      >
        PT
      </span>

      <button
        onClick={toggleLanguage}
        className="relative h-7 w-14 cursor-pointer overflow-hidden rounded-full bg-gray-200 shadow-inner transition-all duration-300"
        aria-label={
          isPt ? header.switchLanguageAriaLabel : header.switchLanguageAriaLabel
        }
        title={
          isPt ? header.switchLanguageAriaLabel : header.switchLanguageAriaLabel
        }
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-all duration-300"
          style={{
            backgroundImage: isPt
              ? "url('https://flagcdn.com/w320/br.png')"
              : "url('https://flagcdn.com/w320/gb.png')",
          }}
        />

        <div className="absolute inset-0 rounded-full shadow-[inset_0_9px_6px_rgba(0,0,0,0.35),inset_0_-2px_3px_rgba(255,255,255,0.4)]" />

        <div
          className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-[0_10px_10px_rgba(0,0,0,0.35)] transition-all duration-300 ${
            isPt ? "translate-x-0" : "translate-x-7"
          }`}
        />
      </button>

      <span
        className={`text-[11px] transition-colors ${
          isEn ? "font-extrabold text-gray-100" : "text-gray-200"
        }`}
      >
        EN
      </span>

      <button
        onClick={toggleTheme}
        className="cursor-pointer rounded-full border border-[color:var(--color-header-text)]/30 p-2 text-[color:var(--color-header-text)] transition-all duration-200 hover:scale-105 hover:border-[color:var(--color-header-text-hover)] hover:text-[color:var(--color-header-text-hover)] active:scale-95"
        aria-label={
          theme === "dark"
            ? header.toggleThemeAriaLabel
            : header.toggleThemeAltAriaLabel
        }
        title={
          theme === "dark"
            ? header.toggleThemeTitle
            : header.toggleThemeAltTitle
        }
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </>
  );
}
