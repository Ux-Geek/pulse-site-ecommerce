import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import ProductCard from './ProductCard';
import { SlidersHorizontal, ArrowUpDown, RefreshCw, Layers } from 'lucide-react';

interface NewArrivalsProps {
  onQuickAdd: (product: Product, size: string) => void;
  onWishlistToggle: (id: string) => void;
  wishlist: string[];
  onProductClick: (product: Product) => void;
  activeCategory: string;
  onCategorySelect: (category: 'All' | 'Sneakers' | 'Streetwear' | 'Accessories') => void;
}

export default function NewArrivals({
  onQuickAdd,
  onWishlistToggle,
  wishlist,
  onProductClick,
  activeCategory,
  onCategorySelect
}: NewArrivalsProps) {
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');

  // Filter & Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    let list = PRODUCTS;

    // Filter by main category
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Filter by brand
    if (selectedBrand !== 'All') {
      list = list.filter((p) => p.brand === selectedBrand);
    }

    // Sort
    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    // Always crop to a standard grid space for "New Arrivals", but let's show up to 8 cards
    return list;
  }, [activeCategory, selectedBrand, sortBy]);

  // Extract unique brands in current selection
  const brandsList = useMemo(() => {
    const brands = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (activeCategory === 'All' || p.category === activeCategory) {
        brands.add(p.brand);
      }
    });
    return ['All', ...Array.from(brands)];
  }, [activeCategory]);

  return (
    <section id="products-section" className="py-16 sm:py-24 bg-white border-b border-border-gray scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-pulse-green tracking-[0.2em] uppercase font-price">
              <Layers size={12} />
              <span>PULSE Tanger Outlets Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-rich-black font-headline">
              New Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-rich-black/50 max-w-xl font-sans">
              Our latest curation of high-demand performance sneakers and everyday luxury streetwear.
            </p>
          </div>

          {/* Quick Category Tab Selectors */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Sneakers', 'Streetwear', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onCategorySelect(cat as any);
                  setSelectedBrand('All'); // Reset brand on category change
                }}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-rich-black text-white'
                    : 'bg-soft-gray hover:bg-border-gray text-rich-black/70 hover:text-rich-black'
                }`}
                id={`cat-pill-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Filters Controls Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-y border-border-gray mb-8">
          
          {/* Brand Filter */}
          <div className="flex items-center gap-2 flex-wrap text-left">
            <SlidersHorizontal size={14} className="text-rich-black/50 shrink-0" />
            <span className="text-xs font-semibold text-rich-black/60 mr-1 uppercase tracking-wider font-price">Brand:</span>
            <div className="flex gap-1.5 flex-wrap">
              {brandsList.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 text-[11px] font-semibold border rounded-md transition-all ${
                    selectedBrand === brand
                      ? 'bg-pulse-green/10 border-pulse-green text-pulse-green font-bold'
                      : 'bg-transparent border-border-gray hover:border-rich-black/30 text-rich-black/70'
                  }`}
                  id={`brand-filter-${brand}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Sorter Selector */}
          <div className="flex items-center gap-2 text-left self-end sm:self-auto">
            <ArrowUpDown size={14} className="text-rich-black/50 shrink-0" />
            <span className="text-xs font-semibold text-rich-black/60 uppercase tracking-wider font-price">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs font-semibold text-rich-black py-1 px-2 border border-border-gray rounded focus:outline-none focus:border-pulse-green focus:text-pulse-green cursor-pointer"
              id="select-sort"
            >
              <option value="default">Release Date</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

        {/* 2x4 Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onWishlistToggle={onWishlistToggle}
                onQuickAdd={onQuickAdd}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-border-gray rounded-2xl bg-soft-gray/50 max-w-lg mx-auto">
            <RefreshCw size={24} className="mx-auto text-rich-black/20 mb-2 animate-spin" />
            <h3 className="text-sm font-bold text-rich-black">No arrivals match filters</h3>
            <p className="text-xs text-rich-black/40 mt-1">Try resetting your brand filters or viewing another collection.</p>
            <button
              onClick={() => {
                onCategorySelect('All');
                setSelectedBrand('All');
                setSortBy('default');
              }}
              className="mt-4 px-4 py-2 bg-rich-black text-white text-[10px] font-bold tracking-widest uppercase rounded-lg hover:bg-pulse-green transition-all"
              id="btn-reset-filters"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
