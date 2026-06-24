import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturedBannerProps {
  onExploreClick: () => void;
}

export default function FeaturedBanner({ onExploreClick }: FeaturedBannerProps) {
  return (
    <section className="relative w-full h-[420px] sm:h-[520px] overflow-hidden bg-nb-black">
      {/* Full-bleed Editorial Image */}
      <img
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1800&auto=format&fit=crop"
        alt="PULSE Urban Lifestyle"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        referrerPolicy="no-referrer"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-lg space-y-5">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
              Summer Collection
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95] font-headline uppercase">
              Move<br />Different.
            </h2>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Premium sneakers and streetwear curated for modern culture. Designed for those who move with purpose.
            </p>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-nb-grey-100 text-nb-black text-[13px] font-bold tracking-wider uppercase transition-all group"
              id="btn-banner-explore"
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
