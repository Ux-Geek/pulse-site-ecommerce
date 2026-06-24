import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedBannerProps {
  onExploreClick: () => void;
}

export default function FeaturedBanner({ onExploreClick }: FeaturedBannerProps) {
  return (
    <section className="relative w-full h-[400px] sm:h-[480px] bg-rich-black flex items-center overflow-hidden border-b border-border-gray">
      {/* Background Curated Editorial Lifestyle Image */}
      <img
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
        alt="PULSE Texas Urban Streetwear Lifestyle"
        className="absolute inset-0 w-full h-full object-cover opacity-55 hover:scale-[1.02] transition-transform duration-10000 ease-out"
        referrerPolicy="no-referrer"
      />

      {/* Modern gradient shield for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-rich-black via-rich-black/75 to-transparent" />

      {/* Banner Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-left">
        <div className="max-w-xl space-y-4 sm:space-y-6 animate-fade-in">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white rounded-[2px] border border-white/10 text-[10px] font-bold tracking-widest uppercase font-price">
            <Sparkles size={11} className="text-pulse-green fill-pulse-green/10" />
            <span>EXPRESSIVE OUTDOORS SERIES</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-headline">
              Move Different.
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium font-headline">
              Premium sneakers and streetwear curated for modern culture.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
            Inspired by architectural lines, raw concrete structures, and natural Texas afternoon light. Our Summer Series combines high-performance footbeds with architectural outerwear.
          </p>

          <div className="pt-2">
            <button
              onClick={onExploreClick}
              className="px-5 py-3 bg-white hover:bg-nb-red text-rich-black hover:text-white text-xs font-bold tracking-widest uppercase rounded-[2px] shadow-lg transition-all duration-300 flex items-center gap-2 group transform active:scale-95"
              id="btn-banner-explore"
            >
              <span>Explore Collection</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
