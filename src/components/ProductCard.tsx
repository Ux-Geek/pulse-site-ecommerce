import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, Plus, Check, ShoppingBag } from 'lucide-react';

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
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.sizes.length === 1 && product.sizes[0] === 'One Size') {
      onQuickAdd(product, 'One Size');
      triggerSuccess();
      return;
    }
    setIsSizeSelectorOpen(!isSizeSelectorOpen);
  };

  const selectSizeAndAdd = (e: React.MouseEvent, size: string) => {
    e.stopPropagation();
    onQuickAdd(product, size);
    setIsSizeSelectorOpen(false);
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 2000);
  };

  return (
    <div
      className="group relative flex flex-col text-left cursor-pointer"
      onMouseLeave={() => {
        setIsSizeSelectorOpen(false);
        setCurrentImageIndex(0);
      }}
      onClick={() => onProductClick(product)}
      id={`product-card-${product.id}`}
    >
      {/* Product Image */}
      <div
        className="relative w-full aspect-[3/4] bg-nb-grey-100 overflow-hidden mb-3"
        onMouseEnter={() => setCurrentImageIndex(1)}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        {/* Image Stack — crossfade on hover */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
        />
        <img
          src={product.images[1]}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
        />

        {/* Badges — small, clean text */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.newArrival && (
            <span className="text-[10px] font-bold tracking-wider uppercase text-nb-black bg-white px-2 py-1">
              New
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-[10px] font-bold tracking-wider uppercase text-white bg-nb-red px-2 py-1">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white text-nb-black transition-all"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          id={`btn-wishlist-toggle-${product.id}`}
        >
          <Heart
            size={16}
            strokeWidth={1.5}
            className={isWishlisted ? 'fill-nb-black text-nb-black' : 'text-nb-grey-500'}
          />
        </button>

        {/* Success Banner */}
        {showAddSuccess && (
          <div className="absolute inset-x-0 bottom-0 bg-nb-black text-white text-[11px] font-semibold uppercase tracking-wider py-2.5 text-center animate-fade-in flex items-center justify-center gap-1.5 z-30">
            <Check size={14} />
            <span>Added to Bag</span>
          </div>
        )}

        {/* Quick Add — Desktop hover */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hidden md:block">
          {!isSizeSelectorOpen ? (
            <button
              onClick={handleQuickAddClick}
              className="w-full py-3 bg-nb-black/90 hover:bg-nb-black text-white text-[11px] font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
              id={`btn-quick-add-${product.id}`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              <span>Quick Add</span>
            </button>
          ) : (
            <div
              className="bg-white border-t border-nb-grey-200 p-3 animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-semibold uppercase text-nb-grey-500 tracking-wider">Select Size</span>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsSizeSelectorOpen(false); }}
                  className="text-[10px] font-bold text-nb-grey-500 hover:text-nb-black"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-5 gap-1 max-h-[80px] overflow-y-auto no-scrollbar">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => selectSizeAndAdd(e, size)}
                    className="py-1.5 text-[11px] font-medium border border-nb-grey-200 hover:border-nb-black hover:bg-nb-black hover:text-white text-nb-black transition-all text-center"
                    id={`btn-size-select-${product.id}-${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Quick Add Button */}
        <button
          onClick={handleQuickAddClick}
          className="absolute bottom-3 right-3 md:hidden z-10 p-2.5 bg-nb-black text-white active:scale-90 transition-all"
          aria-label="Quick add"
          id={`btn-mobile-quick-add-${product.id}`}
        >
          <Plus size={16} />
        </button>

        {/* Mobile Size Panel */}
        {isSizeSelectorOpen && (
          <div
            className="absolute inset-x-0 bottom-0 bg-white border-t border-nb-grey-200 p-3 z-30 animate-fade-in md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-semibold uppercase text-nb-grey-500 tracking-wider">Select Size</span>
              <button
                onClick={(e) => { e.stopPropagation(); setIsSizeSelectorOpen(false); }}
                className="text-[10px] font-bold text-nb-grey-500"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-5 gap-1 max-h-[80px] overflow-y-auto no-scrollbar">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => selectSizeAndAdd(e, size)}
                  className="py-1.5 text-[11px] font-medium border border-nb-grey-200 active:border-nb-black active:bg-nb-black active:text-white text-nb-black"
                  id={`btn-mobile-size-select-${product.id}-${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Info — clean, minimal */}
      <div className="space-y-1">
        <p className="text-[11px] font-medium tracking-wider uppercase text-nb-grey-400">
          {product.brand}
        </p>
        <h3 className="text-[13px] font-medium text-nb-black leading-snug line-clamp-1 group-hover:underline">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 pt-0.5">
          <span className="text-[13px] font-semibold text-nb-black font-price">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-[12px] text-nb-grey-400 line-through font-price">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
