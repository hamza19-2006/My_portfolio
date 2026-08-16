import { AutomationArchitecture } from "../types/portfolio";

export const automationArchitectures: AutomationArchitecture[] = [
  {
    id: 1,
    title: "AI Social Media Lead Capture and CRM Funnel",
    category: "CRM and Sales",
    tags: ["CRM Integration", "AI Agent", "Multi Platform"],
    brief: "An automated sales funnel that turns social media messages into verified client leads without manual typing.",
    fullDetails: "This workflow manages direct messages and comments from Instagram, TikTok, and Facebook at the same time. An AI assistant answers questions, qualifies what the client needs, collects their contact information, and generates a structured lead summary. It sends an instant notification email to the team with simple Accept and Reject links. Once approved, the lead is added to Google Sheets, a quote is generated, and a confirmation email goes out to the client.",
    architectureSteps: [
      "Captures new messages and comments from Instagram, TikTok, and Facebook",
      "AI understands client questions and collects contact details",
      "Sends instant project review link to manager email",
      "Updates Google Sheets CRM and sends confirmation email"
    ],
    businessImpact: "Instant reply to prospective clients with much higher conversion from social traffic.",
    securityFeatures: "Secure endpoint authentication and manager approval controls.",
    image: "https://i.ibb.co/nMcxdhW9/1st-Pic.png",
    technologies: ["n8n", "Google Gemini", "Instagram API", "Google Sheets", "SendGrid"]
  },
  {
    id: 2,
    title: "Multi Platform Content Distribution Engine",
    category: "Media and Content",
    tags: ["Content Distribution", "Gemini AI", "Cloud CDN"],
    brief: "Takes a single video or image upload and automatically formats and posts it to 6 different social channels.",
    fullDetails: "This automation saves hours of repetitive posting every week. It watches a Google Drive folder for new videos or photos, analyzes the content using AI vision, and generates tailored captions for each network: visual hooks for Instagram, short captions for TikTok, professional summaries for LinkedIn, and SEO titles for YouTube Shorts. It optimizes the file and publishes automatically with a status update sent to WhatsApp.",
    architectureSteps: [
      "Watches Google Drive folder for newly uploaded media",
      "AI analyzes images and video transcripts to write custom captions",
      "Generates platform specific posts for LinkedIn, YouTube, Instagram, and TikTok",
      "Publishes content automatically and sends confirmation to WhatsApp"
    ],
    businessImpact: "Saves more than 15 hours of manual social media posting every week.",
    securityFeatures: "Encrypted API tokens and automated retry on network timeouts.",
    image: "https://i.ibb.co/3yRKQ25g/2nd-Pic.png",
    technologies: ["n8n", "Google Gemini", "YouTube API", "Instagram API", "WhatsApp API"]
  },
  {
    id: 3,
    title: "Multi Modal AI Telegram Assistant",
    category: "AI Assistants",
    tags: ["Telegram Bot", "Voice Notes", "Smart Routing"],
    brief: "A smart personal bot that understands text, voice messages, documents, and images in real time.",
    fullDetails: "A Telegram bot that acts as an intelligent digital assistant. It transcribes audio voice notes into clean text, inspects photos and documents, and summarizes long web articles. It keeps conversation context so you can ask follow up questions naturally, and can email important notes directly to your inbox.",
    architectureSteps: [
      "Receives text, voice notes, photos, and links on Telegram",
      "Transcribes voice audio and analyzes photos using AI",
      "Keeps conversation history for natural follow up answers",
      "Sends formatted summaries and critical notes straight to Gmail"
    ],
    businessImpact: "Turns quick on the go voice notes into organized written summaries and task lists.",
    securityFeatures: "Authorized user ID whitelist so only you can access the bot.",
    image: "https://i.ibb.co/VYCgb204/3rd-Pi-c.png",
    technologies: ["Telegram Bot API", "Whisper Audio", "Google Gemini", "Gmail API"]
  },
  {
    id: 4,
    title: "Automated YouTube and Instagram Video Publisher",
    category: "Video and SEO",
    tags: ["Video SEO", "Auto Publish", "Webhooks"],
    brief: "Automated video pipeline that adds titles, descriptions, and tags before publishing.",
    fullDetails: "This workflow takes raw short form videos, extracts the main topic using AI, writes catchy search friendly titles and descriptions, and schedules them on YouTube Shorts and Instagram Reels without manual work.",
    architectureSteps: [
      "Receives raw short video file through webhook",
      "AI creates catchy titles, search tags, and hashtags",
      "Checks video dimensions and formats",
      "Publishes directly to YouTube and Instagram"
    ],
    businessImpact: "Keeps video publishing consistent every day without spending time on manual uploads.",
    securityFeatures: "Secure account connection tokens with automated error alerts.",
    image: "https://i.ibb.co/xKWmtgmb/4th-Pic.png",
    technologies: ["n8n", "YouTube Data API", "Instagram API", "Google Gemini"]
  },
  {
    id: 5,
    title: "Interactive Study Generator and Document Ingestion",
    category: "EdTech and Learning",
    tags: ["EdTech", "PDF Processing", "Quiz Generator"],
    brief: "Turns long textbook PDFs and lecture audio into practice quizzes and summaries.",
    fullDetails: "An educational workflow that breaks down long study materials into easy study tools. It creates chapter summaries, flashcards, multiple choice questions, and interactive practice tests. Students can export the generated study guides as clean PDFs.",
    architectureSteps: [
      "Reads and breaks down long textbook PDFs and notes",
      "Creates flashcards, summary sheets, and practice test questions",
      "Formats clean study guides ready to download and print",
      "Sends daily study reminders and questions to WhatsApp"
    ],
    businessImpact: "Helps students and learners review hundreds of pages in a fraction of the time.",
    securityFeatures: "Temporary document processing with private session storage.",
    image: "https://i.ibb.co/ZzL5Zq3j/5th-Pic.png",
    technologies: ["n8n", "Google Gemini", "PDF Parser", "WhatsApp API"]
  },
  {
    id: 6,
    title: "Weekly Analytics and Performance Summary",
    category: "Analytics",
    tags: ["Data Reporting", "Weekly Schedule", "WhatsApp Digest"],
    brief: "Weekly scheduled job that collects social media metrics and sends a clear briefing to WhatsApp.",
    fullDetails: "Every Monday morning, this automation pulls performance data from YouTube, Instagram, and Facebook. It calculates views, growth, and comments over the last seven days, uses AI to point out what worked best, and sends a concise summary straight to the manager's WhatsApp.",
    architectureSteps: [
      "Runs automatically every Monday morning",
      "Pulls views, reach, and engagement numbers from social APIs",
      "AI identifies top performing content and provides tips for the week",
      "Delivers the clean summary directly to WhatsApp"
    ],
    businessImpact: "Replaces hours of manual spreadsheet reporting with an automatic weekly message.",
    securityFeatures: "Read only API access for complete data security.",
    image: "https://i.ibb.co/MkgjJGgD/6th-Pic.png",
    technologies: ["n8n", "Meta Graph API", "YouTube Analytics", "WhatsApp API"]
  },
  {
    id: 7,
    title: "Inventory Verification and Manager Approval Workflow",
    category: "Procurement",
    tags: ["Web Scraping", "Inventory", "Manager Approvals"],
    brief: "Automated stock verification and purchase approval system for equipment and supplies.",
    fullDetails: "When a team member submits a supply request in Google Sheets, management receives an email with quick approve and deny buttons. If approved, an automated web scraper checks the supplier website to verify live stock and pricing before updating the records.",
    architectureSteps: [
      "Receives supply request from Google Sheets",
      "Emails management with instant approve and reject links",
      "Web scraper checks real time price and stock on supplier website",
      "Updates purchase records and notifies the team member"
    ],
    businessImpact: "Eliminates ordering delays and prevents out of stock purchases.",
    securityFeatures: "Single use secure approval links that expire after one click.",
    image: "https://i.ibb.co/DffSJqn5/7th-Pic.png",
    technologies: ["n8n", "Web Scraper", "Google Sheets", "Email API"]
  },
  {
    id: 8,
    title: "Multi Account CRM Lead Synchronization",
    category: "CRM Systems",
    tags: ["GoHighLevel", "Webhooks", "Lead Sync"],
    brief: "Reliable lead router that syncs client inquiries across multiple agency accounts without duplicates.",
    fullDetails: "Built for marketing agencies managing multiple client accounts. When leads arrive from ads or websites, this workflow checks for duplicates to avoid spamming the database, finds the correct sub account, and updates the contact pipeline smoothly.",
    architectureSteps: [
      "Catches incoming lead webhooks from landing pages and ads",
      "Checks for duplicate leads in the last seven days",
      "Routes the lead to the exact client account in GoHighLevel",
      "Updates contact stage and logs successful sync"
    ],
    businessImpact: "Keeps CRM databases clean and prevents duplicate notifications across accounts.",
    securityFeatures: "Webhook secret key verification and error fallback logging.",
    image: "https://i.ibb.co/jvYxmyLW/8th-PIc.png",
    technologies: ["n8n", "GoHighLevel CRM", "Webhook Router", "Data Filter"]
  }
];
