import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { playStoreApps } from "../data/apps";
import { Smartphone, CheckCircle2, ArrowUpRight, ChevronLeft, ChevronRight, Copy, Check } from "lucide-react";

export const AppShowcase: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedPackage, setCopiedPackage] = useState(false);

  const handleCopyPackage = (pkg: string) => {
    navigator.clipboard.writeText(pkg);
    setCopiedPackage(true);
    setTimeout(() => setCopiedPackage(false), 2000);
  };

  return (
    <section id="app-showcase" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090e] border-t border-white/5 relative overflow-hidden">
      {/* Glow effect behind app section */}
      <div className="absolute top-1/3 left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Mobile Apps on Google Play"
          subheadline="Production mobile applications engineered with Flutter, Dart, and real-time cloud backend."
          badge="Mobile Engineering"
          icon={Smartphone}
        />

        {playStoreApps.map((app) => {
          const currentScreenshots = app.screenshots && app.screenshots.length > 0 ? app.screenshots : [app.bannerImage];
          const hasMultipleImages = currentScreenshots.length > 1;

          const nextImage = () => {
            setActiveImageIndex((prev) => (prev + 1) % currentScreenshots.length);
          };

          const prevImage = () => {
            setActiveImageIndex((prev) => (prev - 1 + currentScreenshots.length) % currentScreenshots.length);
          };

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column: App Info & Metadata */}
                <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    {/* Top Bar: Icon + Category + Live Pill */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-zinc-900 border border-white/15 shadow-xl shrink-0 p-1 flex items-center justify-center">
                        <img src={app.icon} alt={app.title} className="w-full h-full object-contain rounded-xl" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live on Google Play
                          </span>
                          <span className="text-xs text-zinc-500 font-mono">v{app.version}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {app.title}
                        </h3>
                      </div>
                    </div>

                    {/* Engineering & Technical Stats Strip */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 py-2.5 px-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6 w-full sm:w-fit text-xs">
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        <span className="text-white font-semibold">Flutter & Dart</span>
                      </div>
                      <div className="hidden sm:block w-1 h-3 bg-white/10 rounded-full" />
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-white font-semibold">Offline-First + Cloud Sync</span>
                      </div>
                      <div className="hidden sm:block w-1 h-3 bg-white/10 rounded-full" />
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                        <span className="text-white font-semibold">Scoring Algorithm</span>
                      </div>
                      <div className="hidden sm:block w-1 h-3 bg-white/10 rounded-full" />
                      <div className="text-xs text-zinc-400 font-medium">
                        {app.category}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed mb-3">
                      {app.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 font-normal">
                      {app.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                      {app.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {app.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Google Play Button + Package Name */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-white/5">
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 text-white font-bold border border-white/20 hover:border-emerald-500/50 shadow-xl transition-all group"
                    >
                      <svg className="w-6 h-6 fill-current text-white group-hover:text-emerald-400 transition-colors shrink-0" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186c-.352-.303-.61-.795-.61-1.423V3.237c0-.628.258-1.12.61-1.423zM15.207 13.414l2.766 2.766-12.75 7.361 9.984-10.127zm0-2.828L5.223.459l12.75 7.361-2.766 2.766zM16.621 12l3.414-1.971c.883-.51 1.465.072 1.465.971 0 .899-.582 1.481-1.465.971L16.621 12z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">View on</span>
                        <span className="text-sm font-bold tracking-wide">Google Play</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                    </a>

                    {app.packageName && (
                      <button
                        onClick={() => handleCopyPackage(app.packageName!)}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-all text-left w-fit"
                        title="Click to copy package ID"
                      >
                        <span>pkg: {app.packageName}</span>
                        {copiedPackage ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Interactive Phone Mockup & Screenshot Gallery */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
                  <div className="relative w-[260px] sm:w-[290px] lg:w-[320px] aspect-[9/18.5] rounded-[40px] p-3 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black border-2 border-white/20 shadow-2xl shadow-blue-500/10">
                    {/* Phone Notch / Speaker */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-950 rounded-full z-20 flex items-center justify-center pointer-events-none">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 mr-2" />
                      <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                    </div>

                    {/* Phone Screen Mockup */}
                    <div className="w-full h-full rounded-[30px] overflow-hidden relative bg-zinc-950">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeImageIndex}
                          src={currentScreenshots[activeImageIndex]}
                          alt={`${app.title} screen ${activeImageIndex + 1}`}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-full object-cover select-none"
                        />
                      </AnimatePresence>

                      {/* Navigation arrows over phone */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-transform active:scale-90 z-20"
                            aria-label="Previous screenshot"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-transform active:scale-90 z-20"
                            aria-label="Next screenshot"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Bottom Info Overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-10 flex flex-col justify-end pointer-events-none">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                            Screen {activeImageIndex + 1} of {currentScreenshots.length}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono">
                            Swipe / Click to switch
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Row Below Phone */}
                  {hasMultipleImages && (
                    <div className="flex items-center justify-center gap-2 mt-4 max-w-[320px] overflow-x-auto py-1 px-2">
                      {currentScreenshots.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-11 h-14 rounded-lg overflow-hidden border transition-all shrink-0 ${
                            activeImageIndex === idx
                              ? "border-blue-500 ring-2 ring-blue-500/40 scale-105"
                              : "border-white/15 opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`Switch to screenshot ${idx + 1}`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
