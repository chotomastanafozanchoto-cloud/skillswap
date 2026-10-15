import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Github,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    role: 'Student',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 800);
  };

  const contactChannels = [
    {
      title: "Direct Email",
      value: "fozan.dev@skillswap.pk",
      icon: Mail,
      link: "mailto:fozan.dev@skillswap.pk",
      accent: "bg-blue-100 text-blue-700",
    },
    {
      title: "Phone Support",
      value: "+92 300 1234567",
      icon: Phone,
      link: "tel:+923001234567",
      accent: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "WhatsApp Direct",
      value: "Chat on WhatsApp",
      icon: MessageSquare,
      link: "https://whatsapp.com",
      accent: "bg-green-100 text-green-700",
    },
    {
      title: "Instagram",
      value: "@fozan.codes",
      icon: Instagram,
      link: "https://instagram.com",
      accent: "bg-purple-100 text-purple-700",
    },
    {
      title: "GitHub Repository",
      value: "github.com/fozan",
      icon: Github,
      link: "https://github.com",
      accent: "bg-slate-100 text-slate-800",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-brand-border shadow-soft mb-3">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
              Get In Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Have an Idea, Project or Collaboration?
          </h1>
          <p className="text-base sm:text-lg text-brand-mutedText mt-3 font-medium">
            Let’s connect! Whether you are a business looking for student developers, a student with platform feedback, or a recruiter reaching out to founder Fozan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Founder Direct Card with Uploaded Photo */}
            <div className="bg-white p-5 rounded-3xl border-2 border-brand-border shadow-soft mb-6 flex items-center space-x-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-primary p-0.5 shrink-0 shadow-soft">
                <img
                  src="/fozan_jersey.jpg"
                  alt="Fozan - Web Developer as a Problem Solver"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-brand-primary bg-brand-lightBlue px-2 py-0.5 rounded-full border border-brand-sky">
                  Founder & Architect
                </span>
                <h4 className="text-base font-black text-brand-navy mt-1">Fozan</h4>
                <p className="text-xs text-brand-mutedText font-semibold">
                  “Web developer as a problem solver.”
                </p>
              </div>
            </div>

            <h3 className="text-base font-extrabold text-brand-navy mb-4">
              Direct Communication Channels
            </h3>

            {contactChannels.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={i}
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-5 rounded-2xl border-2 border-brand-border shadow-soft hover:shadow-soft-lg hover:border-brand-primary transition-all flex items-center space-x-4 group block"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.accent}`}>
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-mutedText">
                      {c.title}
                    </p>
                    <p className="text-sm font-extrabold text-brand-navy group-hover:text-brand-primary transition-colors">
                      {c.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Quick Location & Availability */}
            <div className="bg-brand-lightBlue/70 p-5 rounded-2xl border border-brand-border space-y-2 mt-6">
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-darkText">
                <Clock className="w-4 h-4 text-brand-primary" />
                <span>Response Time: Typically under 2 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-darkText">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span>Operating Globally &bull; Remote First</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-brand-border shadow-soft-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-brand-mutedText max-w-md mx-auto">
                    Thank you for reaching out. Fozan and the SkillSwap team will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', role: 'Student', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold mt-2"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-black text-brand-navy mb-1">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-brand-mutedText mb-4">
                    Fill out the form below and we will connect with you promptly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ali@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        I Am A:
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-semibold text-brand-navy bg-white"
                      >
                        <option value="Student">Student Developer / Creator</option>
                        <option value="Client">Client / Business Owner</option>
                        <option value="Recruiter">Recruiter / Partner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Project inquiry or feedback"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share details regarding your project, inquiry, or partnership idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-blue-glow transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Let’s Connect</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
