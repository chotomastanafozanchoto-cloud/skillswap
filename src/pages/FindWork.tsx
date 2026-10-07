import React, { useState, useMemo } from 'react';
import { mockProjects } from '../data/mockData';
import { Project } from '../types';
import { ApplyModal } from '../components/ApplyModal';
import {
  Search,
  Filter,
  DollarSign,
  Clock,
  Briefcase,
  SlidersHorizontal,
  MapPin,
  CheckCircle2,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function FindWork() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<string>('All');
  const [maxBudget, setMaxBudget] = useState<number>(600);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [appliedProjectIds, setAppliedProjectIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = [
    'All',
    'Web Development',
    'UI/UX Design',
    'Graphic Design',
    'Video Editing',
    'Content & Copy'
  ];

  const allSkills = [
    'All',
    'React',
    'Figma',
    'Tailwind CSS',
    'TypeScript',
    'Supabase',
    'Logo Design',
    'Premiere Pro',
    'Technical Writing'
  ];

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.skillsRequired.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;

      const matchesSkill =
        selectedSkill === 'All' || p.skillsRequired.includes(selectedSkill);

      const matchesBudget = p.budget <= maxBudget;

      return matchesSearch && matchesCategory && matchesSkill && matchesBudget;
    });
  }, [searchQuery, selectedCategory, selectedSkill, maxBudget]);

  const handleApplySuccess = (projId: string) => {
    setAppliedProjectIds((prev) => [...prev, projId]);
    setToastMessage('Proposal successfully submitted!');
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

      {/* Apply Modal */}
      <ApplyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSuccess={handleApplySuccess}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft mb-3">
            <Briefcase className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Gig Marketplace &bull; Assignment 01, 02 & 04
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Find Work & Apply to Real Projects
          </h1>
          <p className="text-sm sm:text-base text-brand-mutedText mt-2 font-medium">
            Browse verified client opportunities designed for university students, beginner freelancers, and emerging creators.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-3xl p-6 border-2 border-brand-border shadow-soft-lg mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-brand-mutedText" />
              <input
                type="text"
                placeholder="Search projects by title, keywords, or skills (e.g. React, Logo, Video)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-semibold text-brand-darkText bg-white"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Categories' : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Skill Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-semibold text-brand-darkText bg-white"
              >
                {allSkills.map((s) => (
                  <option key={s} value={s}>
                    {s === 'All' ? 'All Skills' : `Skill: ${s}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-brand-border/60">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-brand-navy mr-2">Categories:</span>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === c
                      ? 'bg-brand-primary text-white shadow-soft'
                      : 'bg-brand-lightBlue text-brand-navy hover:bg-brand-sky border border-brand-border'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3 text-xs font-semibold text-brand-mutedText">
              <span>Budget up to: <strong className="text-brand-navy">${maxBudget}</strong></span>
              <input
                type="range"
                min={50}
                max={1000}
                step={50}
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-28 accent-brand-primary cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-bold text-brand-mutedText uppercase tracking-wider">
            Showing <span className="text-brand-navy font-black">{filteredProjects.length}</span> Available Projects
          </p>
          <span className="text-xs font-semibold text-brand-primary">
            Updated in Real-Time
          </span>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-brand-border">
            <Briefcase className="w-12 h-12 text-brand-mutedText mx-auto mb-3" />
            <h3 className="text-lg font-bold text-brand-navy">No projects matched your criteria</h3>
            <p className="text-xs text-brand-mutedText mt-1">Try resetting your search query or expanding budget filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedSkill('All');
                setMaxBudget(1000);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const hasApplied = appliedProjectIds.includes(project.id);

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl p-7 border-2 border-brand-border shadow-soft hover:shadow-soft-xl hover:border-brand-primary transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand-lightBlue text-brand-primary text-xs font-extrabold border border-brand-sky">
                        {project.category}
                      </span>
                      <span className="text-xs font-bold text-brand-mutedText flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{project.deadline}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-brand-navy group-hover:text-brand-primary transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-brand-mutedText mt-2.5 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Skills Required */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.skillsRequired.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold bg-slate-100 text-brand-darkText px-2.5 py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Client info */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center space-x-3">
                      <img
                        src={project.client.avatar}
                        alt={project.client.name}
                        className="w-9 h-9 rounded-full object-cover border border-brand-border"
                      />
                      <div>
                        <p className="text-xs font-bold text-brand-navy">
                          {project.client.name}
                        </p>
                        <p className="text-[10px] text-brand-mutedText">
                          {project.client.company} &bull; {project.client.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Budget & Apply Action */}
                  <div className="pt-5 mt-5 border-t border-brand-border/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-brand-mutedText font-semibold block">
                        {project.budgetType}
                      </span>
                      <span className="text-lg font-black text-brand-navy">
                        ${project.budget}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      disabled={hasApplied}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-soft ${
                        hasApplied
                          ? 'bg-emerald-500 text-white cursor-default'
                          : 'bg-brand-primary hover:bg-brand-primaryHover text-white hover:scale-105 active:scale-95'
                      }`}
                    >
                      {hasApplied ? 'Applied ✓' : 'Apply Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
