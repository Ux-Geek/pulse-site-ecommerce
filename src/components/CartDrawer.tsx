import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Ticket, MapPin, Calendar, Clock, CreditCard } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, change: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [activeDiscount, setActiveDiscount] = useState<{ code: string; percent: number } | null>(null);
  const [promoError, setPromoError] = useState('');
  
  // Checkout flow state
  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  const [checkoutType, setCheckoutType] = useState<'pickup' | 'courier'>('pickup');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pickupDate, setPickupDate] = useState('2026-06-25');
  const [pickupTime, setPickupTime] = useState('14:00');
  const [orderReceipt, setOrderReceipt] = useState<any>(null);

  if (!isOpen) return null;

  // Calculators
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = activeDiscount ? subtotal * (activeDiscount.percent / 100) : 0;
  const deliveryFee = checkoutType === 'courier' && subtotal > 0 ? 15 : 0;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === 'PULSE10') {
      setActiveDiscount({ code: 'PULSE10', percent: 10 });
      setPromoError('');
    } else if (cleanCode === 'HOUSTON') {
      setActiveDiscount({ code: 'HOUSTON', percent: 15 });
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "PULSE10" or "HOUSTON"');
    }
    setPromoCode('');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const receiptNumber = `PLS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderReceipt({
      receiptNumber,
      fullName,
      phone,
      checkoutType,
      address: checkoutType === 'courier' ? address : 'Tanger Outlets Houston (Suite 412)',
      pickupDate,
      pickupTime,
      items: [...cartItems],
      subtotal,
      discount: discountAmount,
      deliveryFee,
      total
    });

    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-left font-sans">
      
      {/* Absolute Backdrop Shadow */}
      <div className="absolute inset-0 bg-rich-black/50 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        {/* Sliding Panel */}
        <div className="w-screen max-w-md bg-white border-l border-border-gray shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-border-gray flex justify-between items-center bg-soft-gray/50">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-pulse-green" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-rich-black font-headline">
                {isCheckoutMode ? 'Secured Checkout' : 'Shopping Bag'}
              </h2>
              <span className="text-[10px] font-bold bg-rich-black text-white px-2 py-0.5 rounded-full font-price">
                {cartItems.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-border-gray text-rich-black transition-colors"
              aria-label="Close cart drawer"
              id="btn-close-cart-drawer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Core Body Section */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Receipt screen if order was just placed */}
            {orderReceipt ? (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center py-4 space-y-2">
                  <div className="w-12 h-12 bg-pulse-green/10 text-pulse-green rounded-full flex items-center justify-center mx-auto mb-2">
                    <ShieldCheck size={26} />
                  </div>
                  <h3 className="text-base font-extrabold text-rich-black font-headline">Order Confirmed</h3>
                  <p className="text-xs text-rich-black/50">
                    Your allocation has been reserved at our Tanger Outlets boutique!
                  </p>
                </div>

                {/* Barcoded simulated ticket */}
                <div className="border border-border-gray rounded-xl bg-soft-gray/30 p-5 space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-pulse-green" />
                  
                  <div className="flex justify-between items-center text-[10px] font-bold text-rich-black/40 uppercase tracking-widest font-price">
                    <span>PULSE Receipt</span>
                    <span>{orderReceipt.receiptNumber}</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <p className="font-bold text-rich-black">{orderReceipt.fullName}</p>
                    <p className="text-rich-black/60">Phone: {orderReceipt.phone}</p>
                    <p className="text-rich-black/60">Type: {orderReceipt.checkoutType === 'pickup' ? 'In-Store Pickup (Tanger Outlets)' : 'Courier Delivery'}</p>
                    {orderReceipt.checkoutType === 'pickup' ? (
                      <p className="text-pulse-green font-semibold">Scheduled: {orderReceipt.pickupDate} @ {orderReceipt.pickupTime}</p>
                    ) : (
                      <p className="text-rich-black/70">Address: {orderReceipt.address}</p>
                    )}
                  </div>

                  <hr className="border-dashed border-border-gray" />

                  {/* Pricing specs */}
                  <div className="space-y-1.5 text-xs font-price">
                    <div className="flex justify-between text-rich-black/50">
                      <span>Subtotal:</span>
                      <span>${orderReceipt.subtotal.toFixed(2)}</span>
                    </div>
                    {orderReceipt.discount > 0 && (
                      <div className="flex justify-between text-pulse-green font-semibold">
                        <span>Discount:</span>
                        <span>-${orderReceipt.discount.toFixed(2)}</span>
                      </div>
                    )}
                    {orderReceipt.deliveryFee > 0 && (
                      <div className="flex justify-between text-rich-black/50">
                        <span>Courier Express:</span>
                        <span>+${orderReceipt.deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-bold text-rich-black border-t border-border-gray pt-1.5">
                      <span>Total Charge:</span>
                      <span>${orderReceipt.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <hr className="border-dashed border-border-gray" />

                  {/* Barcode representation */}
                  <div className="flex flex-col items-center pt-2 gap-1.5">
                    <div className="h-10 w-full flex gap-[2px] items-center justify-center opacity-75">
                      {Array.from({ length: 42 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="bg-rich-black h-full"
                          style={{ width: `${Math.random() > 0.45 ? '1px' : '3px'}` }}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-rich-black/40 uppercase">
                      SCAN_TANGER_BOUTIQUE_CO_SECURE
                    </span>
                  </div>

                </div>

                <button
                  onClick={() => {
                    setOrderReceipt(null);
                    setIsCheckoutMode(false);
                    onClose();
                  }}
                  className="w-full py-3 bg-rich-black hover:bg-pulse-green text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-all"
                  id="btn-receipt-continue"
                >
                  Continue Browsing
                </button>
              </div>
            ) : isCheckoutMode ? (
              // Checkout form screen
              <form onSubmit={handlePlaceOrder} className="space-y-5 animate-fade-in">
                
                {/* Mode Selector */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rich-black/50 font-price">
                    Allocation Strategy
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutType('pickup')}
                      className={`p-3.5 border rounded-xl flex flex-col items-center text-center gap-1.5 transition-all ${
                        checkoutType === 'pickup'
                          ? 'border-pulse-green bg-pulse-green/5 text-pulse-green font-bold'
                          : 'border-border-gray hover:border-rich-black/20 text-rich-black/70 bg-white'
                      }`}
                      id="btn-checkout-type-pickup"
                    >
                      <MapPin size={16} />
                      <span className="text-xs">Store Pickup</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setCheckoutType('courier')}
                      className={`p-3.5 border rounded-xl flex flex-col items-center text-center gap-1.5 transition-all ${
                        checkoutType === 'courier'
                          ? 'border-pulse-green bg-pulse-green/5 text-pulse-green font-bold'
                          : 'border-border-gray hover:border-rich-black/20 text-rich-black/70 bg-white'
                      }`}
                      id="btn-checkout-type-courier"
                    >
                      <MapPin size={16} className="rotate-45" />
                      <span className="text-xs">Same-Day Courier</span>
                    </button>
                  </div>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-rich-black/50 font-headline">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dallas Maverick"
                      className="w-full bg-white border border-border-gray rounded-lg p-2.5 text-xs text-rich-black focus:outline-none focus:border-pulse-green"
                      id="input-checkout-name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-rich-black/50 font-headline">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (281) 555-0195"
                      className="w-full bg-white border border-border-gray rounded-lg p-2.5 text-xs text-rich-black focus:outline-none focus:border-pulse-green"
                      id="input-checkout-phone"
                    />
                  </div>

                  {checkoutType === 'pickup' ? (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-rich-black/50 font-headline">Pickup Date</label>
                        <input
                          type="date"
                          required
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          className="w-full bg-white border border-border-gray rounded-lg p-2.5 text-xs text-rich-black focus:outline-none focus:border-pulse-green"
                          id="input-checkout-date"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-rich-black/50 font-headline">Pickup Time</label>
                        <input
                          type="time"
                          required
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full bg-white border border-border-gray rounded-lg p-2.5 text-xs text-rich-black focus:outline-none focus:border-pulse-green"
                          id="input-checkout-time"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-rich-black/50 font-headline">Delivery Address (Texas Only)</label>
                      <textarea
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. Houston, Downtown Luxury Lofts Apt 5B"
                        rows={2}
                        className="w-full bg-white border border-border-gray rounded-lg p-2.5 text-xs text-rich-black focus:outline-none focus:border-pulse-green resize-none"
                        id="input-checkout-address"
                      />
                    </div>
                  )}
                </div>

                <div className="bg-soft-gray p-4 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-rich-black">
                    <CreditCard size={14} className="text-pulse-green" />
                    <span>In-Store Handoff Validation</span>
                  </div>
                  <p className="text-[10px] text-rich-black/50 leading-relaxed font-sans">
                    No card charge will be drawn online. We reserve your actual size at the Tanger Houston store. Simply validate with your barcode or ID on arrival.
                  </p>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckoutMode(false)}
                    className="px-4 py-3 border border-border-gray rounded-full text-xs font-semibold uppercase hover:bg-soft-gray transition-all text-rich-black"
                    id="btn-checkout-back"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-rich-black hover:bg-pulse-green text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-all flex items-center justify-center gap-1.5"
                    id="btn-checkout-submit"
                  >
                    <span>Reserve My Sizing</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </form>
            ) : cartItems.length > 0 ? (
              // Items display
              <div className="space-y-4 animate-fade-in">
                {cartItems.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="flex gap-4 p-3 border border-border-gray rounded-xl hover:border-rich-black/15 transition-all"
                  >
                    {/* Item Image */}
                    <div className="w-16 h-16 rounded-lg bg-soft-gray p-2 flex items-center justify-center shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Item Meta */}
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-xs font-bold text-rich-black line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                          className="text-rich-black/40 hover:text-red-500 p-0.5"
                          id={`btn-cart-remove-${idx}`}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <p className="text-[10px] text-rich-black/50">
                          Size: <span className="font-bold text-rich-black">{item.selectedSize}</span> · {item.product.brand}
                        </p>
                        <span className="text-xs font-bold font-price text-rich-black">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Toggles */}
                      <div className="flex justify-between items-center pt-1.5">
                        <span className="text-[10px] text-rich-black/40">Quantity:</span>
                        <div className="flex items-center border border-border-gray rounded-md bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                            className="px-1.5 py-0.5 hover:bg-soft-gray text-xs text-rich-black font-bold"
                            id={`btn-cart-minus-${idx}`}
                          >
                            -
                          </button>
                          <span className="px-2.5 text-[11px] font-bold text-rich-black font-price">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                            className="px-1.5 py-0.5 hover:bg-soft-gray text-xs text-rich-black font-bold"
                            id={`btn-cart-plus-${idx}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty cart state
              <div className="py-16 text-center space-y-3">
                <ShoppingBag size={28} className="mx-auto text-rich-black/20" />
                <div>
                  <h3 className="text-xs font-bold text-rich-black uppercase">Your Bag is Empty</h3>
                  <p className="text-xs text-rich-black/40 mt-1 max-w-xs mx-auto">
                    Fill it with curated footwear, matching hoodies, and custom-embordered trucker hats.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-rich-black text-white text-[10px] font-bold tracking-widest uppercase rounded-lg hover:bg-pulse-green transition-all"
                  id="btn-cart-shop-now"
                >
                  Shop Now
                </button>
              </div>
            )}

          </div>

          {/* Drawer Footer Calculator */}
          {!orderReceipt && (
            <div className="px-6 py-5 border-t border-border-gray bg-soft-gray/50 space-y-4">
              
              {/* Promo Code area if not checking out */}
              {!isCheckoutMode && cartItems.length > 0 && (
                <div className="space-y-1.5">
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="PROMO CODE"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-white border border-border-gray rounded-lg px-3 py-2 text-xs focus:outline-none placeholder-rich-black/30 font-semibold"
                      id="input-cart-promo"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-rich-black text-white text-[10px] font-bold tracking-widest uppercase rounded-lg"
                      id="btn-apply-promo"
                    >
                      Apply
                    </button>
                  </form>
                  {activeDiscount && (
                    <p className="text-[10px] font-bold text-pulse-green flex items-center gap-1 font-headline">
                      <Tag size={10} />
                      <span>Code "{activeDiscount.code}" applied: {activeDiscount.percent}% discount</span>
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[10px] font-bold text-red-500 font-headline">{promoError}</p>
                  )}
                </div>
              )}

              {/* Pricing Math details */}
              {cartItems.length > 0 && (
                <div className="space-y-1.5 text-xs font-price">
                  <div className="flex justify-between text-rich-black/60">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {activeDiscount && (
                    <div className="flex justify-between text-pulse-green font-semibold">
                      <span>Discount</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  {checkoutType === 'courier' && (
                    <div className="flex justify-between text-rich-black/60">
                      <span>Courier Express</span>
                      <span>+${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-rich-black border-t border-border-gray pt-1.5">
                    <span>Estimated Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {/* Action Trigger */}
              {cartItems.length > 0 && !isCheckoutMode && (
                <button
                  onClick={() => setIsCheckoutMode(true)}
                  className="w-full py-3.5 bg-rich-black hover:bg-pulse-green text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-all flex items-center justify-center gap-1.5 group"
                  id="btn-trigger-checkout"
                >
                  <span>Proceed to Reservation</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}

              <div className="flex items-center gap-2 text-[10px] text-rich-black/40 justify-center">
                <Ticket size={12} className="text-pulse-green" />
                <span>Pick-up ready within 2 hours at Tanger Outlets Houston</span>
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
}
