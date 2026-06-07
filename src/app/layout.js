import { Geist, Geist_Mono, Playfair_Display, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageWrapper from "@/components/LanguageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
});

export const metadata = {
  title: "LuxEstate — Luxury Real Estate | عقارات فاخرة",
  description:
    "Explore an exclusive collection of premium properties in the world's most desirable locations. Your perfect home awaits.",
  keywords: [
    "luxury real estate",
    "premium properties",
    "villas",
    "penthouse",
    "عقارات فاخرة",
    "فلل",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${notoKufi.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          <LanguageWrapper>{children}</LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
