import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import WhyChoseUs from "@/components/ui/WhyChoseUs";
import TheatreSection from "@/components/ui/TheatreSection";
import AddOnsSection from "@/components/ui/AddOnSection";
import GallerySection from "@/components/ui/GallerySection";
import TestimonialSection from "@/components/ui/TestimonialSection";
import HowItWorksSection from "@/components/ui/HowItWorkSection";
import FaqSection from "@/components/ui/FaqSection";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/ui/Footer";
import { Contact } from "lucide-react";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChoseUs/>
      <TheatreSection/>
      <AddOnsSection/>
      <GallerySection/>
      <TestimonialSection/>
      <HowItWorksSection/>
      <FaqSection/>
      <ContactSection/>
      <Footer />
    </>
  );
}
