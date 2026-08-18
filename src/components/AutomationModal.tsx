import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] overflow-y-auto">
      {/* Dim backdrop covering entire screen, including navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[99999]"
      />

      {/* Centered Scrollable Modal Wrapper */}
      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 relative z-[100000]">
        <motion.div
          layoutId={`automation-card-${project.id}`}
          className="bg-[#0c0c12] border border-white/20 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] my-auto"
        >
          {/* Header Image Area with Full Diagram Preview Option */}
          <div className="relative bg-zinc-950 border-b border-white/10 shrink-0 group">
            <div className="relative h-48 sm:h-64 w-full overflow-hidden flex items-center justify-center bg-black/80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover sm:object-contain transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                referrerPolicy="no-referrer"
                onClick={() => setIsFullscreenImage(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Close Button — High Visibility */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 p-3 bg-black/80 hover:bg-red-600 text-white rounded-full backdrop-blur-md border border-white/20 hover:border-red-500 transition-all shadow-2xl z-30 hover:scale-110 cursor-pointer"
              aria-label="Close modal"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Bottom Overlay Info & Fullscreen Button */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-blue-600/60 border border-blue-400/50 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
                {project.category}
              </span>

              <button
                onClick={() => setIsFullscreenImage(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-bold backdrop-blur-md border border-blue-400/30 transition-all shadow-xl hover:scale-105 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
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
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
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
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
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
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
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
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to Zoom</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setIsFullscreenImage(true)}
                    className="relative w-full rounded-xl overflow-hidden bg-black/60 cursor-pointer border border-white/5 hover:border-blue-500/40 transition-all flex items-center justify-center max-h-[360px]"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} full architecture`}
                      className="w-full h-auto max-h-[360px] object-contain rounded-xl"
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
          <div className="px-6 sm:px-10 py-4 bg-zinc-950/90 border-t border-white/10 flex items-center justify-between shrink-0">
            <span className="text-xs text-zinc-400 font-medium">
              Built by Muhammad Hamza
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 hover:scale-105 cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>

      {/* 🔍 Fullscreen High-Resolution Image Lightbox (Direct Portal on Top of Everything) */}
      <AnimatePresence>
        {isFullscreenImage && (
          <div className="fixed inset-0 z-[200000] flex flex-col bg-black/95 backdrop-blur-2xl">
            {/* Top Bar with Clear High-Contrast Close Button */}
            <div className="p-4 sm:p-5 px-6 bg-zinc-950/95 border-b border-white/15 flex items-center justify-between shrink-0 z-50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    Full n8n Architecture Diagram (Scroll / Pinch to zoom)
                  </p>
                </div>
              </div>

              {/* Big, Obvious Close Button */}
              <button
                onClick={() => setIsFullscreenImage(false)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-bold text-sm shadow-xl hover:scale-105 transition-all cursor-pointer border border-red-500"
                aria-label="Close diagram"
              >
                <X className="w-5 h-5" />
                <span>Close Diagram</span>
              </button>
            </div>

            {/* Scrollable / Zoomable Diagram Body */}
            <div
              className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
              onClick={() => setIsFullscreenImage(false)}
            >
              <img
                src={project.image}
                alt={`${project.title} complete workflow architecture diagram`}
                className="max-w-none w-auto max-h-[84vh] object-contain rounded-xl border border-white/10 shadow-2xl select-none cursor-default"
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
};
