import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { User, Cpu, Shield, Zap, Sparkles, MapPin } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090d] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="About Me"
          subheadline="Building reliable automation systems and responsive apps that solve real business problems."
          badge="Background"
          icon={User}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 20,
              mass: 0.8,
            }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 p-[2px] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/10">
                <img 
                  src="/Images/Image.png" 
                  alt="Muhammad Hamza" 
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-2">
                Connecting <span className="text-blue-400">smart automation</span> with <span className="text-indigo-400">everyday business workflows</span>.
              </h3>
            </div>

            <p>
              I am an <strong className="text-white font-semibold">n8n Automation Specialist and Full-Stack Developer</strong> based in Lahore, Pakistan. I build reliable automated workflows, connect business software through APIs, and rapidly ship clean web and mobile applications.
            </p>

            <p>
              My primary focus is <strong className="text-white font-semibold">building workflows in n8n</strong> that eliminate repetitive manual work. Whether it is syncing customer leads across CRMs, sending real-time notifications to WhatsApp, or integrating AI assistants to answer questions, I make sure the whole pipeline runs smoothly.
            </p>

            <p>
              Currently pursuing a <strong className="text-white font-semibold">BS in Computer Science</strong> at the University of Central Punjab while building production automation systems for real clients.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Lahore, Pakistan and Remote Worldwide
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> n8n Automation & Full-Stack Development
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillars Card with Staggered Spring Physics */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.1 }}
              className="glass-card shimmer-card rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Automated Workflows</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Replacing manual tasks with instant lead capture, spreadsheet syncing, and WhatsApp notifications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.2 }}
              className="glass-card shimmer-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Practical AI Assistants</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Using vision and language models to understand customer questions, summarize notes, and handle support requests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.3 }}
              className="glass-card shimmer-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Clean and Reliable Code</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Setting up error logs, secure webhooks, and automatic retry steps so systems do not fail unexpectedly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
