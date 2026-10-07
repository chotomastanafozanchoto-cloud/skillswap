import React, { useState } from 'react';
import { assignmentsData } from '../data/assignmentsData';
import { Assignment } from '../types';
import { AssignmentModal } from '../components/AssignmentModal';
import {
  Milestone,
  CheckCircle,
  ExternalLink,
  Layers,
  ArrowRight,
  BookOpen,
  Sparkles,
  FileCode,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectJourneySection: React.FC = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [filterPhase, setFilterPhase] = useState<string>('all');

  const phases = ['all', 'Ideation', 'Requirements', 'Design', 'Frontend', 'Backend', 'Full-Stack', 'QA', 'Deployment', 'Presentation', 'Capstone'];

  const filteredAssignments = assignmentsData.filter((a) => {
    if (filterPhase === 'all') return true;
    return a.phase.toLowerCase().includes(filterPhase.toLowerCase());
  });

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden" id="project-journey">
      {/* Modal */}
      <AssignmentModal
        assignment={selectedAssignment}
        onClose={() => setSelectedAssignment(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-brand-border shadow-soft">
            <Milestone className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Academic & Technical Roadmap
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            From Idea to Product:{' '}
            <span className="text-brand-primary">The 10-Assignment Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-mutedText font-medium leading-relaxed">
            Every layer of SkillSwap was systematically built across 10 progressive assignments.
            Explore the architectural evolution from initial ideation to full production deployment.
          </p>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {phases.slice(0, 6).map((phase) => (
              <button
                key={phase}
                onClick={() => setFilterPhase(phase)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all capitalize ${
                  filterPhase === phase
                    ? 'bg-brand-primary text-white shadow-soft'
                    : 'bg-white text-brand-mutedText hover:text-brand-navy border border-brand-border'
                }`}
              >
                {phase === 'all' ? 'All 10 Assignments' : phase}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Grid of 10 Cards */}
        <div className="relative">
          {/* Vertical Center Line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-sky via-brand-primary to-brand-navy -translate-x-1/2 rounded-full opacity-40 z-0" />

          <div className="space-y-8 relative z-10">
            {filteredAssignments.map((assignment, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={assignment.number}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card Component */}
                  <div className="w-full lg:w-[46%]">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft hover:shadow-soft-xl hover:border-brand-primary transition-all duration-300 hover:-translate-y-1.5 group">
                      {/* Top Bar with Number & Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-navy to-brand-primary text-white font-black text-lg flex items-center justify-center shadow-soft group-hover:shadow-blue-glow transition-all">
                            {assignment.number}
                          </span>
                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-primary bg-brand-lightBlue px-2.5 py-0.5 rounded-full border border-brand-sky">
                              {assignment.phase}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-brand-mutedText">
                          Milestone {assignment.number}/10
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-black text-brand-navy group-hover:text-brand-primary transition-colors">
                        {assignment.title}
                      </h3>
                      <p className="text-xs font-bold text-brand-mutedText mt-1 mb-4">
                        {assignment.subtitle}
                      </p>

                      {/* Main Objective */}
                      <div className="p-3.5 rounded-xl bg-brand-lightBlue/60 border border-brand-border/80 mb-4">
                        <p className="text-xs font-semibold text-brand-darkText leading-relaxed">
                          <span className="font-bold text-brand-navy">Objective: </span>
                          {assignment.mainObjective}
                        </p>
                      </div>

                      {/* Key Points (3 bullets) */}
                      <div className="space-y-1.5 mb-6">
                        {assignment.importantPoints.slice(0, 3).map((pt, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-brand-mutedText">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Actions */}
                      <div className="pt-4 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedAssignment(assignment)}
                          className="px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-primary text-white text-xs font-bold shadow-soft transition-all flex items-center space-x-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Explore Full Assignment</span>
                        </button>

                        <Link
                          to={assignment.relatedRoute}
                          className="px-3.5 py-2.5 rounded-xl bg-brand-lightBlue hover:bg-brand-sky text-brand-navy text-xs font-bold transition-all flex items-center space-x-1"
                        >
                          <span>Live Feature</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Central Timeline Milestone Node (Desktop) */}
                  <div className="hidden lg:flex w-[8%] items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white border-4 border-brand-primary text-brand-navy font-black text-xs flex items-center justify-center shadow-soft-lg z-10 hover:scale-125 transition-transform cursor-pointer">
                      {assignment.number}
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
