import React, { useState } from 'react';
import { STORE_EVENTS } from '../data';
import { MapPin, Clock, Calendar, ShieldCheck, Footprints, MessageSquare } from 'lucide-react';

export default function StoreStory() {
  const [activeTab, setActiveTab] = useState<'about' | 'events' | 'hours'>('about');

  return (
    <section id="story-section" className="py-16 sm:py-24 bg-soft-gray border-b border-border-gray scroll-mt-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Architecture Frame (Left 5 Columns) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-[2px] overflow-hidden shadow-md border border-border-gray">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop"
              alt="PULSE Storefront Design Concept"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-[2px] border border-border-gray/50 shadow-md">
              <span className="text-[9px] font-bold tracking-widest text-pulse-green uppercase font-price block mb-1">
                FLAGSHIP BOUTIQUE
              </span>
              <p className="text-sm font-bold text-rich-black leading-tight font-headline">
                Tanger Outlets Houston
              </p>
              <p className="text-xs text-rich-black/50 font-sans mt-1">
                Suite 412, Tanger Court Mall Road, Texas
              </p>
            </div>
          </div>

          {/* Interactive Text & Meta Panels (Right 7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header copy */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-pulse-green tracking-[0.2em] uppercase font-price block">
                LOCATED IN TEXAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-rich-black font-headline">
                Tanger Outlets Houston
              </h2>
            </div>

            {/* Premium Selector Tabs */}
            <div className="flex border-b border-border-gray">
              {(['about', 'events', 'hours'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === tab
                      ? 'border-pulse-green text-pulse-green'
                      : 'border-transparent text-rich-black/40 hover:text-rich-black'
                  }`}
                  id={`tab-story-${tab}`}
                >
                  {tab === 'about' ? 'Boutique Story' : tab === 'events' ? 'In-Store Events' : 'Hours & Safety'}
                </button>
              ))}
            </div>

            {/* Tab Panels with Motion/Fades */}
            <div className="min-h-[220px]">
              {activeTab === 'about' && (
                <div className="space-y-4 animate-fade-in font-sans">
                  <p className="text-sm text-rich-black/70 leading-relaxed">
                    PULSE is a premium sneaker and streetwear destination built for people who appreciate style, comfort, and culture. We believe the shoes you wear and the clothing you put on are expressions of movement and modern identity.
                  </p>
                  <p className="text-sm text-rich-black/70 leading-relaxed">
                    Our Houston flagship space brings together the hyper-curated aesthetics of premium retailers like Kith and GOAT, while maintaining a friendly, warm, and highly commercial store experience. Every brand we stock is selected with extreme intentionality.
                  </p>
                  
                  {/* Visual bullet indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck size={18} className="text-pulse-green shrink-0" />
                      <span className="text-xs font-semibold text-rich-black">100% In-hand authentication guarantee</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Footprints size={18} className="text-pulse-green shrink-0" />
                      <span className="text-xs font-semibold text-rich-black">Exclusive brand priority allocations</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-xs text-rich-black/50 font-sans">
                    We host regular community activations, pre-launches, and sizing workshops. Walk in and join the community:
                  </p>
                  
                  <div className="space-y-3">
                    {STORE_EVENTS.map((ev) => (
                      <div
                        key={ev.id}
                        className="bg-white border border-border-gray p-3.5 rounded-[2px] flex gap-3.5 items-start hover:border-nb-red/20 hover:shadow-md transition-all"
                      >
                        <div className="p-2 bg-pulse-green/10 text-pulse-green rounded-[2px] shrink-0">
                          <Calendar size={15} />
                        </div>
                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-xs font-bold text-rich-black font-headline">
                              {ev.title}
                            </h4>
                            <span className="text-[10px] font-bold text-pulse-green bg-pulse-green/10 px-2 py-0.5 rounded-[1px] font-price whitespace-nowrap self-start sm:self-auto">
                              {ev.date}
                            </span>
                          </div>
                          <p className="text-[11px] text-rich-black/60 leading-relaxed font-sans">
                            {ev.description}
                          </p>
                          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-rich-black/40 uppercase tracking-wider">
                            <MapPin size={10} />
                            <span>{ev.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'hours' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                    
                    {/* Hours block */}
                    <div className="space-y-3 bg-white p-5 rounded-[2px] border border-border-gray">
                      <div className="flex items-center gap-2 text-xs font-bold text-rich-black font-headline border-b border-border-gray pb-2">
                        <Clock size={14} className="text-pulse-green" />
                        <span>Boutique Schedule</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-rich-black/70">
                        <div className="flex justify-between font-medium">
                          <span>Monday — Thursday</span>
                          <span>10:00 AM — 8:00 PM</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Friday — Saturday</span>
                          <span>10:00 AM — 9:00 PM</span>
                        </div>
                        <div className="flex justify-between font-medium text-pulse-green font-bold">
                          <span>Sunday</span>
                          <span>11:00 AM — 6:00 PM</span>
                        </div>
                      </div>
                    </div>
 
                    {/* Support details */}
                    <div className="space-y-3 bg-white p-5 rounded-[2px] border border-border-gray">
                      <div className="flex items-center gap-2 text-xs font-bold text-rich-black font-headline border-b border-border-gray pb-2">
                        <MessageSquare size={14} className="text-pulse-green" />
                        <span>Concierge Helpline</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-rich-black/70">
                        <p className="leading-relaxed">
                          Need an urgent size reservation or curbside concierge handoff? Drop our Tanger staff a direct request.
                        </p>
                        <p className="font-bold text-rich-black font-headline">
                          Houston Hotline: <span className="font-price text-pulse-green text-sm">+1 (281) 555-0195</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
