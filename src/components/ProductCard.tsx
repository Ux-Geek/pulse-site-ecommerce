import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag, Star, Plus } from 'lucide-react';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  isWishlisted: boolean;
  onWishlistToggle: (id: string) => void;
  onQuickAdd: (product: Product, size: string) => void;
  onProductClick: (product: Product) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onWishlistToggle,
  onQuickAdd,
  onProductClick
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSizeSelectorOpen, setIsSizeSelectorOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const handleMouseEnter = () => setCurrentImageIndex(1);
  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
    // Don't close size selector on mouse leave to prevent irritating UX
  };

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.sizes.length === 1 && product.sizes[0] === 'One Size') {
      onQuickAdd(product, 'One Size');
      return;
    }
    setIsSizeSelectorOpen(!isSizeSelectorOpen);
  };

  const selectSizeAndAdd = (e: React.MouseEvent, size: string) => {
    e.stopPropagation();
    setSelectedSize(size);
    onQuickAdd(product, size);
    setIsSizeSelectorOpen(false);
  };

  return (
    <div
      className="group relative bg-white border border-border-gray rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-rich-black/10 text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onProductClick(product)}
      id={`product-card-${product.id}`}
    >
      {/* Product Image Frame */}
      <div className="relative w-full aspect-square bg-soft-gray rounded-xl overflow-hidden mb-4 flex items-center justify-center cursor-pointer p-6">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.newArrival && (
            <span className="bg-rich-black text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded">
              New Arrival
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-pulse-green text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded">
              Best Seller
            </span>
          )}
          {product.trending && !product.newArrival && !product.bestSeller && (
            <span className="bg-white text-rich-black border border-border-gray text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded">
              Trending
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white rounded-full border border-border-gray hover:border-rich-black/20 text-rich-black shadow-sm hover:scale-105 transition-all"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          id={`btn-wishlist-toggle-${product.id}`}
        >
          <Heart
            size={15}
            className={isWishlisted ? 'fill-pulse-green text-pulse-green' : 'text-rich-black/70'}
          />
        </button>

        {/* Multi-Image Transition Container */}
        <div className="w-full h-full relative flex items-center justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`max-h-[90%] max-w-[90%] object-contain transition-all duration-500 absolute ${
              currentImageIndex === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            referrerPolicy="no-referrer"
          />
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`max-h-[90%] max-w-[90%] object-contain transition-all duration-500 absolute ${
              currentImageIndex === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Sizing Panel Trigger / Quick Add Button overlay */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {!isSizeSelectorOpen ? (
            <button
              onClick={handleQuickAddClick}
              className="w-full py-2.5 bg-rich-black/95 hover:bg-pulse-green text-white text-[11px] font-bold tracking-wider uppercase rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-98"
              id={`btn-quick-add-${product.id}`}
            >
              <ShoppingBag size={12} />
              <span>Quick Add</span>
            </button>
          ) : (
            <div
              className="bg-white/95 backdrop-blur-md border border-border-gray rounded-lg p-2 shadow-xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-1.5 px-1">
                <span className="text-[10px] font-bold uppercase text-rich-black/50">Select US Size</span>
                <button
                  onClick={() => setIsSizeSelectorOpen(false)}
                  className="text-[9px] font-bold text-rich-black hover:text-pulse-green"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1 max-h-[100px] overflow-y-auto pr-1">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => selectSizeAndAdd(e, size)}
                    className="py-1 text-[10px] font-bold border border-border-gray rounded hover:border-pulse-green hover:text-pulse-green text-rich-black transition-all bg-white"
                    id={`btn-size-select-${product.id}-${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Meta Product Details */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-start gap-1">
          <div>
            <p className="text-[10px] font-bold uppercase text-rich-black/40 tracking-wider">
              {product.brand}
            </p>
            <h3 className="text-xs sm:text-sm font-semibold text-rich-black tracking-tight leading-tight line-clamp-1 cursor-pointer hover:text-pulse-green transition-colors">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Sizing & Stock hint */}
        <p className="text-[10px] text-rich-black/50 truncate font-sans">
          {product.category === 'Sneakers' ? 'Sizes: ' : 'Apparel: '}
          {product.sizes.join(', ')}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-1">
          <div className="flex items-center text-amber-500">
            <Star size={11} className="fill-amber-500" />
            <span className="text-[11px] font-bold ml-1 text-rich-black">{product.rating}</span>
          </div>
          <span className="text-rich-black/30 text-[10px]">({product.reviewsCount})</span>
        </div>

        {/* Pricing Layout */}
        <div className="flex items-baseline gap-2 pt-1 border-t border-soft-gray">
          <span className="text-xs sm:text-sm font-bold text-rich-black font-price">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-[10px] sm:text-xs text-rich-black/40 line-through font-price">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
