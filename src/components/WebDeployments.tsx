import React, { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { WebDeploymentCard } from "./WebDeploymentCard";
import { webProjects } from "../data/projects";
import { Globe } from "lucide-react";

export const WebDeployments: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Healthcare", "EdTech", "Utilities"];

  const filteredProjects =
    activeCategory === "All"
      ? webProjects
      : webProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="web-deployments" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#07070a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            title="Web Apps and Client Projects"
            subheadline="Active web applications, client platforms, and online tools built for real users."
            badge="Web Projects"
            icon={Globe}
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <WebDeploymentCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
