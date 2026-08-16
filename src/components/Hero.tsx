import React from "react";
import { motion, Variants } from "motion/react";
import { ArrowRight, Workflow, Globe, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Ambient background micro-glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Enterprise & Freelance Projects</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>n8n • LLM Agents • Full-Stack</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05] text-white"
        >
          AI Automation Specialist <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            & Full-Stack Engineer
          </span>
        </motion.h1>

        {/* Value Proposition Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          I design autonomous AI workflows, multi-modal LLM agents, and high-conversion web applications that replace repetitive operations and scale businesses with precision.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          <a
            href="#automations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm uppercase tracking-wider hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Workflow className="w-4 h-4 text-zinc-950" />
            <span>Explore Automations</span>
          </a>

          <a
            href="#web-deployments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold text-sm uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Globe className="w-4 h-4 text-blue-400" />
            <span>Live Deployments</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 text-sm font-semibold tracking-wide transition-all"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Tech Badges Row */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500 font-mono"
        >
          <span className="flex items-center gap-1.5 text-zinc-400 font-sans font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> n8n Workflows
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400 font-sans font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> Multi-Modal AI (Gemini / OpenAI)
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400 font-sans font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> WhatsApp Cloud API
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400 font-sans font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> Flutter & Vibe Coding
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400 font-sans font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> GoHighLevel CRM
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
