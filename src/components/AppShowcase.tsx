import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { playStoreApps } from "../data/apps";
import { Smartphone, CheckCircle2, ArrowUpRight } from "lucide-react";

export const AppShowcase: React.FC = () => {
  return (
    <section id="app-showcase" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090e] border-t border-white/5 relative overflow-hidden">
      {/* Glow effect behind app section */}
      <div className="absolute top-1/3 left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Mobile Apps on Google Play"
          subheadline="Mobile applications built with Flutter and published on the Google Play Store."
          badge="Mobile Apps"
          icon={Smartphone}
        />

        {playStoreApps.map((app) => (
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
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Top Bar: Icon + Category + Live Pill */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-zinc-800 border border-white/15 shadow-xl shrink-0">
                      <img src={app.icon} alt={app.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold tracking-wide flex items-center gap-1.5">
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

                  {/* Rating & Stats Strip */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-3 px-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6 w-fit">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-400 font-bold text-sm">★ {app.rating}</span>
                      <span className="text-zinc-500 text-xs font-normal">({app.ratingCount})</span>
                    </div>
                    <div className="w-1 h-3 bg-white/10 rounded-full" />
                    <div className="text-xs text-zinc-300 font-medium">
                      <span className="text-white font-bold">{app.downloads}</span> Downloads
                    </div>
                    <div className="w-1 h-3 bg-white/10 rounded-full" />
                    <div className="text-xs text-zinc-400">
                      {app.category}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed mb-3">
                    {app.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8">
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

                {/* Direct Google Play Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold border border-white/20 hover:border-emerald-500/50 shadow-xl transition-all group"
                  >
                    <svg className="w-6 h-6 fill-current text-white group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186c-.352-.303-.61-.795-.61-1.423V3.237c0-.628.258-1.12.61-1.423zM15.207 13.414l2.766 2.766-12.75 7.361 9.984-10.127zm0-2.828L5.223.459l12.75 7.361-2.766 2.766zM16.621 12l3.414-1.971c.883-.51 1.465.072 1.465.971 0 .899-.582 1.481-1.465.971L16.621 12z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Get It On</span>
                      <span className="text-sm font-bold tracking-wide">Google Play</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                  </a>

                  {app.packageName && (
                    <span className="text-xs font-mono text-zinc-500">
                      Package: {app.packageName}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Phone Mockup Frame & Screenshots */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[320px] aspect-[9/18.5] rounded-[40px] p-3.5 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black border-2 border-white/20 shadow-2xl shadow-blue-500/10">
                  {/* Phone Notch / Speaker */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-950 rounded-full z-20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-zinc-900 mr-2" />
                    <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                  </div>

                  {/* Phone Screen Mockup */}
                  <div className="w-full h-full rounded-[30px] overflow-hidden relative bg-zinc-950">
                    <img
                      src={app.screenshots[0]}
                      alt={`${app.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-end p-6">
                      <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
                        {app.category}
                      </span>
                      <h4 className="text-white font-bold text-base leading-tight">
                        Brutl Score & Consistency Arena
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
