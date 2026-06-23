import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopClick: (category?: 'Sneakers' | 'Streetwear') => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="relative w-full min-h-[85vh] bg-gradient-to-b from-white via-[#FBFBFB] to-soft-gray flex items-center overflow-hidden py-12 md:py-20 border-b border-border-gray">
      {/* Background Accent Gradients - Soft, non-neon, elegant */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pulse-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-rich-black/[0.02] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Copy (Left 6 Columns on Desktop) */}
        <div className="md:col-span-6 space-y-6 lg:space-y-8 text-left animate-fade-in">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pulse-green/10 text-pulse-green rounded-full border border-pulse-green/15 text-[10px] sm:text-xs font-bold tracking-widest uppercase font-price">
            <Sparkles size={12} className="fill-pulse-green/15" />
            <span>Tanger Outlets flagship destination</span>
          </div>

          {/* Large Editorial Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-rich-black leading-[0.95] font-headline">
              PULSE
            </h1>
            <p className="text-2xl sm:text-3xl font-medium tracking-tight text-rich-black/80 font-headline">
              Sneakers & Streetwear
            </p>
          </div>

          {/* Balanced Editorial Body Copy */}
          <p className="text-sm sm:text-base text-rich-black/60 leading-relaxed max-w-lg font-sans">
            Elevated footwear and apparel curated for movement and everyday culture. Experience a premium, handpicked selection of top-tier brands and exclusive drops in the heart of Texas.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onShopClick('Sneakers')}
              className="px-6 py-3.5 bg-rich-black hover:bg-pulse-green text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 flex items-center gap-2 group"
              id="btn-hero-shop-sneakers"
            >
              <span>Explore Sneakers</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              onClick={() => onShopClick('Streetwear')}
              className="px-6 py-3.5 bg-white hover:bg-soft-gray text-rich-black text-xs font-bold tracking-widest uppercase rounded-full border border-border-gray hover:border-rich-black transition-all duration-300 transform active:scale-95"
              id="btn-hero-shop-streetwear"
            >
              Shop Apparel
            </button>
          </div>

          {/* Quick Stats Ticker */}
          <div className="pt-6 lg:pt-10 grid grid-cols-3 gap-4 border-t border-border-gray max-w-md">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-rich-black font-price">100%</p>
              <p className="text-[10px] tracking-wider text-rich-black/40 uppercase font-bold">Authenticated</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-rich-black font-price">25+</p>
              <p className="text-[10px] tracking-wider text-rich-black/40 uppercase font-bold">Premium Brands</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-rich-black font-price">Texas</p>
              <p className="text-[10px] tracking-wider text-rich-black/40 uppercase font-bold">Based Boutique</p>
            </div>
          </div>

        </div>

        {/* Hero Visual Imagery (Right 6 Columns on Desktop) */}
        <div className="md:col-span-6 relative flex justify-center items-center h-[350px] sm:h-[450px] md:h-[500px]">
          
          {/* Subtle geometric structural base */}
          <div className="absolute inset-0 bg-gradient-to-tr from-soft-gray to-white rounded-[2rem] border border-border-gray/50 transform rotate-1 md:rotate-3 scale-95 pointer-events-none" />
          
          {/* Ambient circular frame shadow */}
          <div className="absolute w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full bg-soft-gray border border-border-gray/30 flex items-center justify-center animate-pulse" />

          {/* Primary floating sneaker shot */}
          <img
            src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop"
            alt="PULSE Curated Sneaker Culture - New Balance 9060"
            className="absolute max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-700 ease-out z-10"
            referrerPolicy="no-referrer"
          />

          {/* Curated floating detail accents */}
          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm border border-border-gray px-3.5 py-2.5 rounded-xl shadow-md z-20 flex items-center gap-2.5 max-w-[180px] transition-transform hover:-translate-y-1">
            <div className="w-2.5 h-2.5 rounded-full bg-pulse-green animate-ping" />
            <div className="text-left">
              <p className="text-[9px] font-bold text-rich-black/40 uppercase tracking-widest">In Stock Now</p>
              <p className="text-[11px] font-bold text-rich-black leading-tight font-headline truncate">NB 9060 "Rain Cloud"</p>
            </div>
          </div>

          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm border border-border-gray px-3 py-2 rounded-xl shadow-md z-20 flex items-center gap-2 transition-transform hover:translate-y-1">
            <span className="text-[11px] font-bold text-rich-black font-price">$150.00</span>
            <span className="text-[9px] font-bold text-pulse-green bg-pulse-green/10 px-1.5 py-0.5 rounded-md">Trending</span>
          </div>

        </div>

      </div>
    </section>
  );
}
