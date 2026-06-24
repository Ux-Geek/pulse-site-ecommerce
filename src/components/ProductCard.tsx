import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag, Star, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  isWishlisted: boolean;
  onWishlistToggle: (id: string) => void;
  onQuickAdd: (product: Product, size: string) => void;
  onProductClick: (product: Product) => void;
}

const getColorHex = (colorName: string): string => {
  const name = colorName.toLowerCase().trim();
  if (name.includes('rain cloud')) return '#B2B8B9';
  if (name.includes('castlerock')) return '#5E6266';
  if (name.includes('white') || name.includes('flat white')) return '#FFFFFF';
  if (name.includes('varsity red') || name.includes('red')) return '#D11210';
  if (name.includes('vintage black') || name.includes('core black') || name.includes('black')) return '#111111';
  if (name.includes('sail')) return '#F4EFE6';
  if (name.includes('cream')) return '#FDF8EB';
  if (name.includes('metallic gold')) return '#D4AF37';
  if (name.includes('cloud white')) return '#ECECEC';
  if (name.includes('gum')) return '#C59B77';
  if (name.includes('nimbus cloud')) return '#E4E3DF';
  if (name.includes('oatmeal')) return '#E3D8CE';
  if (name.includes('buttercream')) return '#F6EEDA';
  if (name.includes('cobalt blue')) return '#0047AB';
  if (name.includes('cement')) return '#8B8C8E';
  if (name.includes('taupe')) return '#B3A79A';
  if (name.includes('pulse green')) return '#D11210';
  if (name.includes('rich black')) return '#0F0F0F';
  if (name.includes('vintage white')) return '#F3EFE0';
  if (name.includes('concrete grey') || name.includes('grey')) return '#7F8285';
  return '#CCCCCC';
};

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
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  const handleMouseEnter = () => {
    // Keep current index if user hovered a specific color
  };

  const handleMouseLeave = () => {
    setIsSizeSelectorOpen(false);
  };

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
    setSelectedSize(size);
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
      className="group relative bg-white border border-nb-grey-medium p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-nb-red/20 text-left rounded-[2px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onProductClick(product)}
      id={`product-card-${product.id}`}
    >
      {/* Product Image Frame */}
      <div className="relative w-full aspect-square bg-[#F5F5F3] rounded-[2px] overflow-hidden mb-4 flex items-center justify-center cursor-pointer p-4 sm:p-6 border border-transparent group-hover:border-nb-grey-medium/40 transition-colors">
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 pointer-events-none">
          {product.newArrival && (
            <span className="bg-nb-black text-white text-[8px] sm:text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-[1px]">
              New
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-nb-red text-white text-[8px] sm:text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-[1px]">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id);
          }}
          className="absolute top-2.5 right-2.5 z-10 p-2 bg-white/95 hover:bg-white rounded-full border border-nb-grey-medium hover:border-nb-red/30 text-nb-black shadow-sm transition-all active:scale-90"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          id={`btn-wishlist-toggle-${product.id}`}
        >
          <Heart
            size={13}
            className={isWishlisted ? 'fill-nb-red text-nb-red' : 'text-nb-black/70'}
          />
        </button>

        {/* Multi-Image Transition Container */}
        <div className="w-full h-full relative flex items-center justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`max-h-[95%] max-w-[95%] object-contain transition-all duration-500 absolute ${
              currentImageIndex === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            referrerPolicy="no-referrer"
          />
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`max-h-[95%] max-w-[95%] object-contain transition-all duration-500 absolute ${
              currentImageIndex === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Mobile Quick Add Button (Always visible on mobile, hidden on desktop hover overlay) */}
        <button
          onClick={handleQuickAddClick}
          className="absolute bottom-2.5 right-2.5 md:hidden z-10 p-2 bg-nb-red text-white rounded-full shadow-md active:scale-90 transition-all flex items-center justify-center"
          aria-label="Quick add size selection"
          id={`btn-mobile-quick-add-${product.id}`}
        >
          <Plus size={14} />
        </button>

        {/* Success Banner overlay */}
        {showAddSuccess && (
          <div className="absolute inset-x-0 bottom-0 bg-nb-black text-white text-[10px] font-bold uppercase tracking-wider py-2 text-center animate-fade-in flex items-center justify-center gap-1.5 z-30">
            <Check size={12} className="text-nb-red" />
            <span>Added to Bag</span>
          </div>
        )}

        {/* Sizing Panel Trigger / Quick Add Button overlay */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-20 hidden md:block">
          {!isSizeSelectorOpen ? (
            <button
              onClick={handleQuickAddClick}
              className="w-full py-2 bg-nb-black hover:bg-nb-red text-white text-[10px] font-bold tracking-widest uppercase rounded-[2px] shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-98"
              id={`btn-quick-add-${product.id}`}
            >
              <ShoppingBag size={11} />
              <span>Quick Add</span>
            </button>
          ) : (
            <div
              className="bg-white border border-nb-grey-medium rounded-[2px] p-2 shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-1 px-0.5">
                <span className="text-[9px] font-extrabold uppercase text-nb-black/50 font-headline">Select US Size</span>
                <button
                  onClick={() => setIsSizeSelectorOpen(false)}
                  className="text-[9px] font-black text-nb-red uppercase tracking-wider"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1 max-h-[85px] overflow-y-auto pr-0.5 no-scrollbar">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => selectSizeAndAdd(e, size)}
                    className="py-1 text-[9px] font-bold border border-nb-grey-medium hover:border-nb-red hover:text-nb-red text-nb-black transition-all bg-white rounded-[1px]"
                    id={`btn-size-select-${product.id}-${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sizing panel for Mobile (absolute overlay when triggered on mobile) */}
        {isSizeSelectorOpen && (
          <div
            className="absolute inset-x-2 bottom-2 bg-white border border-nb-grey-medium rounded-[2px] p-2.5 shadow-2xl z-30 animate-fade-in md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[9px] font-black uppercase text-nb-black/60 font-headline">Select Size</span>
              <button
                onClick={() => setIsSizeSelectorOpen(false)}
                className="text-[10px] font-bold text-nb-red px-1"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-5 gap-1 max-h-[90px] overflow-y-auto no-scrollbar">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => selectSizeAndAdd(e, size)}
                  className="py-1.5 text-[10px] font-bold border border-nb-grey-medium rounded-[1px] text-nb-black active:border-nb-red active:text-nb-red bg-white"
                  id={`btn-mobile-size-select-${product.id}-${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Meta Product Details */}
      <div className="space-y-1 pt-1">
        <div className="flex justify-between items-start gap-1">
          <div>
            <p className="text-[9px] font-black uppercase text-nb-black/40 tracking-wider font-headline">
              {product.brand}
            </p>
            <h3 className="text-xs sm:text-sm font-bold text-nb-black tracking-tight leading-tight line-clamp-1 cursor-pointer hover:text-nb-red transition-colors font-headline">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Sizing & Stock hint */}
        <p className="text-[10px] text-nb-black/50 truncate font-sans">
          {product.category === 'Sneakers' ? 'Sizes: ' : 'Apparel: '}
          {product.sizes.join(', ')}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-1.5 text-[10px]">
          <div className="flex items-center text-amber-500">
            <Star size={10} className="fill-amber-500 text-amber-500" />
            <span className="font-bold ml-0.5 text-nb-black">{product.rating}</span>
          </div>
          <span className="text-nb-black/40">({product.reviewsCount})</span>
        </div>

        {/* Interactive Color Switcher */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            {product.colors.map((color, idx) => {
              const hex = getColorHex(color);
              const isMulti = color.toLowerCase().includes('multi');
              return (
                <button
                  key={color}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx === 0 ? 0 : 1);
                  }}
                  onMouseEnter={() => {
                    setCurrentImageIndex(idx === 0 ? 0 : 1);
                  }}
                  className={`w-3.5 h-3.5 rounded-full border border-nb-grey-medium hover:scale-110 active:scale-95 transition-all relative ${
                    currentImageIndex === (idx === 0 ? 0 : 1) ? 'ring-2 ring-nb-red ring-offset-1 scale-105' : ''
                  }`}
                  style={{
                    background: isMulti ? 'linear-gradient(45deg, #d11210, #0f0f0f, #767676)' : hex
                  }}
                  title={color}
                  id={`btn-color-${product.id}-${color.replace(/\s+/g, '-').toLowerCase()}`}
                />
              );
            })}
          </div>
        )}

        {/* Pricing Layout */}
        <div className="flex items-baseline gap-2 pt-2 border-t border-nb-grey-light mt-1">
          <span className="text-xs sm:text-sm font-bold text-nb-black font-price">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-[10px] sm:text-xs text-nb-black/45 line-through font-price">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
