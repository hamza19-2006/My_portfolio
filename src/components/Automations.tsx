import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { AutomationCard } from "./AutomationCard";
import { AutomationModal } from "./AutomationModal";
import { automationArchitectures } from "../data/automations";
import { AutomationArchitecture } from "../types/portfolio";
import { Code2, Workflow } from "lucide-react";

export const Automations: React.FC = () => {
  const [selected, setSelected] = useState<AutomationArchitecture | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <section id="automations" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Automations and Workflow Logic"
          subheadline="Real workflows handling lead capture, CRM syncing, and daily business tasks on autopilot."
          badge="n8n and Automations"
          icon={Workflow}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationArchitectures.map((project) => (
            <AutomationCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <AutomationModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
