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
    id: "cert-cs50",
    title: "CS50 — Introduction to Computer Science",
    issuer: "Harvard University",
    issueDate: "2026",
    image: "/certificates/cert-cs50.png",
    credentialUrl: "https://certificates.cs50.io/a968d2ed-b376-4078-b1ec-e4026c58b62e",
    category: "Course",
    isWinningAward: false,
    awardRank: "Verified Course",
    description: "Successfully completed CS50: Introduction to Computer Science from Harvard University. Mastered algorithmic thinking, data structures, memory management, and software engineering principles across C, Python, SQL, and web technologies.",
    skillsLearned: ["C & Python", "Data Structures", "Algorithms", "SQL & Databases", "Memory Management"]
  },
  {
    id: "cert-2",
    title: "Certificate of Participation — UCP Summer School 2026",
    issuer: "University of Central Punjab",
    issueDate: "August 2026",
    image: "/certificates/cert-ucp-summer-school-2026.jpeg",
    category: "Participation",
    isWinningAward: false,
    awardRank: "Participant",
    description: "Awarded for active participation and successful completion of the UCP Summer School 2026, featuring training sessions on Data Analytics, Entrepreneurship, Digital Marketing, and Fintech.",
    skillsLearned: ["Data Analytics", "Fintech", "Entrepreneurship", "Digital Marketing"]
  },
  {
    id: "cert-5",
    title: "Certificate of Participation — Freelancing Mastery Program",
    issuer: "Punjab Colleges",
    issueDate: "August 2026",
    image: "/certificates/cert-freelancing-mastery.png",
    category: "Participation",
    isWinningAward: false,
    awardRank: "Participant",
    description: "Successfully completed the Freelancing Mastery Program online course organized by Punjab Colleges, gaining practical methodologies for client communication, project delivery, and digital freelance workflows.",
    skillsLearned: ["Freelancing Strategy", "Client Communication", "Proposal Writing", "Project Delivery"]
  },
  {
    id: "cert-3",
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
    id: "cert-4",
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
