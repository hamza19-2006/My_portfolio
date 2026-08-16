import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { skillCategories } from "../data/skills";
import { Cpu, CheckCircle2, Code2, Network, Bot, Workflow } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  orchestration: <Workflow className="w-5 h-5 text-blue-400" />,
  "ai-llm": <Bot className="w-5 h-5 text-indigo-400" />,
  "vibe-engineering": <Code2 className="w-5 h-5 text-purple-400" />,
  integrations: <Network className="w-5 h-5 text-emerald-400" />
};

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
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

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.isPrimary
                          ? "bg-white/10 text-white border border-white/20 shadow-sm"
                          : "bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${skill.isPrimary ? "text-blue-400" : "text-zinc-500"}`} />
                      <span>{skill.name}</span>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-black/40 text-zinc-400 ml-1">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
