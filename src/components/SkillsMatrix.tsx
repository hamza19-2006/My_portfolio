import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { skillCategories } from "../data/skills";
import { Cpu, CheckCircle2, Code2, Network, Bot, Workflow } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  orchestration: <Workflow className="w-5 h-5 text-blue-400" />,
  "ai-llm": <Bot className="w-5 h-5 text-indigo-400" />,
  "vibe-engineering": <Code2 className="w-5 h-5 text-purple-400" />,
  integrations: <Network className="w-5 h-5 text-emerald-400" />
};

const levelToWidth: Record<string, string> = {
  EXPERT: "100%",
  ADVANCED: "80%",
  PROFICIENT: "60%",
  INTERMEDIATE: "45%",
};

const levelToColor: Record<string, string> = {
  EXPERT: "from-blue-500 to-indigo-500",
  ADVANCED: "from-indigo-500 to-purple-500",
  PROFICIENT: "from-purple-500 to-pink-500",
  INTERMEDIATE: "from-zinc-500 to-zinc-400",
};

export const SkillsMatrix: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader
          title="Skills and Tools"
          subheadline="The core tools and technologies I use to build automations, apps, and web platforms."
          badge="Stack"
          icon={Cpu}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: idx * 0.12,
              }}
              className="glass-card shimmer-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                    {categoryIcons[category.id] || <Code2 className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {category.description}
                </p>

                <div className="space-y-3.5">
                  {category.skills.map((skill, skillIdx) => {
                    const width = levelToWidth[skill.level.toUpperCase()] || "50%";
                    const gradient = levelToColor[skill.level.toUpperCase()] || "from-zinc-500 to-zinc-400";

                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${skill.isPrimary ? "text-blue-400" : "text-zinc-500"}`} />
                            <span className={`text-xs font-medium ${skill.isPrimary ? "text-white font-semibold" : "text-zinc-300"}`}>
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                            initial={{ width: "0%" }}
                            animate={isInView ? { width } : { width: "0%" }}
                            transition={{
                              duration: 1.2,
                              delay: idx * 0.12 + skillIdx * 0.06,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
