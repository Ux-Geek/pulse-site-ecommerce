import React from 'react';

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
    <footer className="bg-nb-black text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <span className="text-lg font-black tracking-[0.15em] font-headline uppercase">PULSE</span>
          <p className="text-[13px] text-white/50 leading-relaxed">
            Premium sneakers and streetwear. Located at Tanger Outlets Houston, Texas.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/40">Shop</h4>
          <ul className="space-y-2.5">
            <li>
              <button onClick={() => handleCategoryClick('All')} className="text-[13px] text-white/60 hover:text-white transition-colors">
                All Products
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Sneakers')} className="text-[13px] text-white/60 hover:text-white transition-colors">
                Sneakers
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Streetwear')} className="text-[13px] text-white/60 hover:text-white transition-colors">
                Streetwear
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Accessories')} className="text-[13px] text-white/60 hover:text-white transition-colors">
                Accessories
              </button>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/40">Company</h4>
          <ul className="space-y-2.5">
            <li>
              <button onClick={onScrollToStory} className="text-[13px] text-white/60 hover:text-white transition-colors">
                Our Story
              </button>
            </li>
            <li>
              <a href="#story-section" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Events
              </a>
            </li>
            <li>
              <a href="#story-section" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Store Hours
              </a>
            </li>
            <li>
              <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div className="space-y-4">
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/40">Help</h4>
          <ul className="space-y-2.5">
            <li>
              <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/30">
            © 2026 PULSE Houston, Texas. All Rights Reserved.
          </p>
          <div className="flex gap-5 text-[11px] text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Instagram</a>
            <a href="#" className="hover:text-white/60 transition-colors">Twitter</a>
            <a href="#" className="hover:text-white/60 transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
