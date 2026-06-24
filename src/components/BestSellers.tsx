import React, { useRef } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from 'lucide-react';

interface BestSellersProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function BestSellers({ onProductClick, onAddToCart }: BestSellersProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Get best sellers
  const bestSellers = PRODUCTS.filter((p) => p.bestSeller);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.75;
      carouselRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Nav Arrows */}
        <div className="flex justify-between items-end mb-10">
          <div className="text-left space-y-2">
            <p className="text-[10px] font-bold text-pulse-green tracking-[0.2em] uppercase font-price">
              MOST DEMANDED PIECES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-rich-black font-headline">
              Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-rich-black/50 max-w-xl font-sans">
              The highest-circulating items currently tracked in our Tanger Outlets Houston location.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-[2px] border border-border-gray hover:border-nb-red hover:bg-soft-gray text-rich-black transition-all"
              aria-label="Previous items"
              id="btn-best-sellers-prev"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-[2px] border border-border-gray hover:border-nb-red hover:bg-soft-gray text-rich-black transition-all"
              aria-label="Next items"
              id="btn-best-sellers-next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel Row */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 text-left"
          style={{ scrollbarWidth: 'none' }}
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start bg-soft-gray/30 border border-border-gray hover:border-nb-red/20 p-5 rounded-[2px] flex flex-col justify-between group transition-all duration-300 hover:shadow-md cursor-pointer"
              onClick={() => onProductClick(product)}
              id={`best-seller-card-${product.id}`}
            >
              {/* Product Frame */}
              <div className="relative aspect-square w-full rounded-[2px] bg-white flex items-center justify-center mb-4 p-4 overflow-hidden border border-transparent group-hover:border-nb-grey-medium transition-all">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="max-h-[85%] max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual hover quick-view overlay */}
                <div className="absolute inset-0 bg-rich-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="bg-white/95 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-[2px] shadow-sm flex items-center gap-1 text-rich-black">
                    <Eye size={12} />
                    <span>View Details</span>
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-[9px] font-bold text-pulse-green tracking-widest uppercase font-price">
                    {product.brand}
                  </span>
                  <span className="text-xs font-bold text-rich-black font-price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-nb-black tracking-tight leading-tight line-clamp-1 font-headline">
                  {product.name}
                </h3>

                <p className="text-[10px] text-rich-black/50 font-sans">
                  {product.category} · {product.sizes.length} Sizing profiles
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
