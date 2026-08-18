import React, { Suspense } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MetricsBanner } from "./components/MetricsBanner";
import { About } from "./components/About";
import { WebDeployments } from "./components/WebDeployments";
import { AppShowcase } from "./components/AppShowcase";
import { Automations } from "./components/Automations";
import { Footer } from "./components/Footer";

// Lazy-loaded below-the-fold sections for better initial load performance
const Certificates = React.lazy(() =>
  import("./components/Certificates").then((m) => ({ default: m.Certificates }))
);
const SkillsMatrix = React.lazy(() =>
  import("./components/SkillsMatrix").then((m) => ({ default: m.SkillsMatrix }))
);
const Resume = React.lazy(() =>
  import("./components/Resume").then((m) => ({ default: m.Resume }))
);
const Contact = React.lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact }))
);

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[#050507] min-h-screen text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-blue-200 relative">
      {/* 1. Cinematic Film Grain Texture Layer (Non-intrusive 2% opacity) */}
      <div className="film-grain" aria-hidden="true" />

      {/* 2. Velvet Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 origin-left shadow-lg shadow-blue-500/30"
        style={{ scaleX }}
      />

      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <MetricsBanner />
        <About />
        <WebDeployments />
        <AppShowcase />
        <Automations />
        <Suspense fallback={<SectionFallback />}>
          <Certificates />
          <SkillsMatrix />
          <Resume />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
