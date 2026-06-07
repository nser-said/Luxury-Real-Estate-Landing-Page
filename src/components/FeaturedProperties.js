"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

const properties = [
  {
    id: 1,
    titleEn: "Modern Waterfront Villa",
    titleAr: "فيلا حديثة على الواجهة المائية",
    locationEn: "Palm Jumeirah, Dubai",
    locationAr: "بالم جميرا، دبي",
    price: "$4,500,000",
    beds: 6,
    baths: 5,
    sqft: "8,200",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    badgeEn: "Featured",
    badgeAr: "مميز",
  },
  {
    id: 2,
    titleEn: "Penthouse Sky Residence",
    titleAr: "بنتهاوس سكاي ريزيدنس",
    locationEn: "Manhattan, New York",
    locationAr: "مانهاتن، نيويورك",
    price: "$8,200,000",
    beds: 4,
    baths: 3,
    sqft: "4,500",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    badgeEn: "Premium",
    badgeAr: "ممتاز",
  },
  {
    id: 3,
    titleEn: "Classic French Château",
    titleAr: "قصر فرنسي كلاسيكي",
    locationEn: "French Riviera, France",
    locationAr: "الريفييرا الفرنسية، فرنسا",
    price: "$12,000,000",
    beds: 8,
    baths: 7,
    sqft: "15,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badgeEn: "Exclusive",
    badgeAr: "حصري",
  },
  {
    id: 4,
    titleEn: "Contemporary Hillside Estate",
    titleAr: "عقار تلال معاصر",
    locationEn: "Beverly Hills, California",
    locationAr: "بيفرلي هيلز، كاليفورنيا",
    price: "$6,750,000",
    beds: 5,
    baths: 4,
    sqft: "6,800",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
    badgeEn: "Featured",
    badgeAr: "مميز",
  },
  {
    id: 5,
    titleEn: "Luxury Beachfront Villa",
    titleAr: "فيلا فاخرة على الشاطئ",
    locationEn: "Maldives",
    locationAr: "جزر المالديف",
    price: "$3,800,000",
    beds: 5,
    baths: 4,
    sqft: "5,200",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badgeEn: "Premium",
    badgeAr: "ممتاز",
  },
  {
    id: 6,
    titleEn: "Historic City Center Mansion",
    titleAr: "قصر تاريخي في وسط المدينة",
    locationEn: "Mayfair, London",
    locationAr: "مايفير، لندن",
    price: "$15,500,000",
    beds: 7,
    baths: 6,
    sqft: "10,500",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    badgeEn: "Exclusive",
    badgeAr: "حصري",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedProperties() {
  const { lang, dir } = useLanguage();
  const txt = t[lang].featured;

  return (
    <section id="properties" dir={dir} className="py-24 bg-gray-50">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${property.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {lang === "en" ? property.badgeEn : property.badgeAr}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold">
                    {lang === "en" ? property.titleEn : property.titleAr}
                  </h3>
                  <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    {lang === "en" ? property.locationEn : property.locationAr}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {property.price}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <Bed size={16} className="text-amber-600" />
                    {property.beds} {txt.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} className="text-amber-600" />
                    {property.baths} {txt.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={16} className="text-amber-600" />
                    {property.sqft} {txt.sqft}
                  </span>
                </div>
                <button className="mt-4 w-full flex items-center justify-center gap-2 text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors">
                  {txt.viewDetails}
                  <ArrowRight
                    size={16}
                    className={dir === "rtl" ? "rotate-180" : ""}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            {txt.viewAll}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
