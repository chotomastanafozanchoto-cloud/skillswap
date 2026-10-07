import React from 'react';
import {
  AlertCircle,
  HelpCircle,
  TrendingDown,
  EyeOff,
  UserX,
  Store,
  Layers,
  ArrowDown
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problemPoints = [
    {
      title: "Students Struggle to Find Real Projects",
      description: "College assignments rarely simulate actual client demands or commercial constraints. Without access to live briefs, practical growth stalls.",
      icon: AlertCircle,
      tag: "Project Scarcity",
      accent: "from-blue-500 to-indigo-600",
    },
    {
      title: "Students Need Practical Experience",
      description: "Employers demand 2+ years of experience for entry-level roles. Students are caught in an endless loop: need experience to get work, need work to get experience.",
      icon: TrendingDown,
      tag: "Experience Catch-22",
      accent: "from-sky-500 to-blue-600",
    },
    {
      title: "Beginners Struggle to Find Clients",
      description: "Global freelance platforms pit students against 10-year veteran agencies with thousands of reviews. Beginner proposals are lost in the noise.",
      icon: UserX,
      tag: "Marketplace Saturation",
      accent: "from-indigo-500 to-navy-700",
    },
    {
      title: "Skills Are Hidden Without a Portfolio",
      description: "Classroom knowledge stays invisible on traditional paper resumes. Students lack public, verified client showcases to prove their execution skills.",
      icon: EyeOff,
      tag: "Invisible Talent",
      accent: "from-cyan-500 to-blue-600",
    },
    {
      title: "Students Want to Learn From Students",
      description: "Hiring tutors or buying pricey bootcamps is expensive. Students possess reciprocal skills and yearn for structured peer-to-peer barter exchange.",
      icon: HelpCircle,
      tag: "Peer Learning Gap",
      accent: "from-blue-600 to-indigo-700",
    },
    {
      title: "Small Businesses Need Affordable Talent",
      description: "Local shops, early-stage startups, and non-profits cannot afford \$10,000 agency retainers, yet desperately need agile digital solutions.",
      icon: Store,
      tag: "SMB Budget Crunch",
      accent: "from-sky-600 to-blue-700",
    },
  ];

  return (
    <section className="py-24 bg-white/70 relative border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-border">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Assignment 01 &bull; Problem Definition
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Students Have Skills.{' '}
            <span className="text-brand-primary">But Where Do They Go?</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-mutedText font-medium leading-relaxed">
            Every semester, thousands of talented coders, designers, and creators graduate or study with high potential but zero platform to unlock their value.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problemPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border-2 border-brand-border/70 shadow-soft hover:shadow-soft-xl hover:border-brand-primary/60 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-lightBlue border border-brand-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-soft">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-mutedText bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-brand-navy mb-2.5 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-mutedText leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-mutedText">
                  <span>Challenge #0{index + 1}</span>
                  <span className="text-brand-primary font-bold">Solved in SkillSwap &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition to Solution */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-2 text-brand-primary">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              The Resolution
            </span>
            <div className="w-8 h-8 rounded-full bg-brand-lightBlue border border-brand-border flex items-center justify-center animate-bounce">
              <ArrowDown className="w-4 h-4 text-brand-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
