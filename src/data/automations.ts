import { AutomationArchitecture } from "../types/portfolio";

export const automationArchitectures: AutomationArchitecture[] = [
  {
    id: 1,
    title: "Autonomous AI Social Media & Client CRM Funnel",
    category: "CRM & Inbound Sales",
    tags: ["CRM Integration", "AI Agent", "Multi-Platform"],
    brief: "A zero-touch sales funnel that converts social media DMs into qualified, logged project leads with human-in-the-loop controls.",
    fullDetails: "This enterprise workflow orchestrates inbound leads from Instagram, TikTok, and Facebook simultaneously. An LLM agent replies instantly to direct messages and comments with conversational session state. It qualifies buyer intent, validates contact info, generates cryptographic Order IDs, and drafts structured project briefs with one-click 'Accept/Reject' webhooks sent to the project manager. Approved leads trigger automatic price quotes, populate Google Sheets/Airtable CRMs, and dispatch branded client onboarding emails.",
    architectureSteps: [
      "Webhook Ingestion: Instant capture of IG/TikTok/FB DMs & Comments",
      "LLM Qualification: Conversational intent scoring and contact extraction",
      "Cryptographic Token Generation: Single-use manager review links",
      "CRM Sync & Auto-Quoting: Real-time record updates & branded PDF dispatches"
    ],
    businessImpact: "95% reduction in first-response time, 3.4x higher lead conversion rate from organic social traffic.",
    securityFeatures: "Rate-limited webhook endpoints with SHA-256 HMAC signature verification and human-override escalations.",
    image: "https://i.ibb.co/nMcxdhW9/1st-Pic.png",
    technologies: ["n8n", "OpenAI / Gemini", "Meta Graph API", "Google Sheets API", "SendGrid"]
  },
  {
    id: 2,
    title: "Multi-Platform Content Distribution Engine",
    category: "Media & Automation",
    tags: ["Content Distribution", "Gemini 1.5", "ImageKit CDN"],
    brief: "Transforms a single cloud drive upload into platform-optimized creative assets for 6 major networks simultaneously.",
    fullDetails: "Eliminates 15+ hours of manual social media management per week. The workflow actively monitors cloud asset folders, invokes Google Gemini multi-modal vision to analyze video/image context, and produces tailored copy: visually driven hooks for Instagram, short-form viral hooks for TikTok, B2B thought-leadership articles for LinkedIn, and SEO descriptions for YouTube Shorts. Media is dynamically optimized via ImageKit CDN and published automatically with real-time deployment status sent to WhatsApp.",
    architectureSteps: [
      "Google Drive Trigger: Monitors raw video/image drops",
      "Multi-Modal Vision Inspection: Gemini extracts scene context & transcripts",
      "Platform Copy Matrix: Parallel generation for IG, YT Shorts, LinkedIn, TikTok",
      "CDN Transcoding & Auto-Publishing: Automated dispatch with WhatsApp confirmation"
    ],
    businessImpact: "Saves ~60 hours of creator & editor overhead monthly across 6 distinct distribution channels.",
    securityFeatures: "Encrypted API tokens, automatic rollback on platform rate-limits.",
    image: "https://i.ibb.co/3yRKQ25g/2nd-Pic.png",
    technologies: ["n8n", "Gemini 1.5 Pro", "ImageKit CDN", "YouTube Data API", "WhatsApp Cloud API"]
  },
  {
    id: 3,
    title: "Multi-Modal AI Telegram Enterprise Assistant",
    category: "AI Agents",
    tags: ["Telegram Bot API", "Multi-Modal AI", "Smart Routing"],
    brief: "An intelligent virtual assistant processing text, voice memos, documents, and video in real-time with smart cost routing.",
    fullDetails: "A multi-faceted Telegram assistant with conversational memory sliding buffer (maintaining recent turns for contextual continuity). Features whisper-based speech-to-text for audio voice notes, OCR and computer vision for images, and rapid summarization for videos and URLs. Implements intelligent model routing—dynamically dispatching tasks between Google Gemini and OpenAI depending on payload complexity and cost optimization.",
    architectureSteps: [
      "Telegram Bot Gateway: Ingests audio, video, document & text payloads",
      "Dynamic Router: Audio -> Whisper, Images -> Vision LLM, URLs -> Scraper",
      "Context Memory Buffer: Maintains conversational history across sessions",
      "Executive Action Dispatch: Dispatches structured summaries directly to Gmail"
    ],
    businessImpact: "Transforms fragmented mobile messaging into an actionable personal productivity command center.",
    securityFeatures: "User ID whitelist filter, secure token storage, sanitised URL extraction.",
    image: "https://i.ibb.co/VYCgb204/3rd-Pi-c.png",
    technologies: ["Telegram API", "Whisper STT", "Gemini Pro", "Cheerio Web Scraper", "Gmail API"]
  },
  {
    id: 4,
    title: "Autonomous Video SEO & Social Publishing Pipeline",
    category: "Video & SEO",
    tags: ["Video SEO", "Auto-Publish", "Webhooks"],
    brief: "A dual-path video pipeline that formats, tags, generates metadata, and auto-publishes without manual intervention.",
    fullDetails: "Operates two parallel asynchronous pipelines. Path 1 catches YouTube Shorts, extracts video narrative via AI, generates high-CTR 4-word SEO titles, writes keyword-dense descriptions, and schedules through the YouTube Partner API. Path 2 processes Instagram Reels, optimizes aspect ratios, crafts engaging caption hooks and targeted hashtags, verifies media container specs, and publishes directly to Instagram grids.",
    architectureSteps: [
      "Webhook Ingestion: Raw video ingestion pipeline",
      "AI Metadata Synthesis: Generates titles, tags, and timestamps",
      "Payload Verification: Aspect ratio & bitrate validation",
      "API Publishing: Multi-threaded dispatch to YouTube & Instagram"
    ],
    businessImpact: "Consistent 100% on-time publishing cadence with data-backed SEO ranking improvements.",
    securityFeatures: "OAuth2 refresh token rotations and automated retry queues with exponential backoff.",
    image: "https://i.ibb.co/xKWmtgmb/4th-Pic.png",
    technologies: ["n8n", "YouTube Data API v3", "Instagram Graph API", "Gemini 1.5 Flash"]
  },
  {
    id: 5,
    title: "AI Pedagogical Platform & Interactive Document Ingestion",
    category: "EdTech & AI",
    tags: ["EdTech", "Document Processing", "Socratic AI"],
    brief: "An intelligent learning system that ingests PDFs, audio lectures, and videos to generate adaptive study environments.",
    fullDetails: "Architected around four distinct learning pipelines. 'Normal Mode' generates executive summaries, flashcard decks, and quiz questions. 'Exam Mode' acts as an unassisted proctor withholding answer keys until test completion. 'Deep Socratic Mode' acts as an inquisitive tutor, guiding students to first principles rather than revealing solutions. 'Chat Mode' handles open-ended exploration. Features structured PDF report generation and WhatsApp study reminders.",
    architectureSteps: [
      "Document Chunking: Ingests PDFs, audio, and slides",
      "Semantic Indexing: Vectorizes content into contextual segments",
      "Pedagogical Mode Routing: Selects appropriate instructional prompt system",
      "Export & Delivery: Generates printable PDFs and WhatsApp study nudges"
    ],
    businessImpact: "Enables students and professionals to master 300+ page technical curricula in 70% less time.",
    securityFeatures: "Strict CORS policies, isolated session storage, and ephemeral document processing.",
    image: "https://i.ibb.co/ZzL5Zq3j/5th-Pic.png",
    technologies: ["Next.js", "Gemini 1.5 Pro", "n8n", "PDF-Lib", "Vector Embeddings"]
  },
  {
    id: 6,
    title: "Automated CRON Analytics & Weekly Executive Briefing",
    category: "Analytics & Reporting",
    tags: ["Data Aggregation", "CRON Scheduling", "WhatsApp API"],
    brief: "A scheduled CRON-job system that aggregates, analyzes, and delivers multi-channel marketing intelligence.",
    fullDetails: "Executes every Monday at 9:00 AM. The system pulls comprehensive performance metrics across Instagram, YouTube, and Facebook APIs—measuring reach, viewer retention, comments, and conversion CTR over a rolling 7-day window. AI synthesizes top-performing content clusters and produces 3 prioritized tactical recommendations, delivering a clean Markdown briefing directly to the stakeholders' WhatsApp.",
    architectureSteps: [
      "CRON Trigger: Weekly Monday morning execution",
      "API Aggregation: Pulls analytics from Meta & Google APIs",
      "LLM Strategic Analysis: Identifies growth trends & anomalies",
      "WhatsApp Dispatch: Delivers structured mobile executive digest"
    ],
    businessImpact: "Replaces 4 hours of weekly manual reporting with instant, actionable executive intelligence.",
    securityFeatures: "Read-only scoped API tokens and encrypted WhatsApp payload transmissions.",
    image: "https://i.ibb.co/MkgjJGgD/6th-Pic.png",
    technologies: ["n8n", "Meta Graph API", "YouTube Analytics API", "WhatsApp Business API"]
  },
  {
    id: 7,
    title: "Real-Time Inventory Scraper & Cryptographic Approval Gate",
    category: "Procurement & Security",
    tags: ["Web Scraping", "Inventory", "Security Tokens"],
    brief: "An automated procurement workflow with real-time stock scraping and cryptographic one-time manager approval tokens.",
    fullDetails: "Monitors supply requests via Google Sheets. Upon trigger, generates single-use HMAC cryptographic approval tokens and dispatches an actionable email to management. Once approved, headless web scrapers verify real-time price and stock availability on supplier websites. If items are in stock, it updates accounting ledgers and alerts inventory managers; if out of stock, it suggests alternative verified vendors.",
    architectureSteps: [
      "Request Trigger: Captures material requisition entries",
      "Cryptographic Token Minting: Generates secure one-time approve/deny URLs",
      "Headless Web Scraping: Checks live stock & pricing on vendor portals",
      "Ledger Update: Updates financial records and dispatches team notifications"
    ],
    businessImpact: "Prevents supply stockouts and eliminates rogue procurement purchases with audited digital approvals.",
    securityFeatures: "Single-use expiring tokens, cryptographic signing, and audit logging.",
    image: "https://i.ibb.co/DffSJqn5/7th-Pic.png",
    technologies: ["n8n", "Puppeteer", "Google Sheets API", "Crypto API", "SendGrid"]
  },
  {
    id: 8,
    title: "Multi-Tenant GoHighLevel CRM Sync & Deduplication Engine",
    category: "Enterprise CRM",
    tags: ["GoHighLevel", "Webhooks", "Deduplication"],
    brief: "An enterprise webhook router that deduplicates and synchronizes contact lifecycles across multiple agency sub-accounts.",
    fullDetails: "Engineered for SaaS agencies scaling across numerous sub-accounts. Ingests incoming webhooks, validates secret signatures, and dynamically maps the correct client tenant via a centralized registry. Features a high-speed deduplication engine preventing redundant payload execution within rolling 7-day windows. Executes fuzzy matching on email/phone before updating CRM pipelines, with audit logging.",
    architectureSteps: [
      "Webhook Gateway: Authenticates tenant signature headers",
      "Tenant Resolution: Dynamically matches GHL sub-account credentials",
      "Deduplication Filter: Checks Redis/Sheets cache for recent duplicate triggers",
      "Smart Upsert: Searches by primary email, falls back to phone, updates pipeline"
    ],
    businessImpact: "Maintains 99.9% CRM data integrity and prevents duplicate lead notifications across 10+ sub-accounts.",
    securityFeatures: "Tenant isolation, SHA-256 webhook validation, and comprehensive error fallback queues.",
    image: "https://i.ibb.co/jvYxmyLW/8th-PIc.png",
    technologies: ["n8n", "GoHighLevel API", "REST Webhooks", "Data Deduplication Engine"]
  }
];
