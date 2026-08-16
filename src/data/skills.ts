import { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "orchestration",
    title: "n8n Workflow & Automation Architecture (Primary Mastery)",
    description: "Deep expertise in building complex, self-healing automated business systems and multi-step webhook pipelines.",
    skills: [
      { name: "n8n (Self-Hosted & Cloud)", level: "Master / Expert", isPrimary: true },
      { name: "Make.com (Integromat)", level: "Advanced", isPrimary: true },
      { name: "Custom Webhook & API Routing", level: "Expert", isPrimary: true },
      { name: "JSON Data Parsing & Transforms", level: "Expert", isPrimary: true },
      { name: "CRON Job Automation & Queues", level: "Expert" },
      { name: "Fault-Tolerant Error Recovery", level: "Advanced" }
    ]
  },
  {
    id: "ai-llm",
    title: "AI Agents & Advanced Prompt Engineering",
    description: "Orchestrating multi-modal LLMs, dynamic prompt templates, and intelligent decision-making logic.",
    skills: [
      { name: "Google Gemini 1.5 (Flash / Pro)", level: "Expert", isPrimary: true },
      { name: "OpenAI GPT-4o & LLM APIs", level: "Advanced", isPrimary: true },
      { name: "Advanced Prompt Architecture", level: "Expert", isPrimary: true },
      { name: "Multi-Modal AI (Vision/Audio/Docs)", level: "Advanced", isPrimary: true },
      { name: "AI Agent Tool Calling & Routing", level: "Advanced" },
      { name: "Conversational Context Memory", level: "Advanced" }
    ]
  },
  {
    id: "vibe-engineering",
    title: "AI-Assisted Web & Mobile Development (Vibe Coding)",
    description: "Leveraging state-of-the-art AI tooling to rapidly build, ship, and deploy modern applications.",
    skills: [
      { name: "Flutter & Mobile Apps (AI-Driven)", level: "Proficient", isPrimary: true },
      { name: "Modern Web Apps & Landing Pages", level: "Advanced", isPrimary: true },
      { name: "React, Tailwind CSS & Motion", level: "Advanced", isPrimary: true },
      { name: "AI-Assisted Rapid Prototyping", level: "Expert", isPrimary: true },
      { name: "Streamlit / Python Web Utilities", level: "Advanced" },
      { name: "Supabase & Cloud Integrations", level: "Proficient" }
    ]
  },
  {
    id: "integrations",
    title: "Enterprise Integrations & Business Tools",
    description: "Connecting CRMs, social channels, and messaging platforms into unified automated operations.",
    skills: [
      { name: "WhatsApp Business Cloud API", level: "Expert", isPrimary: true },
      { name: "GoHighLevel (GHL) CRM", level: "Advanced", isPrimary: true },
      { name: "Telegram Bot API", level: "Expert", isPrimary: true },
      { name: "Google Sheets & Drive APIs", level: "Master", isPrimary: true },
      { name: "Meta Graph API (IG / FB)", level: "Advanced" },
      { name: "YouTube Data API v3", level: "Advanced" }
    ]
  }
];
