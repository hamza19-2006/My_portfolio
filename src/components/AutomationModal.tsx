import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, ShieldCheck, TrendingUp, Cpu, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import { AutomationArchitecture } from "../types/portfolio";

interface AutomationModalProps {
  project: AutomationArchitecture;
  onClose: () => void;
}

export const AutomationModal: React.FC<AutomationModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"flow" | "mechanics" | "impact">("flow");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Dim backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
      />

      {/* Centered Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-6 z-[101] pointer-events-none">
        <motion.div
          layoutId={`automation-card-${project.id}`}
          className="bg-[#0c0c12] border border-white/15 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col pointer-events-auto shadow-2xl shadow-indigo-500/10"
        >
          {/* Header Image with Gradient */}
          <div className="relative h-48 sm:h-60 shrink-0 bg-zinc-900 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-[#0c0c12]/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-md border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Modal Header & Title */}
          <div className="px-6 sm:px-10 pt-6 pb-4 border-b border-white/10 shrink-0">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
              {project.title}
            </h3>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("flow")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "flow"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>Execution Steps</span>
              </button>

              <button
                onClick={() => setActiveTab("mechanics")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "mechanics"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Full Mechanics</span>
              </button>

              <button
                onClick={() => setActiveTab("impact")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "impact"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Impact & Security</span>
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
            {activeTab === "flow" && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 flex items-center gap-2">
                  <Workflow className="w-4 h-4" /> Pipeline Sequence Flow
                </h4>
                <div className="space-y-3">
                  {project.architectureSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-4"
                    >
                      <div className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-zinc-200 text-sm leading-relaxed font-normal">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "mechanics" && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Deep Architecture Overview
                </h4>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line font-normal">
                    {project.fullDetails}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "impact" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4" /> Quantified Business Value
                  </h4>
                  <p className="text-zinc-200 text-base leading-relaxed">
                    {project.businessImpact}
                  </p>
                </div>

                {project.securityFeatures && (
                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4" /> Security & Reliability Controls
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {project.securityFeatures}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 sm:px-10 py-4 bg-zinc-950/80 border-t border-white/10 flex items-center justify-between shrink-0">
            <span className="text-xs text-zinc-500 font-mono">
              Designed & Engineered by Muhammad Hamza
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/20"
            >
              Close Blueprint
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
