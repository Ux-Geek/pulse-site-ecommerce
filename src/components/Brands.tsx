import React from 'react';
import { BRANDS } from '../data';

interface BrandsProps {
  onBrandSelect: (brand: string) => void;
}

export default function Brands({ onBrandSelect }: BrandsProps) {
  const brandLogos: Record<string, string> = {
    'Nike': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=120&auto=format&fit=crop',
    'Jordan': 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=120&auto=format&fit=crop',
    'New Balance': 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=120&auto=format&fit=crop',
    'ASICS': 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=120&auto=format&fit=crop',
    'Adidas': 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=120&auto=format&fit=crop',
    'Hoka': 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=120&auto=format&fit=crop',
    'On': 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=120&auto=format&fit=crop',
    'Represent': 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=120&auto=format&fit=crop',
    'Fear of God': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=120&auto=format&fit=crop'
  };

  const handleBrandClick = (brand: string) => {
    onBrandSelect(brand);
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <p className="text-[10px] font-bold text-pulse-green tracking-[0.2em] uppercase text-center mb-8 font-price">
          OFFICIAL STOCKIST & PARTNERS
        </p>

        {/* Elegant Brand Logo Scrolling-Style Ribbon */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 items-center justify-items-center">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandClick(brand)}
              className="w-full flex flex-col items-center justify-center p-3.5 border border-border-gray hover:border-rich-black rounded-xl bg-soft-gray/50 hover:bg-white hover:shadow-sm transition-all duration-300 group"
              id={`brand-btn-${brand.toLowerCase().replace(' ', '-')}`}
            >
              {/* Render an understated visual reference indicator */}
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border-gray/50 mb-2 flex items-center justify-center bg-white group-hover:scale-105 transition-transform">
                <img
                  src={brandLogos[brand] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=100&auto=format&fit=crop'}
                  alt={brand}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[11px] font-bold text-rich-black/70 group-hover:text-rich-black tracking-wide font-headline">
                {brand}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
