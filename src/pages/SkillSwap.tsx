import React, { useState, useMemo } from 'react';
import { mockSkillSwaps } from '../data/mockData';
import { SkillSwapPair } from '../types';
import { SwapRequestModal } from '../components/SwapRequestModal';
import {
  Repeat,
  Sparkles,
  ArrowRight,
  Send,
  BookOpen,
  GraduationCap,
  Clock,
  Star,
  CheckCircle2,
  Users2
} from 'lucide-react';

export default function SkillSwap() {
  const [selectedTeachFilter, setSelectedTeachFilter] = useState('All');
  const [selectedLearnFilter, setSelectedLearnFilter] = useState('All');
  const [selectedPair, setSelectedPair] = useState<SkillSwapPair | null>(null);
  const [requestedPairIds, setRequestedPairIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const teachSkills = ['All', 'React & TypeScript', 'Figma & Design Systems', 'Python & Data Science', 'SEO & Content Writing'];
  const learnSkills = ['All', 'UI/UX & Figma', 'React & Web Dev', 'Next.js & Frontend', 'Graphic Design'];

  const filteredSwaps = useMemo(() => {
    return mockSkillSwaps.filter((s) => {
      const matchTeach = selectedTeachFilter === 'All' || s.teachSkill.name === selectedTeachFilter;
      const matchLearn = selectedLearnFilter === 'All' || s.learnSkill.name === selectedLearnFilter;
      return matchTeach && matchLearn;
    });
  }, [selectedTeachFilter, selectedLearnFilter]);

  const handleSwapSuccess = (pairId: string) => {
    setRequestedPairIds((prev) => [...prev, pairId]);
    setToastMessage('Skill Swap invitation dispatched successfully!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-navy text-white px-5 py-3 rounded-2xl shadow-soft-xl border border-brand-primary flex items-center space-x-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-brand-glow" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Swap Request Modal */}
      <SwapRequestModal
        swapPair={selectedPair}
        onClose={() => setSelectedPair(null)}
        onSuccess={handleSwapSuccess}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft mb-3">
            <Repeat className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Peer-to-Peer Barter &bull; Assignment 01, 02 & 06
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Exchange Skills. Zero Money Involved.
          </h1>
          <p className="text-sm sm:text-base text-brand-mutedText mt-2 font-medium">
            Teach what you know, learn what you want. SkillSwap algorithmically connects students with complementary learning goals.
          </p>
        </div>

        {/* Dynamic Skill Matcher Filter Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft-xl mb-12">
          <h3 className="text-base font-extrabold text-brand-navy mb-4 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span>Interactive Reciprocal Skill Matcher</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* What you want to learn */}
            <div className="p-5 rounded-2xl bg-brand-lightBlue/70 border border-brand-border">
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                1. What skill do you want to learn?
              </label>
              <select
                value={selectedLearnFilter}
                onChange={(e) => setSelectedLearnFilter(e.target.value)}
                className="w-full p-3 rounded-xl border border-brand-border bg-white text-sm font-semibold text-brand-navy focus:ring-2 focus:ring-brand-primary/20"
              >
                {learnSkills.map((sk) => (
                  <option key={sk} value={sk}>
                    {sk === 'All' ? 'Any Skill (Show All Learners)' : sk}
                  </option>
                ))}
              </select>
            </div>

            {/* What you can teach */}
            <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft">
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                2. What skill can you teach in return?
              </label>
              <select
                value={selectedTeachFilter}
                onChange={(e) => setSelectedTeachFilter(e.target.value)}
                className="w-full p-3 rounded-xl border border-brand-border bg-white text-sm font-semibold text-brand-navy focus:ring-2 focus:ring-brand-primary/20"
              >
                {teachSkills.map((sk) => (
                  <option key={sk} value={sk}>
                    {sk === 'All' ? 'Any Skill (Show All Mentors)' : sk}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Matching Cards */}
        <div className="space-y-6">
          {filteredSwaps.map((pair) => {
            const hasRequested = requestedPairIds.includes(pair.id);

            return (
              <div
                key={pair.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft hover:shadow-soft-xl hover:border-brand-primary transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Student Profile */}
                  <div className="lg:col-span-4 flex items-center space-x-4">
                    <img
                      src={pair.avatar}
                      alt={pair.studentName}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-border shadow-soft"
                    />
                    <div>
                      <h4 className="text-xl font-black text-brand-navy">
                        {pair.studentName}
                      </h4>
                      <p className="text-xs text-brand-mutedText flex items-center space-x-1 mt-0.5">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{pair.college}</span>
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="flex items-center space-x-1 text-xs font-bold text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{pair.rating}</span>
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {pair.availabilityHours} hrs/week available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center: Reciprocal Barter Visual (Teach <-> Learn) */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                      {/* Teaches */}
                      <div className="bg-brand-lightBlue/60 p-4 rounded-2xl border border-brand-sky">
                        <span className="text-[10px] font-black uppercase text-brand-primary tracking-wider block">
                          I Can Teach:
                        </span>
                        <h5 className="text-sm font-extrabold text-brand-navy mt-1">
                          {pair.teachSkill.name}
                        </h5>
                        <p className="text-[11px] text-brand-mutedText mt-1 line-clamp-2">
                          {pair.teachSkill.experience}
                        </p>
                      </div>

                      {/* Wants to learn */}
                      <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
                        <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider block">
                          I Want To Learn:
                        </span>
                        <h5 className="text-sm font-extrabold text-brand-navy mt-1">
                          {pair.learnSkill.name}
                        </h5>
                        <p className="text-[11px] text-brand-mutedText mt-1">
                          Level: {pair.learnSkill.level} &bull; Urgency: {pair.learnSkill.urgency}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Match Score & Action */}
                  <div className="lg:col-span-3 flex flex-col items-end justify-center space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-brand-mutedText">Match Compatibility:</span>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300">
                        {pair.matchScore}% Match
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedPair(pair)}
                      disabled={hasRequested}
                      className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-soft flex items-center justify-center space-x-2 ${
                        hasRequested
                          ? 'bg-emerald-500 text-white cursor-default'
                          : 'bg-brand-primary hover:bg-brand-primaryHover text-white hover:scale-105 active:scale-95'
                      }`}
                    >
                      {hasRequested ? (
                        <span>Request Sent ✓</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Swap Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
