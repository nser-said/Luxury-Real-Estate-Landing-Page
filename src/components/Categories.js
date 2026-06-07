"use client";

import { motion } from "framer-motion";
import { Home, Building2, LandPlot, Castle, Trees, Warehouse } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

const categories = [
  {
    key: "villas",
    icon: Home,
    count: "120",
    color: "from-amber-500 to-amber-600",
  },
  {
    key: "apartments",
    icon: Building2,
    count: "85",
    color: "from-blue-500 to-blue-600",
  },
  {
    key: "beachfront",
    icon: LandPlot,
    count: "45",
    color: "from-teal-500 to-teal-600",
  },
  {
    key: "mansions",
    icon: Castle,
    count: "28",
    color: "from-purple-500 to-purple-600",
  },
  {
    key: "retreats",
    icon: Trees,
    count: "62",
    color: "from-green-500 to-green-600",
  },
  {
    key: "commercial",
    icon: Warehouse,
    count: "35",
    color: "from-red-500 to-red-600",
  },
];

export default function Categories() {
  const { lang, dir } = useLanguage();
  const txt = t[lang].categories;

  return (
    <section id="categories" dir={dir} className="py-24 bg-white">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const titleKey = category.key;
            const title = txt[titleKey];
            const descKey = `${titleKey}Desc`;
            const desc = txt[descKey];
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors mt-1">
                    {desc}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium text-amber-600 group-hover:text-white transition-colors">
                      {category.count} {lang === "en" ? "properties" : "عقار"}
                    </span>
                    <span className="text-gray-300 group-hover:text-white/60 transition-colors">
                      {txt.explore} &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
