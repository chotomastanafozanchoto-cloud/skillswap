import React from 'react';
import { ProjectJourneySection } from '../sections/ProjectJourneySection';
import { Milestone, CheckCircle2, FileText, Download, Code2, Sparkles } from 'lucide-react';
import { assignmentsData } from '../data/assignmentsData';

export default function ProjectJourney() {
  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Top Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft mb-3">
            <Milestone className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Comprehensive Course Capstone &bull; 01 &rarr; 10
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            The Complete SkillSwap Project Journey
          </h1>
          <p className="text-sm sm:text-base text-brand-mutedText mt-2 font-medium leading-relaxed">
            From the initial problem definition in Assignment 01, through the PRD, Design System, Frontend Prototype, Supabase PostgreSQL backend, Full-Stack integration, Quality Assurance, and Vercel edge deployment — explore the complete blueprint.
          </p>
        </div>

        {/* Milestone Quick Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 mb-12">
          {assignmentsData.map((a) => (
            <div
              key={a.number}
              className="bg-white p-3.5 rounded-2xl border border-brand-border shadow-soft hover:border-brand-primary transition-all"
            >
              <span className="text-xs font-black text-brand-primary">#{a.number}</span>
              <h4 className="text-xs font-bold text-brand-navy mt-1 truncate">
                {a.title}
              </h4>
              <p className="text-[10px] text-brand-mutedText mt-0.5 truncate">
                {a.phase}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The Full Timeline Component */}
      <ProjectJourneySection />
    </div>
  );
}
