import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { User, Cpu, Shield, Zap, Sparkles, MapPin, CheckCircle } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090d] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Engineering Philosophy"
          subheadline="Architecting resilient software, multi-agent AI ecosystems, and automated infrastructure that eliminates operational friction."
          badge="About Me"
          icon={User}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bridging the gap between <span className="text-blue-400">complex AI capabilities</span> and <span className="text-indigo-400">real-world revenue workflows</span>.
            </h3>

            <p>
              I am an <strong className="text-white font-semibold">n8n Automation Architect & AI Systems Engineer</strong> based in Lahore, Pakistan. I specialize in designing autonomous workflow engines, complex API pipelines, and deploying web & mobile applications at 10x speed through modern AI-assisted development (Vibe Coding).
            </p>

            <p>
              My core mastery lies in <strong className="text-white font-semibold">deep n8n workflow architecture</strong>, multi-tenant CRM synchronizations, WhatsApp Business automations, and multi-modal LLM routing. I don't just connect tools—I architect robust, self-healing backbones that eliminate hundreds of hours of manual operations.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Lahore, Pakistan (Open to Global Remote)
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> n8n Master • Vibe Coder • AI Integrations
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillars Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Autonomous Operations</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Transforming chaotic manual data entry into zero-touch sales funnels, CRM syncs, and WhatsApp notification loops.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Multi-Modal AI Engineering</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Harnessing state-of-the-art vision, audio transcription, and long-context LLMs with strict safety guardrails and tool calling.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Resilient & Secure Delivery</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Implementing rate limiting, cryptographic webhook signatures, audit trails, and human-in-the-loop escalation gates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
