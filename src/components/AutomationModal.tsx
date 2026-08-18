import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, TrendingUp, Cpu, Workflow, Maximize2, ZoomIn, Eye } from "lucide-react";
import { AutomationArchitecture } from "../types/portfolio";

interface AutomationModalProps {
  project: AutomationArchitecture;
  onClose: () => void;
}

export const AutomationModal: React.FC<AutomationModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"flow" | "mechanics" | "impact">("flow");
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreenImage) {
          setIsFullscreenImage(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, isFullscreenImage]);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <>
      {/* Dim backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100]"
      />

      {/* Centered Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-6 z-[101] pointer-events-none">
        <motion.div
          layoutId={`automation-card-${project.id}`}
          className="bg-[#0c0c12] border border-white/15 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col pointer-events-auto shadow-2xl shadow-indigo-500/10"
        >
          {/* Header Image Area with Full Diagram Preview Option */}
          <div className="relative bg-zinc-950 border-b border-white/10 shrink-0 group">
            <div className="relative h-48 sm:h-64 w-full overflow-hidden flex items-center justify-center bg-black/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover sm:object-contain transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                referrerPolicy="no-referrer"
                onClick={() => setIsFullscreenImage(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 bg-black/70 hover:bg-black/95 text-white rounded-full backdrop-blur-md border border-white/10 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Bottom Overlay Info & Fullscreen Button */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
              <span className="px-3 py-1 rounded-full bg-blue-600/40 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                {project.category}
              </span>

              <button
                onClick={() => setIsFullscreenImage(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-blue-600 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all shadow-lg hover:scale-105"
              >
                <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                <span>View Full Diagram</span>
              </button>
            </div>
          </div>

          {/* Modal Header & Title */}
          <div className="px-6 sm:px-10 pt-5 pb-4 border-b border-white/10 shrink-0 bg-[#0c0c12]">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
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
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("flow")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "flow"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>How It Works</span>
              </button>

              <button
                onClick={() => setActiveTab("mechanics")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "mechanics"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Full Details</span>
              </button>

              <button
                onClick={() => setActiveTab("impact")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "impact"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Results and Security</span>
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1">
            {activeTab === "flow" && (
              <div className="space-y-6">
                {/* Embedded Full Workflow Image Preview Box */}
                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-3 sm:p-4 relative group">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-blue-400" />
                      Complete n8n Workflow Architecture
                    </span>
                    <button
                      onClick={() => setIsFullscreenImage(true)}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to Zoom</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setIsFullscreenImage(true)}
                    className="relative w-full rounded-xl overflow-hidden bg-black/60 cursor-pointer border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-center max-h-[340px]"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} full architecture`}
                      className="w-full h-auto max-h-[340px] object-contain rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-xl flex items-center gap-2">
                        <Eye className="w-4 h-4" /> Open Full Screen Diagram
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2 font-bold">
                    <Workflow className="w-4 h-4" /> Step-by-Step Pipeline
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
              </div>
            )}

            {activeTab === "mechanics" && (
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-indigo-400 flex items-center gap-2 font-bold">
                  <Cpu className="w-4 h-4" /> Detailed Workflow Breakdown
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
                  <h4 className="text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-2 mb-2 font-bold">
                    <TrendingUp className="w-4 h-4" /> Business Results
                  </h4>
                  <p className="text-zinc-200 text-base leading-relaxed">
                    {project.businessImpact}
                  </p>
                </div>

                {project.securityFeatures && (
                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <h4 className="text-xs uppercase tracking-widest text-blue-400 flex items-center gap-2 mb-2 font-bold">
                      <ShieldCheck className="w-4 h-4" /> Security and Safeguards
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
            <span className="text-xs text-zinc-500 font-medium">
              Built by Muhammad Hamza
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>

      {/* 🔍 Fullscreen High-Resolution Image Lightbox Modal */}
      <AnimatePresence>
        {isFullscreenImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreenImage(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 max-w-6xl w-full max-h-[95vh] bg-zinc-950 rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Lightbox Header */}
              <div className="p-4 px-6 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Workflow className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-bold text-white truncate max-w-[280px] sm:max-w-md">
                    {project.title} — Full Workflow Diagram
                  </span>
                </div>
                <button
                  onClick={() => setIsFullscreenImage(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close fullscreen diagram"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Diagram View Container (Pan & Scrollable) */}
              <div className="p-3 sm:p-6 overflow-auto max-h-[85vh] flex items-center justify-center bg-black/80">
                <img
                  src={project.image}
                  alt={`${project.title} complete workflow architecture diagram`}
                  className="max-w-none w-auto max-h-[80vh] sm:max-h-[82vh] object-contain rounded-lg border border-white/10 shadow-2xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
