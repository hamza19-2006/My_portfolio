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

  const filterTabs = [
    { id: "All", label: "All" },
    { id: "Competitions", label: "Awards" },
    { id: "Course", label: "Courses" },
    { id: "Participation", label: "Programs" }
  ];

  const filteredCerts = certificates.filter((c) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Competitions") return c.category.toLowerCase() === "hackathons" || c.isWinningAward;
    if (activeCategory === "Course") return c.category.toLowerCase() === "course" || c.category.toLowerCase() === "courses";
    if (activeCategory === "Participation") return c.category.toLowerCase() === "participation";
    return true;
  });

  return (
    <section id="certificates" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            title="Certifications & Awards"
            subheadline="Official certificates, hackathon awards, and course completions."
            badge="Certificates"
            icon={Award}
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-14">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-white text-zinc-950 font-bold shadow-lg"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid */}
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
