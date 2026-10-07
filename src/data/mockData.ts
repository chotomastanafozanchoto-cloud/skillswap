import { Project, Talent, SkillSwapPair } from '../types';

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    title: "Modern SaaS Landing Page in React & Tailwind",
    description: "Looking for a talented frontend student developer to build a high-converting, responsive landing page for an AI productivity tool. Figma designs and copy provided. Great opportunity for a strong portfolio piece with a glowing review!",
    category: "Web Development",
    budget: 350,
    budgetType: "Fixed Price",
    deadline: "2 weeks",
    skillsRequired: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
    proposalsCount: 8,
    postedAt: "2 hours ago",
    featured: true,
    client: {
      id: "cli-1",
      name: "Usman Tariq",
      company: "Apex Tech Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 4.9,
      totalSpent: "$4,200",
      location: "Lahore, PK"
    }
  },
  {
    id: "proj-2",
    title: "Brand Identity & Modern Minimalist Logo Design",
    description: "We are launching a sustainable coffee brand for university campuses. We need a clean, memorable logo, color palette, typography guidelines, and packaging mockup. Looking for a creative design student with fresh ideas.",
    category: "Graphic Design",
    budget: 220,
    budgetType: "Fixed Price",
    deadline: "10 days",
    skillsRequired: ["Logo Design", "Figma", "Branding", "Adobe Illustrator"],
    proposalsCount: 14,
    postedAt: "5 hours ago",
    featured: true,
    client: {
      id: "cli-2",
      name: "Nadia Malik",
      company: "Bloom Brew Co.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      rating: 5.0,
      totalSpent: "$1,850",
      location: "Karachi, PK"
    }
  },
  {
    id: "proj-3",
    title: "Short-Form Video Editing for Tech YouTube Shorts & Reels",
    description: "Need an energetic video editor to turn raw 10-minute podcast clips into 30-60 second viral vertical reels with dynamic captions, sound design, zoom-ins, and b-roll.",
    category: "Video Editing",
    budget: 30,
    budgetType: "Hourly",
    deadline: "Ongoing / 1 month",
    skillsRequired: ["Premiere Pro", "CapCut Pro", "Sound Design", "Motion Graphics"],
    proposalsCount: 19,
    postedAt: "1 day ago",
    featured: false,
    client: {
      id: "cli-3",
      name: "Zain Qureshi",
      company: "TechByte Studios",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 4.8,
      totalSpent: "$2,700",
      location: "Islamabad, PK"
    }
  },
  {
    id: "proj-4",
    title: "Full-Stack Student Portal with Supabase & Next.js",
    description: "Seeking a competent full-stack student to build an internal dashboard for managing student attendance, course materials, and grade tracking. Must have experience with PostgreSQL or Supabase.",
    category: "Web Development",
    budget: 550,
    budgetType: "Fixed Price",
    deadline: "3 weeks",
    skillsRequired: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    proposalsCount: 6,
    postedAt: "1 day ago",
    featured: true,
    client: {
      id: "cli-4",
      name: "Dr. Farhan Siddiqui",
      company: "EduSphere Initiative",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 4.95,
      totalSpent: "$6,100",
      location: "Rawalpindi, PK"
    }
  },
  {
    id: "proj-5",
    title: "Social Media Banner Suite & Carousel Templates",
    description: "Need 15 high-converting Instagram and LinkedIn carousel templates in Figma for our digital marketing agency. Clean typography, modern layouts, and easy-to-swap components.",
    category: "UI/UX Design",
    budget: 180,
    budgetType: "Fixed Price",
    deadline: "1 week",
    skillsRequired: ["Figma", "Social Media Graphics", "Visual Design", "Typography"],
    proposalsCount: 11,
    postedAt: "2 days ago",
    featured: false,
    client: {
      id: "cli-5",
      name: "Maham Sheikh",
      company: "DigitalWave Agency",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      rating: 4.7,
      totalSpent: "$1,200",
      location: "Lahore, PK"
    }
  },
  {
    id: "proj-6",
    title: "Technical Content Writing & SEO Blog Posts",
    description: "Looking for a computer science or engineering student who loves writing to craft 4 in-depth tutorial articles (1,500 words each) on modern web development, Git workflows, and API design.",
    category: "Content & Copy",
    budget: 200,
    budgetType: "Fixed Price",
    deadline: "2 weeks",
    skillsRequired: ["Technical Writing", "SEO Optimization", "Markdown", "Research"],
    proposalsCount: 9,
    postedAt: "3 days ago",
    featured: false,
    client: {
      id: "cli-6",
      name: "Bilal Jahangir",
      company: "CodeCraft Academy",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      rating: 5.0,
      totalSpent: "$3,400",
      location: "Remote"
    }
  }
];

export const mockTalents: Talent[] = [
  {
    id: "tal-1",
    name: "Ahmed Raza",
    mainSkill: "React & TypeScript Frontend Specialist",
    bio: "Computer Science undergrad with an obsession for crisp, responsive web user experiences. Proficient in React, Tailwind, Next.js, and Three.js 3D web scenes.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    rating: 4.95,
    reviewsCount: 18,
    completedProjects: 14,
    hourlyRate: 25,
    availability: "Available Now",
    college: "FAST National University",
    skills: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Git", "Next.js"],
    badges: ["Top Rated Student", "Fast Responder", "Code Quality Verified"],
    languages: ["English (Fluent)", "Urdu (Native)"],
    portfolio: [
      {
        title: "Crypto Analytics Dashboard",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80",
        description: "Real-time charts, WebSocket price tickers, and responsive dark mode UI."
      },
      {
        title: "DevPortfolio 3D Experience",
        category: "Creative Dev",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80",
        description: "Interactive Three.js particle canvas with custom shaders."
      }
    ]
  },
  {
    id: "tal-2",
    name: "Sara Khan",
    mainSkill: "UI/UX & Product Design Specialist",
    bio: "Design student blending human psychology with modern, clean UI aesthetics. Expert in Figma component design systems, wireframing, and interactive prototypes.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviewsCount: 24,
    completedProjects: 21,
    hourlyRate: 30,
    availability: "10-20 hrs/week",
    college: "Indus Valley School of Art & Architecture",
    skills: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Design Systems", "Prototyping"],
    badges: ["Top Rated Student", "Design System Guru"],
    languages: ["English (Fluent)", "Urdu (Native)"],
    portfolio: [
      {
        title: "Fintech Mobile Banking App",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80",
        description: "40+ screen design system for seamless digital payments and savings vaults."
      },
      {
        title: "EduLearn Web LMS Design",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=80",
        description: "Accessible learning portal for high school and university students."
      }
    ]
  },
  {
    id: "tal-3",
    name: "Hamza Baig",
    mainSkill: "Full-Stack Backend & PostgreSQL Architect",
    bio: "Software Engineering student focused on resilient backend services, Supabase architecture, REST & GraphQL APIs, and database indexing.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    rating: 4.88,
    reviewsCount: 12,
    completedProjects: 9,
    hourlyRate: 28,
    availability: "Available Now",
    college: "NUST Islamabad",
    skills: ["Node.js", "PostgreSQL", "Supabase", "Docker", "Express", "REST APIs"],
    badges: ["Backend Specialist", "SQL Optimizer"],
    languages: ["English (Fluent)", "Urdu (Native)"],
    portfolio: [
      {
        title: "Multi-Tenant E-Commerce API",
        category: "Backend Engine",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=80",
        description: "High-throughput API with row-level security and automated Stripe webhooks."
      }
    ]
  },
  {
    id: "tal-4",
    name: "Zainab Fatima",
    mainSkill: "Motion Graphics & Cinematic Video Editor",
    bio: "Media Arts undergrad turning raw clips into viral social content, brand explainers, and captivating YouTube documentaries.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    rating: 4.92,
    reviewsCount: 16,
    completedProjects: 15,
    hourlyRate: 22,
    availability: "10-20 hrs/week",
    college: "Beaconhouse National University",
    skills: ["Adobe Premiere", "After Effects", "Sound Design", "Color Grading", "DaVinci Resolve"],
    badges: ["Video Maestro", "Fast Turnaround"],
    languages: ["English (Fluent)", "Urdu (Native)"],
    portfolio: [
      {
        title: "Startup Launch Teaser",
        category: "Commercial Reel",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=80",
        description: "Kinetic typography and 3D product showcase for SaaS launch."
      }
    ]
  }
];

export const mockSkillSwaps: SkillSwapPair[] = [
  {
    id: "swap-1",
    studentName: "Ahmed Raza",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    college: "FAST University",
    rating: 4.95,
    reviewsCount: 18,
    teachSkill: {
      name: "React & TypeScript",
      category: "Frontend Dev",
      level: "Expert",
      experience: "2+ years building SPAs, custom hooks, and Tailwind systems."
    },
    learnSkill: {
      name: "UI/UX & Figma",
      category: "Design",
      level: "Beginner",
      urgency: "Active"
    },
    matchScore: 98,
    availabilityHours: 5
  },
  {
    id: "swap-2",
    studentName: "Sara Khan",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    college: "IVS Karachi",
    rating: 5.0,
    reviewsCount: 24,
    teachSkill: {
      name: "Figma & Design Systems",
      category: "Design",
      level: "Expert",
      experience: "Creator of 3 community design kits with 4,000+ duplicates."
    },
    learnSkill: {
      name: "React & Web Dev",
      category: "Development",
      level: "Intermediate",
      urgency: "Active"
    },
    matchScore: 98,
    availabilityHours: 6
  },
  {
    id: "swap-3",
    studentName: "Bilal Tariq",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    college: "LUMS",
    rating: 4.85,
    reviewsCount: 10,
    teachSkill: {
      name: "Python & Data Science",
      category: "Data & AI",
      level: "Advanced",
      experience: "Pandas, Scikit-learn, and prompt engineering pipelines."
    },
    learnSkill: {
      name: "Next.js & Frontend",
      category: "Development",
      level: "Beginner",
      urgency: "Active"
    },
    matchScore: 91,
    availabilityHours: 4
  },
  {
    id: "swap-4",
    studentName: "Ayesha Noor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    college: "GIKI",
    rating: 4.9,
    reviewsCount: 14,
    teachSkill: {
      name: "SEO & Content Writing",
      category: "Marketing",
      level: "Advanced",
      experience: "Author of technical guides ranking on page 1 of Google."
    },
    learnSkill: {
      name: "Graphic Design",
      category: "Design",
      level: "Beginner",
      urgency: "Exploring"
    },
    matchScore: 88,
    availabilityHours: 3
  }
];

export const platformStats = {
  totalUsers: "4,820",
  activeStudents: "3,140",
  verifiedClients: "1,680",
  completedProjects: "1,290",
  skillSwapsCompleted: "870",
  totalEarningsReleased: "$142,500",
  satisfactionRate: "99.2%",
  avgResponseTime: "18 mins"
};
