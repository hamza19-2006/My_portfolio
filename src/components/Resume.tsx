import React, { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { FileText, Download, Eye, ExternalLink, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const RESUME_PATH = "/resume/Muhammad_Hamza_Resume.pdf";

const resumeHighlights = [
  "n8n Workflow Automation Expert",
  "Full-Stack Web & Mobile Developer",
  "AI Integration & Prompt Engineering",
  "WhatsApp & CRM API Specialist",
];

export const Resume: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section
      id="resume"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-t border-white/5 relative overflow-hidden"
    >
      {/* Ambient glow with gentle breathing animation */}
      <div
        className="absolute bottom-0 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Resume"
          subheadline="Download my resume or preview it directly below."
          badge="Resume"
          icon={FileText}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column — Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 18,
            }}
            className="lg:col-span-5"
          >
            <div className="glass-panel shimmer-card rounded-3xl p-8 sm:p-10 border border-white/10 space-y-8">
              {/* Profile snapshot */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/15 shadow-lg shrink-0">
                  <img
                    src="/Images/Image.png"
                    alt="Muhammad Hamza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Muhammad Hamza
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    n8n Automation Specialist & Full-Stack Developer
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="space-y-2.5">
                {resumeHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons with Magnetic Pull Physics */}
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton strength={0.3} className="flex-1">
                  <a
                    href={RESUME_PATH}
                    download="Muhammad_Hamza_Resume.pdf"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all transform active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.3} className="flex-1">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all transform active:scale-95 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span>{showPreview ? "Hide Preview" : "Preview Resume"}</span>
                  </button>
                </MagneticButton>
              </div>

              {/* Open in new tab link */}
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-blue-400 transition-colors font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in new tab</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column — PDF Preview with Spring Animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 18,
              delay: 0.15,
            }}
            className="lg:col-span-7"
          >
            {showPreview ? (
              <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-950/60">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-bold text-white">
                      Muhammad_Hamza_Resume.pdf
                    </span>
                  </div>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all font-medium cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                <div className="bg-zinc-900">
                  <iframe
                    src={`${RESUME_PATH}#toolbar=0&navpanes=0`}
                    title="Muhammad Hamza Resume"
                    className="w-full border-0"
                    style={{ height: "70vh", minHeight: "500px" }}
                  />
                </div>
              </div>
            ) : (
              <div className="glass-card shimmer-card rounded-3xl p-12 sm:p-16 border border-white/10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                  <FileText className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Resume Preview
                </h4>
                <p className="text-sm text-zinc-400 mb-6 max-w-sm">
                  Click "Preview Resume" to view the full resume right here, or
                  download it directly.
                </p>
                <MagneticButton strength={0.3}>
                  <button
                    onClick={() => setShowPreview(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all transform active:scale-95 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span>Preview Resume</span>
                  </button>
                </MagneticButton>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
