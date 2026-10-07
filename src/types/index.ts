export interface Assignment {
  number: string; // e.g. "01", "02"
  title: string;
  subtitle: string;
  shortDescription: string;
  mainObjective: string;
  importantPoints: string[];
  relatedFeature: string;
  relatedRoute: string;
  phase: string;
  deliverables: string[];
  fullContent: {
    overview: string;
    sections: {
      heading: string;
      content: string | string[];
      codeSnippet?: string;
      tableData?: { headers: string[]; rows: string[][] };
    }[];
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web Development' | 'UI/UX Design' | 'Mobile Apps' | 'Video Editing' | 'Content & Copy' | 'Graphic Design';
  budget: number;
  budgetType: 'Fixed Price' | 'Hourly';
  deadline: string;
  skillsRequired: string[];
  proposalsCount: number;
  postedAt: string;
  featured?: boolean;
  client: {
    id: string;
    name: string;
    company: string;
    avatar: string;
    rating: number;
    totalSpent: string;
    location: string;
  };
}

export interface Talent {
  id: string;
  name: string;
  mainSkill: string;
  bio: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  completedProjects: number;
  hourlyRate: number;
  availability: 'Available Now' | '10-20 hrs/week' | 'Currently Booked';
  college: string;
  skills: string[];
  portfolio: {
    title: string;
    category: string;
    image: string;
    link?: string;
    description: string;
  }[];
  badges: string[];
  languages: string[];
}

export interface SkillSwapPair {
  id: string;
  studentName: string;
  avatar: string;
  college: string;
  rating: number;
  reviewsCount: number;
  teachSkill: {
    name: string;
    category: string;
    level: 'Advanced' | 'Expert' | 'Intermediate';
    experience: string;
  };
  learnSkill: {
    name: string;
    category: string;
    level: 'Beginner' | 'Intermediate';
    urgency: 'Active' | 'Exploring';
  };
  matchScore?: number;
  availabilityHours: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'client' | 'admin';
  avatar: string;
  title?: string;
  bio?: string;
  college?: string;
  skills?: string[];
  completedProjects?: number;
  rating?: number;
}
