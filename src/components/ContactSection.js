"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/data/translations";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { lang, dir } = useLanguage();
  const txt = t[lang].contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" dir={dir} className="py-24 bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {txt.thankYou}
                </h3>
                <p className="text-gray-600">
                  {txt.thankYouMsg}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {txt.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    placeholder={lang === "en" ? "John Doe" : "محمد أحمد"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {txt.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    placeholder={lang === "en" ? "john@example.com" : "mohammed@example.com"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {txt.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    placeholder={lang === "en" ? "+1 234 567 890" : "+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {txt.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm resize-none"
                    placeholder={lang === "en" ? "I'm interested in..." : "أنا مهتم بـ..."}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {txt.send}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {txt.contactInfo}
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: lang === "en" ? "Phone" : "الهاتف", value: "+1 (800) 123-LUXE" },
                  { icon: Mail, label: lang === "en" ? "Email" : "البريد الإلكتروني", value: "hello@luxestate.com" },
                  {
                    icon: MapPin,
                    label: lang === "en" ? "Address" : "العنوان",
                    value:
                      lang === "en"
                        ? "100 Luxury Avenue, Suite 500\nNew York, NY 10001"
                        : "١٠٠ لوكسري أفينيو، جناح ٥٠٠\nنيويورك، NY 10001",
                  },
                  {
                    icon: Clock,
                    label: txt.workingHours,
                    value: txt.workingHoursValue,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500 whitespace-pre-line">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-2">
                {txt.whyUs}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {[txt.why1, txt.why2, txt.why3, txt.why4].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
