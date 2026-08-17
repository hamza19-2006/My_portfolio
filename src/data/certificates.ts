import { Certificate } from "../types/portfolio";

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "2nd Place — AI Project Competition",
    issuer: "University of Central Punjab",
    issueDate: "July 2026",
    image: "/certificates/cert-ai-2nd-place.jpeg",
    category: "Hackathons",
    isWinningAward: true,
    awardRank: "2nd Place — AI Excellence Award",
    description: "Secured second place in the Artificial Intelligence Project Competition held as part of the Summer Internship Program 2026 at University of Central Punjab. Recognized for outstanding problem-solving, technical execution, teamwork, presentation quality, and effective use of AI tools under competition pressure.",
    skillsLearned: ["AI Project Development", "Technical Presentation", "Problem Solving", "Team Collaboration"]
  },
  {
    id: "cert-2",
    title: "Certificate of Participation — Summer Jam 2026",
    issuer: "University of Central Punjab",
    issueDate: "2026",
    image: "/certificates/cert-ai-participation.png",
    category: "Participation",
    isWinningAward: false,
    awardRank: "Participant",
    description: "Awarded a Certificate of Participation for taking part in Summer Jam 2026, organized by the University of Central Punjab. This event brought together students across disciplines to collaborate, build, and showcase technology-driven projects.",
    skillsLearned: ["AI Tools & Applications", "Collaborative Building", "Rapid Prototyping", "Tech Innovation"]
  },
  {
    id: "cert-3",
    title: "Certificate of Participation — Robotics Programme 2025",
    issuer: "Punjab Colleges",
    issueDate: "2025",
    image: "/certificates/cert-robotics-participation.jpeg",
    category: "Participation",
    isWinningAward: false,
    awardRank: "Participant",
    description: "Completed the Robotics Programme 2025 at Punjab Colleges, Johar Town, Lahore. Gained hands-on exposure to robotics fundamentals, hardware-software integration, and automation logic during the structured programme sessions.",
    skillsLearned: ["Robotics Fundamentals", "Hardware Integration", "Automation Logic", "Engineering Thinking"]
  }
];
