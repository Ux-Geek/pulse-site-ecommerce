import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import NewArrivals from './components/NewArrivals';
import Categories from './components/Categories';
import FeaturedBanner from './components/FeaturedBanner';
import BestSellers from './components/BestSellers';
import StoreStory from './components/StoreStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import { Product, CartItem } from './types';

export default function App() {
  // Global Shopping & Wishlist states with Local Storage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('pulse_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('pulse_wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Navigation, Filter, and Search state parameters
  const [activeCategory, setActiveCategory] = useState<'All' | 'Sneakers' | 'Streetwear' | 'Accessories'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Drawers and Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync state to local storage when changed
  useEffect(() => {
    localStorage.setItem('pulse_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('pulse_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart Operation Handlers
  const handleAddToCart = (product: Product, size: string, quantity: number = 1) => {
    const cleanSize = size || product.sizes[0] || 'One Size';
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === cleanSize
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }

      return [...prev, { product, selectedSize: cleanSize, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, size: string, change: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const nextQuantity = item.quantity + change;
            return { ...item, quantity: nextQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveFromCart = (productId: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedSize === size)));
  };

  const handleClearCart = () => setCart([]);

  // Wishlist Handlers
  const handleWishlistToggle = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  // Shared Quick Navigation triggers
  const handleCategorySelect = (category: 'All' | 'Sneakers' | 'Streetwear' | 'Accessories') => {
    setActiveCategory(category);
    setSearchTerm(''); // Clear search on explicit tab toggle
  };

  const handleShopNowClick = (category?: 'Sneakers' | 'Streetwear') => {
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('All');
    }
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToStory = () => {
    const section = document.getElementById('story-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-rich-black flex flex-col font-sans antialiased">
      
      {/* Navigation Header */}
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={(val) => {
          setSearchTerm(val);
          if (val) {
            // Scroll automatically to products grid to display match values
            const section = document.getElementById('products-section');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }}
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
        onScrollToStory={handleScrollToStory}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        
        {/* Cinematic Minimal Hero */}
        <Hero onShopClick={handleShopNowClick} />

        {/* Brand partners */}
        <Brands onBrandSelect={(brand) => {
          // Select brand filter inside arrivals component
          setActiveCategory('All');
          setSearchTerm('');
        }} />

        {/* New Arrivals with 2x4 Product Grid */}
        <NewArrivals
          onQuickAdd={(prod, size) => handleAddToCart(prod, size, 1)}
          onWishlistToggle={handleWishlistToggle}
          wishlist={wishlist}
          onProductClick={(prod) => setSelectedProduct(prod)}
          activeCategory={activeCategory}
          onCategorySelect={handleCategorySelect}
        />

        {/* Bento categories */}
        <Categories onCategorySelect={handleCategorySelect} />

        {/* Full-width editorial lifestyle banner */}
        <FeaturedBanner onExploreClick={() => handleShopNowClick()} />

        {/* Carousel slider best sellers */}
        <BestSellers
          onProductClick={(prod) => setSelectedProduct(prod)}
          onAddToCart={(prod, size) => handleAddToCart(prod, size, 1)}
        />

        {/* Houston Tanger Outlets story section */}
        <StoreStory />

        {/* High contrast newsletter section */}
        <Newsletter />

      </main>

      {/* Understated bottom directory */}
      <Footer
        onCategorySelect={handleCategorySelect}
        onScrollToStory={handleScrollToStory}
      />

      {/* Detailed Product Showcase Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onWishlistToggle={handleWishlistToggle}
        onAddToCart={handleAddToCart}
      />

      {/* Sliding Checkout Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Sliding Saved Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemove={handleWishlistToggle}
        onProductClick={(prod) => setSelectedProduct(prod)}
      />

    </div>
  );
}
