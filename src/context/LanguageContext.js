"use client";

import { createContext, useContext, useState, useCallback } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [dir, setDir] = useState("ltr");

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "ar" : "en";
      setDir(next === "ar" ? "rtl" : "ltr");
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
