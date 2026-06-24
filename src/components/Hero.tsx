import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopClick: (category?: 'Sneakers' | 'Streetwear') => void;
}

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1800&auto=format&fit=crop',
    subtitle: 'Summer 2026',
    title: 'RUN YOUR\nWAY',
    cta: 'Shop Sneakers',
    category: 'Sneakers' as const,
  },
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1800&auto=format&fit=crop',
    subtitle: 'New Collection',
    title: 'STREET\nESSENTIALS',
    cta: 'Shop Streetwear',
    category: 'Streetwear' as const,
  },
  {
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1800&auto=format&fit=crop',
    subtitle: 'Just Dropped',
    title: 'BUILT FOR\nMOTION',
    cta: 'Shop All',
    category: undefined,
  }
];

export default function Hero({ onShopClick }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 400);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative w-full h-[85vh] min-h-[500px] max-h-[900px] overflow-hidden bg-nb-black">
      {/* Background Image with Ken Burns */}
      {heroSlides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content — positioned at bottom-left, NB style */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16 md:pb-20">
          <div
            className={`max-w-2xl space-y-5 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-white/70">
              {slide.subtitle}
            </p>

            {/* Main Heading — large, bold, NB-style */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight font-headline uppercase whitespace-pre-line">
              {slide.title}
            </h1>

            {/* CTA Button — solid white rectangle */}
            <div className="pt-2">
              <button
                onClick={() => onShopClick(slide.category)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-nb-grey-100 text-nb-black text-[13px] font-bold tracking-wider uppercase transition-all duration-200 group"
                id="btn-hero-shop"
              >
                <span>{slide.cta}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Slide Indicators — minimal dots */}
          <div className="flex items-center gap-2.5 mt-8">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setActiveSlide(idx);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`transition-all duration-300 ${
                  idx === activeSlide
                    ? 'w-8 h-[3px] bg-white'
                    : 'w-3 h-[3px] bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                id={`hero-slide-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
