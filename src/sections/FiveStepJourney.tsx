import React from 'react';
import {
  Compass,
  Hammer,
  Link2,
  Workflow,
  Rocket,
  CheckCircle2
} from 'lucide-react';

export const FiveStepJourney: React.FC = () => {
  const journeyCards = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Uncover Your Niche",
      description: "Explore in-demand skills, analyze market trends, and identify where your programming, design, or writing talents intersect with real client demand.",
      icon: Compass,
      metric: "Over 40+ Skill Tracks",
      bgGradient: "from-blue-600 to-indigo-700",
    },
    {
      num: "02",
      title: "Build",
      subtitle: "Forge Verified Artifacts",
      description: "Assemble interactive portfolio showcases with live GitHub repositories, interactive Figma links, and working web application deployments.",
      icon: Hammer,
      metric: "100% Verified Portfolios",
      bgGradient: "from-sky-500 to-blue-600",
    },
    {
      num: "03",
      title: "Connect",
      subtitle: "Bridge With Clients & Peers",
      description: "Pitch directly to local startups and connect with fellow students through our automated reciprocal skill exchange matching engine.",
      icon: Link2,
      metric: "Instant Proposal Match",
      bgGradient: "from-blue-700 to-navy-900",
    },
    {
      num: "04",
      title: "Collaborate",
      subtitle: "Execute Real Projects",
      description: "Work on structured milestones with clear deliverables, real-time messaging, feedback cycles, and guaranteed milestone escrow safety.",
      icon: Workflow,
      metric: "Safe Milestone Escrow",
      bgGradient: "from-sky-600 to-blue-700",
    },
    {
      num: "05",
      title: "Grow",
      subtitle: "Scale Up & Monetize",
      description: "Accumulate 5-star client testimonials, increase your hourly rate, unlock verified talent badges, and launch your high-growth freelance career.",
      icon: Rocket,
      metric: "Career Launchpad",
      bgGradient: "from-indigo-600 to-blue-800",
    },
  ];

  return (
    <section className="py-24 bg-white relative border-b border-brand-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-border">
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              The 5-Step Growth Highway
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            From Student Learner to{' '}
            <span className="text-brand-primary">Paid Problem Solver.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-mutedText font-medium leading-relaxed">
            Five deliberate phases engineered to transform your digital curiosity into commercial excellence.
          </p>
        </div>

        {/* 5 Large Cards with Connected Animated Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-brand-sky via-brand-primary to-brand-navy -translate-y-12 z-0 rounded-full opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {journeyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border-2 border-brand-border shadow-soft hover:shadow-soft-xl hover:border-brand-primary transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-lightBlue border border-brand-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-soft">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-brand-sky group-hover:text-brand-primary transition-colors">
                        {card.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-brand-navy group-hover:text-brand-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-primary mt-0.5 mb-3">
                      {card.subtitle}
                    </p>

                    <p className="text-xs text-brand-mutedText leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{card.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
