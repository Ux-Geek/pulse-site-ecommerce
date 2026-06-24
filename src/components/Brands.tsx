import React from 'react';
import { BRANDS } from '../data';

interface BrandsProps {
  onBrandSelect: (brand: string) => void;
}

export default function Brands({ onBrandSelect }: BrandsProps) {
  const handleBrandClick = (brand: string) => {
    onBrandSelect(brand);
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-nb-grey-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14 overflow-x-auto no-scrollbar py-2">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandClick(brand)}
              className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-nb-grey-400 hover:text-nb-black transition-colors duration-200 whitespace-nowrap shrink-0"
              id={`brand-btn-${brand.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
