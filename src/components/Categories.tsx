import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoriesProps {
  onCategorySelect: (category: 'All' | 'Sneakers' | 'Streetwear' | 'Accessories') => void;
}

export default function Categories({ onCategorySelect }: CategoriesProps) {
  const items = [
    {
      title: 'Sneakers',
      tagline: 'CURATED COMFORT & PERFORMANCE',
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'Sneakers'
    },
    {
      title: 'Streetwear',
      tagline: 'ELEVATED EVERYDAY UTILITY',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'Streetwear'
    },
    {
      title: 'Accessories',
      tagline: 'PREMIUM STUDIO ESSENTIALS',
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'Accessories'
    },
    {
      title: 'New Arrivals',
      tagline: 'LIMITED DROP CATALOGS',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'All'
    }
  ];

  const handleCardClick = (categoryKey: string) => {
    onCategorySelect(categoryKey as any);
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-soft-gray border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-left space-y-2 mb-12">
          <p className="text-[10px] font-bold text-pulse-green tracking-[0.2em] uppercase font-price">
            EDITORIAL DIRECTION
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-rich-black font-headline">
            Shop Categories
          </h2>
          <p className="text-xs sm:text-sm text-rich-black/50 max-w-xl font-sans">
            Explore specific collections tailored with Apple-level spacing and high-end streetwear presentation.
          </p>
        </div>

        {/* 2x2 Bento Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item.categoryKey)}
              className="group relative h-[380px] sm:h-[420px] rounded-[2px] overflow-hidden cursor-pointer shadow-md border border-border-gray/30 bg-rich-black flex flex-col justify-end p-6"
              id={`category-card-${item.title.toLowerCase().replace(' ', '-')}`}
            >
              {/* Image with subtle hover zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/30 to-transparent opacity-90" />

              {/* Text Meta Content */}
              <div className="relative z-10 space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out text-left">
                <span className="text-[9px] font-bold tracking-widest text-pulse-green bg-pulse-green/10 border border-pulse-green/20 px-2.5 py-1 rounded-[1px] uppercase font-price">
                  {item.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-headline">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-1 text-xs font-semibold text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1.5">
                  <span>Explore Collection</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
