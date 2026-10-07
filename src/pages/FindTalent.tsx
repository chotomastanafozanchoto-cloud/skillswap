import React, { useState, useMemo } from 'react';
import { mockTalents } from '../data/mockData';
import { Talent } from '../types';
import { TalentModal } from '../components/TalentModal';
import {
  Search,
  Users,
  Star,
  GraduationCap,
  Clock,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function FindTalent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const roleCategories = [
    'All',
    'Frontend',
    'Design',
    'Backend',
    'Video'
  ];

  const filteredTalents = useMemo(() => {
    return mockTalents.filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.mainSkill.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRole =
        selectedRole === 'All' ||
        t.mainSkill.toLowerCase().includes(selectedRole.toLowerCase()) ||
        t.skills.some((s) => s.toLowerCase().includes(selectedRole.toLowerCase()));

      return matchesSearch && matchesRole;
    });
  }, [searchQuery, selectedRole]);

  const handleContact = (talent: Talent) => {
    setToastMessage(`Direct contact request sent to ${talent.name}!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-navy text-white px-5 py-3 rounded-2xl shadow-soft-xl border border-brand-primary flex items-center space-x-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Talent Profile Modal */}
      <TalentModal
        talent={selectedTalent}
        onClose={() => setSelectedTalent(null)}
        onContact={handleContact}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft mb-3">
            <Users className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Student Talent Directory &bull; Assignment 01, 02 & 04
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Find & Hire Elite Student Talent
          </h1>
          <p className="text-sm sm:text-base text-brand-mutedText mt-2 font-medium">
            Connect directly with verified student developers, designers, and multimedia creators ready to build your next project.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-3xl p-6 border-2 border-brand-border shadow-soft-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-brand-mutedText" />
              <input
                type="text"
                placeholder="Search talent by name, skill, or university..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {roleCategories.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRole(r)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedRole === r
                      ? 'bg-brand-primary text-white shadow-soft'
                      : 'bg-brand-lightBlue text-brand-navy hover:bg-brand-sky border border-brand-border'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Talent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTalents.map((talent) => (
            <div
              key={talent.id}
              className="bg-white rounded-3xl p-7 border-2 border-brand-border shadow-soft hover:shadow-soft-xl hover:border-brand-primary transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Avatar, Name, Rating */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={talent.avatar}
                      alt={talent.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-border shadow-soft"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-black text-brand-navy group-hover:text-brand-primary transition-colors">
                          {talent.name}
                        </h3>
                        <ShieldCheck className="w-4 h-4 text-brand-primary" />
                      </div>
                      <p className="text-xs font-bold text-brand-primary mt-0.5">
                        {talent.mainSkill}
                      </p>
                      <p className="text-[11px] text-brand-mutedText flex items-center space-x-1 mt-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{talent.college}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-amber-500 font-extrabold text-sm justify-end">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{talent.rating}</span>
                    </div>
                    <span className="text-[10px] text-brand-mutedText">
                      ({talent.reviewsCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-brand-darkText mt-4 line-clamp-2 leading-relaxed">
                  {talent.bio}
                </p>

                {/* Badges & Skills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {talent.skills.slice(0, 5).map((sk, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold bg-brand-lightBlue text-brand-navy px-2.5 py-1 rounded-lg border border-brand-border/60"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

                {/* Portfolio Showcase Preview */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-brand-navy mb-2">Featured Project:</p>
                  <div className="flex items-center space-x-3 bg-brand-lightBlue/40 p-2.5 rounded-xl border border-brand-border/60">
                    <img
                      src={talent.portfolio[0].image}
                      alt={talent.portfolio[0].title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy line-clamp-1">
                        {talent.portfolio[0].title}
                      </h4>
                      <p className="text-[10px] text-brand-mutedText line-clamp-1">
                        {talent.portfolio[0].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-brand-mutedText font-semibold block">Rate</span>
                  <span className="text-lg font-black text-brand-navy">${talent.hourlyRate}/hr</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedTalent(talent)}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-brand-lightBlue text-brand-navy border border-brand-border text-xs font-bold shadow-soft transition-all"
                  >
                    View Profile
                  </button>

                  <button
                    onClick={() => handleContact(talent)}
                    className="px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold shadow-soft transition-all flex items-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
