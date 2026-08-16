import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { CertificateCard } from "./CertificateCard";
import { certificates } from "../data/certificates";
import { Certificate } from "../types/portfolio";
import { Award, Trophy, X, ExternalLink, ShieldCheck } from "lucide-react";

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Competition & Hackathon", "AI & Automation", "Full-Stack Development"];

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
            subheadline="Hackathon awards, completed certifications, and practical achievements."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCerts.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onPreview={(c) => setSelectedCert(c)}
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100]"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0e0e14] border border-white/15 rounded-3xl w-full max-w-3xl overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[90vh]"
              >
                <div className="relative aspect-[16/10] bg-black overflow-hidden shrink-0">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-md border border-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-6">
                    {selectedCert.isWinningAward ? (
                      <span className="px-3 py-1 bg-amber-500 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
                        <Trophy className="w-4 h-4 fill-current" />
                        {selectedCert.awardRank}
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        {selectedCert.awardRank}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span>{selectedCert.issuer}</span>
                    <span>Issued: {selectedCert.issueDate}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {selectedCert.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {selectedCert.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono block mb-2">
                      Verified Competencies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    {selectedCert.credentialUrl && (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/20"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold transition-colors"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
