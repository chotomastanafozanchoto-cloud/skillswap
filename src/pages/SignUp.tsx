import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SignUp() {
  const [role, setRole] = useState<'student' | 'client'>('student');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please verify.');
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}

      setTimeout(() => {
        navigate(ROUTES.dashboard);
      }, 1000);
    }, 700);
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
          <h2 className="text-2xl font-black text-brand-navy">Create Your Account</h2>
          <p className="text-xs text-brand-mutedText mt-1">
            Join thousands of student freelancers, learners, and innovative clients
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 border-2 border-brand-border shadow-soft-xl">
          {/* Role Toggle */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2 text-center">
              Select Your Account Type:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`p-3.5 rounded-2xl border-2 flex flex-col items-center justify-center space-y-1 transition-all ${
                  role === 'student'
                    ? 'border-brand-primary bg-brand-lightBlue/80 text-brand-primary shadow-soft'
                    : 'border-brand-border bg-white text-brand-mutedText hover:border-brand-sky'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-bold">Student Creator</span>
                <span className="text-[10px] text-brand-mutedText">Earn & Exchange</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('client')}
                className={`p-3.5 rounded-2xl border-2 flex flex-col items-center justify-center space-y-1 transition-all ${
                  role === 'client'
                    ? 'border-brand-primary bg-brand-lightBlue/80 text-brand-primary shadow-soft'
                    : 'border-brand-border bg-white text-brand-mutedText hover:border-brand-sky'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span className="text-xs font-bold">Client / Business</span>
                <span className="text-[10px] text-brand-mutedText">Hire Top Talent</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Fozan Ali"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                <input
                  type="email"
                  required
                  placeholder="fozan@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="pt-1">
              <label className="flex items-center space-x-2 text-xs text-brand-darkText font-medium cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="rounded text-brand-primary focus:ring-brand-primary/20 accent-brand-primary"
                />
                <span>I agree to the SkillSwap Terms of Service & Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow-soft transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 disabled:opacity-50 mt-2"
            >
              {loading ? <span>Creating Account...</span> : <span>Complete Registration</span>}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Footer switch */}
          <div className="mt-6 text-center text-xs text-brand-mutedText">
            Already have an account?{' '}
            <Link to={ROUTES.login} className="text-brand-primary font-bold hover:underline">
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
