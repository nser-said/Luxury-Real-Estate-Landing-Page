"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

const footerLinkKeys = {
  Properties: ["luxuryVillas", "cityApartments", "beachfront", "commercial", "newDevelopments"],
  Company: ["aboutUs", "ourTeam", "careers", "press", "blog"],
  Support: ["faq", "privacyPolicy", "termsOfService", "contactUs", "sitemap"],
};

const footerLinkTranslations = {
  en: {
    Properties: ["Luxury Villas", "City Apartments", "Beachfront", "Commercial", "New Developments"],
    Company: ["About Us", "Our Team", "Careers", "Press", "Blog"],
    Support: ["FAQ", "Privacy Policy", "Terms of Service", "Contact Us", "Sitemap"],
  },
  ar: {
    Properties: ["فلل فاخرة", "شقق المدينة", "واجهة بحرية", "تجاري", "تطورات جديدة"],
    Company: ["من نحن", "فريقنا", "وظائف", "البيانات الصحفية", "المدونة"],
    Support: ["الأسئلة الشائعة", "سياسة الخصوصية", "شروط الخدمة", "اتصل بنا", "خريطة الموقع"],
  },
};

export default function Footer() {
  const { lang, dir } = useLanguage();
  const txt = t[lang].footer;
  const linkLabels = footerLinkTranslations[lang];

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer dir={dir} className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-semibold text-white">
                Lux<span className="text-amber-400">Estate</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              {txt.description}
            </p>
            <div className="space-y-3">
              {[
                { icon: Phone, text: "+1 (800) 123-LUXE" },
                { icon: Mail, text: "hello@luxestate.com" },
                {
                  icon: MapPin,
                  text:
                    lang === "en"
                      ? "100 Luxury Avenue, New York, NY"
                      : "١٠٠ لوكسري أفينيو، نيويورك",
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm">
                  <Icon size={16} className="text-amber-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinkKeys).map(([titleKey, linkKeys]) => {
            const sectionTitle =
              lang === "en"
                ? titleKey
                : titleKey === "Properties"
                  ? "عقارات"
                  : titleKey === "Company"
                    ? "الشركة"
                    : "الدعم";
            return (
              <div key={titleKey}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  {sectionTitle}
                </h4>
                <ul className="space-y-3">
                  {linkLabels[titleKey].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LuxEstate. {txt.rights}
          </p>
          <div className="flex items-center gap-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-gray-500 hover:text-amber-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-amber-400 transition-colors"
          >
            {txt.backToTop}
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
