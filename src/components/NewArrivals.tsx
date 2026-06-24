import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import ProductCard from './ProductCard';
import { ChevronDown } from 'lucide-react';

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

  const filteredAndSortedProducts = useMemo(() => {
    let list = PRODUCTS;

    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (selectedBrand !== 'All') {
      list = list.filter((p) => p.brand === selectedBrand);
    }

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, selectedBrand, sortBy]);

  const brandsList = useMemo(() => {
    const brands = new Set<string>();
    PRODUCTS.forEach((p) => {
      if (activeCategory === 'All' || p.category === activeCategory) {
        brands.add(p.brand);
      }
    });
    return ['All', ...Array.from(brands)];
  }, [activeCategory]);

  const categories = ['All', 'Sneakers', 'Streetwear', 'Accessories'];

  return (
    <section id="products-section" className="py-16 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-nb-black font-headline uppercase">
            New Arrivals
          </h2>
        </div>

        {/* Category Tabs — underline style */}
        <div className="flex justify-center gap-6 sm:gap-8 border-b border-nb-grey-200 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onCategorySelect(cat as any);
                setSelectedBrand('All');
              }}
              className={`pb-3 text-[13px] font-medium tracking-wide uppercase transition-all relative ${
                activeCategory === cat
                  ? 'text-nb-black'
                  : 'text-nb-grey-400 hover:text-nb-black'
              }`}
              id={`cat-pill-${cat}`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-nb-black" />
              )}
            </button>
          ))}
        </div>

        {/* Filters Bar — minimal */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          {/* Brand Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-medium text-nb-grey-400 uppercase tracking-wider mr-1">Filter:</span>
            {brandsList.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`text-[12px] font-medium px-3 py-1.5 transition-all ${
                  selectedBrand === brand
                    ? 'bg-nb-black text-white'
                    : 'text-nb-grey-500 hover:text-nb-black bg-nb-grey-100 hover:bg-nb-grey-200'
                }`}
                id={`brand-filter-${brand}`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 relative">
            <span className="text-[11px] font-medium text-nb-grey-400 uppercase tracking-wider">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-transparent text-[12px] font-medium text-nb-black py-1.5 pl-2 pr-6 border border-nb-grey-200 focus:outline-none focus:border-nb-black cursor-pointer"
                id="select-sort"
              >
                <option value="default">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={12} className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-nb-grey-400" />
            </div>
          </div>
        </div>

        {/* Product Grid — 4 col desktop, 2 col mobile */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
          <div className="py-16 text-center max-w-md mx-auto">
            <h3 className="text-sm font-semibold text-nb-black uppercase tracking-wider">No products found</h3>
            <p className="text-xs text-nb-grey-400 mt-2">Try adjusting your filters or viewing another category.</p>
            <button
              onClick={() => {
                onCategorySelect('All');
                setSelectedBrand('All');
                setSortBy('default');
              }}
              className="mt-4 px-5 py-2.5 bg-nb-black text-white text-[11px] font-semibold tracking-widest uppercase hover:bg-nb-grey-600 transition-all"
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
