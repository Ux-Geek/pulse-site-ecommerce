import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, ChevronRight } from 'lucide-react';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: 'New Arrivals', value: 'All' },
    { label: 'Sneakers', value: 'Sneakers' },
    { label: 'Streetwear', value: 'Streetwear' },
    { label: 'Accessories', value: 'Accessories' }
  ];

  const scrollToProducts = () => {
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Promo Bar — clean black, centered text */}
      <div className="w-full bg-nb-black text-white text-[11px] tracking-[0.12em] uppercase py-2.5 text-center font-medium">
        <span>Free Shipping on Orders Over $100</span>
        <span className="hidden sm:inline mx-3 text-nb-grey-400">|</span>
        <span className="hidden sm:inline">Free In-Store Pickup Available</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-nb-grey-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex justify-between items-center">

          {/* Left: Mobile Menu + Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-nb-black md:hidden"
              aria-label="Toggle menu"
              id="btn-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Brand Logo */}
            <button
              onClick={() => {
                onCategorySelect('All');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl sm:text-2xl font-black tracking-[0.15em] text-nb-black font-headline uppercase"
              id="btn-brand-logo"
            >
              PULSE
            </button>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onCategorySelect(item.value as any);
                  scrollToProducts();
                }}
                className={`text-[13px] font-medium tracking-wide uppercase transition-all relative py-1 link-underline ${
                  activeCategory === item.value
                    ? 'text-nb-black font-semibold'
                    : 'text-nb-grey-500 hover:text-nb-black'
                }`}
                id={`nav-item-${item.value}`}
              >
                {item.label}
                {activeCategory === item.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-nb-black" />
                )}
              </button>
            ))}
            <button
              onClick={onScrollToStory}
              className="text-[13px] font-medium tracking-wide uppercase text-nb-grey-500 hover:text-nb-black transition-all link-underline py-1"
              id="nav-item-story"
            >
              Our Story
            </button>
          </nav>

          {/* Right: Utility Icons */}
          <div className="flex items-center gap-1">
            {/* Search toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-nb-black hover:text-nb-grey-500 transition-colors"
              aria-label="Search"
              id="btn-search-toggle"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="p-2.5 text-nb-black hover:text-nb-grey-500 transition-colors relative"
              aria-label="Wishlist"
              id="btn-wishlist-open"
            >
              <Heart size={20} strokeWidth={1.5} className={wishlistCount > 0 ? 'fill-nb-black' : ''} />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-[6px] h-[6px] bg-nb-red rounded-full" />
              )}
            </button>

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="p-2.5 text-nb-black hover:text-nb-grey-500 transition-colors relative"
              aria-label="Shopping bag"
              id="btn-cart-open"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0.5 bg-nb-black text-white text-[9px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full font-price">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-nb-grey-200 z-40 animate-fade-in">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center gap-4">
            <Search size={18} className="text-nb-grey-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              autoFocus
              className="flex-1 text-sm text-nb-black bg-transparent focus:outline-none placeholder-nb-grey-400"
              id="input-header-search"
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                if (!searchTerm) onSearchChange('');
              }}
              className="text-sm text-nb-grey-500 hover:text-nb-black uppercase tracking-wide font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[106px] z-40 bg-white md:hidden animate-fade-in overflow-y-auto">
          <div className="p-6 space-y-8">
            {/* Search */}
            <div className="flex items-center gap-3 border-b border-nb-grey-200 pb-4">
              <Search size={18} className="text-nb-grey-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                className="flex-1 text-sm text-nb-black bg-transparent focus:outline-none placeholder-nb-grey-400"
              />
            </div>

            {/* Nav Links */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onCategorySelect(item.value as any);
                    setIsMobileMenuOpen(false);
                    scrollToProducts();
                  }}
                  className={`w-full flex items-center justify-between py-3.5 text-left text-base font-semibold tracking-wide uppercase border-b border-nb-grey-200 transition-colors ${
                    activeCategory === item.value ? 'text-nb-black' : 'text-nb-grey-500'
                  }`}
                  id={`mobile-nav-${item.value}`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="text-nb-grey-400" />
                </button>
              ))}
              <button
                onClick={() => {
                  onScrollToStory();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between py-3.5 text-left text-base font-semibold tracking-wide uppercase text-nb-grey-500 border-b border-nb-grey-200"
                id="mobile-nav-story"
              >
                <span>Our Story</span>
                <ChevronRight size={16} className="text-nb-grey-400" />
              </button>
            </div>

            {/* Store Info */}
            <div className="pt-4 space-y-2 text-sm text-nb-grey-500">
              <p className="font-semibold text-nb-black uppercase text-xs tracking-wider">Find a Store</p>
              <p>Tanger Outlets Houston, Texas</p>
              <p className="text-xs text-nb-grey-400">Mon—Sat 10am–9pm · Sun 11am–6pm</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
