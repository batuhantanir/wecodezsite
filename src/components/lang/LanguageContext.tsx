"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getDictionary } from "@/app/getLocal";
import { json } from "stream/consumers";

export type Language = "en" | "tr";

type Dictionary = typeof import("@/app/dictionaries/en.json");

interface LanguageContextType {
  lang: Language;
  intl: Dictionary;
  handleSwitcherClick: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>("en");
  const [intl, setIntl] = useState<Dictionary>({} as Dictionary);

  useEffect(() => {
    const fetchIntlData = async () => {
      const cookieLang = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="));
      const lang = cookieLang ? (cookieLang.split("=")[1] as Language) : "en";
      setLang(lang);
      const intlData = await getDictionary(lang);
      setIntl(intlData);
    };
    fetchIntlData();
  }, []);

  const handleSwitcherClick = async (lang: Language) => {
    document.cookie = `NEXT_LOCALE=${lang}; path=/`;
    setLang(lang);
    const intlData = await getDictionary(lang);
    setIntl(intlData);
  };

  return (
    <LanguageContext.Provider value={{ lang, intl, handleSwitcherClick }}>
      {children}
    </LanguageContext.Provider>
  );
};
