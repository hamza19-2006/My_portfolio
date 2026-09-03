import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { CertificateCard } from "./CertificateCard";
import { certificates } from "../data/certificates";
import { Certificate } from "../types/portfolio";
import { Award, Trophy, X, Clock, ExternalLink } from "lucide-react";

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const categories = ["All", "Course", "Hackathons", "Participation", "Internships"];

  const filteredCerts =
    activeCategory === "All" || activeCategory === "Internships"
      ? activeCategory === "Internships"
        ? []
        : certificates
      : certificates.filter((c) => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="certificates" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            title="Certificates and Achievements"
            subheadline="Hackathon awards and participation certificates from events and programmes."
            badge="Certificates"
            icon={Award}
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/20"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid or Empty State */}
        {activeCategory === "Internships" ? (
          <motion.div
            key="internships-empty"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            {/* Animated icon ring */}
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl scale-150" />
              <div className="relative w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl">
                <Clock className="w-9 h-9 text-blue-400 opacity-80" />
              </div>
              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Internship section is on its way
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              I have not completed a formal internship yet, but I am actively working on real-world projects and will add this section once I do.
            </p>

            {/* Subtle divider line */}
            <div className="mt-8 flex items-center gap-4 w-full max-w-xs">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
              <span className="text-[11px] font-mono text-zinc-600 tracking-widest">COMING SOON</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  onPreview={(c) => setSelectedCert(c)}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Certificate Preview with createPortal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                {/* Translucent Frosted Glass Backdrop — Shows the portfolio website behind the modal */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedCert(null)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md"
                />

                {/* Modal Box */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative max-w-3xl w-full bg-zinc-900 rounded-3xl border border-white/20 overflow-hidden shadow-2xl z-10 my-auto"
                >
                  {/* Header with Close */}
                  <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-zinc-950/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white leading-tight">
                          {selectedCert.title}
                        </h4>
                        <p className="text-xs text-zinc-400">
                          {selectedCert.issuer} • {selectedCert.issueDate}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2.5 text-zinc-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/15 transition-all cursor-pointer"
                      aria-label="Close preview"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Certificate Image View */}
                  <div className="p-4 sm:p-6 flex items-center justify-center bg-black/50 min-h-[240px]">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      onError={(e) => {
                        e.currentTarget.src = "/certificates/cert-cs50.svg";
                      }}
                      className="w-full max-w-full max-h-[60vh] rounded-xl object-contain border border-white/10 shadow-2xl"
                      style={{ display: "block" }}
                    />
                  </div>

                  {/* Footer — Verify Credential (if available) & Close button */}
                  <div className="p-4 sm:p-6 border-t border-white/10 bg-zinc-950/90 flex items-center justify-between">
                    {selectedCert.credentialUrl ? (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-all cursor-pointer"
                      >
                        <span>Verify Official Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div />
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
                    >
                      Close
                    </button>
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
