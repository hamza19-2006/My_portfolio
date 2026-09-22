import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  FileText,
  Download,
  Eye,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  ShieldCheck,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const RESUME_PATH = "/resume/Muhammad_Hamza_Resume.pdf";
const RESUME_PREVIEW_IMG = "/resume/resume-preview.png";

const careerHighlights = [
  {
    icon: Briefcase,
    title: "Production Automation Architect",
    desc: "Over 8 deployed n8n multi-system pipelines handling CRM, webhooks, and notifications."
  },
  {
    icon: Code,
    title: "Full-Stack & Mobile Engineering",
    desc: "React 19, Next.js, and Flutter with published Google Play mobile app (Brutl Fitness)."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Integrations",
    desc: "Deep API integrations with WhatsApp Cloud API, GoHighLevel CRM, and Stripe."
  },
  {
    icon: GraduationCap,
    title: "Academic & Professional Creds",
    desc: "BS Computer Science (UCP Lahore), Anthropic MCP Certified, CS50 Harvard."
  }
];

export const Resume: React.FC = () => {
  const [showPreview, setShowPreview] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalZoom, setModalZoom] = useState(1);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section
      id="resume"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Resume"
          subheadline="My background in automation, development, and computer science."
          badge="Resume"
          icon={FileText}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column — Detailed Profile & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              {/* Profile snapshot */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-base shrink-0 shadow-sm">
                  MH
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Muhammad Hamza
                  </h3>
                  <p className="text-xs text-blue-400 font-medium">
                    Automation Architect & Developer
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                    Lahore, Pakistan • Open to Global Contracts
                  </p>
                </div>
              </div>

              {/* Career Highlights */}
              <div className="space-y-3.5">
                {careerHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5 font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <MagneticButton strength={0.2} className="flex-1">
                    <a
                      href={RESUME_PATH}
                      download="Muhammad_Hamza_Resume.pdf"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-xs sm:text-sm tracking-wide hover:bg-zinc-100 transition-all cursor-pointer shadow-lg active:scale-95"
                    >
                      <Download className="w-4 h-4 text-zinc-950" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </MagneticButton>

                  <MagneticButton strength={0.2} className="flex-1">
                    <button
                      onClick={() => setShowPreview(!showPreview)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs sm:text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all active:scale-95 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>{showPreview ? "Hide Preview" : "Show Preview"}</span>
                    </button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Full Page Document Reader */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 w-full"
          >
            {showPreview ? (
              <div className="glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                {/* Reader Header Toolbar */}
                <div className="p-3.5 sm:p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-zinc-950/90">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-white font-mono block leading-tight">
                        Muhammad_Hamza_Resume.pdf
                      </span>
                      <span className="text-[10px] text-zinc-400">
                        Official 1-Page Document • Updated 2026
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons: Expand Fullscreen, Pop Out, and Download */}
                  <div className="flex items-center gap-2">
                    {/* Expand to Fullscreen Lightbox */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      title="Expand to Fullscreen"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                      aria-label="Expand to Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                      <span className="hidden sm:inline">Expand</span>
                    </button>

                    {/* Pop Out in new tab */}
                    <a
                      href={RESUME_PATH}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open PDF in new browser tab"
                      className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-medium transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Pop Out</span>
                    </a>

                    {/* Download PDF button */}
                    <a
                      href={RESUME_PATH}
                      download="Muhammad_Hamza_Resume.pdf"
                      title="Download PDF"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-bold tracking-wide transition-all shadow-sm"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>

                {/* Viewport Render Area: Full Page Display */}
                <div className="bg-[#0b0b10] p-3 sm:p-6 lg:p-8">
                  <div className="w-full max-w-[720px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-white/20">
                    <img
                      src={RESUME_PREVIEW_IMG}
                      alt="Muhammad Hamza Resume - Full Document"
                      className="w-full h-auto block select-text"
                      style={{ aspectRatio: "2481 / 3509" }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Collapsed State placeholder */
              <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 flex flex-col items-center justify-center text-center min-h-[420px]">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 mb-5">
                  <FileText className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Official Resume Document
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 max-w-md leading-relaxed">
                  Overview of my education, technical skills, production n8n workflows, and development experience.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setShowPreview(true)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span>Open Inline Preview</span>
                  </button>
                  <a
                    href={RESUME_PATH}
                    download="Muhammad_Hamza_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-zinc-950" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* High-Resolution Fullscreen Lightbox Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center p-2 sm:p-6 overflow-hidden">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsModalOpen(false)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full max-w-5xl h-[92vh] bg-[#0c0c12] rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex flex-col z-10"
                >
                  {/* Modal Header */}
                  <div className="p-3 sm:p-4 border-b border-white/10 flex items-center justify-between bg-zinc-950/90 shrink-0">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight font-mono">
                          Muhammad_Hamza_Resume.pdf
                        </h4>
                        <p className="text-[11px] text-zinc-400">
                          Fullscreen High-Definition Inspection
                        </p>
                      </div>
                    </div>

                    {/* Toolbar controls */}
                    <div className="flex items-center gap-2">
                      {/* Zoom Controls */}
                      <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
                        <button
                          onClick={() => setModalZoom((z) => Math.max(0.75, z - 0.15))}
                          title="Zoom Out"
                          className="p-1 rounded hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                        >
                          <ZoomOut className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[11px] font-mono text-zinc-300 px-1 min-w-[42px] text-center">
                          {Math.round(modalZoom * 100)}%
                        </span>
                        <button
                          onClick={() => setModalZoom((z) => Math.min(1.75, z + 0.15))}
                          title="Zoom In"
                          className="p-1 rounded hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setModalZoom(1)}
                          title="Reset Zoom"
                          className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-0.5"
                        >
                          <RotateCcw className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Pop Out */}
                      <a
                        href={RESUME_PATH}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Pop Out</span>
                      </a>

                      {/* Download */}
                      <a
                        href={RESUME_PATH}
                        download="Muhammad_Hamza_Resume.pdf"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-bold transition-all shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>

                      {/* Close */}
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 text-zinc-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/15 transition-all cursor-pointer ml-1"
                        aria-label="Close modal"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Modal Body: Scrollable Document View */}
                  <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center bg-[#09090e] resume-scroll">
                    <div
                      className="bg-white rounded-xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-150 origin-top my-auto"
                      style={{
                        width: `${Math.min(900, 780 * modalZoom)}px`,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        src={RESUME_PREVIEW_IMG}
                        alt="Muhammad Hamza Resume Full View"
                        className="w-full h-auto block select-text"
                        style={{ aspectRatio: "2481 / 3509" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};
