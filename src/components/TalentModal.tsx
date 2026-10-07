import React from 'react';
import { Talent } from '../types';
import {
  X,
  Star,
  Clock,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface TalentModalProps {
  talent: Talent | null;
  onClose: () => void;
  onContact: (talent: Talent) => void;
}

export const TalentModal: React.FC<TalentModalProps> = ({ talent, onClose, onContact }) => {
  if (!talent) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-3xl border-2 border-brand-border shadow-soft-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-primary p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <img
              src={talent.avatar}
              alt={talent.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-white/80 shadow-soft"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-2xl font-black text-white">{talent.name}</h3>
                <ShieldCheck className="w-5 h-5 text-brand-glow" />
              </div>
              <p className="text-sm text-blue-100 font-semibold mt-0.5">
                {talent.mainSkill}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-blue-200">
                <span className="flex items-center space-x-1 font-bold text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{talent.rating} ({talent.reviewsCount} reviews)</span>
                </span>
                <span>&bull;</span>
                <span className="flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5 text-brand-sky" />
                  <span>{talent.college}</span>
                </span>
                <span>&bull;</span>
                <span className="text-emerald-300 font-bold">${talent.hourlyRate}/hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Bio */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-brand-navy mb-2">
              About Student
            </h4>
            <p className="text-sm text-brand-darkText leading-relaxed">
              {talent.bio}
            </p>
          </div>

          {/* Badges */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-brand-navy mb-2">
              Verified Badges
            </h4>
            <div className="flex flex-wrap gap-2">
              {talent.badges.map((b, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center space-x-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{b}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-brand-navy mb-2">
              Technical Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {talent.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-brand-lightBlue text-brand-primary text-xs font-bold border border-brand-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio Items */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-brand-navy mb-3">
              Featured Portfolio Work
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {talent.portfolio.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-brand-border overflow-hidden bg-slate-50 group hover:shadow-soft transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3.5">
                    <span className="text-[10px] font-bold text-brand-primary uppercase">
                      {item.category}
                    </span>
                    <h5 className="text-xs font-extrabold text-brand-navy mt-0.5">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-brand-mutedText mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-brand-border/60 flex items-center justify-between">
          <div className="text-xs font-semibold text-brand-mutedText">
            Status: <span className="text-emerald-600 font-bold">{talent.availability}</span>
          </div>

          <button
            onClick={() => {
              onContact(talent);
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold shadow-soft transition-all flex items-center space-x-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send Direct Message / Offer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
