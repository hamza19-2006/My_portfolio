import React from "react";
import { motion, Variants } from "motion/react";
import { ArrowRight, Workflow, Globe, Terminal, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
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
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Ambient background micro-glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[900px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none"
      />
      <div className="absolute top-12 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/5 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo with Ambient Glow Pulse */}
        <motion.div variants={itemVariants} className="relative mb-8 flex justify-center mt-2">
          <motion.div
            className="relative"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute -inset-4 bg-blue-500/25 blur-[60px] rounded-full"
              animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.06, 0.95] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative p-[3px] rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 shadow-2xl shadow-blue-500/20">
              <img 
                src="/Images/Image.png" 
                alt="Muhammad Hamza" 
                className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full object-cover bg-[#0a0a0f]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Client Projects and Consulting</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-medium backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>n8n, AI Systems, and Web Apps</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05] text-white"
        >
          AI Automation Specialist <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            & Full-Stack Developer
          </span>
        </motion.h1>

        {/* Value Proposition Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          I build custom n8n workflows, intelligent AI integrations, and fast web & mobile applications that eliminate repetitive manual tasks.
        </motion.p>

        {/* Action Buttons with Magnetic Pull Physics */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          <MagneticButton strength={0.3} className="w-full sm:w-auto">
            <a
              href="#automations"
              className="w-full sm:w-auto shimmer-card relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm tracking-wide hover:bg-zinc-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Workflow className="w-4 h-4 text-zinc-950" />
              <span>View Automations</span>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.3} className="w-full sm:w-auto">
            <a
              href="#web-deployments"
              className="w-full sm:w-auto shimmer-card inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all backdrop-blur-md transform active:scale-95"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Live Projects</span>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.3} className="w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 text-sm font-semibold tracking-wide transition-all transform active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Tech Badges Row with Hover Reaction */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-400 font-sans"
        >
          <span className="flex items-center gap-1.5 font-medium hover:text-zinc-200 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> n8n Workflows
          </span>
          <span className="flex items-center gap-1.5 font-medium hover:text-zinc-200 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> AI Agents and LLMs
          </span>
          <span className="flex items-center gap-1.5 font-medium hover:text-zinc-200 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> WhatsApp Cloud API
          </span>
          <span className="flex items-center gap-1.5 font-medium hover:text-zinc-200 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> Flutter and Web Apps
          </span>
          <span className="flex items-center gap-1.5 font-medium hover:text-zinc-200 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> GoHighLevel CRM
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
