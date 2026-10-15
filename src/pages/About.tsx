import React from 'react';
import {
  Code2,
  Lightbulb,
  Compass,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

interface AboutProps {
  onReplayIntro?: () => void;
}

export default function About({ onReplayIntro }: AboutProps) {
  const skills = [
    { name: "React 18 & TypeScript", level: 98, category: "Frontend" },
    { name: "Tailwind CSS & Design Systems", level: 96, category: "UI/UX" },
    { name: "Three.js & 3D WebGL", level: 90, category: "Creative Dev" },
    { name: "Supabase & PostgreSQL Architecture", level: 95, category: "Backend" },
    { name: "Row-Level Security & Auth", level: 94, category: "Security" },
    { name: "Vercel Edge & CI/CD Pipelines", level: 92, category: "DevOps" },
  ];

  const milestones = [
    {
      year: "Phase 1",
      title: "Recognizing the Student Bottleneck",
      desc: "Noticed how bright computer science and design students struggled to secure their first freelance client due to lack of verifiable proof.",
    },
    {
      year: "Phase 2",
      title: "Architecting the Solution (Assignments 01-04)",
      desc: "Authored the PRD, formalized the blue design tokens, and coded the interactive Vite + React prototype.",
    },
    {
      year: "Phase 3",
      title: "Backend & Full-Stack Integration (Assignments 05-08)",
      desc: "Constructed the PostgreSQL relational schemas in Supabase, added RLS policies, real-time channels, and deployed to Vercel.",
    },
    {
      year: "Phase 4",
      title: "Capstone Completion & Launch (Assignments 09-10)",
      desc: "Delivered documentation, 10-slide presentation deck, 3D AI Robot host, and comprehensive verification checklist.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft mb-3">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Founder & Creator
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            “Fozan — Web Developer as a Problem Solver.”
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedText mt-3 font-medium leading-relaxed">
            Building software with intent, empathy, and technical rigor. SkillSwap is the embodiment of engineering dedicated to opening real economic doors for student creators.
          </p>
        </div>

        {/* Hero Bio Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-brand-border shadow-soft-xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Avatar */}
            <div className="lg:col-span-4 text-center">
              <div className="w-36 h-36 rounded-3xl overflow-hidden border-2 border-brand-primary p-1 shadow-soft-xl mx-auto mb-5">
                <img
                  src="/fozan_jersey.jpg"
                  alt="Fozan - Founder of SkillSwap"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <h2 className="text-2xl font-black text-brand-navy">Fozan</h2>
              <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-1">
                Full-Stack Software Engineer
              </p>
              <p className="text-xs text-brand-mutedText mt-2">
                Specialized in React, TypeScript, Three.js & Supabase
              </p>

              <div className="flex justify-center space-x-3 mt-5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-brand-lightBlue hover:bg-brand-primary hover:text-white text-brand-navy border border-brand-border transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:fozan.dev@skillswap.pk"
                  className="p-2.5 rounded-xl bg-brand-lightBlue hover:bg-brand-primary hover:text-white text-brand-navy border border-brand-border transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {onReplayIntro && (
                  <button
                    onClick={onReplayIntro}
                    className="p-2.5 rounded-xl bg-brand-lightBlue hover:bg-brand-primary hover:text-white text-brand-navy border border-brand-border transition-all"
                    title="Launch 3D Voice Intro"
                  >
                    <Bot className="w-4 h-4 text-brand-primary" />
                  </button>
                )}
              </div>
            </div>

            {/* Narrative Story */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-extrabold text-brand-navy">
                The Philosophy: Why SkillSwap Was Created
              </h3>
              <p className="text-sm text-brand-darkText leading-relaxed">
                As a developer, I believe the truest measure of code is the friction it removes from human lives. Looking across university campuses, I saw friends mastering React, Figma, Tailwind, and video editing — yet when it came to landing freelance work, they were met with brick walls on crowded marketplaces.
              </p>
              <p className="text-sm text-brand-darkText leading-relaxed">
                SkillSwap was born from this exact dilemma: provide a dedicated platform where students don’t have to compete against enterprise agencies, where peer skill-barter is treated as a first-class feature, and where every project completed becomes an indelible verified testimonial.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3 rounded-xl bg-brand-lightBlue/60 border border-brand-border">
                  <span className="text-xs font-bold text-brand-navy block">10 Assignments</span>
                  <span className="text-[11px] text-brand-mutedText">Unified Execution</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-lightBlue/60 border border-brand-border">
                  <span className="text-xs font-bold text-brand-navy block">Full-Stack SPA</span>
                  <span className="text-[11px] text-brand-mutedText">React & Supabase</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-lightBlue/60 border border-brand-border">
                  <span className="text-xs font-bold text-brand-navy block">Futuristic 3D</span>
                  <span className="text-[11px] text-brand-mutedText">Three.js AI Host</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Proficiency Bars */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-brand-border shadow-soft-xl mb-16">
          <h3 className="text-xl font-black text-brand-navy mb-6 flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-brand-primary" />
            <span>Technical Capabilities & Engineering Mastery</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((sk, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-brand-navy">
                  <span>{sk.name}</span>
                  <span className="text-brand-primary">{sk.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-brand-lightBlue rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full transition-all duration-500"
                    style={{ width: `${sk.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-brand-border shadow-soft-xl">
          <h3 className="text-xl font-black text-brand-navy mb-8 flex items-center space-x-2">
            <Compass className="w-5 h-5 text-brand-primary" />
            <span>The 4 Development Phases</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-brand-lightBlue/40 border border-brand-border relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-brand-primary">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-extrabold text-brand-navy mt-1.5 mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-brand-mutedText leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
