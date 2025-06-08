"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import TechnologySection from "@/components/TechnologySection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ResearchSection />
      <TechnologySection />
      <ResultsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
