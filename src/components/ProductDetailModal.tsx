import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, Ruler } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onWishlistToggle: (id: string) => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  isWishlisted,
  onWishlistToggle,
  onAddToCart
}: ProductDetailModalProps) {
  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSizingGuide, setShowSizingGuide] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.images[0]);
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || '');
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 text-left bg-rich-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Outer Click Shield */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-rich-black text-white px-5 py-3 rounded-[2px] shadow-2xl border border-pulse-green/30 flex items-center gap-3 animate-bounce">
          <div className="w-2.5 h-2.5 rounded-full bg-pulse-green" />
          <span className="text-xs font-bold tracking-wider uppercase font-price">
            Added to bag successfully
          </span>
        </div>
      )}

      {/* Main Content Card - Rounded-2xl, Warm light background */}
      <div className="relative bg-white border border-border-gray w-full max-w-5xl rounded-[4px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-[2px] bg-soft-gray/90 hover:bg-border-gray hover:scale-105 transition-all text-rich-black"
          aria-label="Close modal"
          id="btn-close-detail"
        >
          <X size={16} />
        </button>

        {/* Left Side: Images Section (Grid of thumbnails + active view) */}
        <div className="w-full md:w-1/2 bg-soft-gray p-6 flex flex-col justify-between gap-4 md:border-r border-border-gray">
          
          {/* Main Active Image View */}
          <div className="flex-1 flex items-center justify-center min-h-[250px] sm:min-h-[350px] relative p-6">
            {product.bestSeller && (
              <span className="absolute top-0 left-0 bg-pulse-green text-white text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-[1px] shadow-sm">
                Best Seller
              </span>
            )}
            <img
              src={activeImage}
              alt={product.name}
              className="max-h-[90%] max-w-[90%] object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
 
          {/* Thumbnails Swapper */}
          <div className="flex gap-3 justify-center">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 rounded-[2px] border-2 overflow-hidden bg-white p-1.5 transition-all flex items-center justify-center ${
                  activeImage === img ? 'border-pulse-green' : 'border-border-gray hover:border-rich-black/35'
                }`}
                id={`btn-thumbnail-${index}`}
              >
                <img src={img} alt="Thumbnail view" className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>

        </div>

        {/* Right Side: Product Configuration & Metadata */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-none">
          
          <div className="space-y-6">
            {/* Title & Brand */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pulse-green bg-pulse-green/10 px-2.5 py-0.5 rounded-[2px] font-price">
                  {product.brand}
                </span>
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-amber-500">
                    <Star size={12} className="fill-amber-500 text-amber-500" />
                    <span className="text-xs font-bold text-rich-black ml-1">{product.rating}</span>
                  </div>
                  <span className="text-[11px] text-rich-black/40">({product.reviewsCount} reviews)</span>
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-rich-black tracking-tight font-headline">
                {product.name}
              </h1>
              
              {/* Space Grotesk Pricing */}
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-lg sm:text-xl font-bold text-rich-black font-price">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xs sm:text-sm text-rich-black/30 line-through font-price">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <hr className="border-border-gray" />

            {/* Sizing & Sizing Guide */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold uppercase text-rich-black tracking-wider font-headline">
                  Select Size
                </label>
                {product.category === 'Sneakers' && (
                  <button
                    onClick={() => setShowSizingGuide(!showSizingGuide)}
                    className="text-[10px] font-bold text-pulse-green hover:underline flex items-center gap-1 font-price"
                    id="btn-sizing-guide-toggle"
                  >
                    <Ruler size={11} />
                    <span>Sizing Table</span>
                  </button>
                )}
              </div>

              {/* Sizing Interactive Guide */}
              {showSizingGuide && (
                <div className="bg-soft-gray border border-border-gray p-3 rounded-[2px] text-[10px] space-y-1 animate-fade-in font-price">
                  <div className="grid grid-cols-3 font-bold border-b border-border-gray pb-1 text-rich-black/50">
                    <span>US Men's</span>
                    <span>US Women's</span>
                    <span>EU Equivalent</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span>8.0</span>
                    <span>9.5</span>
                    <span>41.0</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span>9.0</span>
                    <span>10.5</span>
                    <span>42.5</span>
                  </div>
                  <div className="grid grid-cols-3 text-pulse-green font-semibold">
                    <span>10.0</span>
                    <span>11.5</span>
                    <span>44.0</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span>11.0</span>
                    <span>12.5</span>
                    <span>45.0</span>
                  </div>
                </div>
              )}
 
              {/* Size Buttons Grid */}
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3.5 py-2.5 text-xs font-bold border rounded-[2px] transition-all min-w-[40px] text-center ${
                      selectedSize === size
                        ? 'bg-nb-black border-nb-black text-white font-black'
                        : 'bg-white border-border-gray hover:border-nb-red hover:text-nb-red text-rich-black'
                    }`}
                    id={`btn-modal-size-${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
 
            {/* Color chips */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase text-rich-black tracking-wider font-headline">
                Colorways
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-[10px] font-bold border rounded-[2px] transition-all ${
                      selectedColor === color
                        ? 'bg-nb-red text-white border-nb-red font-bold'
                        : 'bg-white border-border-gray hover:border-nb-red/35 text-rich-black/70'
                    }`}
                    id={`btn-modal-color-${color}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Detailed Specs */}
            <div className="space-y-2">
              <p className="text-xs text-rich-black/70 leading-relaxed font-sans">
                {product.description}
              </p>
              <ul className="list-disc pl-4 text-[11px] text-rich-black/50 space-y-1 font-sans">
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Footer: Quantity, Wishlist, Add to bag */}
          <div className="mt-8 space-y-4 pt-4 border-t border-border-gray">
            
            {/* Quantity adjustments */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-rich-black/60 font-headline">Quantity:</span>
              <div className="flex items-center border border-border-gray rounded-[2px] bg-white overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 hover:bg-soft-gray text-rich-black font-bold border-r border-border-gray text-xs"
                  id="btn-qty-minus"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold font-price text-rich-black">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 hover:bg-soft-gray text-rich-black font-bold border-l border-border-gray text-xs"
                  id="btn-qty-plus"
                >
                  +
                </button>
              </div>
            </div>
 
            {/* Primary Action Buttons row */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 bg-nb-black hover:bg-nb-red text-white text-xs font-bold tracking-widest uppercase rounded-[2px] shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98"
                id="btn-modal-add-to-bag"
              >
                <ShoppingBag size={13} />
                <span>Add To Bag</span>
              </button>
              
              <button
                onClick={() => onWishlistToggle(product.id)}
                className="p-3.5 border border-border-gray hover:border-nb-red rounded-[2px] text-rich-black bg-white hover:scale-105 transition-all"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                id="btn-modal-wishlist-toggle"
              >
                <Heart size={15} className={isWishlisted ? 'fill-pulse-green text-pulse-green' : 'text-rich-black/70'} />
              </button>
            </div>

            {/* In-store and courier guidelines */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-[10px] font-medium text-rich-black/50 font-sans">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-pulse-green" />
                <span>100% Legit check</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={14} className="text-pulse-green" />
                <span>Same-day Texas courier</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
