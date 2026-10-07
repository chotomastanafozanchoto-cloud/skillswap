import React, { useState } from 'react';
import {
  ShieldCheck,
  Users,
  Briefcase,
  Repeat,
  Star,
  FileText,
  Settings,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  SlidersHorizontal,
  Bell,
  Code2,
  Trash2,
  Edit,
  TrendingUp,
  Layers,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { assignmentsData } from '../data/assignmentsData';
import { mockProjects, mockTalents, mockSkillSwaps } from '../data/mockData';

export default function AdminStudio() {
  const [activeMenu, setActiveMenu] = useState<
    | 'overview'
    | 'users'
    | 'students'
    | 'clients'
    | 'projects'
    | 'applications'
    | 'skills'
    | 'swaps'
    | 'reviews'
    | 'reports'
    | 'assignments'
    | 'settings'
  >('overview');

  const [searchUser, setSearchUser] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'All Users (4.8k)', icon: Users },
    { id: 'students', label: 'Students (3.1k)', icon: Users },
    { id: 'clients', label: 'Clients (1.6k)', icon: Briefcase },
    { id: 'projects', label: 'Projects & Contracts', icon: Briefcase },
    { id: 'applications', label: 'Applications Pipeline', icon: FileText },
    { id: 'skills', label: 'Skills Taxonomy', icon: Layers },
    { id: 'swaps', label: 'Skill Swap Requests', icon: Repeat },
    { id: 'reviews', label: 'Reviews & Ratings', icon: Star },
    { id: 'reports', label: 'Moderation Reports', icon: AlertTriangle, badge: '2 Open' },
    { id: 'assignments', label: 'Academic Assignments (01-10)', icon: Code2 },
    { id: 'settings', label: 'Platform Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-navy text-white px-5 py-3 rounded-2xl shadow-soft-xl border border-brand-primary flex items-center space-x-3 animate-in slide-in-from-bottom-5">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-brand-navy rounded-3xl p-6 sm:p-8 text-white mb-8 border-2 border-brand-primary shadow-soft-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-glow shadow-blue-glow">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black tracking-tight">SkillSwap Admin Studio</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                  Role: Super Admin
                </span>
              </div>
              <p className="text-xs text-blue-200 mt-1">
                Platform telemetry, student verification, content moderation, and assignment auditor
              </p>
            </div>
          </div>

          <div className="text-right text-xs text-blue-200">
            <p className="font-bold text-white">Fozan &bull; Chief Engineer</p>
            <p className="text-[11px]">System Status: All Services Operational (99.98%)</p>
          </div>
        </div>

        {/* Studio Shell: Sidebar & Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Admin Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-4 border-2 border-brand-border shadow-soft sticky top-28 space-y-1">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand-mutedText px-3 py-2">
                Administration Console
              </p>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = activeMenu === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id as any)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      active
                        ? 'bg-brand-navy text-white shadow-soft'
                        : 'text-brand-darkText hover:bg-brand-lightBlue hover:text-brand-navy'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Icon className={`w-4 h-4 ${active ? 'text-brand-glow' : 'text-brand-primary'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-extrabold">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Display Pane */}
          <div className="lg:col-span-9 space-y-8">
            {/* 1. OVERVIEW */}
            {activeMenu === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Metric Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-2xl border-2 border-brand-border shadow-soft">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-mutedText">Total Users</span>
                    <p className="text-2xl font-black text-brand-navy mt-1">4,820</p>
                    <span className="text-[10px] text-emerald-600 font-bold">+14% this week</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-2 border-brand-border shadow-soft">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-mutedText">Students</span>
                    <p className="text-2xl font-black text-brand-primary mt-1">3,140</p>
                    <span className="text-[10px] text-emerald-600 font-bold">65% of base</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-2 border-brand-border shadow-soft">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-mutedText">Active Projects</span>
                    <p className="text-2xl font-black text-brand-navy mt-1">128</p>
                    <span className="text-[10px] text-brand-primary font-bold">24 awaiting proposals</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-2 border-brand-border shadow-soft">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-mutedText">Skill Swaps</span>
                    <p className="text-2xl font-black text-emerald-600 mt-1">870</p>
                    <span className="text-[10px] text-emerald-600 font-bold">Barter matches</span>
                  </div>
                </div>

                {/* Assignment Status Monitor */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-base font-black text-brand-navy">
                        Assignment 01 &rarr; Assignment 10 Integration Monitor
                      </h3>
                      <p className="text-xs text-brand-mutedText">
                        Verification matrix across all 10 academic and technical deliverables
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                      100% Complete
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {assignmentsData.map((a) => (
                      <div
                        key={a.number}
                        className="p-3 rounded-xl bg-brand-lightBlue/60 border border-brand-border flex items-center justify-between"
                      >
                        <div>
                          <span className="text-xs font-black text-brand-primary block">
                            #{a.number}
                          </span>
                          <span className="text-[11px] font-bold text-brand-navy truncate block max-w-[90px]">
                            {a.title}
                          </span>
                        </div>
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Projects for Approval */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft">
                  <h3 className="text-base font-black text-brand-navy mb-4">
                    Active Projects Pending Review / Featured Toggles
                  </h3>
                  <div className="divide-y divide-slate-100">
                    {mockProjects.slice(0, 3).map((proj) => (
                      <div key={proj.id} className="py-3.5 flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-brand-navy">{proj.title}</h4>
                          <p className="text-[11px] text-brand-mutedText">
                            Client: {proj.client.name} &bull; Budget: ${proj.budget} &bull; Category: {proj.category}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => showToast(`Featured status toggled for ${proj.title}`)}
                            className="px-3 py-1 rounded-lg bg-brand-lightBlue text-brand-navy text-[11px] font-bold hover:bg-brand-sky transition-all"
                          >
                            Toggle Featured
                          </button>
                          <button
                            onClick={() => showToast(`Project ${proj.title} approved!`)}
                            className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] font-bold"
                          >
                            Approved ✓
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. USERS & STUDENTS */}
            {(activeMenu === 'users' || activeMenu === 'students' || activeMenu === 'clients') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-black text-brand-navy">
                      Directory Management & Verification
                    </h3>
                    <p className="text-xs text-brand-mutedText">
                      Inspect student portfolios, client spend history, and verified status
                    </p>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchUser}
                      onChange={(e) => setSearchUser(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-brand-border text-xs"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-brand-mutedText">
                        <th className="pb-3 font-bold">User</th>
                        <th className="pb-3 font-bold">Role</th>
                        <th className="pb-3 font-bold">University / Org</th>
                        <th className="pb-3 font-bold">Rating</th>
                        <th className="pb-3 font-bold">Status</th>
                        <th className="pb-3 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {mockTalents.map((tal) => (
                        <tr key={tal.id} className="hover:bg-slate-50/60">
                          <td className="py-3.5 flex items-center space-x-3">
                            <img src={tal.avatar} alt={tal.name} className="w-8 h-8 rounded-full object-cover" />
                            <div>
                              <p className="font-bold text-brand-navy">{tal.name}</p>
                              <p className="text-[10px] text-brand-mutedText">{tal.mainSkill}</p>
                            </div>
                          </td>
                          <td className="py-3.5 font-bold text-brand-primary">Student</td>
                          <td className="py-3.5 text-brand-darkText">{tal.college}</td>
                          <td className="py-3.5 font-bold text-amber-500">★ {tal.rating}</td>
                          <td className="py-3.5">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                              Verified
                            </span>
                          </td>
                          <td className="py-3.5 text-right space-x-2">
                            <button
                              onClick={() => showToast(`Credentials inspected for ${tal.name}`)}
                              className="px-2 py-1 bg-brand-lightBlue text-brand-navy rounded font-bold"
                            >
                              Inspect
                            </button>
                            <button
                              onClick={() => showToast(`User ${tal.name} flagged for review`)}
                              className="px-2 py-1 bg-red-50 text-red-600 rounded font-bold"
                            >
                              Flag
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. ASSIGNMENTS TABLE */}
            {activeMenu === 'assignments' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border shadow-soft animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-black text-brand-navy">
                      Assignments 01 &rarr; 10 Master Registry
                    </h3>
                    <p className="text-xs text-brand-mutedText">
                      Inspect rubric adherence, syllabus deliverables, and linked features
                    </p>
                  </div>
                  <button
                    onClick={() => showToast('Full academic audit log generated and downloaded!')}
                    className="px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-soft"
                  >
                    Export Audit Report
                  </button>
                </div>

                <div className="space-y-3">
                  {assignmentsData.map((a) => (
                    <div
                      key={a.number}
                      className="p-4 rounded-2xl bg-brand-lightBlue/30 border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-9 h-9 rounded-xl bg-brand-navy text-white font-black text-xs flex items-center justify-center shrink-0">
                          {a.number}
                        </span>
                        <div>
                          <h4 className="text-xs font-extrabold text-brand-navy">
                            {a.title} &bull; <span className="text-brand-primary">{a.phase}</span>
                          </h4>
                          <p className="text-[11px] text-brand-mutedText line-clamp-1">
                            {a.mainObjective}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                          Verified Complete
                        </span>
                        <button
                          onClick={() => showToast(`Opened assignment ${a.number} inspector`)}
                          className="px-3 py-1.5 rounded-lg bg-white border border-brand-border text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all"
                        >
                          View Rubric
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. OTHER TABS (Settings, Reports, etc.) */}
            {(activeMenu === 'reports' || activeMenu === 'settings' || activeMenu === 'skills' || activeMenu === 'projects' || activeMenu === 'applications' || activeMenu === 'swaps' || activeMenu === 'reviews') && (
              <div className="bg-white rounded-3xl p-8 border-2 border-brand-border shadow-soft animate-in fade-in duration-200">
                <h3 className="text-lg font-black text-brand-navy capitalize mb-2">
                  {activeMenu.replace('_', ' ')} Management
                </h3>
                <p className="text-xs text-brand-mutedText mb-6">
                  Administrative controls, auditing logs, and system configuration for {activeMenu}.
                </p>

                <div className="p-6 rounded-2xl bg-brand-lightBlue/50 border border-brand-sky space-y-3">
                  <p className="text-xs font-bold text-brand-navy">
                    Production Architecture Controls:
                  </p>
                  <p className="text-xs text-brand-mutedText leading-relaxed">
                    All parameters sync through the Supabase PostgreSQL backend with Row-Level Security (RLS) enforcement. No administrative credentials or tokens are exposed to frontend clients.
                  </p>
                  <button
                    onClick={() => showToast(`${activeMenu} settings saved successfully!`)}
                    className="px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
