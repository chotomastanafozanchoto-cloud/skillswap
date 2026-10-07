import React, { useState } from 'react';
import { Project } from '../types';
import { X, Send, DollarSign, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ApplyModalProps {
  project: Project | null;
  onClose: () => void;
  onSuccess: (projectId: string) => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ project, onClose, onSuccess }) => {
  const [bidAmount, setBidAmount] = useState<number>(project ? project.budget : 100);
  const [estimatedDays, setEstimatedDays] = useState<string>('7 days');
  const [coverLetter, setCoverLetter] = useState<string>('');
  const [portfolioLink, setPortfolioLink] = useState<string>('https://github.com/fozan');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger confetti celebration!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}

      setTimeout(() => {
        onSuccess(project.id);
        onClose();
      }, 1800);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl border-2 border-brand-border shadow-soft-xl overflow-hidden">
        {/* Header */}
        <div className="bg-brand-navy p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="text-[10px] font-black uppercase tracking-wider text-brand-sky bg-white/10 px-2.5 py-0.5 rounded-full">
            Submit Proposal
          </span>
          <h3 className="text-xl font-bold mt-2 text-white">
            {project.title}
          </h3>
          <p className="text-xs text-blue-200 mt-1">
            Client: {project.client.name} &bull; Budget: ${project.budget}
          </p>
        </div>

        {/* Content / Form */}
        {isSuccess ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-brand-navy">
              Proposal Sent Successfully!
            </h4>
            <p className="text-sm text-brand-mutedText">
              The client has been notified in real-time. You can track this application in your Student Dashboard.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5">
                  Your Bid Amount ($ USD)
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(Number(e.target.value))}
                    required
                    min={10}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy mb-1.5">
                  Estimated Delivery Time
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-mutedText" />
                  <input
                    type="text"
                    value={estimatedDays}
                    onChange={(e) => setEstimatedDays(e.target.value)}
                    required
                    placeholder="e.g. 5 days"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-semibold"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Cover Letter & Pitch
              </label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                required
                rows={4}
                placeholder="Explain why you are the ideal student for this project, relevant coursework, or tools you will use..."
                className="w-full p-3 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                Portfolio / GitHub Link
              </label>
              <input
                type="url"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
                required
                placeholder="https://..."
                className="w-full px-3 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm"
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
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Proposal</span>
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
