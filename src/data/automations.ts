import { AutomationArchitecture } from "../types/portfolio";

export const automationArchitectures: AutomationArchitecture[] = [
  {
    id: 1,
    title: "AI Social Lead Capture and CRM Pipeline",
    category: "CRM and Sales",
    tags: ["CRM Integration", "AI Assistant", "Lead Routing"],
    brief: "Captures messages from Instagram, TikTok, and Facebook, qualifies prospective clients, and logs them into Google Sheets.",
    fullDetails: "This workflow automatically handles incoming messages and comments across social platforms. An AI assistant answers common questions, collects client requirements and contact info, and sends a summary to the team with one-click approval links. Once approved, the lead is added to Google Sheets and a confirmation email is dispatched.",
    architectureSteps: [
      "Receives new messages and comments from Instagram, TikTok, and Facebook",
      "AI assistant answers questions and collects contact details",
      "Sends project review notification to team email",
      "Updates Google Sheets and sends confirmation email to client"
    ],
    businessImpact: "Instant replies to new inquiries and higher conversion rates from social media traffic.",
    securityFeatures: "Secure webhook tokens and manual approval controls.",
    image: "https://i.ibb.co/nMcxdhW9/1st-Pic.png",
    technologies: ["n8n", "Google Gemini", "Instagram API", "Google Sheets", "SendGrid"]
  },
  {
    id: 2,
    title: "Multi-Platform Content Distribution",
    category: "Content and Media",
    tags: ["Content Distribution", "Gemini AI", "Cloud Storage"],
    brief: "Watches a Google Drive folder and automatically formats and schedules posts across six social networks.",
    fullDetails: "This automation saves hours of manual posting each week. When new media is added to Google Drive, AI analyzes the context and drafts custom captions: visual hooks for Instagram, short captions for TikTok, professional updates for LinkedIn, and SEO descriptions for YouTube Shorts. It schedules the posts and sends a confirmation to WhatsApp.",
    architectureSteps: [
      "Detects new video or image uploads in Google Drive",
      "AI inspects media and writes custom captions for each platform",
      "Formats posts for LinkedIn, YouTube, Instagram, and TikTok",
      "Publishes content automatically and sends summary to WhatsApp"
    ],
    businessImpact: "Saves more than 15 hours of manual content scheduling every week.",
    securityFeatures: "Encrypted API credentials with automatic retries on network errors.",
    image: "https://i.ibb.co/3yRKQ25g/2nd-Pic.png",
    technologies: ["n8n", "Google Gemini", "YouTube API", "Instagram API", "WhatsApp API"]
  },
  {
    id: 3,
    title: "AI Telegram Personal Assistant",
    category: "AI Assistants",
    tags: ["Telegram Bot", "Voice Notes", "Smart Routing"],
    brief: "A smart Telegram bot that transcribes voice notes, reads documents, and summarizes articles in real time.",
    fullDetails: "A personal Telegram assistant that helps you stay productive on the go. It transcribes audio voice notes into clean text, extracts key information from images and PDFs, and summarizes web links. It remembers recent conversation context for follow-up questions and can email important notes to Gmail.",
    architectureSteps: [
      "Receives text, voice notes, photos, and links on Telegram",
      "Transcribes audio and processes documents using AI",
      "Maintains conversation history for contextual replies",
      "Sends formatted summaries and task items directly to Gmail"
    ],
    businessImpact: "Turns quick voice memos and mobile notes into organized summaries and action items.",
    securityFeatures: "Authorized user ID filter to prevent unauthorized access.",
    image: "https://i.ibb.co/VYCgb204/3rd-Pi-c.png",
    technologies: ["Telegram Bot API", "Whisper Audio", "Google Gemini", "Gmail API"]
  },
  {
    id: 4,
    title: "Automated YouTube and Instagram Publishing",
    category: "Video and SEO",
    tags: ["Video SEO", "Auto Publish", "Webhooks"],
    brief: "Automates video metadata generation, tagging, and multi-platform publishing for short-form content.",
    fullDetails: "This workflow receives raw video files, extracts the key topics using AI, writes search-friendly titles, descriptions, and hashtags, and publishes the video to YouTube Shorts and Instagram Reels.",
    architectureSteps: [
      "Receives short video upload through webhook",
      "AI generates titles, search tags, and hashtags",
      "Validates aspect ratios and file specifications",
      "Publishes directly to YouTube and Instagram"
    ],
    businessImpact: "Maintains a consistent publishing schedule without manual file uploads and tagging.",
    securityFeatures: "Secure API connections with automated failure alerts.",
    image: "https://i.ibb.co/xKWmtgmb/4th-Pic.png",
    technologies: ["n8n", "YouTube Data API", "Instagram API", "Google Gemini"]
  },
  {
    id: 5,
    title: "AI Study Guide and Quiz Generator",
    category: "EdTech",
    tags: ["EdTech", "PDF Processing", "Quiz Builder"],
    brief: "Converts long lecture PDFs and textbook chapters into summaries, flashcards, and practice quizzes.",
    fullDetails: "An educational workflow that transforms dense course material into practical study aids. It breaks down uploaded PDFs and notes to create key-concept summaries, flashcards, and multiple-choice questions, with clean PDF export capabilities.",
    architectureSteps: [
      "Extracts and structures content from PDFs and notes",
      "Generates flashcards, summary sheets, and practice questions",
      "Formats clean study materials ready for download",
      "Sends study reminders and daily practice questions to WhatsApp"
    ],
    businessImpact: "Helps learners review large study materials and textbook chapters in a fraction of the time.",
    securityFeatures: "Temporary file handling with private session storage.",
    image: "https://i.ibb.co/ZzL5Zq3j/5th-Pic.png",
    technologies: ["n8n", "Google Gemini", "PDF Parser", "WhatsApp API"]
  },
  {
    id: 6,
    title: "Weekly Analytics Summary for WhatsApp",
    category: "Analytics",
    tags: ["Data Reporting", "Scheduled Cron", "WhatsApp Digest"],
    brief: "Collects weekly metrics across social channels and delivers a concise summary to WhatsApp.",
    fullDetails: "Every Monday morning, this workflow queries performance numbers from YouTube, Instagram, and Facebook. It calculates views, growth, and audience engagement, uses AI to summarize key trends, and sends a clean report to the team's WhatsApp.",
    architectureSteps: [
      "Runs on a scheduled timer every Monday morning",
      "Pulls views, impressions, and engagement data from social APIs",
      "AI highlights top-performing posts and suggests weekly focus areas",
      "Delivers the clean summary directly to WhatsApp"
    ],
    businessImpact: "Replaces manual spreadsheet updates with an automated weekly summary.",
    securityFeatures: "Read-only API access tokens for complete data privacy.",
    image: "https://i.ibb.co/MkgjJGgD/6th-Pic.png",
    technologies: ["n8n", "Meta Graph API", "YouTube Analytics", "WhatsApp API"]
  },
  {
    id: 7,
    title: "Inventory Stock Check and Approval Flow",
    category: "Operations",
    tags: ["Web Scraping", "Inventory", "Manager Approvals"],
    brief: "Automates stock verification and purchase approvals for equipment and office supplies.",
    fullDetails: "When a team member submits an order request via Google Sheets, management receives an email with quick approve and deny links. If approved, an automated script checks the supplier site for real-time stock and pricing before updating records.",
    architectureSteps: [
      "Captures new supply requests from Google Sheets",
      "Emails management with instant approval and denial buttons",
      "Automated scraper checks live stock and price on supplier site",
      "Updates purchase records and notifies the team member"
    ],
    businessImpact: "Prevents purchase delays and ensures items are in stock before orders are placed.",
    securityFeatures: "Single-use secure approval links that expire after one click.",
    image: "https://i.ibb.co/DffSJqn5/7th-Pic.png",
    technologies: ["n8n", "Web Scraper", "Google Sheets", "SendGrid"]
  },
  {
    id: 8,
    title: "Multi-Account CRM Lead Sync",
    category: "CRM Systems",
    tags: ["GoHighLevel", "Webhooks", "Lead Sync"],
    brief: "Synchronizes contact leads across agency client accounts without duplicate records.",
    fullDetails: "Designed for agencies managing multiple client accounts in GoHighLevel. When new leads arrive from landing pages or ad campaigns, this workflow filters out duplicates, routes the contact to the correct sub-account, and updates the sales pipeline.",
    architectureSteps: [
      "Catches lead webhooks from landing pages and forms",
      "Filters out duplicate entries received in the past seven days",
      "Routes the lead to the exact client sub-account in GoHighLevel",
      "Updates the pipeline stage and logs the transaction"
    ],
    businessImpact: "Keeps CRM databases clean and prevents duplicate notifications across accounts.",
    securityFeatures: "Webhook authentication keys and error fallback logging.",
    image: "https://i.ibb.co/jvYxmyLW/8th-PIc.png",
    technologies: ["n8n", "GoHighLevel CRM", "Webhook Router", "Data Filter"]
  }
];
