import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import {
  Github,
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Code2,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t-4 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white font-black text-lg shadow-blue-glow">
                SS
              </div>
              <span className="font-extrabold text-white text-2xl tracking-tight">
                SkillSwap
              </span>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              The premier student talent marketplace and peer-to-peer skill barter platform.
              Bridging classroom capability with enterprise opportunity.
            </p>

            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 inline-block">
              <p className="text-xs font-semibold text-brand-sky flex items-center space-x-1.5">
                <Code2 className="w-4 h-4 text-brand-glow" />
                <span>Founder & Lead Architect:</span>
              </p>
              <p className="text-sm font-bold text-white mt-0.5">
                “Fozan, web developer as a problem solver.”
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center text-white transition-all hover:scale-110"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:fozan.dev@skillswap.pk"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center text-white transition-all hover:scale-110"
                title="Email Fozan"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center text-white transition-all hover:scale-110"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-primary flex items-center justify-center text-white transition-all hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-sky uppercase tracking-wider">
              Marketplace
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link to={ROUTES.findWork} className="hover:text-white transition-colors">
                  Find Work / Projects
                </Link>
              </li>
              <li>
                <Link to={ROUTES.findTalent} className="hover:text-white transition-colors">
                  Find Student Talent
                </Link>
              </li>
              <li>
                <Link to={ROUTES.skillSwap} className="hover:text-white transition-colors">
                  Peer Skill Barter
                </Link>
              </li>
              <li>
                <Link to={ROUTES.dashboard} className="hover:text-white transition-colors">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link to={ROUTES.signUp} className="hover:text-white transition-colors">
                  Create Client Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Journey Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-sky uppercase tracking-wider">
              Project Journey
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link to={ROUTES.projectJourney} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Assignments 01 &rarr; 10</span>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.projectJourney} className="hover:text-white transition-colors text-xs text-blue-200">
                  01 Ideation & Solution
                </Link>
              </li>
              <li>
                <Link to={ROUTES.projectJourney} className="hover:text-white transition-colors text-xs text-blue-200">
                  02 Product Requirements (PRD)
                </Link>
              </li>
              <li>
                <Link to={ROUTES.projectJourney} className="hover:text-white transition-colors text-xs text-blue-200">
                  05 Supabase & PostgreSQL ERD
                </Link>
              </li>
              <li>
                <Link to={ROUTES.projectJourney} className="hover:text-white transition-colors text-xs text-blue-200">
                  10 Capstone Final Sign-off
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-sky uppercase tracking-wider">
              Administration
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link
                  to={ROUTES.adminStudio}
                  className="hover:text-white transition-colors flex items-center space-x-1.5 font-bold text-brand-glow"
                >
                  <ShieldCheck className="w-4 h-4 text-brand-glow" />
                  <span>Admin Studio</span>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.about} className="hover:text-white transition-colors">
                  About Founder Fozan
                </Link>
              </li>
              <li>
                <Link to={ROUTES.contact} className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to={ROUTES.login} className="hover:text-white transition-colors">
                  Role-Based Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-blue-200 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} SkillSwap. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current inline" />
            <span>by Fozan for student empowerment.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-brand-sky font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>10 of 10 Assignments Integrated</span>
            </span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
