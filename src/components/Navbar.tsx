import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import {
  Menu,
  X,
  Bot,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Briefcase,
  Users,
  Repeat,
  Milestone,
  Info,
  Mail,
  UserCheck
} from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: ROUTES.home, icon: Sparkles },
    { name: 'Find Work', path: ROUTES.findWork, icon: Briefcase },
    { name: 'Find Talent', path: ROUTES.findTalent, icon: Users },
    { name: 'Skill Swap', path: ROUTES.skillSwap, icon: Repeat },
    { name: 'Project Journey', path: ROUTES.projectJourney, icon: Milestone, badge: '10 Steps' },
    { name: 'About', path: ROUTES.about, icon: Info },
    { name: 'Contact', path: ROUTES.contact, icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-scrolled py-3'
          : 'glass-nav py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={ROUTES.home}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-navy flex items-center justify-center text-white font-black text-lg shadow-soft group-hover:shadow-blue-glow transition-all group-hover:scale-105">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-brand-navy text-xl tracking-tight leading-tight group-hover:text-brand-primary transition-colors">
                SkillSwap
              </span>
              <span className="text-[10px] font-semibold text-brand-mutedText uppercase tracking-wider">
                By Fozan &bull; 01&rarr;10
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative flex items-center space-x-1.5 ${
                    active
                      ? 'text-brand-primary bg-white shadow-soft font-bold'
                      : 'text-brand-darkText hover:text-brand-primary hover:bg-white/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold bg-brand-lightBlue text-brand-primary px-1.5 py-0.5 rounded-full border border-brand-border">
                      {link.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* Robot 3D Replay Button */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="p-2 rounded-lg text-brand-primary hover:bg-brand-lightBlue hover:text-brand-navy border border-brand-border transition-all flex items-center space-x-1.5 text-xs font-semibold shadow-soft"
                title="Launch 3D Robot Intro"
              >
                <Bot className="w-4 h-4 text-brand-primary animate-bounce" />
                <span className="hidden xl:inline">3D Intro</span>
              </button>
            )}

            {/* Admin Studio */}
            <Link
              to={ROUTES.adminStudio}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border flex items-center space-x-1.5 ${
                isActive(ROUTES.adminStudio)
                  ? 'bg-brand-navy text-white border-brand-navy shadow-soft-lg'
                  : 'bg-white hover:bg-brand-navy hover:text-white text-brand-navy border-brand-border shadow-soft'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span>Admin Studio</span>
            </Link>

            {/* Login */}
            <Link
              to={ROUTES.login}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-brand-darkText hover:text-brand-primary hover:bg-white transition-all"
            >
              Login
            </Link>

            {/* Sign Up */}
            <Link
              to={ROUTES.signUp}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-brand-primary hover:bg-brand-primaryHover text-white shadow-soft transition-all hover:scale-105 active:scale-95 flex items-center space-x-1"
            >
              <span>Sign Up</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="p-2 rounded-lg bg-white border border-brand-border text-brand-primary"
                title="3D Intro"
              >
                <Bot className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-brand-border text-brand-navy shadow-soft"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-brand-border px-4 pt-3 pb-6 space-y-2 mt-2 shadow-soft-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? 'bg-brand-lightBlue text-brand-primary font-bold'
                      : 'text-brand-darkText hover:bg-brand-bg'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className="w-4 h-4 text-brand-primary" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] font-bold bg-brand-primary text-white px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-brand-border/60 flex flex-col space-y-2">
            <Link
              to={ROUTES.adminStudio}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-brand-navy text-white text-xs font-bold shadow-soft"
            >
              <ShieldCheck className="w-4 h-4 text-brand-glow" />
              <span>Admin Studio Portal</span>
            </Link>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                to={ROUTES.login}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-center rounded-lg border border-brand-border bg-white text-brand-navy text-xs font-bold"
              >
                Login
              </Link>
              <Link
                to={ROUTES.signUp}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-center rounded-lg bg-brand-primary text-white text-xs font-bold shadow-soft"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
