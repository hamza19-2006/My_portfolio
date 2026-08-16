import React from "react";
import { motion } from "motion/react";
import { impactMetrics } from "../data/metrics";
import { Zap, Clock, ShieldCheck, Layers } from "lucide-react";

const metricIcons = [Clock, Layers, ShieldCheck, Zap];

export const MetricsBanner: React.FC = () => {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]"
      >
        {impactMetrics.map((metric, idx) => {
          const Icon = metricIcons[idx % metricIcons.length];
          return (
            <div
              key={metric.id}
              className={`flex flex-col ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {metric.value}
                </span>
              </div>
              <span className="text-sm font-bold text-zinc-200 mb-1 tracking-tight">
                {metric.label}
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {metric.subtext}
              </p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};
