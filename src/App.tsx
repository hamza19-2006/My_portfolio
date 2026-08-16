import React, { Suspense } from "react";
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
  return (
    <div className="bg-[#050507] min-h-screen text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
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
