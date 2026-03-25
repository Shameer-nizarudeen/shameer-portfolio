import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import BackToTop from "./components/BackToTop";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";
import StrengthsSection from "./components/StrengthsSection";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <StrengthsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
