import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { WebProject } from "../types/portfolio";

interface WebDeploymentCardProps {
  project: WebProject;
}

export const WebDeploymentCard: React.FC<WebDeploymentCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div>
        {/* Preview Image Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/30 to-transparent opacity-90" />

          {/* Top Category Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 bg-blue-600/30 border border-blue-400/40 rounded-full text-[10px] uppercase font-bold tracking-widest text-blue-300 backdrop-blur-md">
              {project.category}
            </span>
            {project.isFeatured && (
              <span className="px-2.5 py-1 bg-amber-500/20 border border-amber-400/30 rounded-full text-[10px] uppercase font-bold tracking-wider text-amber-300 backdrop-blur-md">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-blue-400/90 text-xs sm:text-sm font-medium mb-3">
            {project.valueStatement}
          </p>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            {project.explanation}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 border-t border-white/5 flex items-center justify-between">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold text-xs sm:text-sm tracking-wide group-hover:text-blue-400 transition-all"
        >
          <span>View Live Project</span>
          <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>
    </motion.div>
  );
};
