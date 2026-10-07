import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Eye,
  EyeOff,
  UserCheck
} from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(ROUTES.dashboard);
    }, 700);
  };

  const handleDemoLogin = (role: 'student' | 'client' | 'admin') => {
    if (role === 'student') {
      setEmail('ahmed.student@skillswap.pk');
      setPassword('password123');
      navigate(ROUTES.dashboard);
    } else if (role === 'client') {
      setEmail('usman.client@apextech.com');
      setPassword('password123');
      navigate(ROUTES.dashboard);
    } else if (role === 'admin') {
      setEmail('fozan.admin@skillswap.pk');
      setPassword('password123');
      navigate(ROUTES.adminStudio);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <Link to={ROUTES.home} className="inline-flex items-center space-x-2.5 mb-3">
            <div className="w-11 h-11 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-black text-xl shadow-blue-glow">
              SS
            </div>
            <span className="font-extrabold text-brand-navy text-2xl tracking-tight">
              SkillSwap
            </span>
          </Link>
          <h2 className="text-2xl font-black text-brand-navy">Welcome Back</h2>
          <p className="text-xs text-brand-mutedText mt-1">
            Sign in to access your projects, messages, and skill swaps
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 border-2 border-brand-border shadow-soft-xl">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                <input
                  type="email"
                  required
                  placeholder="name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-mutedText hover:text-brand-navy"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 text-brand-darkText font-semibold cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-brand-primary focus:ring-brand-primary/20 accent-brand-primary"
                />
                <span>Remember me</span>
              </label>

              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Password reset link sent to registered email.');
                }}
                className="text-brand-primary font-bold hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow-soft transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 disabled:opacity-50 mt-2"
            >
              {loading ? <span>Signing in...</span> : <span>Login to SkillSwap</span>}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Demo Quick Logins */}
          <div className="mt-6 pt-6 border-t border-brand-border/60">
            <p className="text-[11px] font-bold text-brand-mutedText text-center uppercase tracking-wider mb-2.5">
              Quick One-Click Demo Access:
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleDemoLogin('student')}
                className="py-2 px-1 text-center bg-brand-lightBlue hover:bg-brand-sky text-brand-navy text-[11px] font-bold rounded-xl border border-brand-border transition-all"
              >
                Student
              </button>
              <button
                onClick={() => handleDemoLogin('client')}
                className="py-2 px-1 text-center bg-white hover:bg-brand-lightBlue text-brand-navy text-[11px] font-bold rounded-xl border border-brand-border transition-all"
              >
                Client
              </button>
              <button
                onClick={() => handleDemoLogin('admin')}
                className="py-2 px-1 text-center bg-brand-navy hover:bg-brand-primary text-white text-[11px] font-bold rounded-xl shadow-soft transition-all"
              >
                Admin
              </button>
            </div>
          </div>

          {/* Footer switch */}
          <div className="mt-6 text-center text-xs text-brand-mutedText">
            Don't have an account yet?{' '}
            <Link to={ROUTES.signUp} className="text-brand-primary font-bold hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
