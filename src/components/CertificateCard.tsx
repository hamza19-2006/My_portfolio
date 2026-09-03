import React from "react";
import { motion } from "motion/react";
import { Trophy, ExternalLink, ShieldCheck } from "lucide-react";
import { Certificate } from "../types/portfolio";

interface CertificateCardProps {
  cert: Certificate;
  onPreview: (cert: Certificate) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ cert, onPreview }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`group glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        cert.isWinningAward
          ? "border-amber-500/30 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10"
          : "hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5"
      }`}
    >
      <div>
        {/* Certificate Preview Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => onPreview(cert)} onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPreview(cert); } }} role="button" tabIndex={0} aria-label={`Preview ${cert.title} certificate`}>
          <img
            src={cert.image}
            alt={cert.title}
            onError={(e) => {
              e.currentTarget.src = "/certificates/cert-cs50.svg";
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-black/40 to-transparent" />

          {/* Award Badge Pill */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {cert.isWinningAward ? (
              <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-950 font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 fill-current" />
                {cert.awardRank || "1st Place Winner"}
              </span>
            ) : (
              <span className="px-3 py-1 bg-zinc-900 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                {cert.awardRank || "Certified"}
              </span>
            )}
          </div>

          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="px-3 py-1 bg-black/70 text-white rounded-lg text-xs backdrop-blur-md border border-white/10 flex items-center gap-1.5">
              Click to View
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-2">
            <span>{cert.issuer}</span>
            <span>{cert.issueDate}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {cert.title}
          </h3>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
            {cert.description}
          </p>

          {/* Skills Learned Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cert.skillsLearned.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={() => onPreview(cert)}
          className="text-xs font-semibold text-blue-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>View Certificate</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>

        <span className="text-[11px] text-zinc-500 font-mono">
          Verified
        </span>
      </div>
    </motion.div>
  );
};
