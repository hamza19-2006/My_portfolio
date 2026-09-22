import React from "react";
import { motion, Variants } from "motion/react";
import { ArrowRight, Workflow, Globe, Terminal, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-[88vh] flex items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden">
      {/* Subtle atmospheric backlight */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[350px] bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center"
        >
          {/* Left Column — Value Proposition & Direct Proof */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for freelance contracts & workflow builds</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">n8n automations</span> & full-stack apps that run businesses on autopilot.
            </motion.h1>

            {/* Value Proposition Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Hi, I'm <strong className="text-white font-medium">Muhammad Hamza</strong> — an automation architect and developer based in Lahore. I build n8n workflows that connect CRMs, WhatsApp, AI models, and databases — so businesses can stop doing things manually.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto"
            >
              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <a
                  href="#automations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-sm tracking-wide hover:bg-zinc-100 transition-all transform active:scale-95 shadow-md cursor-pointer"
                >
                  <Workflow className="w-4 h-4 text-zinc-950" />
                  <span>Explore Workflows</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <a
                  href="#web-deployments"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all backdrop-blur-md transform active:scale-95 cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Web & Mobile Apps</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-zinc-400 hover:text-white text-sm font-medium transition-all cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Production Tech Tag Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-400 font-sans"
            >
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> n8n Pipelines
              </span>
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> WhatsApp Cloud API
              </span>
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Claude & Gemini AI
              </span>
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> GoHighLevel CRM
              </span>
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> React & Flutter
              </span>
            </motion.div>
          </div>

          {/* Right Column — Natural Circular Portrait Presentation */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle ambient backlight */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Refined Circular Portrait Ring */}
              <div className="relative p-2 rounded-full bg-gradient-to-b from-white/15 via-white/[0.04] to-transparent border border-white/15 shadow-2xl shadow-black/90">
                <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-zinc-950 relative">
                  <img
                    src="/Images/Image.png"
                    alt="Muhammad Hamza"
                    className="w-full h-full object-cover select-none scale-105"
                  />
                </div>

                {/* Anchored Status Pill */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-zinc-950/95 border border-white/15 text-xs font-semibold text-white flex items-center gap-2 shadow-2xl whitespace-nowrap backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Automation Architect</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400 font-normal">UCP Lahore</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
