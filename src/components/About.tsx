import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { User, Sparkles, MapPin, ArrowRight, CheckCircle2, Terminal, Cpu, Database, Network } from "lucide-react";

export const About: React.FC = () => {
  const pipelineSteps = [
    {
      step: "01",
      title: "Event Ingestion & Trigger",
      desc: "Webhooks, social media events, payment triggers, and scheduled cron jobs.",
      tech: "n8n Webhook • Meta Cloud API • Cron",
      icon: Terminal,
      color: "text-blue-400",
      border: "border-blue-500/20"
    },
    {
      step: "02",
      title: "Payload Validation & Schema",
      desc: "Validating and cleaning incoming data to prevent duplicates and missing records.",
      tech: "TypeScript • Custom JS Nodes • JSON Schema",
      icon: Network,
      color: "text-sky-400",
      border: "border-sky-500/20"
    },
    {
      step: "03",
      title: "LLM Decision & Extraction",
      desc: "Structured function calling with Claude & Gemini for sentiment triage, multimodal OCR, and intent classification.",
      tech: "Claude 3.5 • Gemini 2.5 Flash • Tool Calling",
      icon: Cpu,
      color: "text-indigo-400",
      border: "border-indigo-500/20"
    },
    {
      step: "04",
      title: "Output & Delivery",
      desc: "Syncing data to CRM, sending WhatsApp messages, saving to database, and retrying failed steps automatically.",
      tech: "GoHighLevel • PostgreSQL • WhatsApp API",
      icon: Database,
      color: "text-emerald-400",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="How I Work"
          subheadline="How I build reliable, production-tested automation workflows that solve real business bottlenecks."
          badge="About"
          icon={User}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-zinc-300 text-base leading-relaxed font-normal"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-2">
                Bridging computer science with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">practical business automation</span>.
              </h3>
              <p className="text-xs text-zinc-400 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                BS Computer Science @ University of Central Punjab (UCP), Lahore
              </p>
            </div>

            <p>
              I am an <strong className="text-white font-medium">n8n automation specialist and full-stack developer</strong> based in Lahore, Pakistan. I help businesses automate lead capture, client communication, and cross-platform data syncing using self-hosted and cloud n8n instances.
            </p>

            <p>
              Coming from a Computer Science background, I treat workflows like real software: writing custom JavaScript nodes for data normalization, implementing token-authenticated webhooks, and connecting Claude and Gemini for things like customer inquiry routing and document parsing.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-zinc-300">
              <div className="font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Built for Reliability</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Workflows include automated retry logic, dead-letter error logging, and instant WhatsApp or Slack alerts to ensure errors never happen silently.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-zinc-400">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Lahore, Pakistan & Remote
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> n8n, Flutter & Modern Web
              </span>
            </div>
          </motion.div>

          {/* Right Column: Production Architecture Flow */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
                Workflow Execution Model
              </span>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                Production-Tested
              </span>
            </div>

            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className={`glass-card rounded-2xl p-4 sm:p-5 border ${step.border} hover:border-white/20 transition-all`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                          {step.title}
                        </h4>
                        <span className="text-[11px] font-mono font-bold text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                          {step.step}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                        {step.desc}
                      </p>
                      <div className="text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md border border-white/5 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{step.tech}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
