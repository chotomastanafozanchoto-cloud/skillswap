import React, { useState } from 'react';
import { Assignment } from '../types';
import {
  X,
  FileText,
  CheckCircle,
  ExternalLink,
  Layers,
  Sparkles,
  Download,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AssignmentModalProps {
  assignment: Assignment | null;
  onClose: () => void;
}

export const AssignmentModal: React.FC<AssignmentModalProps> = ({ assignment, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'deliverables' | 'specifications'>('overview');

  if (!assignment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl border-2 border-brand-border shadow-soft-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy via-[#1E4D9C] to-brand-primary p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black tracking-wider uppercase">
              Assignment {assignment.number}
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-glow/20 text-brand-sky text-xs font-bold border border-brand-glow/30">
              {assignment.phase}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {assignment.title}
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mt-1.5 font-medium">
            {assignment.subtitle}
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-4 text-xs font-semibold text-blue-100">
            <div className="flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-brand-sky" />
              <span>Related Feature: {assignment.relatedFeature}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              <span>{assignment.deliverables.length} Key Deliverables</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-brand-border/60 bg-brand-lightBlue/50 px-6 sm:px-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'overview'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-brand-mutedText hover:text-brand-darkText'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Core Objective & Vision</span>
          </button>

          <button
            onClick={() => setActiveTab('specifications')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'specifications'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-brand-mutedText hover:text-brand-darkText'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Detailed Documentation</span>
          </button>

          <button
            onClick={() => setActiveTab('deliverables')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === 'deliverables'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-brand-mutedText hover:text-brand-darkText'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Deliverables & Verification</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Objective Banner */}
              <div className="bg-brand-lightBlue p-5 rounded-2xl border border-brand-sky/60">
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-navy mb-2 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <span>Main Assignment Objective</span>
                </h4>
                <p className="text-sm font-medium text-brand-darkText leading-relaxed">
                  {assignment.mainObjective}
                </p>
              </div>

              {/* Short Description */}
              <div>
                <h4 className="text-sm font-bold text-brand-navy mb-2">Executive Summary</h4>
                <p className="text-sm text-brand-mutedText leading-relaxed">
                  {assignment.shortDescription}
                </p>
              </div>

              {/* Key Bullet Points */}
              <div>
                <h4 className="text-sm font-bold text-brand-navy mb-3">Key Strategic Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {assignment.importantPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white border border-brand-border/80 shadow-soft flex items-start space-x-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-brand-darkText font-medium leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-xs text-brand-darkText leading-relaxed">
                  {assignment.fullContent.overview}
                </p>
              </div>

              {assignment.fullContent.sections.map((sec, i) => (
                <div key={i} className="border border-brand-border/70 rounded-2xl p-5 bg-white shadow-soft">
                  <h4 className="text-sm font-extrabold text-brand-navy mb-3">
                    {sec.heading}
                  </h4>
                  {Array.isArray(sec.content) ? (
                    <ul className="space-y-2">
                      {sec.content.map((item, idx) => (
                        <li key={idx} className="text-xs text-brand-mutedText flex items-start space-x-2">
                          <span className="text-brand-primary font-bold">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-brand-mutedText leading-relaxed">
                      {sec.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <h4 className="text-sm font-bold text-brand-navy mb-3">
                Verified Deliverables for Assignment {assignment.number}
              </h4>
              <div className="space-y-3">
                {assignment.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-brand-lightBlue/60 border border-brand-border"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-brand-navy">
                        {deliv}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      Completed & Validated
                    </span>
                  </div>
                ))}
              </div>

              {/* Founder Signoff box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 mt-6">
                <p className="text-xs font-semibold text-brand-navy">
                  Verified by Lead Developer: <span className="text-brand-primary font-bold">Fozan</span>
                </p>
                <p className="text-[11px] text-brand-mutedText mt-0.5">
                  All structural parameters align with the SkillSwap architecture and assignment standards.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                alert(`Exporting complete documentation package for Assignment ${assignment.number}: ${assignment.title}`);
              }}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-brand-navy border border-brand-border text-xs font-bold transition-all shadow-soft flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5 text-brand-primary" />
              <span>Download PDF Specification</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to={assignment.relatedRoute}
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold shadow-soft transition-all flex items-center space-x-1.5"
            >
              <span>Explore Live in SkillSwap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
