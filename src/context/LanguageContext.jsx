import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContextValue";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "pt";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage === "pt" || savedLanguage === "en") {
      setLanguage(savedLanguage);
      return;
    }

    setLanguage(DEFAULT_LANGUAGE);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((currentLanguage) =>
          currentLanguage === "pt" ? "en" : "pt",
        ),
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
