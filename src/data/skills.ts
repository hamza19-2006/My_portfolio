import { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "orchestration",
    title: "Workflow & Automation Orchestration",
    description: "End-to-end resilient architecture connecting siloed business software into autonomous pipelines.",
    skills: [
      { name: "n8n Self-Hosted & Cloud", level: "Expert", isPrimary: true },
      { name: "Make.com (Integromat)", level: "Advanced", isPrimary: true },
      { name: "Custom Webhook Architecture", level: "Expert", isPrimary: true },
      { name: "CRON Scheduling & Queues", level: "Advanced" },
      { name: "Error Recovery & Retry Logic", level: "Advanced" },
      { name: "Data Deduplication Engines", level: "Advanced" }
    ]
  },
  {
    id: "ai-llm",
    title: "AI & LLM Systems Engineering",
    description: "Multi-modal intelligence, autonomous agentic loops, prompt guardrails, and context modeling.",
    skills: [
      { name: "Gemini 1.5 Pro / Flash", level: "Expert", isPrimary: true },
      { name: "OpenAI GPT-4o & Assistants API", level: "Advanced", isPrimary: true },
      { name: "Autonomous Agent Tool Calling", level: "Advanced", isPrimary: true },
      { name: "Socratic & Dynamic Prompts", level: "Expert" },
      { name: "Multi-Modal Parsing (Audio/PDF/Vision)", level: "Advanced" },
      { name: "Semantic Search & Embeddings", level: "Proficient" }
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Web & Mobile Engineering",
    description: "High-conversion web platforms, responsive interfaces, and scalable frontend architectures.",
    skills: [
      { name: "React 19 & TypeScript", level: "Expert", isPrimary: true },
      { name: "Next.js & App Router", level: "Advanced", isPrimary: true },
      { name: "Tailwind CSS & Motion", level: "Expert", isPrimary: true },
      { name: "Node.js & Express REST APIs", level: "Advanced" },
      { name: "Streamlit / Python Apps", level: "Advanced" },
      { name: "Mobile App Architecture", level: "Advanced" }
    ]
  },
  {
    id: "integrations",
    title: "Enterprise Integrations & APIs",
    description: "Connecting CRMs, communication channels, payment systems, and CDNs securely.",
    skills: [
      { name: "WhatsApp Business Cloud API", level: "Expert", isPrimary: true },
      { name: "GoHighLevel (GHL) CRM", level: "Advanced", isPrimary: true },
      { name: "Telegram Bot API", level: "Expert", isPrimary: true },
      { name: "Meta Graph API (IG/FB)", level: "Advanced" },
      { name: "YouTube Data API v3", level: "Advanced" },
      { name: "Google Sheets & Drive APIs", level: "Expert" }
    ]
  }
];
