import React from 'react';

export default function StoreStory() {
  return (
    <section id="story-section" className="relative w-full h-[600px] sm:h-[700px] overflow-hidden bg-nb-grey-100">
      {/* Full-width Lifestyle Image */}
      <img
        src="https://images.unsplash.com/photo-1517438476312-10d79c07750d?q=80&w=2000&auto=format&fit=crop"
        alt="The PULSE Collection"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      {/* Content Container - Positioned to match the screenshot (left-aligned) */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl space-y-6 text-left">
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-nb-black font-headline font-medium tracking-tight">
              Play your game.
            </h2>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-nb-black font-sans">
              The international streetwear collection
            </p>
            
            {/* CTA Button */}
            <div className="pt-2">
              <button
                className="px-8 py-3.5 bg-nb-black hover:bg-nb-grey-600 text-white text-[13px] tracking-wide transition-all duration-200"
                id="btn-story-shop"
                onClick={() => {
                  const section = document.getElementById('products-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Shop now
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
