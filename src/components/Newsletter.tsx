import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-rich-black text-white py-16 sm:py-24 border-b border-border-gray relative overflow-hidden">
      {/* Decorative structural grid mesh overlay - very subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-pulse-green tracking-[0.25em] uppercase font-price block">
              PULSE INSIDER ACCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-headline">
              Join the Culture Catalog
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-sans max-w-lg mx-auto">
              Subscribe to unlock early-access reservation slots, private boutique events at Tanger Outlets Houston, and limited product release calendars.
            </p>
          </div>

          {/* Form / State transition */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
                  <Mail size={15} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-pulse-green focus:bg-white/10 focus:outline-none rounded-[2px] py-3.5 pl-11 pr-4 text-xs font-medium placeholder-white/30 text-white transition-all font-sans"
                  id="input-newsletter-email"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-pulse-green hover:bg-pulse-green/95 text-white text-xs font-bold tracking-widest uppercase rounded-[2px] shadow-lg transition-all duration-300 transform active:scale-95 whitespace-nowrap"
                id="btn-newsletter-subscribe"
              >
                Get VIP Access
              </button>
            </form>
          ) : (
            <div className="p-6 bg-white/5 border border-white/10 rounded-[2px] max-w-md mx-auto flex items-center gap-3.5 text-left animate-fade-in">
              <div className="p-2 bg-pulse-green/10 text-pulse-green rounded-[2px] shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white font-headline">You're on the list</h4>
                <p className="text-[11px] text-white/50 font-sans mt-0.5">
                  Welcome to PULSE. Watch your inbox for private launch keys.
                </p>
              </div>
            </div>
          )}

          {/* Fine print */}
          <p className="text-[10px] text-white/30 font-sans pt-2">
            No spam. Unsubscribe any time. Read our{' '}
            <a href="#" className="underline hover:text-pulse-green transition-colors">Privacy Policy</a>.
          </p>

        </div>
      </div>
    </section>
  );
}
