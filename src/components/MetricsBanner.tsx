import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "motion/react";
import { impactMetrics } from "../data/metrics";
import { Zap, Clock, ShieldCheck, Layers } from "lucide-react";

const metricIcons = [Clock, Layers, ShieldCheck, Zap];

function useCountUp(end: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic for natural feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);

  return count;
}

function parseMetricValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (match) {
    return { number: parseFloat(match[1]), suffix: match[2] };
  }
  return { number: 0, suffix: value };
}

function AnimatedMetric({ value, isInView }: { value: string; isInView: boolean }) {
  const { number, suffix } = parseMetricValue(value);
  const count = useCountUp(number, 1800, isInView);
  return <>{count}{suffix}</>;
}

export const MetricsBanner: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]"
      >
        {impactMetrics.map((metric, idx) => {
          const Icon = metricIcons[idx % metricIcons.length];
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className={`flex flex-col ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white tabular-nums">
                  <AnimatedMetric value={metric.value} isInView={isInView} />
                </span>
              </div>
              <span className="text-sm font-bold text-zinc-200 mb-1 tracking-tight">
                {metric.label}
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {metric.subtext}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
