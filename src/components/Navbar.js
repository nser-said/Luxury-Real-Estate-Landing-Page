"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, dir } = useLanguage();
  const txt = t[lang].nav;

  const navLinks = [
    { label: txt.home, href: "#home" },
    { label: txt.properties, href: "#properties" },
    { label: txt.categories, href: "#categories" },
    { label: txt.agents, href: "#agents" },
    { label: txt.contact, href: "#contact" },
  ];

  return (
    <nav
      dir={dir}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              Lux<span className="text-amber-600">Estate</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors px-3 py-1.5 border border-gray-200 rounded-full"
            >
              <Globe size={15} />
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors"
            >
              <Phone size={16} />
              {txt.inquiries}
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors px-2.5 py-1.5 border border-gray-200 rounded-full"
            >
              <Globe size={14} />
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-gray-600 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors"
              >
                <Phone size={16} />
                {txt.inquiries}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
