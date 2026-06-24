import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopClick: (category?: 'Sneakers' | 'Streetwear') => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="relative w-full bg-[#EAEAE8] py-6 sm:py-10 md:py-16 overflow-hidden flex items-center justify-center border-b border-border-gray">
      {/* Decorative Floral Background Elements - inspired by Saviour mockup */}
      <img
        src="https://images.unsplash.com/photo-1519098901909-b1553a1190af?q=80&w=600&auto=format&fit=crop"
        alt="Botanical background accent"
        className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain opacity-30 pointer-events-none -translate-x-12 -translate-y-12 rotate-45 select-none"
        referrerPolicy="no-referrer"
      />
      <img
        src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop"
        alt="Botanical background accent"
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain opacity-30 pointer-events-none translate-x-12 translate-y-12 select-none"
        referrerPolicy="no-referrer"
      />

      {/* Main Saviour-Inspired Card */}
      <div className="max-w-7xl w-[92%] mx-auto bg-white border border-nb-black/10 shadow-2xl relative z-10 p-5 sm:p-8 md:p-12 overflow-hidden rounded-[4px]">
        {/* Card Header (Mockup Style) */}
        <div className="flex justify-between items-center border-b border-nb-grey-medium pb-4 sm:pb-6 mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-nb-black font-headline">
            EST. 2026 / PULSE SITE
          </span>
          <div className="hidden md:flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-nb-black/60">
            <span className="hover:text-nb-red cursor-pointer transition-colors" onClick={() => onShopClick()}>Collection</span>
            <span className="hover:text-nb-red cursor-pointer transition-colors" onClick={() => onShopClick('Sneakers')}>Sneakers</span>
            <span className="hover:text-nb-red cursor-pointer transition-colors" onClick={() => onShopClick('Streetwear')}>Apparel</span>
          </div>
          {/* Asterisk / star icon from Saviour image */}
          <div className="w-5 h-5 flex items-center justify-center text-nb-black animate-spin-slow">
            <span className="text-xl font-bold font-mono">✱</span>
          </div>
        </div>

        {/* Hero Main Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Copy (Left side) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left relative z-20 order-2 lg:order-1">
            {/* Tagline / Subtitle (mockup style) */}
            <p className="text-xs sm:text-sm font-bold tracking-tight text-nb-black/70 leading-relaxed max-w-md">
              An uncompromising fusion of athletic craftsmanship and modern street culture, each release a testament to the art of motion and sartorial performance.
            </p>

            <div className="space-y-4 pt-2">
              <h2 className="text-sm font-black tracking-widest uppercase text-nb-red font-headline">
                New Balance 9060 "Rain Cloud"
              </h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onShopClick('Sneakers')}
                  className="px-5 py-3 bg-nb-red hover:bg-nb-black text-white text-[10px] font-bold tracking-widest uppercase transition-all duration-300 transform active:scale-95 flex items-center gap-2 rounded-[2px]"
                >
                  <span>Explore Sneakers</span>
                  <ArrowRight size={12} />
                </button>
                <button
                  onClick={() => onShopClick('Streetwear')}
                  className="px-5 py-3 bg-white hover:bg-nb-grey-light text-nb-black text-[10px] font-bold tracking-widest uppercase border border-nb-grey-medium hover:border-nb-black transition-all duration-300 rounded-[2px]"
                >
                  Shop Apparel
                </button>
              </div>
            </div>

            {/* Quick stats ticker */}
            <div className="pt-5 sm:pt-6 grid grid-cols-3 gap-4 border-t border-nb-grey-medium max-w-md">
              <div>
                <p className="text-base sm:text-lg font-bold text-nb-black font-price">100%</p>
                <p className="text-[8px] sm:text-[9px] tracking-wider text-nb-black/50 uppercase font-bold">Verified</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-nb-black font-price">NB 9060</p>
                <p className="text-[8px] sm:text-[9px] tracking-wider text-nb-black/50 uppercase font-bold">Featured Drop</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-nb-black font-price">Tanger</p>
                <p className="text-[8px] sm:text-[9px] tracking-wider text-nb-black/50 uppercase font-bold">Flagship</p>
              </div>
            </div>
          </div>

          {/* Overlapping Typography Visual Frame (Right side / Top on mobile) */}
          <div className="lg:col-span-7 relative flex items-center justify-center h-[260px] sm:h-[350px] md:h-[420px] overflow-hidden bg-[#F6F6F4] border border-nb-grey-medium rounded-[2px] p-4 order-1 lg:order-2">
            {/* Massive background typography "PULSE" */}
            <div className="absolute inset-0 flex items-center justify-center z-0 select-none overflow-hidden">
              <span className="font-display font-black text-nb-black/[0.06] text-[18vw] lg:text-[13vw] tracking-tighter uppercase leading-none transform scale-x-110">
                PULSE
              </span>
            </div>

            {/* Secondary layered background typography "9060" */}
            <div className="absolute top-6 right-6 z-0 opacity-[0.06]">
              <span className="font-headline font-black text-nb-black text-5xl tracking-widest uppercase">
                9060
              </span>
            </div>

            {/* Overlapping Shoe Image - layered relative to z-index */}
            <img
              src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop"
              alt="New Balance 9060"
              className="max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-700 ease-out z-10 relative"
              referrerPolicy="no-referrer"
            />

            {/* In-Stock Badge overlay */}
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-nb-grey-medium px-3 py-1.5 shadow-md z-20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-nb-red animate-ping" />
              <div className="text-left">
                <p className="text-[7px] font-bold text-nb-black/50 uppercase tracking-widest leading-none">In Stock</p>
                <p className="text-[9px] font-bold text-nb-black leading-tight font-headline">NB 9060 Rain Cloud</p>
              </div>
            </div>

            {/* Price badge */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-nb-grey-medium px-2.5 py-1 shadow-md z-20">
              <span className="text-[10px] font-bold text-nb-black font-price">$150.00</span>
            </div>
          </div>
        </div>

        {/* Artistic details on the bottom of the card */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-nb-grey-medium flex flex-wrap justify-between items-center text-[8px] sm:text-[9px] font-bold text-nb-black/40 uppercase tracking-widest gap-2">
          <span>First Edition</span>
          <span>Curated Athletics Collection</span>
          <span>Art Directed Layout</span>
          <span>Pre-released Drop</span>
        </div>
      </div>
    </section>
  );
}
