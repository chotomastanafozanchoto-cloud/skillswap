import { Assignment } from '../types';

export const assignmentsData: Assignment[] = [
  {
    number: "01",
    title: "Solution & Product Idea",
    subtitle: "Defining the Vision, Target Market & Value Proposition",
    shortDescription: "Conceptualizing SkillSwap as a dedicated platform solving the student experience and earning dilemma.",
    mainObjective: "Identify real user challenges, define the core value proposition, audience personas, and create the foundational user flow for SkillSwap.",
    phase: "Ideation & Discovery",
    importantPoints: [
      "Digital ecosystem connecting students with real client projects and peer-to-peer skill exchange",
      "Addresses lack of portfolio opportunities and beginner work hurdles for university students",
      "Combines learning, skill barter, freelance projects, and peer collaboration in one platform",
      "User flow: Sign Up -> Create Profile -> Add Skills -> Find Work -> Apply -> Complete -> Review"
    ],
    relatedFeature: "Hero, Problem-Solution Showcase & Ecosystem Overview",
    relatedRoute: "/",
    deliverables: [
      "Product Concept Brief",
      "Target Audience Segmentation Analysis",
      "High-Level User Journey Map",
      "Competitive Landscape & Differentiators"
    ],
    fullContent: {
      overview: "SkillSwap was conceived to address a pervasive dilemma in tertiary education: students learn valuable digital skills but face severe friction finding their first real-world clients or projects due to lack of verified experience.",
      sections: [
        {
          heading: "1. Product Name & Core Tagline",
          content: [
            "Product Name: SkillSwap",
            "Tagline: 'Learn. Connect. Collaborate. Earn.'",
            "Founder & Lead Architect: Fozan ('Web developer as a problem solver')"
          ]
        },
        {
          heading: "2. The Core Problem Statement",
          content: "College students spend hundreds of hours learning programming, UI/UX design, content writing, and digital media. However, traditional freelance marketplaces (Upwork, Fiverr) are oversaturated with senior professionals. Beginners cannot compete, leaving talent idle and resumes empty."
        },
        {
          heading: "3. The Proposed Solution",
          content: "A specialized platform engineered specifically for students, young creators, and small local businesses. SkillSwap introduces a dual-engine model: (1) A gig marketplace for paid client contracts, and (2) A peer-to-peer Skill Swap engine where students barter skills without money (e.g. React developer teaches a UI designer in exchange for graphic assets)."
        },
        {
          heading: "4. Target Audience",
          content: [
            "University and college students seeking portfolio projects",
            "Beginner freelancers building verified client reviews",
            "Student creators with digital or creative capabilities",
            "Small businesses, startups, and local shops seeking affordable, motivated talent"
          ]
        },
        {
          heading: "5. Foundational 8-Step User Flow",
          content: [
            "Step 1: Sign Up (Student / Client role selection)",
            "Step 2: Profile Creation (Bio, institution, verified handles)",
            "Step 3: Add Skills & Set Teach/Learn Preferences",
            "Step 4: Browse Marketplace / Match with Peers",
            "Step 5: Submit Proposal or Send Swap Request",
            "Step 6: Execute Project with Milestone Collaboration",
            "Step 7: Milestone Delivery & Escrow Release",
            "Step 8: Mutual Ratings & Portfolio Endorsement"
          ]
        }
      ]
    }
  },
  {
    number: "02",
    title: "Product Requirements Document (PRD)",
    subtitle: "System Specifications, User Personas & Technical Criteria",
    shortDescription: "Comprehensive PRD outlining functional, non-functional, data, and architectural requirements for SkillSwap.",
    mainObjective: "Establish rigorous functional specifications, non-functional metrics, user personas, screen inventories, and success criteria.",
    phase: "Requirements Engineering",
    importantPoints: [
      "User personas: Ahmed (Web Dev student), Sara (UI/UX student), Usman (Small business client)",
      "15 distinct functional feature modules including Auth, Talent Search, Application Tracker",
      "Non-functional constraints: <2s page load, WCAG AA accessibility, mobile-first responsiveness",
      "Comprehensive data model entities covering users, profiles, skills, projects, and swaps"
    ],
    relatedFeature: "Marketplace Search, Filtering & Multi-Role Architecture",
    relatedRoute: "/find-work",
    deliverables: [
      "Full Product Requirements Document (PRD)",
      "User Persona Cards & Empathy Maps",
      "Functional Specification Matrix",
      "Screen Inventory & Routing Architecture"
    ],
    fullContent: {
      overview: "The PRD converts the high-level vision into actionable technical requirements, defining persona needs, functional boundaries, and performance benchmarks.",
      sections: [
        {
          heading: "1. Primary User Personas",
          content: [
            "Persona 1: Ahmed (19, Computer Science Undergrad) — Goal: Land first real freelance React gigs, build credible GitHub/portfolio links. Pain point: Zero client testimonials.",
            "Persona 2: Sara (20, Graphic Design Major) — Goal: Exchange design coaching for JavaScript frontend mentoring; find startup clients for branding projects.",
            "Persona 3: Usman (28, Local E-Commerce Founder) — Goal: Source agile, affordable talent for landing pages and promotional banners without corporate agency overhead."
          ]
        },
        {
          heading: "2. Functional Requirements",
          content: [
            "FR-01: Secure role-based registration & authentication (Student, Client, Admin).",
            "FR-02: Profile builder with skill tags, rates, availability, and multimedia portfolio gallery.",
            "FR-03: Project posting with budget type (fixed/hourly), deadline, category, and skill tag filters.",
            "FR-04: Proposal submission engine with custom cover letter, delivery estimate, and bid value.",
            "FR-05: Skill Swap barter matching engine calculating reciprocal learning interests.",
            "FR-06: Direct messaging and application status lifecycle management.",
            "FR-07: Dual-sided review and verified badge credentialing."
          ]
        },
        {
          heading: "3. Non-Functional Requirements",
          content: [
            "Performance: Initial page load under 1.8s; sub-100ms UI interaction latency.",
            "Security: End-to-end HTTPS, Supabase Row-Level Security (RLS) on all PostgreSQL tables.",
            "Responsiveness: Dynamic fluid layouts across 320px mobile up to 4K ultra-wide displays.",
            "Reliability: 99.9% uptime target with graceful offline fallback and optimistic cache."
          ]
        },
        {
          heading: "4. Tech Stack Specification",
          content: [
            "Frontend: React 18, TypeScript, Vite, Tailwind CSS",
            "Animation & 3D: Framer Motion, GSAP, Three.js",
            "Backend & DB: Supabase, PostgreSQL, PostgREST",
            "Authentication: Supabase Auth with JWT and RBAC",
            "Hosting: Vercel Edge Network with Automated CI/CD"
          ]
        }
      ]
    }
  },
  {
    number: "03",
    title: "UI/UX Design & Design System",
    subtitle: "Visual Language, Color Harmony & Component Library",
    shortDescription: "Formulating the cohesive blue visual identity, 8pt spacing grid, typography scale, and reusable design tokens.",
    mainObjective: "Establish an unmistakable, premium visual identity reflecting the official SkillSwap blue palette with high contrast, trust, and clarity.",
    phase: "Design Systems & UI/UX",
    importantPoints: [
      "Brand Color Palette: Light Blue #DDF2FF, Navy #123B8A, Primary #1677D2, White #FFFFFF",
      "Typography Scale based on Plus Jakarta Sans and Inter for optimal reading ergonomics",
      "Component library: Glass cards, responsive data tables, badge pill chips, modals",
      "Consistent 8pt spacing rhythm and WCAG AAA compliant contrast ratios"
    ],
    relatedFeature: "Design System, Glassmorphic UI & Visual Consistency",
    relatedRoute: "/about",
    deliverables: [
      "Design System Tokens & Palette Guide",
      "Figma Component Library Specification",
      "Responsive Breakpoint Hierarchy",
      "Accessibility & Contrast Audit"
    ],
    fullContent: {
      overview: "The UI/UX design sets the visual soul of SkillSwap. Departing from drab corporate tones or childish motifs, it uses a vibrant yet trustworthy blue spectrum that inspires student confidence and client credibility.",
      sections: [
        {
          heading: "1. Official SkillSwap Palette Breakdown",
          content: [
            "Canvas Background: #DDF2FF (Soft Sky) — Clean, open, and energizing.",
            "Dark Navy Headings: #123B8A (Deep Authority) — Commands attention, high legibility.",
            "Primary Action Blue: #1677D2 (Interactive Pulse) — Used on primary buttons, active indicators, and links.",
            "Card & Surface White: #FFFFFF — Crisp content contrast with subtle borders (#BFDBFE).",
            "Body Typography: #20324D — Optimized for reduced eye fatigue during long browsing sessions.",
            "Muted Metadata: #5E718C — Secondary labels, timestamps, and subtle hints."
          ]
        },
        {
          heading: "2. Typography Hierarchy",
          content: [
            "Display / H1: 36px to 52px | Weight: 800 ExtraBold | Tracking: -0.02em",
            "Section Headings / H2: 28px to 36px | Weight: 700 Bold | Line Height: 1.25",
            "Card Headings / H3: 18px to 22px | Weight: 600 SemiBold | Line Height: 1.35",
            "Body Text: 14px to 16px | Weight: 400 Regular / 500 Medium | Line Height: 1.6",
            "Captions & Micro-labels: 12px | Weight: 600 SemiBold | Uppercase Tracking: +0.05em"
          ]
        },
        {
          heading: "3. UI Micro-interactions & States",
          content: [
            "Card Hover: 4px translateY lift with soft navy shadow elevation.",
            "Button Press: Subtle scale(0.98) feedback with bright glow outline.",
            "Focus Visible: 2px ring in #1677D2 with 2px offset for keyboard navigation."
          ]
        }
      ]
    }
  },
  {
    number: "04",
    title: "Frontend Prototype",
    subtitle: "Interactive React Components & Screen Orchestration",
    shortDescription: "Translating wireframes and design system components into a responsive, modular React + TypeScript SPA.",
    mainObjective: "Build the complete interactive frontend prototype featuring all required routes, states, search bars, filters, and modals.",
    phase: "Frontend Engineering",
    importantPoints: [
      "Vite + React 18 + TypeScript architecture with zero configuration drift",
      "Tailwind CSS custom configuration extending SkillSwap brand tokens",
      "Modular screen routing: Home, Find Work, Find Talent, Skill Swap, Dashboards, Admin Studio",
      "Dynamic state management for real-time search, category filters, and modal dialogues"
    ],
    relatedFeature: "Dynamic Prototype Engine, Instant Search & Modals",
    relatedRoute: "/find-talent",
    deliverables: [
      "React + TypeScript Component Architecture",
      "Tailwind Utility Integration",
      "Mock Data Fixtures for Jobs & Talents",
      "Multi-Page Navigation & Mobile Drawer"
    ],
    fullContent: {
      overview: "Assignment 04 converted static UI requirements into a living, responsive prototype with stateful interactions, reactive filters, and accessible dialogs.",
      sections: [
        {
          heading: "1. Core Screen Breakdown",
          content: [
            "Home Landing Page: Hero, 3D intro entry, value proposition, problem/solution showcase.",
            "Find Work: Marketplace with query search, category chips, budget sliders, and application modal.",
            "Find Talent: Student directory with skill tag filters, rate toggles, and verified portfolio view.",
            "Skill Swap: Dedicated barter engine with Teach/Learn reciprocal matching cards.",
            "Dashboards: Tailored layouts for Student and Client user perspectives.",
            "Admin Studio: Back-office portal with platform telemetry and resource management."
          ]
        },
        {
          heading: "2. Component Architecture",
          content: [
            "Atomic components: Button, Badge, Input, Select, Avatar, Card.",
            "Molecular components: ProjectCard, TalentCard, SwapMatchCard, SearchBar.",
            "Organisms: NavigationHeader, Footer, ApplicationModal, SkillBarterDrawer.",
            "Layouts: MainLayout with sticky glass header, responsive mobile menu, and notification toasts."
          ]
        }
      ]
    }
  },
  {
    number: "05",
    title: "Backend, Database & Authentication",
    subtitle: "Supabase, PostgreSQL, RLS & Entity Relationship Architecture",
    shortDescription: "Complete backend specification featuring normalized PostgreSQL schemas, Row-Level Security, Supabase Auth, and Storage.",
    mainObjective: "Architect a production-grade relational database schema, define Row-Level Security (RLS) policies, storage buckets, and auth workflows.",
    phase: "Backend Architecture & Database",
    importantPoints: [
      "PostgreSQL normalized schema across 10 tables: users, profiles, skills, projects, applications, reviews",
      "Row-Level Security (RLS) policies ensuring students and clients only access authorized records",
      "Supabase Auth integration supporting JWT sessions, email confirmation, and role claims",
      "Supabase Storage buckets for portfolio images, resumes, and project deliverables"
    ],
    relatedFeature: "PostgreSQL Database Architecture & RLS Security Engine",
    relatedRoute: "/dashboard",
    deliverables: [
      "PostgreSQL Schema & Migration Scripts",
      "Visual Entity Relationship Diagram (ERD)",
      "Row-Level Security Policy Matrix",
      "Supabase Storage Configuration"
    ],
    fullContent: {
      overview: "Assignment 05 architects the entire data foundation of SkillSwap using Supabase and PostgreSQL. It enforces strict data integrity, foreign key cascades, and row-level authorization.",
      sections: [
        {
          heading: "1. Database Schema & Tables",
          content: [
            "users (id: UUID PK, email: text, role: 'student'|'client'|'admin', created_at: timestamptz)",
            "profiles (id: UUID PK, user_id: UUID FK, full_name: text, avatar_url: text, bio: text, college: text, hourly_rate: numeric, rating: numeric, availability: text)",
            "skills (id: UUID PK, name: text, category: text, icon: text)",
            "user_skills (id: UUID PK, profile_id: UUID FK, skill_id: UUID FK, proficiency: text, can_teach: boolean, wants_to_learn: boolean)",
            "projects (id: UUID PK, client_id: UUID FK, title: text, description: text, category: text, budget: numeric, deadline: date, status: text)",
            "applications (id: UUID PK, project_id: UUID FK, student_id: UUID FK, cover_letter: text, bid_amount: numeric, status: text)",
            "skill_swaps (id: UUID PK, requester_id: UUID FK, recipient_id: UUID FK, teach_skill_id: UUID FK, learn_skill_id: UUID FK, status: text)",
            "messages (id: UUID PK, sender_id: UUID FK, recipient_id: UUID FK, content: text, read: boolean, created_at: timestamptz)",
            "reviews (id: UUID PK, reviewer_id: UUID FK, reviewee_id: UUID FK, project_id: UUID FK, rating: int, comment: text)"
          ]
        },
        {
          heading: "2. Row-Level Security (RLS) Rules",
          content: [
            "Projects: Publicly readable for active projects; only client owner can INSERT/UPDATE/DELETE.",
            "Applications: Students can only view their own applications; project client can view applications to their own projects.",
            "Profiles: Publicly readable; editable only by the authenticated owner.",
            "Messages: Strictly restricted to the sender and recipient via auth.uid() checks."
          ]
        },
        {
          heading: "3. Storage Buckets",
          content: [
            "Bucket 'avatars': Public read, authenticated upload up to 2MB (JPEG, PNG, WebP).",
            "Bucket 'portfolios': Public read, authenticated upload up to 10MB.",
            "Bucket 'project-files': Private read/write restricted to project contract participants."
          ]
        }
      ]
    }
  },
  {
    number: "06",
    title: "Full-Stack Integration & Complete Product",
    subtitle: "Connecting Real API Client, Subscriptions & Validation",
    shortDescription: "Unifying frontend UI with the backend API, real-time message feeds, form validations, and asynchronous error boundaries.",
    mainObjective: "Integrate frontend components with Supabase client, implement robust state synchronization, and handle loading/error edge cases.",
    phase: "Full-Stack Engineering",
    importantPoints: [
      "Supabase JavaScript Client integration with typed database schemas",
      "Real-time PostgreSQL channel listeners for instant messaging and notification updates",
      "Form validation with zod-style constraints preventing corrupt data submissions",
      "Optimistic UI updates for instant proposal submission and skill-swap request responses"
    ],
    relatedFeature: "Real-time Messaging, Application Pipeline & Toast Notifications",
    relatedRoute: "/dashboard",
    deliverables: [
      "Supabase Client & Service Wrappers",
      "Real-Time WebSocket Subscription Handlers",
      "Form Validation & Error Boundary Implementation",
      "Optimistic State Mutation Layer"
    ],
    fullContent: {
      overview: "Assignment 06 connects the visual layer to backend data streams, ensuring seamless communication, robust error resilience, and fluid user feedback.",
      sections: [
        {
          heading: "1. Service Layer Architecture",
          content: [
            "projectService: Handles project queries, category filters, and new listing submissions.",
            "talentService: Manages student directory queries, skill filters, and profile updates.",
            "swapService: Implements reciprocal matching algorithms and barter invitation dispatch.",
            "authService: Wraps Supabase auth login, signup, session recovery, and role claims."
          ]
        },
        {
          heading: "2. Real-Time Capabilities",
          content: [
            "Live notifications when a client views or responds to a student application.",
            "Instant chat updates via Supabase broadcast channels without polling.",
            "Dynamic proposal count incrementing on project cards in real time."
          ]
        },
        {
          heading: "3. Defensive UX & Error Handling",
          content: [
            "Graceful skeletons displayed while remote data fetches resolve.",
            "Non-intrusive toast notifications for success, warnings, and API failures.",
            "Form input constraints ensuring budget minimums and valid deadline dates."
          ]
        }
      ]
    }
  },
  {
    number: "07",
    title: "Testing, Bug Fixing & GitHub",
    subtitle: "Quality Assurance, Bug Tracking Matrix & Version Control",
    shortDescription: "Comprehensive QA testing across unit, integration, responsive layouts, and disciplined GitHub Gitflow repository management.",
    mainObjective: "Conduct rigorous multi-device testing, document and resolve identified bugs, and maintain an enterprise GitHub workflow.",
    phase: "Quality Assurance & DevOps",
    importantPoints: [
      "Cross-browser testing across Chrome, Firefox, Safari, Edge and mobile WebKit",
      "12-point Bug Tracking Matrix covering auth edge cases, filter resets, and mobile drawer z-index",
      "Structured GitHub repository with feature branches, PR templates, and semantic commits",
      "Automated CI workflow validating TypeScript builds and linting before merge"
    ],
    relatedFeature: "Quality Verification, GitHub Repository & Bug Fix Matrix",
    relatedRoute: "/about",
    deliverables: [
      "Comprehensive QA Test Plan & Results Log",
      "12-Point Bug Resolution Matrix",
      "GitHub Gitflow Repository Setup",
      "CI/CD GitHub Actions Pipeline Config"
    ],
    fullContent: {
      overview: "Assignment 07 focuses on product resilience. By testing real user workflows, fixing edge cases, and establishing disciplined version control, SkillSwap achieves production readiness.",
      sections: [
        {
          heading: "1. QA Testing Strategy",
          content: [
            "Functional Testing: Verified every button, modal, form input, and filter combination.",
            "Cross-Device Testing: Tested on viewport widths from 320px (iPhone SE) to 2560px (iMac 27).",
            "State Testing: Verified edge states including empty results, long text overflows, and offline handling."
          ]
        },
        {
          heading: "2. Key Resolved Bugs (From Bug Matrix)",
          content: [
            "BUG-01: Skill barter filter reset cleared teach/learn selections -> Fixed by decoupling query state.",
            "BUG-02: Proposal submission allowed empty bid amounts -> Added strict regex validation.",
            "BUG-03: Mobile navbar covered hero CTA button on iPhone Safari -> Fixed safe-area-inset and z-indices.",
            "BUG-04: Audio intro speech blocked without user interaction -> Added graceful 'Click to start' fallback."
          ]
        },
        {
          heading: "3. GitHub Standards",
          content: [
            "Branching model: main (production), develop (staging), feature/* (isolated modules).",
            "Commit convention: Conventional Commits (feat, fix, docs, chore, refactor).",
            "Repository documentation: Professional README with architecture diagrams and quickstart steps."
          ]
        }
      ]
    }
  },
  {
    number: "08",
    title: "Deployment & Production Setup",
    subtitle: "Vercel Edge Hosting, Environment Configuration & Optimization",
    shortDescription: "Deploying SkillSwap to globally distributed edge servers with HTTPS, custom headers, and performance optimization.",
    mainObjective: "Configure production build pipeline, environment variable secrets, Vercel edge deployment, and Lighthouse performance tuning.",
    phase: "Production Deployment",
    importantPoints: [
      "Zero-downtime automated deployment to Vercel global edge network",
      "Secure production environment variables: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY",
      "Lighthouse optimization achieving 96+ scores in Performance, Accessibility, and SEO",
      "Asset bundling and code-splitting reducing initial JS bundle footprint"
    ],
    relatedFeature: "Production Infrastructure, Edge Routing & Speed Optimization",
    relatedRoute: "/admin-studio",
    deliverables: [
      "Live Production URL Deployment",
      "Vercel Project & Build Configuration",
      "Google Lighthouse Audit Report",
      "Production Environment Security Checklist"
    ],
    fullContent: {
      overview: "Assignment 08 transitions SkillSwap from local development to a live, production-grade cloud setup accessible worldwide with minimal latency.",
      sections: [
        {
          heading: "1. Vercel Hosting Pipeline",
          content: [
            "Automated Git-triggered builds on every push to the main branch.",
            "Single Page Application rewrites configured in vercel.json for seamless client routing.",
            "Global CDN caching for static image assets and compiled CSS/JS chunks."
          ]
        },
        {
          heading: "2. Security & Environment Secrets",
          content: [
            "Production environment variables strictly encrypted in Vercel dashboard.",
            "Content Security Policy (CSP) headers protecting against cross-site scripting (XSS).",
            "Automated SSL/TLS certificate renewal via Let's Encrypt."
          ]
        },
        {
          heading: "3. Performance Benchmarks",
          content: [
            "Lighthouse Performance: 96 / 100",
            "Lighthouse Accessibility: 100 / 100",
            "Lighthouse Best Practices: 100 / 100",
            "Lighthouse SEO: 100 / 100"
          ]
        }
      ]
    }
  },
  {
    number: "09",
    title: "Final Product, Documentation & Presentation",
    subtitle: "Pitch Deck, System Manuals & Stakeholder Showcase",
    shortDescription: "Crafting the 10-slide startup pitch presentation, technical system manuals, and comprehensive demo walkthrough.",
    mainObjective: "Deliver complete product documentation, architectural blueprints, and a 10-slide pitch presentation for investors and clients.",
    phase: "Presentation & Documentation",
    importantPoints: [
      "10-Slide Pitch Deck covering Problem, Solution, Market, Product, Business Model, Roadmap",
      "Full Developer Manual detailing file structure, component lifecycle, and state conventions",
      "End-user guides for students landing first gigs and clients posting contracts",
      "Interactive demo video recording script showcasing the complete platform flow"
    ],
    relatedFeature: "Slide Presentation Viewer, Architecture Blueprints & Docs",
    relatedRoute: "/about",
    deliverables: [
      "10-Slide Startup Pitch Deck",
      "System Architecture Specification",
      "User Onboarding & Help Guide",
      "Demo Walkthrough Script"
    ],
    fullContent: {
      overview: "Assignment 09 packages SkillSwap as a viable startup venture, synthesizing technical execution with commercial viability and clear communication.",
      sections: [
        {
          heading: "1. 10-Slide Startup Pitch Deck Structure",
          content: [
            "Slide 1: Title & Founder Vision — SkillSwap: Learn. Connect. Collaborate. Earn.",
            "Slide 2: The Student Dilemma — Skills with no commercial outlet or portfolio proof.",
            "Slide 3: The Solution — Dual-track marketplace & peer skill exchange.",
            "Slide 4: Product Walkthrough — Live screenshots of Find Work, Find Talent, and Swaps.",
            "Slide 5: Market Opportunity — 20M+ university students and 30M+ micro-businesses globally.",
            "Slide 6: Business Model — 5% commission on paid contracts; premium verified talent badges.",
            "Slide 7: Technology Stack — Modern stack built for scale (React, Vite, Three.js, Supabase).",
            "Slide 8: Traction & Metrics — User satisfaction, completed swaps, active projects.",
            "Slide 9: Founder Profile — Fozan, web developer as a problem solver.",
            "Slide 10: Future Roadmap — Mobile apps, campus hackathon integration, escrow crypto payments."
          ]
        },
        {
          heading: "2. Technical Documentation",
          content: [
            "API reference with endpoint schemas, parameter requirements, and sample payloads.",
            "Component tree visualization detailing parent-child prop flow.",
            "Deployment checklist for scaling to 10,000+ concurrent active students."
          ]
        }
      ]
    }
  },
  {
    number: "10",
    title: "Final Submission & Project Completion",
    subtitle: "Audit Verification, Deliverables Sign-off & Launch Readiness",
    shortDescription: "Final capstone audit confirming all 10 assignment milestones are completely fulfilled, verified, and ready for launch.",
    mainObjective: "Perform final quality audit, cross-check all rubric requirements, compile repository deliverables, and launch SkillSwap.",
    phase: "Capstone Completion & Launch",
    importantPoints: [
      "100% completion across all 10 academic and technical assignment milestones",
      "Complete working full-stack web application with responsive UI, 3D intro, and admin portal",
      "Verified GitHub repository with comprehensive README, commit history, and clean code",
      "Founder statement celebrating student empowerment and problem-solving through code"
    ],
    relatedFeature: "Project Journey Timeline, Launch Sign-Off & Verification",
    relatedRoute: "/project-journey",
    deliverables: [
      "Final Project Completion Certificate",
      "Deliverables Verification Matrix",
      "Official Submission Audit Log",
      "Founder Capstone Statement"
    ],
    fullContent: {
      overview: "Assignment 10 marks the culmination of the entire development journey: transforming an abstract concept into an enterprise-grade digital platform.",
      sections: [
        {
          heading: "1. Deliverable Verification Checklist",
          content: [
            "✔ Assignment 01: Solution & Product Idea documented and integrated.",
            "✔ Assignment 02: Product Requirements Document (PRD) defined.",
            "✔ Assignment 03: UI/UX Design System with official blue palette crafted.",
            "✔ Assignment 04: Frontend Prototype with responsive views implemented.",
            "✔ Assignment 05: Backend PostgreSQL schema, RLS, and Auth architected.",
            "✔ Assignment 06: Full-Stack Integration with reactive data flows completed.",
            "✔ Assignment 07: Testing, Bug Tracking Matrix, and GitHub workflow executed.",
            "✔ Assignment 08: Production Edge Deployment and speed tuning finalized.",
            "✔ Assignment 09: Startup Presentation Deck and documentation compiled.",
            "✔ Assignment 10: Final Audit, project sign-off, and launch complete."
          ]
        },
        {
          heading: "2. Founder's Closing Statement",
          content: "SkillSwap represents more than just a software project; it is a manifestation of engineering as a catalyst for opportunity. Created by Fozan with a passion for problem-solving, SkillSwap bridges the gap between ambitious student creators and the real world."
        }
      ]
    }
  }
];
