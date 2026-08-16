import { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "orchestration",
    title: "n8n and Workflow Automation",
    description: "Designing reliable business automations, data pipelines, and custom webhook workflows.",
    skills: [
      { name: "n8n Workflows", level: "Expert", isPrimary: true },
      { name: "Make and Integromat", level: "Advanced", isPrimary: true },
      { name: "Webhook Integrations", level: "Expert", isPrimary: true },
      { name: "JSON Data Handling", level: "Expert", isPrimary: true },
      { name: "Scheduled Cron Tasks", level: "Expert" },
      { name: "Error Recovery Logic", level: "Advanced" }
    ]
  },
  {
    id: "ai-llm",
    title: "AI Integrations and Prompts",
    description: "Connecting modern AI models to everyday workflows for classification, summaries, and assistants.",
    skills: [
      { name: "Google Gemini Models", level: "Expert", isPrimary: true },
      { name: "OpenAI GPT Models", level: "Advanced", isPrimary: true },
      { name: "Prompt Engineering", level: "Expert", isPrimary: true },
      { name: "Image and Document Vision", level: "Advanced", isPrimary: true },
      { name: "Tool Calling and Actions", level: "Advanced" },
      { name: "Context Management", level: "Advanced" }
    ]
  },
  {
    id: "vibe-engineering",
    title: "Web and Mobile Development",
    description: "Building responsive web pages and clean mobile applications with modern development tools.",
    skills: [
      { name: "Flutter Mobile Apps", level: "Proficient", isPrimary: true },
      { name: "React and Tailwind CSS", level: "Advanced", isPrimary: true },
      { name: "Next.js Web Platforms", level: "Advanced", isPrimary: true },
      { name: "Rapid Prototyping", level: "Expert", isPrimary: true },
      { name: "Python Utilities", level: "Advanced" },
      { name: "Supabase and Cloud DBs", level: "Proficient" }
    ]
  },
  {
    id: "integrations",
    title: "Business APIs and Services",
    description: "Connecting CRMs, spreadsheets, chat apps, and social platforms together.",
    skills: [
      { name: "WhatsApp Business API", level: "Expert", isPrimary: true },
      { name: "GoHighLevel CRM", level: "Advanced", isPrimary: true },
      { name: "Telegram Bot API", level: "Expert", isPrimary: true },
      { name: "Google Sheets and Drive", level: "Expert", isPrimary: true },
      { name: "Meta Social APIs", level: "Advanced" },
      { name: "YouTube Data API", level: "Advanced" }
    ]
  }
];
