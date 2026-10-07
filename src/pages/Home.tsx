import React, { useState } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ProblemSection } from '../sections/ProblemSection';
import { SolutionSection } from '../sections/SolutionSection';
import { FiveStepJourney } from '../sections/FiveStepJourney';
import { ProjectJourneySection } from '../sections/ProjectJourneySection';
import { FounderSection } from '../sections/FounderSection';
import { mockProjects, mockTalents, platformStats } from '../data/mockData';
import { Project, Talent } from '../types';
import { ApplyModal } from '../components/ApplyModal';
import { TalentModal } from '../components/TalentModal';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import {
  Briefcase,
  Users,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Send
} from 'lucide-react';

interface HomeProps {
  onReplayIntro?: () => void;
}

export default function Home({ onReplayIntro }: HomeProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-navy text-white px-5 py-3 rounded-2xl shadow-soft-xl border border-brand-primary flex items-center space-x-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-brand-glow" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <ApplyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSuccess={() => showToast('Proposal successfully dispatched to client!')}
      />

      <TalentModal
        talent={selectedTalent}
        onClose={() => setSelectedTalent(null)}
        onContact={(t) => showToast(`Message invitation drafted for ${t.name}!`)}
      />

      {/* 1. Hero Section */}
      <HeroSection onReplayIntro={onReplayIntro} />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. Solution Section */}
      <SolutionSection />

      {/* 4. 5-Step Journey Section */}
      <FiveStepJourney />

      {/* 5. Live Marketplace Preview (Projects & Talent) */}
      <section className="py-24 bg-white/60 border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-border mb-3">
                <Briefcase className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
                  Active Marketplace
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy">
                Featured Projects for Students
              </h2>
              <p className="text-sm text-brand-mutedText mt-1 font-medium">
                Verified client contracts with student-friendly deadlines and fair budgets.
              </p>
            </div>

            <Link
              to={ROUTES.findWork}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-bold text-brand-primary hover:text-brand-navy transition-colors"
            >
              <span>View All 24+ Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-3xl p-6 border-2 border-brand-border shadow-soft hover:shadow-soft-xl hover:border-brand-primary transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-brand-lightBlue text-brand-primary text-[11px] font-extrabold uppercase tracking-wide border border-brand-sky">
                      {proj.category}
                    </span>
                    <span className="text-xs font-bold text-brand-mutedText flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{proj.deadline}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-brand-navy group-hover:text-brand-primary transition-colors line-clamp-1">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-brand-mutedText mt-2 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.skillsRequired.slice(0, 3).map((sk, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold bg-slate-100 text-brand-darkText px-2 py-0.5 rounded-lg"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-brand-border/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-brand-mutedText font-semibold block">Budget</span>
                    <span className="text-base font-black text-brand-navy">${proj.budget}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold shadow-soft transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dedicated Project Journey (Assignments 01 to 10) */}
      <ProjectJourneySection />

      {/* 7. Founder Section */}
      <FounderSection onReplayIntro={onReplayIntro} />

      {/* 8. Call To Action Banner */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-brand-sky text-xs font-black uppercase tracking-wider border border-white/20">
            Join The SkillSwap Movement
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Turn Your Skills Into Opportunities?
          </h2>

          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Create your profile in 2 minutes. Whether you want to earn from real clients, find top student talent, or exchange skills with peers — SkillSwap is your launchpad.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to={ROUTES.signUp}
              className="px-7 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-blue-glow transition-all hover:scale-105"
            >
              Get Started for Free
            </Link>

            <Link
              to={ROUTES.projectJourney}
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
            >
              Explore 10-Assignment Architecture
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
