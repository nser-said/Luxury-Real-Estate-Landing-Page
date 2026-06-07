"use client";

import { motion } from "framer-motion";
import { Star, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

const agents = [
  {
    nameEn: "Al-Mansour Group",
    nameAr: "مجموعة آل منصور",
    titleEn: "Villas & Estates Division",
    titleAr: "قسم الفلل والعقارات",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 128,
    phone: "+971 50 123 4567",
    email: "villas@luxestate.com",
    specialtyEn: "Villas & Estates",
    specialtyAr: "فلل وعقارات",
  },
  {
    nameEn: "Mitchell & Co.",
    nameAr: "ميتشل وشركاه",
    titleEn: "Penthouse & Commercial",
    titleAr: "قسم البنتهاوس والتجاري",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 96,
    phone: "+1 212 555 0198",
    email: "commercial@luxestate.com",
    specialtyEn: "Penthouse & Commercial",
    specialtyAr: "بنتهاوس وتجاري",
  },
  {
    nameEn: "Rodriguez International",
    nameAr: "رودريغيز الدولية",
    titleEn: "Global Properties Division",
    titleAr: "قسم العقارات العالمية",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 112,
    phone: "+34 91 234 5678",
    email: "international@luxestate.com",
    specialtyEn: "International Markets",
    specialtyAr: "أسواق دولية",
  },
  {
    nameEn: "Chen Investments",
    nameAr: "تشين للاستثمارات",
    titleEn: "Investment Division",
    titleAr: "قسم الاستثمار",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 84,
    phone: "+65 6789 0123",
    email: "invest@luxestate.com",
    specialtyEn: "Investment Properties",
    specialtyAr: "عقارات استثمارية",
  },
];

export default function Agents() {
  const { lang, dir } = useLanguage();
  const txt = t[lang].agents;

  return (
    <section id="agents" dir={dir} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
            {txt.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            {txt.title}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {txt.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.nameEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${agent.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {lang === "en" ? agent.specialtyEn : agent.specialtyAr}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {lang === "en" ? agent.nameEn : agent.nameAr}
                </h3>
                <p className="text-sm text-gray-500">
                  {lang === "en" ? agent.titleEn : agent.titleAr}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {agent.rating}
                  </span>
                  <span className="text-sm text-gray-400">
                    ({agent.reviews} {txt.reviews})
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-1.5 bg-amber-600 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-amber-700 transition-colors">
                    <Phone size={14} />
                    {txt.call}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 text-gray-700 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                    <Mail size={14} />
                    {txt.email}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
