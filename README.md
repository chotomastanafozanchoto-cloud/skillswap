# SkillSwap — Learn. Connect. Collaborate. Earn.

> **“Fozan, web developer as a problem solver.”**

SkillSwap is a complete, modern, production-quality digital platform designed to bridge the gap between classroom skill learning and real-world opportunities. It empowers university students, beginner freelancers, and creators to showcase verified portfolios, win paid client contracts, and engage in peer-to-peer skill barter with zero financial friction.

---

## 🌟 Key Highlights & Innovations

1. **Futuristic 3D Robot Opening Scene (`Three.js`)**:
   - High-fidelity 3D humanoid AI character with metallic armor, glowing cyan arc-reactor core, articulated limbs, holographic orbital halos, and dynamic head tracking cursor movement.
   - **Interactive Voice Introduction**: Speaks using the Web Speech API with synchronized typewriter subtitles, natural pauses, and audio-reactive animations.
   - Includes **Skip Intro**, **Replay Intro**, and sound toggles.

2. **Official SkillSwap Blue Visual Identity**:
   - Background: Soft Sky Blue (`#DDF2FF`)
   - Dark Navy Headings: (`#123B8A`)
   - Primary Interactive Blue: (`#1677D2`)
   - Pure White Content Cards: (`#FFFFFF`)
   - Text Typography: (`#20324D`) & Muted (`#5E718C`)
   - Subtle gradients, glassmorphism, and soft drop shadows.

3. **All 10 Assignments Integrated (From Idea to Product)**:
   - **Assignment 01**: Solution & Product Idea
   - **Assignment 02**: Product Requirements Document (PRD)
   - **Assignment 03**: UI/UX Design & Design System
   - **Assignment 04**: Frontend Prototype
   - **Assignment 05**: Backend, Database & Authentication (Supabase PostgreSQL, RLS, Storage & ERD)
   - **Assignment 06**: Full-Stack Integration & Complete Product
   - **Assignment 07**: Testing, Bug Fixing & GitHub Gitflow
   - **Assignment 08**: Deployment & Production Setup (Vercel Edge Network)
   - **Assignment 09**: Final Product, Documentation & 10-Slide Pitch Presentation
   - **Assignment 10**: Capstone Final Submission & Quality Audit Sign-off

4. **Interactive Marketplaces & Engines**:
   - **Find Work**: Real-time project search, category filtering, skill tags, budget sliders, and an interactive proposal submission modal with confetti celebrations.
   - **Find Talent**: Verified student talent directory with ratings, portfolio previews, hourly rates, and direct hire modals.
   - **Skill Swap Engine**: Reciprocal skill barter matcher (e.g. *Ahmed teaches React <-> Sara teaches UI/UX*) with compatibility percentages and direct trade invitations.
   - **Multi-Role Dashboard**: Switch seamlessly between **Student View** and **Client View** with active application tracking, earnings, swap sessions, and live chat.
   - **Admin Studio**: Super Admin dashboard with system telemetry, user inspection tables, project approvals, and assignment milestone monitoring.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 18, TypeScript, Vite |
| **Styling & Design System** | Tailwind CSS (custom brand tokens), Plus Jakarta Sans, Inter |
| **3D & Creative WebGL** | Three.js (custom procedural shaders & meshes) |
| **Icons & Micro-Interactions** | Lucide-React, Canvas-Confetti |
| **Routing** | React Router DOM v6 |
| **Backend & Database** | Supabase, PostgreSQL, Row-Level Security (RLS) |
| **Authentication** | Supabase Auth (JWT & Role-Based Access Control) |
| **Deployment** | Vercel Edge Network |

---

## 🚀 Running the Project Locally

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Generates a minified, type-checked production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
fozan-fcm/
├── src/
│   ├── assets/              # Static media assets & icons
│   ├── components/          # Reusable atomic and molecular UI components
│   │   ├── AssignmentModal.tsx    # In-depth modal for Assignments 01-10
│   │   ├── ApplyModal.tsx         # Job bidding and proposal submission modal
│   │   ├── TalentModal.tsx        # Student portfolio showcase drawer
│   │   ├── SwapRequestModal.tsx   # Peer skill trade invitation modal
│   │   ├── Navbar.tsx             # Sticky glassmorphic navigation bar
│   │   ├── Footer.tsx             # Brand footer with founder credentials
│   │   ├── ThreeBackground.tsx    # 3D floating particle/mesh canvas
│   │   └── RobotIntro/            # 3D AI Robot opening scene & voice engine
│   │       ├── RobotCanvas.tsx    # Three.js humanoid robot character
│   │       └── RobotVoiceIntro.tsx# Web Speech API & typewriter sync
│   ├── data/                # Typed fixtures and datasets
│   │   ├── assignmentsData.ts     # Complete content for Assignments 01 -> 10
│   │   └── mockData.ts            # Realistic projects, talents, swaps, stats
│   ├── layouts/             # Page layouts
│   │   └── MainLayout.tsx
│   ├── lib/                 # Routing constants & helpers
│   │   └── routes.ts
│   ├── pages/               # Application routes
│   │   ├── Home.tsx               # Main landing page
│   │   ├── FindWork.tsx           # Client gig marketplace
│   │   ├── FindTalent.tsx         # Student creator directory
│   │   ├── SkillSwap.tsx          # Peer-to-peer barter matching
│   │   ├── ProjectJourney.tsx     # 10-Assignment milestone roadmap
│   │   ├── About.tsx              # Founder Fozan bio & problem-solving philosophy
│   │   ├── Contact.tsx            # Multi-channel contact hub
│   │   ├── Login.tsx              # Role-based sign in with demo shortcuts
│   │   ├── SignUp.tsx             # Student / Client registration
│   │   ├── Dashboard.tsx          # Dual-perspective Student & Client portal
│   │   └── AdminStudio.tsx        # Telemetry & back-office admin console
│   ├── sections/            # Reusable page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── FiveStepJourney.tsx
│   │   ├── ProjectJourneySection.tsx
│   │   └── FounderSection.tsx
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx              # Main root component & 3D intro state
│   ├── main.tsx             # React DOM entrypoint
│   └── index.css            # Tailwind directives & brand utilities
├── tailwind.config.js       # Official SkillSwap blue theme configuration
├── tsconfig.json            # TypeScript compiler configuration
├── vite.config.ts           # Vite bundler plugins
└── README.md                # Comprehensive project documentation
```

---

## 👨‍💻 Founder & Architect

**Fozan**  
*“Web developer as a problem solver.”*  
- GitHub: [github.com/fozan](https://github.com)  
- Email: [fozan.dev@skillswap.pk](mailto:fozan.dev@skillswap.pk)  
- Focus: Full-Stack Web Development, UI/UX Systems, Student Empowerment.
