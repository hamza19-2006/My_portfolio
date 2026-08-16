import { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "orchestration",
    title: "n8n Workflow and Automation Architecture",
    description: "Building reliable, self-running business systems, complex logic flows, and custom webhook connections.",
    skills: [
      { name: "n8n Workflows and Custom Nodes", level: "Expert", isPrimary: true },
      { name: "Make and Integromat", level: "Advanced", isPrimary: true },
      { name: "Webhook and API Routing", level: "Expert", isPrimary: true },
      { name: "JSON Data Transformation", level: "Expert", isPrimary: true },
      { name: "Scheduled Jobs and Cron Queues", level: "Expert" },
      { name: "Error Handling and Auto Retry Logic", level: "Advanced" }
    ]
  },
  {
    id: "ai-llm",
    title: "AI Agents and Prompt Engineering",
    description: "Integrating modern language models, custom prompts, and automated decision making into business workflows.",
    skills: [
      { name: "Google Gemini Models", level: "Expert", isPrimary: true },
      { name: "OpenAI GPT Models", level: "Advanced", isPrimary: true },
      { name: "Custom Prompt Systems", level: "Expert", isPrimary: true },
      { name: "Multi Modal Vision and Audio", level: "Advanced", isPrimary: true },
      { name: "Agent Tool Calling and Actions", level: "Advanced" },
      { name: "Conversation Memory and Context", level: "Advanced" }
    ]
  },
  {
    id: "vibe-engineering",
    title: "Fast App and Web Development",
    description: "Building and shipping clean mobile apps and responsive web applications using modern AI assisted workflows.",
    skills: [
      { name: "Flutter Mobile Apps", level: "Proficient", isPrimary: true },
      { name: "Web Applications and Landing Pages", level: "Advanced", isPrimary: true },
      { name: "React and Tailwind CSS", level: "Advanced", isPrimary: true },
      { name: "Rapid Prototyping", level: "Expert", isPrimary: true },
      { name: "Python and Streamlit Apps", level: "Advanced" },
      { name: "Supabase and Firebase", level: "Proficient" }
    ]
  },
  {
    id: "integrations",
    title: "Third Party Integrations and Business APIs",
    description: "Connecting CRMs, messaging platforms, spreadsheets, and social channels into smooth automated pipelines.",
    skills: [
      { name: "WhatsApp Business Cloud API", level: "Expert", isPrimary: true },
      { name: "GoHighLevel CRM", level: "Advanced", isPrimary: true },
      { name: "Telegram Bot API", level: "Expert", isPrimary: true },
      { name: "Google Sheets and Drive APIs", level: "Expert", isPrimary: true },
      { name: "Instagram and Facebook APIs", level: "Advanced" },
      { name: "YouTube Data API", level: "Advanced" }
    ]
  }
];
