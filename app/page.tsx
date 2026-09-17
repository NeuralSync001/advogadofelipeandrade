import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Methodology from "@/components/Methodology";
import AttorneyProfile from "@/components/AttorneyProfile";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Methodology />
        <AttorneyProfile />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
