import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { X, Heart, ShoppingBag, Eye, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemove: (id: string) => void;
  onProductClick: (product: Product) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onRemove,
  onProductClick
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-left font-sans">
      
      {/* Backdrop */}
      <div className="absolute inset-0 bg-rich-black/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        {/* Sliding Panel */}
        <div className="w-screen max-w-md bg-white border-l border-border-gray shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-border-gray flex justify-between items-center bg-soft-gray/50">
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-pulse-green fill-pulse-green/10" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-rich-black font-headline">
                My Wishlist
              </h2>
              <span className="text-[10px] font-bold bg-rich-black text-white px-2 py-0.5 rounded-full font-price">
                {wishlistedProducts.length}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-border-gray text-rich-black transition-colors"
              aria-label="Close wishlist drawer"
              id="btn-close-wishlist-drawer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {wishlistedProducts.length > 0 ? (
              <div className="space-y-4 animate-fade-in">
                {wishlistedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-3 border border-border-gray rounded-xl hover:border-rich-black/15 transition-all cursor-pointer"
                    onClick={() => {
                      onProductClick(product);
                      onClose();
                    }}
                    id={`wishlist-row-${product.id}`}
                  >
                    {/* Item Image */}
                    <div className="w-16 h-16 rounded-lg bg-soft-gray p-2 flex items-center justify-center shrink-0">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Item Meta */}
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start gap-1">
                        <div>
                          <p className="text-[9px] font-bold text-pulse-green uppercase tracking-widest font-price">
                            {product.brand}
                          </p>
                          <h4 className="text-xs font-bold text-rich-black line-clamp-1">
                            {product.name}
                          </h4>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemove(product.id);
                          }}
                          className="text-rich-black/40 hover:text-red-500 p-0.5"
                          id={`btn-wishlist-row-remove-${product.id}`}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold font-price text-rich-black">
                          ${product.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-pulse-green font-headline uppercase">
                          <Eye size={11} />
                          <span>View Item</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty Wishlist state
              <div className="py-16 text-center space-y-3">
                <Heart size={28} className="mx-auto text-rich-black/20" />
                <div>
                  <h3 className="text-xs font-bold text-rich-black uppercase">Your Wishlist is Empty</h3>
                  <p className="text-xs text-rich-black/40 mt-1 max-w-xs mx-auto">
                    Mark items you love while browsing to save them for quick reservation or pickup.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-rich-black text-white text-[10px] font-bold tracking-widest uppercase rounded-lg hover:bg-pulse-green transition-all"
                  id="btn-wishlist-shop-now"
                >
                  Start Browsing
                </button>
              </div>
            )}

          </div>

          {/* Footer banner */}
          <div className="px-6 py-5 border-t border-border-gray bg-soft-gray/50 text-center">
            <p className="text-[10px] text-rich-black/40 font-medium">
              Saved items are cached in your local web storage.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
