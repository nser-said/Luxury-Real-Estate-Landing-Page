"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, Building2, LandPlot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

const propertyTypes = [
  { labelKey: "villa", icon: Home },
  { labelKey: "apartment", icon: Building2 },
  { labelKey: "estate", icon: LandPlot },
];

export default function Hero() {
  const [activeType, setActiveType] = useState("villa");
  const { lang, dir } = useLanguage();
  const txt = t[lang].hero;
  const pts = t[lang].propertyTypes;
  const locs = t[lang].locations;

  const locationOptions = [
    { value: "", label: txt.location },
    { value: "dubai", label: locs.dubai },
    { value: "london", label: locs.london },
    { value: "newyork", label: locs.newyork },
    { value: "paris", label: locs.paris },
    { value: "tokyo", label: locs.tokyo },
  ];

  const typeOptions = [
    { value: "", label: txt.propertyType },
    { value: "villa", label: pts.villa },
    { value: "apartment", label: pts.apartment },
    { value: "penthouse", label: pts.penthouse },
    { value: "townhouse", label: pts.townhouse },
  ];

  return (
    <section
      id="home"
      dir={dir}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className={`max-w-3xl ${dir === "rtl" ? "mr-auto" : ""}`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-amber-400 font-semibold text-sm tracking-widest uppercase mb-6"
          >
            {txt.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {txt.title1}
            <br />
            <span className="text-amber-400">{txt.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10"
          >
            {txt.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {propertyTypes.map(({ labelKey, icon: Icon }) => (
                <button
                  key={labelKey}
                  onClick={() => setActiveType(labelKey)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeType === labelKey
                      ? "bg-amber-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <Icon size={16} />
                  {pts[labelKey]}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div className="relative">
                <MapPin
                  size={18}
                  className={`absolute ${dir === "rtl" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 text-gray-400`}
                />
                <select
                  className={`w-full ${dir === "rtl" ? "pr-10" : "pl-10"} px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500`}
                >
                  {locationOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="text-gray-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500">
                  {typeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="text-gray-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                <Search size={18} />
                {txt.search}
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-lg"
        >
          {[
            { value: "500+", label: txt.stats1 },
            { value: "200+", label: txt.stats2 },
            { value: "15+", label: txt.stats3 },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
