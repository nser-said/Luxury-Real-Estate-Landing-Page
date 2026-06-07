"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageWrapper({ children }) {
  const { dir } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === "rtl" ? "ar" : "en";
  }, [dir]);

  return <div dir={dir}>{children}</div>;
}
