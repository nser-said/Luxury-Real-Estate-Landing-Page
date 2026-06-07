"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

const testimonials = [
  {
    nameEn: "Abdullah & Fatima Al-Rashid",
    nameAr: "عبدالله وفاطمة الراشد",
    locationEn: "Palm Jumeirah, Dubai",
    locationAr: "بالم جميرا، دبي",
    textKey: "text1",
    rating: 5,
  },
  {
    nameEn: "Al-Harrington Family",
    nameAr: "عائلة آل هارينغتون",
    locationEn: "Mayfair, London",
    locationAr: "مايفير، لندن",
    textKey: "text2",
    rating: 5,
  },
  {
    nameEn: "Chen Family Office",
    nameAr: "مكتب عائلة تشين",
    locationEn: "Manhattan, New York",
    locationAr: "مانهاتن، نيويورك",
    textKey: "text3",
    rating: 5,
  },
];

export default function Testimonials() {
  const { lang, dir } = useLanguage();
  const txt = t[lang].testimonials;

  return (
    <section dir={dir} className="py-24 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.nameEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-gray-50 rounded-2xl p-8"
            >
              <Quote
                size={32}
                className={`absolute top-6 ${dir === "rtl" ? "left-6" : "right-6"} text-amber-200`}
              />
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {txt[testimonial.textKey]}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Building2 size={20} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {lang === "en" ? testimonial.nameEn : testimonial.nameAr}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {lang === "en" ? testimonial.locationEn : testimonial.locationAr}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
