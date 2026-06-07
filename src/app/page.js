import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Categories from "@/components/Categories";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <Categories />
      <Agents />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
