import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, MapPin, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeCategory: string;
  onCategorySelect: (category: 'All' | 'Sneakers' | 'Streetwear' | 'Accessories') => void;
  onScrollToStory: () => void;
}

export default function Header({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchTerm,
  onSearchChange,
  activeCategory,
  onCategorySelect,
  onScrollToStory
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navItems = [
    { label: 'All Collection', value: 'All' },
    { label: 'Sneakers', value: 'Sneakers' },
    { label: 'Streetwear', value: 'Streetwear' },
    { label: 'Accessories', value: 'Accessories' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border-gray">
      {/* Tanger Outlets Location Ticker */}
      <div className="w-full bg-rich-black text-white text-[11px] font-medium tracking-[0.15em] uppercase py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-1.5 font-price">
        <div className="flex items-center gap-1">
          <MapPin size={12} className="text-pulse-green fill-pulse-green/10" />
          <span>Tanger Outlets Houston · Texas</span>
        </div>
        <div className="flex items-center gap-2">
          <span>SUMMER RELEASE EVENT LIVE</span>
          <span className="hidden sm:inline text-white/50">|</span>
          <span className="text-pulse-green font-semibold">FREE IN-STORE PICKUP & COURIER DELIVERIES</span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center gap-4">
        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -ml-2 text-rich-black hover:text-pulse-green transition-colors md:hidden"
          aria-label="Toggle menu"
          id="btn-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Brand Logo - Neutral, premium, bold */}
        <div className="flex items-baseline gap-2">
          <button
            onClick={() => {
              onCategorySelect('All');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl sm:text-3xl font-extrabold tracking-[0.12em] text-rich-black font-headline transition-transform active:scale-95"
            id="btn-brand-logo"
          >
            PULSE
          </button>
          <span className="text-[9px] font-bold tracking-widest text-pulse-green uppercase hidden sm:inline font-price">
            HOUSTON
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onCategorySelect(item.value as any);
                const section = document.getElementById('products-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 relative py-2 ${
                (activeCategory === item.value)
                  ? 'text-pulse-green'
                  : 'text-rich-black/70 hover:text-pulse-green'
              }`}
              id={`nav-item-${item.value}`}
            >
              {item.label}
              {(activeCategory === item.value) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pulse-green rounded" />
              )}
            </button>
          ))}
          <button
            onClick={onScrollToStory}
            className="text-xs font-bold tracking-widest uppercase text-rich-black/70 hover:text-pulse-green transition-all duration-200 py-2"
            id="nav-item-story"
          >
            Our Story
          </button>
        </nav>

        {/* Search & Utility Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Elegant Search Bar */}
          <div className="relative flex items-center">
            <div
              className={`flex items-center bg-soft-gray rounded-full border border-border-gray transition-all duration-300 ${
                isSearchExpanded || searchTerm ? 'w-44 sm:w-64 px-3 py-1.5' : 'w-0 md:w-48 px-0 md:px-3 md:py-1.5 border-transparent md:border-border-gray'
              }`}
            >
              <Search size={14} className="text-rich-black/40 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search collection..."
                className="ml-2 w-full bg-transparent text-xs text-rich-black focus:outline-none placeholder-rich-black/40 font-medium"
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => {
                  if (!searchTerm) setIsSearchExpanded(false);
                }}
                id="input-header-search"
              />
              {searchTerm && (
                <button
                  onClick={() => onSearchChange('')}
                  className="p-0.5 hover:bg-border-gray rounded-full"
                  id="btn-clear-search"
                >
                  <X size={10} className="text-rich-black/50" />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="p-2 text-rich-black hover:text-pulse-green transition-colors md:hidden"
              id="btn-search-toggle"
            >
              {!isSearchExpanded && !searchTerm && <Search size={18} />}
            </button>
          </div>

          {/* Wishlist Icon */}
          <button
            onClick={onOpenWishlist}
            className="p-2 text-rich-black hover:text-pulse-green transition-colors relative"
            aria-label="Wishlist"
            id="btn-wishlist-open"
          >
            <Heart size={18} className={wishlistCount > 0 ? 'fill-pulse-green text-pulse-green' : ''} />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pulse-green rounded-full" />
            )}
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="p-2 bg-soft-gray hover:bg-border-gray rounded-full text-rich-black transition-all flex items-center justify-center relative w-10 h-10"
            aria-label="Shopping bag"
            id="btn-cart-open"
          >
            <ShoppingBag size={16} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pulse-green text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full font-price min-w-[18px] text-center border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[112px] z-40 bg-white/95 backdrop-blur-md md:hidden animate-fade-in border-t border-border-gray flex flex-col justify-between">
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-semibold tracking-widest text-rich-black/40 uppercase">
                Categories
              </span>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      onCategorySelect(item.value as any);
                      setIsMobileMenuOpen(false);
                      const section = document.getElementById('products-section');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`text-lg font-bold tracking-wide text-left flex items-center justify-between group ${
                      activeCategory === item.value ? 'text-pulse-green' : 'text-rich-black'
                    }`}
                    id={`mobile-nav-${item.value}`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-pulse-green" />
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-border-gray" />

            <div className="space-y-4">
              <span className="text-[10px] font-semibold tracking-widest text-rich-black/40 uppercase">
                Explore More
              </span>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    onScrollToStory();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-bold tracking-wide text-left text-rich-black"
                  id="mobile-nav-story"
                >
                  Our Story
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-soft-gray border-t border-border-gray space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-rich-black/70">
              <MapPin size={14} className="text-pulse-green" />
              <span>Tanger Outlets Houston, Texas</span>
            </div>
            <p className="text-[11px] text-rich-black/50 leading-relaxed font-sans">
              Experience the perfect intersection of performance footwear and premium street culture.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
