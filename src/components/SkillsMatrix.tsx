import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { skillCategories } from "../data/skills";
import { Cpu, CheckCircle2, Code2, Network, Bot, Workflow } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  orchestration: <Workflow className="w-5 h-5 text-blue-400" />,
  "ai-llm": <Bot className="w-5 h-5 text-indigo-400" />,
  "fullstack-engineering": <Code2 className="w-5 h-5 text-sky-400" />,
  integrations: <Network className="w-5 h-5 text-emerald-400" />
};

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Skills & Tools"
          subheadline="Tools, frameworks, and APIs I use to build and ship projects."
          badge="Skills"
          icon={Cpu}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-sm shrink-0">
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

                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const isCore = skill.level === "Production Core" || skill.level === "Play Store Live" || skill.level === "Certified";

                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 ${skill.isPrimary ? "text-blue-400" : "text-zinc-500"}`}
                            />
                            <span className="text-xs sm:text-sm font-semibold text-white truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 font-medium ${
                              isCore
                                ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                : "bg-white/5 text-zinc-400 border border-white/5"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {skill.capability && (
                          <p className="text-[11px] text-zinc-400 leading-relaxed pl-5.5 font-normal">
                            {skill.capability}
                          </p>
                        )}
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

