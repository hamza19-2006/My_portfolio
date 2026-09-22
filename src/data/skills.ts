import { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "orchestration",
    title: "Workflow Orchestration & n8n",
    description: "Architecting resilient, self-healing event pipelines, webhook ingestors, and data synchronization routines.",
    skills: [
      { name: "n8n Self-Hosted & Cloud", level: "Production Core", capability: "Custom JS transform nodes, binary data routers & cron schedules", isPrimary: true },
      { name: "Fault-Tolerant Webhooks", level: "Production Core", capability: "HMAC verification, rate-limit handling & error trigger branches", isPrimary: true },
      { name: "JSON & Data Normalization", level: "Production Core", capability: "Schema sanitization, schema migration & recursive payload mapping", isPrimary: true },
      { name: "Make / Integromat", level: "Advanced", capability: "Cross-platform data bridging & scenario error directives", isPrimary: true },
      { name: "Automated Retry Directives", level: "Production Core", capability: "Exponential backoff, dead-letter logging & Slack alerts" },
      { name: "State & Queue Management", level: "Advanced", capability: "Persistent execution memory, queue throttling & concurrency caps" }
    ]
  },
  {
    id: "ai-llm",
    title: "Autonomous AI & Intelligent Systems",
    description: "Integrating frontier LLMs and multimodal agents into real-world operational workflows with deterministic guardrails.",
    skills: [
      { name: "Google Gemini (2.5 & Flash)", level: "Production Core", capability: "High-speed multimodal OCR, audio analysis & structured JSON output", isPrimary: true },
      { name: "Claude 3.5 & Anthropic MCP", level: "Certified", capability: "Deep reasoning, context-aware triage & model context protocol tooling", isPrimary: true },
      { name: "Structured Tool Calling", level: "Production Core", capability: "Deterministic JSON schema invocation & external API triggering", isPrimary: true },
      { name: "Prompt Architecture & RAG", level: "Advanced", capability: "Few-shot calibration, system instruction guardrails & vector retrieval", isPrimary: true },
      { name: "Document & Invoice Vision", level: "Advanced", capability: "Tabular data extraction from scans and medical/legal PDFs" },
      { name: "Conversational Triage Logic", level: "Advanced", capability: "Intent classification & dynamic human-handoff routing" }
    ]
  },
  {
    id: "fullstack-engineering",
    title: "Full-Stack & Mobile Engineering",
    description: "Engineering high-performance client applications, cross-platform mobile apps, and serverless architectures.",
    skills: [
      { name: "Flutter & Dart", level: "Play Store Live", capability: "State management, offline-first SQLite cache & Play Store deployment", isPrimary: true },
      { name: "React 19 & Next.js", level: "Production Core", capability: "Modern component architecture, server components & edge rendering", isPrimary: true },
      { name: "TypeScript & Node.js", level: "Production Core", capability: "Strict static typing, microservice routing & REST/RPC handlers", isPrimary: true },
      { name: "Tailwind CSS & Motion", level: "Production Core", capability: "Fluid design systems, WCAG AA compliance & 60fps interaction", isPrimary: true },
      { name: "PostgreSQL & Supabase", level: "Advanced", capability: "Relational modeling, row-level security & real-time subscriptions" },
      { name: "Python Scripting", level: "Proficient", capability: "Streamlit analytics apps, scraping & scientific math libraries" }
    ]
  },
  {
    id: "integrations",
    title: "Enterprise APIs & CRM Infrastructure",
    description: "Interconnecting enterprise SaaS platforms, messaging channels, and payment gateways with authenticated APIs.",
    skills: [
      { name: "WhatsApp Cloud / Business API", level: "Production Core", capability: "Interactive button menus, template messages & 2-way bot chat", isPrimary: true },
      { name: "GoHighLevel (GHL) CRM", level: "Production Core", capability: "Contact custom fields, pipeline stage triggers & calendar sync", isPrimary: true },
      { name: "Telegram Bot API", level: "Advanced", capability: "Real-time devops alert bots & command-driven admin remotes", isPrimary: true },
      { name: "Meta Graph & Social APIs", level: "Advanced", capability: "Automated media publishing, comment scraping & lead ads sync", isPrimary: true },
      { name: "Google Workspace & Sheets", level: "Production Core", capability: "Automated multi-tab spreadsheet analytics & Drive file sorting" },
      { name: "Payment & Webhook Gateways", level: "Advanced", capability: "Stripe event verification, invoice generation & notification webhooks" }
    ]
  }
];

