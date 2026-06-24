import React, { useRef } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BestSellersProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function BestSellers({ onProductClick, onAddToCart }: BestSellersProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
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
    <section className="py-16 sm:py-20 bg-nb-grey-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-nb-black font-headline uppercase">
              Best Sellers
            </h2>
            <p className="text-sm text-nb-grey-500 mt-1">
              Our most popular items this season.
            </p>
          </div>

          {/* Nav Arrows */}
          <div className="flex gap-1.5">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 border border-nb-grey-300 hover:border-nb-black hover:bg-nb-black hover:text-white text-nb-black transition-all"
              aria-label="Previous items"
              id="btn-best-sellers-prev"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 border border-nb-grey-300 hover:border-nb-black hover:bg-nb-black hover:text-white text-nb-black transition-all"
              aria-label="Next items"
              id="btn-best-sellers-next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="min-w-[240px] sm:min-w-[280px] max-w-[300px] snap-start flex flex-col cursor-pointer group"
              onClick={() => onProductClick(product)}
              id={`best-seller-card-${product.id}`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-white overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover img-zoom"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info */}
              <div className="space-y-1">
                <p className="text-[11px] font-medium tracking-wider uppercase text-nb-grey-400">
                  {product.brand}
                </p>
                <h3 className="text-[13px] font-medium text-nb-black leading-snug line-clamp-1 group-hover:underline">
                  {product.name}
                </h3>
                <span className="text-[13px] font-semibold text-nb-black font-price block">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
