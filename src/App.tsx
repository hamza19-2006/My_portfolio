import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MetricsBanner } from "./components/MetricsBanner";
import { WebDeployments } from "./components/WebDeployments";
import { AppShowcase } from "./components/AppShowcase";
import { Automations } from "./components/Automations";
import { Certificates } from "./components/Certificates";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#050507] min-h-screen text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <MetricsBanner />
        <WebDeployments />
        <AppShowcase />
        <Automations />
        <Certificates />
        <SkillsMatrix />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
