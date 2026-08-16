import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { CertificateCard } from "./CertificateCard";
import { certificates } from "../data/certificates";
import { Certificate } from "../types/portfolio";
import { Award, Trophy, X, ExternalLink, ShieldCheck } from "lucide-react";

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

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

  const categories = ["All", "Hackathons", "Automation", "Development"];

  const filteredCerts =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07070a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            title="Certificates and Achievements"
            subheadline="Hackathon awards, completed certifications, and practical technical achievements."
            badge="Certificates"
            icon={Award}
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
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

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onPreview={(c) => setSelectedCert(c)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full bg-zinc-900 rounded-3xl border border-white/15 overflow-hidden shadow-2xl z-10"
            >
              {/* Header with Close */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-zinc-950/60">
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
                  className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 sm:p-6 max-h-[65vh] overflow-y-auto flex items-center justify-center bg-black/40">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[55vh] w-auto rounded-xl object-contain border border-white/10 shadow-2xl"
                />
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-zinc-950/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credential Record</span>
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
