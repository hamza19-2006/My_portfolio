import { Certificate } from "../types/portfolio";

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "AI Hackathon Winner",
    issuer: "National Tech Innovation Summit",
    issueDate: "2025",
    credentialUrl: "https://github.com/hamza19-2006",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80",
    category: "Hackathons",
    isWinningAward: true,
    awardRank: "1st Place Winner",
    description: "Awarded first place for building an automated customer support workflow that reduced response delays during live stress testing.",
    skillsLearned: ["AI Agent Swarms", "Live Webhooks", "Prompt Design", "Rapid Prototyping"]
  },
  {
    id: "cert-2",
    title: "Advanced Workflow and API Architecture",
    issuer: "n8n Certified Automation",
    issueDate: "2025",
    credentialUrl: "https://n8n.io",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    isWinningAward: false,
    awardRank: "Certified Expert",
    description: "Demonstrated expertise in building multi-tenant workflows, custom API connections, webhook security, and automated error handling.",
    skillsLearned: ["Enterprise n8n", "Webhook Security", "Error Handling", "JSON Data Logic"]
  },
  {
    id: "cert-3",
    title: "Generative AI and Language Model Systems",
    issuer: "Google Cloud and DeepLearning",
    issueDate: "2025",
    credentialUrl: "https://deeplearning.ai",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    isWinningAward: false,
    awardRank: "Certified Specialist",
    description: "Completed training on applying large language models, function calling, structured outputs, and prompt guardrails to real applications.",
    skillsLearned: ["Google Gemini", "Function Calling", "Semantic Search", "Prompt Guardrails"]
  },
  {
    id: "cert-4",
    title: "Mobile App and Web Development",
    issuer: "Modern Application Engineering",
    issueDate: "2024",
    credentialUrl: "https://github.com/hamza19-2006",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    category: "Development",
    isWinningAward: false,
    awardRank: "Certified Engineer",
    description: "Focused on building cross-platform mobile apps with Flutter and responsive web applications with modern frontend frameworks.",
    skillsLearned: ["Flutter and Dart", "React and Tailwind", "REST APIs", "Fast Prototyping"]
  }
];
