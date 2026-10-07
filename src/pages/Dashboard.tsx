import React, { useState } from 'react';
import {
  User,
  Briefcase,
  Repeat,
  CheckCircle2,
  Clock,
  TrendingUp,
  MessageSquare,
  Bell,
  Star,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Plus,
  Send,
  Eye,
  FileText
} from 'lucide-react';
import { mockProjects, mockSkillSwaps } from '../data/mockData';

export default function Dashboard() {
  const [activeRole, setActiveRole] = useState<'student' | 'client'>('student');
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'swaps' | 'messages'>('overview');

  const studentStats = {
    profileCompletion: 92,
    activeApplications: 4,
    acceptedContracts: 3,
    pendingSwaps: 2,
    totalEarned: "$1,450",
    clientRating: 4.95,
  };

  const clientStats = {
    postedProjects: 5,
    totalApplicants: 28,
    activeContracts: 2,
    totalSpent: "$4,200",
    clientRating: 4.9,
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Role Switcher */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-navy p-1 shadow-soft">
              <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-xl text-brand-navy">
                {activeRole === 'student' ? 'AR' : 'UT'}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black text-brand-navy">
                  {activeRole === 'student' ? 'Ahmed Raza' : 'Usman Tariq'}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-lightBlue text-brand-primary text-xs font-bold border border-brand-sky">
                  {activeRole === 'student' ? 'Student Developer' : 'Verified Client'}
                </span>
              </div>
              <p className="text-xs text-brand-mutedText mt-0.5 font-medium">
                {activeRole === 'student'
                  ? 'FAST National University • Level 2 Verified Seller'
                  : 'Apex Tech Labs • 8 Projects Commissioned'}
              </p>
            </div>
          </div>

          {/* Perspective Switcher */}
          <div className="flex items-center bg-brand-lightBlue/80 p-1.5 rounded-2xl border border-brand-border">
            <span className="text-xs font-bold text-brand-navy mr-3 ml-2 hidden sm:inline">
              Viewing As:
            </span>
            <button
              onClick={() => setActiveRole('student')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeRole === 'student'
                  ? 'bg-brand-primary text-white shadow-soft'
                  : 'text-brand-darkText hover:text-brand-primary'
              }`}
            >
              Student View
            </button>
            <button
              onClick={() => setActiveRole('client')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeRole === 'client'
                  ? 'bg-brand-primary text-white shadow-soft'
                  : 'text-brand-darkText hover:text-brand-primary'
              }`}
            >
              Client View
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-brand-border/60 mb-8 space-x-2 overflow-x-auto pb-1">
          {[
            { id: 'overview', label: 'Dashboard Overview', icon: TrendingUp },
            { id: 'applications', label: activeRole === 'student' ? 'My Proposals (4)' : 'Received Proposals (28)', icon: Briefcase },
            { id: 'swaps', label: 'Skill Swap Hub', icon: Repeat },
            { id: 'messages', label: 'Inbox & Collaboration', icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 shrink-0 ${
                  active
                    ? 'bg-white text-brand-primary shadow-soft border-2 border-brand-border'
                    : 'text-brand-mutedText hover:text-brand-navy hover:bg-white/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Stat KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {activeRole === 'student' ? (
                <>
                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Profile Completion
                    </span>
                    <p className="text-3xl font-black text-brand-navy mt-1">
                      {studentStats.profileCompletion}%
                    </p>
                    <div className="w-full h-1.5 bg-brand-lightBlue rounded-full mt-3 overflow-hidden">
                      <div className="h-full bg-brand-primary rounded-full w-[92%]" />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Active Proposals
                    </span>
                    <p className="text-3xl font-black text-brand-primary mt-1">
                      {studentStats.activeApplications}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-semibold mt-2">
                      2 under client review
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Pending Skill Swaps
                    </span>
                    <p className="text-3xl font-black text-brand-accent mt-1">
                      {studentStats.pendingSwaps}
                    </p>
                    <p className="text-[10px] text-brand-mutedText font-semibold mt-2">
                      With Sara Khan & Bilal
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Total Earnings
                    </span>
                    <p className="text-3xl font-black text-emerald-600 mt-1">
                      {studentStats.totalEarned}
                    </p>
                    <p className="text-[10px] text-brand-mutedText font-semibold mt-2">
                      Rating: ★ {studentStats.clientRating}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Posted Projects
                    </span>
                    <p className="text-3xl font-black text-brand-navy mt-1">
                      {clientStats.postedProjects}
                    </p>
                    <p className="text-[10px] text-brand-primary font-semibold mt-2">
                      2 currently open for bids
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Student Applications
                    </span>
                    <p className="text-3xl font-black text-brand-primary mt-1">
                      {clientStats.totalApplicants}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-semibold mt-2">
                      +6 new applications today
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Active Contracts
                    </span>
                    <p className="text-3xl font-black text-brand-accent mt-1">
                      {clientStats.activeContracts}
                    </p>
                    <p className="text-[10px] text-brand-mutedText font-semibold mt-2">
                      SaaS Landing Page in progress
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-brand-border shadow-soft">
                    <span className="text-[11px] font-bold text-brand-mutedText uppercase tracking-wider">
                      Total Disbursed
                    </span>
                    <p className="text-3xl font-black text-emerald-600 mt-1">
                      {clientStats.totalSpent}
                    </p>
                    <p className="text-[10px] text-brand-mutedText font-semibold mt-2">
                      Average student rate: $25/hr
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Active Workflow List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-black text-brand-navy">
                    {activeRole === 'student' ? 'Active Projects & Contracts' : 'Live Job Postings'}
                  </h3>
                  <span className="text-xs font-bold text-brand-primary">Updated Live</span>
                </div>

                <div className="space-y-4">
                  {mockProjects.slice(0, 3).map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-2xl bg-brand-lightBlue/40 border border-brand-border flex items-center justify-between hover:bg-brand-lightBlue/70 transition-all"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-primary font-bold text-xs shadow-soft">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold text-brand-navy">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-brand-mutedText">
                            Budget: ${proj.budget} &bull; Client: {proj.client.name} &bull; Due: {proj.deadline}
                          </p>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                        In Progress
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions & Notifications */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl p-6 border-2 border-brand-border shadow-soft">
                  <h3 className="text-sm font-black text-brand-navy mb-4 flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-brand-primary" />
                    <span>Recent Notifications</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50 text-xs border border-slate-100">
                      <p className="font-bold text-brand-navy">Sara Khan accepted your swap!</p>
                      <p className="text-brand-mutedText text-[11px] mt-0.5">Figma & UI/UX lessons scheduled for Thursday.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 text-xs border border-slate-100">
                      <p className="font-bold text-brand-navy">Milestone payout approved</p>
                      <p className="text-brand-mutedText text-[11px] mt-0.5">Apex Tech Labs released $350 escrow.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-tr from-brand-navy to-brand-primary rounded-3xl p-6 text-white shadow-soft">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-sky bg-white/10 px-2 py-0.5 rounded-full">
                    Tip
                  </span>
                  <h4 className="text-base font-bold mt-2">
                    Need More Client Inquiries?
                  </h4>
                  <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                    Upload new GitHub repository screenshots to your verified portfolio to boost visibility in the Find Talent directory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: APPLICATIONS */}
        {activeTab === 'applications' && (
          <div className="bg-white rounded-3xl p-8 border-2 border-brand-border shadow-soft animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-brand-navy mb-4">
              {activeRole === 'student' ? 'Submitted Project Proposals' : 'Applications Received on Open Projects'}
            </h3>
            <div className="divide-y divide-slate-100">
              {mockProjects.slice(0, 4).map((p, idx) => (
                <div key={p.id} className="py-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">{p.title}</h4>
                    <p className="text-xs text-brand-mutedText mt-0.5">
                      Proposed Amount: ${p.budget} &bull; Delivery: {p.deadline} &bull; Category: {p.category}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {idx === 0 ? 'Under Review' : 'Interview Scheduled'}
                    </span>
                    <button
                      onClick={() => alert(`Opening proposal review for ${p.title}`)}
                      className="px-3 py-1.5 rounded-lg bg-brand-lightBlue text-brand-navy text-xs font-bold hover:bg-brand-sky transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: SWAPS */}
        {activeTab === 'swaps' && (
          <div className="bg-white rounded-3xl p-8 border-2 border-brand-border shadow-soft animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-brand-navy">Active Skill Swap Barters</h3>
                <p className="text-xs text-brand-mutedText">Mutual learning sessions with no financial transaction</p>
              </div>
              <button
                onClick={() => alert('Search more students wanting to learn your skills')}
                className="px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-soft"
              >
                + Find New Swap Match
              </button>
            </div>

            <div className="space-y-4">
              {mockSkillSwaps.slice(0, 2).map((s) => (
                <div key={s.id} className="p-5 rounded-2xl bg-brand-lightBlue/40 border border-brand-border flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={s.avatar} alt={s.studentName} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy">{s.studentName}</h4>
                      <p className="text-xs text-brand-mutedText">
                        Teaching you: <span className="font-bold text-brand-navy">{s.teachSkill.name}</span> &bull; Learning from you: <span className="font-bold text-brand-navy">{s.learnSkill.name}</span>
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    Active Session (Thursdays 6 PM)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-3xl border-2 border-brand-border shadow-soft overflow-hidden animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
              {/* Sidebar Contacts */}
              <div className="md:col-span-4 border-r border-slate-100 p-4 space-y-2 bg-slate-50/50">
                <p className="text-xs font-bold text-brand-mutedText uppercase tracking-wider px-2 mb-2">
                  Recent Conversations
                </p>
                <div className="p-3 rounded-xl bg-white border border-brand-border shadow-soft cursor-pointer">
                  <p className="text-xs font-bold text-brand-navy">Usman Tariq (Apex Tech)</p>
                  <p className="text-[11px] text-brand-mutedText truncate mt-0.5">Please review the updated Figma designs...</p>
                </div>
                <div className="p-3 rounded-xl hover:bg-white border border-transparent hover:border-brand-border cursor-pointer transition-all">
                  <p className="text-xs font-bold text-brand-navy">Sara Khan (UI/UX Barter)</p>
                  <p className="text-[11px] text-brand-mutedText truncate mt-0.5">I’ve finished the logo vector files for our swap!</p>
                </div>
              </div>

              {/* Chat View */}
              <div className="md:col-span-8 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-brand-primary text-white font-bold text-xs flex items-center justify-center">
                      UT
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy">Usman Tariq</h4>
                      <p className="text-[10px] text-emerald-600 font-semibold">Online &bull; Apex Tech Labs</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-brand-lightBlue/60 max-w-sm text-xs text-brand-darkText">
                    Hi Ahmed, we loved your proposal for the SaaS landing page! Can you start on Monday?
                  </div>
                  <div className="p-3 rounded-2xl bg-brand-primary text-white max-w-sm text-xs ml-auto">
                    Absolutely! I have already reviewed the brief and set up the Vite + Tailwind repo.
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-2.5 rounded-xl border border-brand-border text-xs focus:ring-2 focus:ring-brand-primary/20"
                  />
                  <button
                    onClick={() => alert('Message transmitted via Supabase Real-Time Broadcast channel!')}
                    className="p-2.5 rounded-xl bg-brand-primary text-white hover:bg-brand-primaryHover transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
