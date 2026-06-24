import React, { useState } from 'react';
import { STORE_EVENTS } from '../data';
import { MapPin, Clock, Calendar, ShieldCheck, Footprints, Phone } from 'lucide-react';

export default function StoreStory() {
  const [activeTab, setActiveTab] = useState<'about' | 'events' | 'hours'>('about');

  const tabs = [
    { key: 'about' as const, label: 'About' },
    { key: 'events' as const, label: 'Events' },
    { key: 'hours' as const, label: 'Hours' }
  ];

  return (
    <section id="story-section" className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Image */}
          <div className="relative h-[350px] sm:h-[480px] overflow-hidden bg-nb-grey-100">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop"
              alt="PULSE Store"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-5 sm:p-6">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-nb-grey-400 mb-1">
                Flagship Store
              </p>
              <p className="text-sm font-bold text-nb-black">
                Tanger Outlets Houston
              </p>
              <p className="text-xs text-nb-grey-500 mt-0.5">
                Suite 412, Tanger Court Mall Road, Texas
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-nb-black font-headline uppercase">
                Our Story
              </h2>
            </div>

            {/* Tabs — simple underline */}
            <div className="flex border-b border-nb-grey-200">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-3 px-5 text-[13px] font-medium uppercase tracking-wide transition-all relative ${
                    activeTab === tab.key
                      ? 'text-nb-black'
                      : 'text-nb-grey-400 hover:text-nb-black'
                  }`}
                  id={`tab-story-${tab.key}`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-nb-black" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'about' && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-sm text-nb-grey-600 leading-relaxed">
                    PULSE is a premium sneaker and streetwear destination built for people who appreciate style, comfort, and culture. We believe the shoes you wear and the clothing you put on are expressions of movement and modern identity.
                  </p>
                  <p className="text-sm text-nb-grey-600 leading-relaxed">
                    Our Houston flagship brings together hyper-curated aesthetics with a warm, commercial store experience. Every brand we stock is selected with extreme intentionality.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-3 py-2">
                      <ShieldCheck size={18} className="text-nb-black shrink-0" />
                      <span className="text-xs font-medium text-nb-black">100% Authentication Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 py-2">
                      <Footprints size={18} className="text-nb-black shrink-0" />
                      <span className="text-xs font-medium text-nb-black">Exclusive Brand Allocations</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div className="space-y-3 animate-fade-in">
                  {STORE_EVENTS.map((ev) => (
                    <div
                      key={ev.id}
                      className="border border-nb-grey-200 p-4 hover:border-nb-grey-300 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <h4 className="text-sm font-bold text-nb-black">{ev.title}</h4>
                        <span className="text-[11px] font-medium text-nb-grey-500 whitespace-nowrap">{ev.date}</span>
                      </div>
                      <p className="text-xs text-nb-grey-500 leading-relaxed">{ev.description}</p>
                      <div className="flex items-center gap-1.5 text-[10px] font-medium text-nb-grey-400 uppercase tracking-wider mt-2">
                        <MapPin size={10} />
                        <span>{ev.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'hours' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-nb-black border-b border-nb-grey-200 pb-2">
                      <Clock size={14} />
                      <span>Store Hours</span>
                    </div>
                    <div className="space-y-2 text-sm text-nb-grey-600">
                      <div className="flex justify-between">
                        <span>Monday — Thursday</span>
                        <span className="font-medium text-nb-black">10:00 AM — 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday — Saturday</span>
                        <span className="font-medium text-nb-black">10:00 AM — 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-nb-black">11:00 AM — 6:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-nb-black border-b border-nb-grey-200 pb-2">
                      <Phone size={14} />
                      <span>Contact</span>
                    </div>
                    <p className="text-sm text-nb-grey-600">
                      Need a size reservation or curbside pickup?
                    </p>
                    <p className="text-sm font-bold text-nb-black font-price">
                      +1 (281) 555-0195
                    </p>
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
