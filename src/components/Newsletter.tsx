import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <section className="py-16 sm:py-20 bg-nb-grey-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-xl mx-auto space-y-5">

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-nb-black font-headline uppercase">
            Stay in the Loop
          </h2>
          <p className="text-sm text-nb-grey-500">
            Sign up for early access to new drops, exclusive events, and special offers.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto pt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 bg-white border border-nb-grey-300 py-3.5 px-4 text-sm text-nb-black focus:outline-none focus:border-nb-black placeholder-nb-grey-400 transition-colors"
                id="input-newsletter-email"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-nb-black hover:bg-nb-grey-600 text-white text-[12px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                id="btn-newsletter-subscribe"
              >
                <span>Sign Up</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 animate-fade-in">
              <CheckCircle2 size={20} className="text-nb-black" />
              <div className="text-left">
                <p className="text-sm font-bold text-nb-black">You're on the list.</p>
                <p className="text-xs text-nb-grey-500">Watch your inbox for early access.</p>
              </div>
            </div>
          )}

          <p className="text-[11px] text-nb-grey-400">
            No spam. Unsubscribe anytime. Read our{' '}
            <a href="#" className="underline hover:text-nb-black transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
