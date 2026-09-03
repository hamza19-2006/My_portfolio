export interface WebProject {
  id: string;
  title: string;
  image: string;
  link: string;
  category: 'Healthcare' | 'EdTech' | 'Utilities' | 'E-Commerce' | 'All';
  valueStatement: string;
  explanation: string;
  techStack: string[];
  isFeatured?: boolean;
}

export interface AutomationArchitecture {
  id: number | string;
  title: string;
  category: string;
  tags: string[];
  brief: string;
  fullDetails: string;
  architectureSteps: string[];
  businessImpact: string;
  securityFeatures?: string;
  image: string;
  technologies: string[];
}

export interface PlayStoreApp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  packageName?: string;
  playStoreUrl: string;
  icon: string;
  bannerImage: string;
  screenshots: string[];
  category: string;
  version: string;
  rating: number;
  ratingCount: string;
  downloads: string;
  highlights: string[];
  techStack: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  image: string;
  category: 'Hackathons' | 'Automation' | 'Development' | 'Professional' | 'Participation' | 'Internships' | 'Course' | 'Courses';
  isWinningAward?: boolean;
  awardRank?: string; // e.g. "1st Place Winner", "Top 1% Distinction"
  description: string;
  skillsLearned: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
}
