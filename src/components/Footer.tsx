import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onCategorySelect: (category: 'All' | 'Sneakers' | 'Streetwear' | 'Accessories') => void;
  onScrollToStory: () => void;
}

export default function Footer({ onCategorySelect, onScrollToStory }: FooterProps) {
  const handleCategoryClick = (category: any) => {
    onCategorySelect(category);
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-white border-t border-border-gray pt-16 pb-8 text-left text-xs text-rich-black/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border-gray">
        
        {/* Brand Meta Block */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black tracking-widest text-rich-black font-headline">PULSE</span>
            <span className="text-[9px] font-bold text-pulse-green tracking-widest uppercase font-price">HOUSTON</span>
          </div>
          <p className="text-[11px] text-rich-black/50 leading-relaxed">
            Where performance footwear meets elevated street culture. Located at Tanger Outlets Houston, Texas.
          </p>
          
          <div className="space-y-2 pt-2 text-[11px]">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-pulse-green shrink-0" />
              <span>Suite 412, Tanger Court Mall Road, Texas</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-pulse-green shrink-0" />
              <span className="font-price">+1 (281) 555-0195</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-pulse-green shrink-0" />
              <span>houston@pulse-culture.com</span>
            </div>
          </div>
        </div>

        {/* Catalog Directory */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-rich-black font-headline">
            Catalog Directory
          </h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button onClick={() => handleCategoryClick('All')} className="hover:text-pulse-green transition-colors">
                All Collection
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Sneakers')} className="hover:text-pulse-green transition-colors">
                Premium Sneakers
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Streetwear')} className="hover:text-pulse-green transition-colors">
                Elevated Streetwear
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Accessories')} className="hover:text-pulse-green transition-colors">
                Minimal Accessories
              </button>
            </li>
          </ul>
        </div>

        {/* Customer Concierge */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-rich-black font-headline">
            Store & Concierge
          </h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <button onClick={onScrollToStory} className="hover:text-pulse-green transition-colors">
                Boutique Story
              </button>
            </li>
            <li>
              <a href="#story-section" className="hover:text-pulse-green transition-colors">
                In-Store Events
              </a>
            </li>
            <li>
              <a href="#story-section" className="hover:text-pulse-green transition-colors">
                Boutique Hours
              </a>
            </li>
            <li>
              <span className="text-[10px] bg-pulse-green/10 text-pulse-green font-bold px-2 py-0.5 rounded font-price whitespace-nowrap">
                FREE RESERVATIONS IN-APP
              </span>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-rich-black font-headline">
            Digital Info
          </h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <a href="#" className="hover:text-pulse-green transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-pulse-green transition-colors">Terms of Use</a>
            </li>
            <li>
              <a href="#" className="hover:text-pulse-green transition-colors">Refund Guidelines</a>
            </li>
            <li>
              <a href="#" className="hover:text-pulse-green transition-colors flex items-center gap-1">
                <span>Developer API</span>
                <ExternalLink size={10} />
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-rich-black/40">
        <p>© 2026 PULSE Houston, Texas. All Rights Reserved.</p>
        <p className="font-price uppercase tracking-widest text-pulse-green font-bold">
          BUILDING THE INTERSECTION OF MOVEMENT & APPAREL
        </p>
      </div>
    </footer>
  );
}
