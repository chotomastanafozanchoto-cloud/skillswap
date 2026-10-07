import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import {
  Sparkles,
  ArrowRight,
  Briefcase,
  Users,
  CheckCircle2,
  TrendingUp,
  Star,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { ThreeBackground } from '../components/ThreeBackground';
import { platformStats } from '../data/mockData';

interface HeroSectionProps {
  onReplayIntro?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReplayIntro }) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient">
      {/* 3D Floating Geometry Canvas */}
      <ThreeBackground className="opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Founder Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-border shadow-soft">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
              <span className="text-xs font-bold text-brand-navy">
                “Fozan, web developer as a problem solver.”
              </span>
              <span className="text-[10px] font-bold text-brand-primary bg-brand-lightBlue px-2 py-0.5 rounded-full border border-brand-sky">
                Assignments 01&rarr;10
              </span>
            </div>

            {/* Main Tagline & Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.15]">
              Learn. Connect.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#0284C7] to-brand-navy">
                Collaborate. Earn.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-brand-darkText font-medium max-w-2xl leading-relaxed">
              Turn your skills into real opportunities. SkillSwap connects ambitious students with clients, real-world projects, and peer skill-barter opportunities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to={ROUTES.findWork}
                className="px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-blue-glow transition-all hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Find Work</span>
              </Link>

              <Link
                to={ROUTES.findTalent}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-brand-lightBlue text-brand-navy border-2 border-brand-border font-bold text-sm shadow-soft transition-all hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <Users className="w-4 h-4 text-brand-primary" />
                <span>Find Talent</span>
              </Link>

              <Link
                to={ROUTES.projectJourney}
                className="px-5 py-3.5 rounded-xl bg-brand-navy hover:bg-[#1E4D9C] text-white font-bold text-sm shadow-soft transition-all hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-brand-glow" />
                <span>Project Journey (01-10)</span>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-brand-mutedText">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Upfront Fees for Students</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Peer-to-Peer Skill Barter</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Verified Client Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Visual Interactive Card Deck */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Primary Startup Feature Card */}
              <div className="glass-card p-6 sm:p-7 rounded-3xl shadow-soft-xl border-2 border-brand-border/90 relative z-20">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black text-lg shadow-blue-glow">
                      SS
                    </div>
                    <div>
                      <h3 className="font-extrabold text-brand-navy text-base">
                        SkillSwap Ecosystem
                      </h3>
                      <p className="text-xs text-brand-mutedText font-medium">
                        Student-First Opportunity Engine
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-300">
                    Live Platform
                  </span>
                </div>

                {/* Live Activity Simulation */}
                <div className="mt-5 space-y-3">
                  <div className="bg-brand-lightBlue/80 p-3.5 rounded-xl border border-brand-border flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs">
                        AR
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-navy">Ahmed Raza</p>
                        <p className="text-[11px] text-brand-mutedText">React &bull; Hired by Apex Tech Labs</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-brand-primary">$350</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-brand-border flex items-center justify-between shadow-soft">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                        SK
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-navy">Sara Khan</p>
                        <p className="text-[11px] text-brand-mutedText">UI/UX &bull; Swapped with Ahmed</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      98% Match
                    </span>
                  </div>
                </div>

                {/* 3D Intro Quick Trigger */}
                {onReplayIntro && (
                  <button
                    onClick={onReplayIntro}
                    className="mt-5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-navy to-brand-primary text-white text-xs font-bold shadow-soft transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                  >
                    <Bot className="w-4 h-4 text-brand-glow animate-bounce" />
                    <span>Watch Futuristic 3D Robot Intro</span>
                  </button>
                )}
              </div>

              {/* Floating Stat Badge 1 (Top Left) */}
              <div className="hidden sm:flex absolute -top-5 -left-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-border shadow-soft-lg z-30 items-center space-x-3 animate-float">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-brand-navy">{platformStats.completedProjects}+ Projects</p>
                  <p className="text-[10px] text-brand-mutedText">Delivered by Students</p>
                </div>
              </div>

              {/* Floating Stat Badge 2 (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-5 -right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-border shadow-soft-lg z-30 items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-brand-navy">{platformStats.satisfactionRate}</p>
                  <p className="text-[10px] text-brand-mutedText">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
