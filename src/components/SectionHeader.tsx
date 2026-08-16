import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subheadline: string;
  badge?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subheadline,
  badge,
  icon: Icon,
  align = "left"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider ${align === "center" ? "mx-auto" : ""}`}>
          {Icon && <Icon className="w-3.5 h-3.5" />}
          <span>{badge}</span>
        </div>
      )}

      <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        {!badge && Icon && (
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
          {title}
        </h2>
      </div>

      <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
        {subheadline}
      </p>
    </motion.div>
  );
};
