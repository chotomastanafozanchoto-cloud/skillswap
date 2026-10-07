import React, { useState } from 'react';
import {
  UserPlus,
  Tag,
  Briefcase,
  Search,
  MessageSquare,
  Users2,
  CheckCircle,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

export const SolutionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "Create Profile",
      desc: "Register as a Student or Client. Add your university, personal bio, and professional links.",
      icon: UserPlus,
      highlight: "Role-Based Auth (Supabase)",
    },
    {
      step: "02",
      title: "Add Skills",
      desc: "Specify your masteries and select what you can teach and what you want to learn.",
      icon: Tag,
      highlight: "Dynamic Skill Tags & Rates",
    },
    {
      step: "03",
      title: "Build Portfolio",
      desc: "Showcase screenshots, GitHub links, Figma design kits, and previous case studies.",
      icon: Briefcase,
      highlight: "Visual Proof of Work",
    },
    {
      step: "04",
      title: "Find Work / Find Talent",
      desc: "Filter through verified client gig requests or search for high-caliber student peers.",
      icon: Search,
      highlight: "Multi-Filter Marketplace",
    },
    {
      step: "05",
      title: "Connect",
      desc: "Submit proposals with custom rates or send a direct 1-on-1 skill swap invitation.",
      icon: MessageSquare,
      highlight: "Direct Proposal Engine",
    },
    {
      step: "06",
      title: "Collaborate",
      desc: "Align on requirements, milestones, deadlines, and real-time messaging updates.",
      icon: Users2,
      highlight: "Milestone Tracking",
    },
    {
      step: "07",
      title: "Complete Project",
      desc: "Deliver completed code, designs, or video files; receive prompt escrow payment.",
      icon: CheckCircle,
      highlight: "Protected Payouts",
    },
    {
      step: "08",
      title: "Review & Grow",
      desc: "Earn 5-star ratings, verified badges, and build momentum towards senior careers.",
      icon: TrendingUp,
      highlight: "Verified Testimonials",
    },
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Assignment 01 & 02 &bull; End-To-End Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            SkillSwap Turns Skills Into{' '}
            <span className="text-brand-primary">Opportunities.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-darkText font-medium leading-relaxed">
            A frictionless 8-step lifecycle taking students from zero verified client work to an in-demand, highly rated portfolio.
          </p>
        </div>

        {/* Step Flow Navigation & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Steps List (Left) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                    isSelected
                      ? 'bg-white border-brand-primary shadow-soft-lg scale-[1.02]'
                      : 'bg-white/70 border-brand-border hover:bg-white hover:border-brand-sky'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-brand-lightBlue text-brand-primary font-black text-xs flex items-center justify-center">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-bold text-brand-primary bg-brand-lightBlue px-2 py-0.5 rounded-full">
                      {st.highlight}
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-sky" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-brand-navy">
                        {st.title}
                      </h4>
                      <p className="text-xs text-brand-mutedText mt-1 line-clamp-2">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card (Right) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border-2 border-brand-border shadow-soft-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightBlue rounded-bl-full pointer-events-none -mr-8 -mt-8" />

              <div className="flex items-center space-x-2 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Selected Milestone Detail</span>
              </div>

              <div className="text-4xl font-black text-brand-navy mb-2">
                Step {steps[activeStep].step}
              </div>

              <h3 className="text-2xl font-black text-brand-navy mb-3">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm text-brand-darkText font-medium leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <div className="bg-brand-lightBlue/60 p-4 rounded-2xl border border-brand-border mb-6">
                <p className="text-xs font-bold text-brand-navy mb-1">
                  Engineered in SkillSwap System:
                </p>
                <p className="text-xs text-brand-mutedText">
                  {steps[activeStep].highlight} with real-time feedback and state caching.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-4 py-2.5 rounded-xl bg-brand-lightBlue hover:bg-brand-sky text-brand-navy font-bold text-xs transition-all flex items-center space-x-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  to={ROUTES.findWork}
                  className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow-soft transition-all"
                >
                  Experience Flow Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
