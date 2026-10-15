import React from 'react';
import {
  Code2,
  Cpu,
  Compass,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Sparkles,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

interface FounderSectionProps {
  onReplayIntro?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onReplayIntro }) => {
  const pillars = [
    {
      title: "Problem Solving",
      desc: "Engineering applications centered on acute user bottlenecks rather than tech for tech's sake.",
      icon: Lightbulb,
    },
    {
      title: "Full-Stack Development",
      desc: "End-to-end expertise spanning React, TypeScript, Supabase, PostgreSQL, and scalable REST APIs.",
      icon: Code2,
    },
    {
      title: "Product Thinking",
      desc: "Translating messy real-world market problems into rigorous PRDs, user flows, and high-impact software.",
      icon: Compass,
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Crafting trustworthy, accessible, visually unified interfaces with strict typographic and color rhythm.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border-2 border-brand-border shadow-soft-xl relative">
              <div className="w-28 h-28 rounded-3xl overflow-hidden border-2 border-brand-primary p-1 shadow-soft-xl mb-6 mx-auto lg:mx-0">
                <img
                  src="/fozan_jersey.jpg"
                  alt="Fozan - Web Developer as a Problem Solver"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="text-center lg:text-left">
                <span className="px-3 py-1 rounded-full bg-brand-lightBlue text-brand-primary text-xs font-black uppercase tracking-wider border border-brand-sky">
                  Founder & Full-Stack Architect
                </span>
                <h3 className="text-3xl font-black text-brand-navy mt-3">
                  Fozan
                </h3>
                <p className="text-sm font-bold text-brand-primary mt-1">
                  “Web developer as a problem solver.”
                </p>
                <p className="text-xs text-brand-mutedText mt-3 leading-relaxed">
                  Passionate about transforming educational gaps into thriving software platforms. Architected SkillSwap across all 10 stages from Assignment 01 through Assignment 10.
                </p>
              </div>

              {/* Developer Skill Bars */}
              <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold text-brand-navy mb-1">
                    <span>React & TypeScript Architecture</span>
                    <span className="text-brand-primary">98%</span>
                  </div>
                  <div className="w-full h-2 bg-brand-lightBlue rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary rounded-full w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-brand-navy mb-1">
                    <span>Supabase & PostgreSQL Data Systems</span>
                    <span className="text-brand-primary">95%</span>
                  </div>
                  <div className="w-full h-2 bg-brand-lightBlue rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent rounded-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-brand-navy mb-1">
                    <span>3D WebGL (Three.js) & Animations</span>
                    <span className="text-brand-primary">90%</span>
                  </div>
                  <div className="w-full h-2 bg-brand-lightBlue rounded-full overflow-hidden">
                    <div className="h-full bg-brand-navy rounded-full w-[90%]" />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-6 border-t border-brand-border/60 flex items-center justify-between">
                <div className="flex space-x-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-brand-lightBlue hover:bg-brand-primary hover:text-white text-brand-navy border border-brand-border transition-all"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:fozan.dev@skillswap.pk"
                    className="p-2.5 rounded-xl bg-brand-lightBlue hover:bg-brand-primary hover:text-white text-brand-navy border border-brand-border transition-all"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                {onReplayIntro && (
                  <button
                    onClick={onReplayIntro}
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-brand-lightBlue text-brand-navy border border-brand-border text-xs font-bold shadow-soft transition-all flex items-center space-x-1.5"
                  >
                    <Bot className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Watch 3D Voice Intro</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
                  The Vision Behind SkillSwap
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
                “Fozan — Web Developer as a Problem Solver.”
              </h2>

              <p className="text-base text-brand-darkText font-medium leading-relaxed">
                SkillSwap was not created as an academic exercise. It was engineered to solve a systemic frustration: students possess tangible, high-value skills, but the existing internet infrastructure fails to provide a dignified on-ramp to clients and mentorship.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-brand-border shadow-soft hover:shadow-soft-lg hover:border-brand-primary transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-lightBlue border border-brand-border flex items-center justify-center text-brand-primary mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-extrabold text-brand-navy mb-1.5">
                      {pil.title}
                    </h4>
                    <p className="text-xs text-brand-mutedText leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center space-x-4">
              <Link
                to={ROUTES.about}
                className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-primary text-white text-xs font-bold shadow-soft transition-all"
              >
                Read Complete Philosophy
              </Link>
              <Link
                to={ROUTES.contact}
                className="px-6 py-3 rounded-xl bg-white hover:bg-brand-lightBlue text-brand-navy border border-brand-border text-xs font-bold shadow-soft transition-all"
              >
                Let’s Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
