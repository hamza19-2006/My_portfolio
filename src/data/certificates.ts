import { Certificate } from "../types/portfolio";

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "AI Hackathon Innovation Champion",
    issuer: "National Tech Innovation & AI Summit",
    issueDate: "2025",
    credentialUrl: "https://github.com/hamza19-2006",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80",
    category: "Competition & Hackathon",
    isWinningAward: true,
    awardRank: "1st Place Winner / Champion",
    description: "Awarded First Place for architecting a fully autonomous multi-modal agentic support system that cut customer response latency by 90% in live stress-testing scenarios.",
    skillsLearned: ["Autonomous Multi-Agent Swarms", "Real-Time Webhooks", "LLM Prompt Architecture", "Live Stress Testing"]
  },
  {
    id: "cert-2",
    title: "Advanced Workflow Orchestration & API Architecture",
    issuer: "n8n Certified Automation Expert",
    issueDate: "2025",
    credentialUrl: "https://n8n.io",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    category: "AI & Automation",
    isWinningAward: false,
    awardRank: "Expert Level Certification",
    description: "Certified proficiency in complex multi-tenant workflow orchestration, error recovery pipelines, custom JavaScript/Python node development, and webhook security.",
    skillsLearned: ["Enterprise n8n Deployments", "Webhook Cryptography", "Rate Limiting & Queuing", "JSON Data Transformations"]
  },
  {
    id: "cert-3",
    title: "Generative AI & LLM Systems Specialist",
    issuer: "Google Cloud / DeepLearning.AI",
    issueDate: "2025",
    credentialUrl: "https://deeplearning.ai",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    category: "AI & Automation",
    isWinningAward: false,
    awardRank: "Distinction Honors",
    description: "Rigorous certification covering long-context window architectures (Gemini 1.5 Pro), structured JSON outputs, function calling/tools, and multi-modal embeddings.",
    skillsLearned: ["Gemini 1.5 Architecture", "Tool Use & Function Calling", "Semantic Vector Search", "Prompt Guardrails"]
  },
  {
    id: "cert-4",
    title: "Full-Stack Web Systems & Modern React Architecture",
    issuer: "Meta / Coursera Professional Specialization",
    issueDate: "2024",
    credentialUrl: "https://coursera.org",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    category: "Full-Stack Development",
    isWinningAward: false,
    awardRank: "Professional Credential",
    description: "Comprehensive mastery of modern single-page applications, responsive design systems, state synchronization, RESTful API architecture, and cloud deployment pipelines.",
    skillsLearned: ["React 19 & TypeScript", "Tailwind CSS", "API Design", "Performance Optimization"]
  }
];
