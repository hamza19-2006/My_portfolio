import React from "react";
import { motion } from "motion/react";
import { Workflow, ArrowUpRight } from "lucide-react";
import { AutomationArchitecture } from "../types/portfolio";

interface AutomationCardProps {
  project: AutomationArchitecture;
  onClick: () => void;
}

export const AutomationCard: React.FC<AutomationCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`automation-card-${project.id}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group cursor-pointer glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
    >
      <div>
        {/* Preview image */}
        <div className="aspect-[16/10] overflow-hidden relative bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-[#09090d]/30 to-transparent" />

          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-zinc-950/80 border border-white/10 text-indigo-300 rounded-md backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="p-2 rounded-xl bg-blue-600 text-white shadow-lg flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 mb-4 font-normal">
            {project.brief}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-semibold text-indigo-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
          <Workflow className="w-3.5 h-3.5" />
          <span>View Workflow</span>
        </span>
        <span className="text-[11px] text-zinc-500 font-mono">
          n8n Workflow
        </span>
      </div>
    </motion.div>
  );
};
