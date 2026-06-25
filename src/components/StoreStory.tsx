import React from 'react';

export default function StoreStory() {
  return (
    <section id="story-section" className="py-20 sm:py-28 bg-white border-t border-nb-grey-200 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-nb-black font-headline uppercase mb-8">
              Our Story
            </h2>
            
            <div className="space-y-6 text-nb-grey-500 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Founded in the heart of Texas, PULSE was born out of a shared passion for sneaker culture and international streetwear. We wanted to create a destination where the most sought-after brands could be experienced in person.
              </p>
              <p>
                Located at the Tanger Outlets in Houston, our physical space serves as a community hub for sneakerheads, athletes, and streetwear enthusiasts. We curate a premium selection from globally recognized names like New Balance, Jordan, ASICS, and more.
              </p>
              <p>
                Whether you're looking for your next rotation staple or an exclusive drop, our dedicated team is here to help you elevate your game. Come visit us and find your pulse.
              </p>
            </div>
            
            <div className="mt-10">
              <a 
                href="#"
                className="inline-block px-8 py-3.5 bg-nb-black text-white text-[13px] font-semibold tracking-widest uppercase hover:bg-nb-grey-600 transition-all duration-200"
              >
                Visit Houston Store
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 h-[400px] sm:h-[500px] lg:h-[600px] w-full bg-nb-grey-100 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80" 
              alt="PULSE Storefront in Houston" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
