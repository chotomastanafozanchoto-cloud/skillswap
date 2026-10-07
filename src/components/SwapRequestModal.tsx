import React, { useState } from 'react';
import { SkillSwapPair } from '../types';
import { X, Repeat, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SwapRequestModalProps {
  swapPair: SkillSwapPair | null;
  onClose: () => void;
  onSuccess: (id: string) => void;
}

export const SwapRequestModal: React.FC<SwapRequestModalProps> = ({
  swapPair,
  onClose,
  onSuccess,
}) => {
  const [offeredSkill, setOfferedSkill] = useState<string>('Figma & UI/UX Design');
  const [weeklyHours, setWeeklyHours] = useState<number>(4);
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!swapPair) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}

      setTimeout(() => {
        onSuccess(swapPair.id);
        onClose();
      }, 1800);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl border-2 border-brand-border shadow-soft-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-primary p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2 text-xs font-bold text-brand-sky mb-1">
            <Repeat className="w-4 h-4" />
            <span>Peer Skill Barter Match</span>
          </div>
          <h3 className="text-xl font-black text-white">
            Connect with {swapPair.studentName}
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            They teach: <span className="font-bold text-white">{swapPair.teachSkill.name}</span> &bull; Wants to learn: <span className="font-bold text-white">{swapPair.learnSkill.name}</span>
          </p>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-brand-navy">
              Skill Swap Request Sent!
            </h4>
            <p className="text-sm text-brand-mutedText">
              {swapPair.studentName} has received your invitation. Once accepted, a mutual collaboration workspace will be unlocked!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                The Skill You Will Teach in Exchange:
              </label>
              <input
                type="text"
                value={offeredSkill}
                onChange={(e) => setOfferedSkill(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Commitment (Hours per Week)
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Introductory Note
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder={`Hi ${swapPair.studentName}, I saw you want to learn ${swapPair.learnSkill.name}. I'd love to exchange lessons for your ${swapPair.teachSkill.name} expertise!`}
                className="w-full p-3 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm"
              />
            </div>

            <div className="pt-2 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-brand-mutedText hover:text-brand-navy hover:bg-slate-100 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white text-xs font-bold shadow-soft transition-all flex items-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Swap Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
