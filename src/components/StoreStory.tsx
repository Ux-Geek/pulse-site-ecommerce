import React from 'react';

export default function StoreStory() {
  return (
    <section className="relative w-full h-[600px] sm:h-[700px] overflow-hidden bg-nb-grey-100 group">
      <img
        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80"
        alt="Featured Sneaker"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-green-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase drop-shadow-md">
              Exclusive Drop
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl text-white font-headline font-black tracking-tight uppercase drop-shadow-lg">
              The Icon, Evolved
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-sans max-w-lg mx-auto drop-shadow-md">
              Engineered for the streets. Experience the new generation of comfort and style.
            </p>
            <div className="pt-8">
              <button
                className="px-10 py-4 bg-white text-nb-black hover:bg-green-400 font-bold text-[13px] tracking-widest uppercase transition-all duration-300"
                onClick={() => {
                  const section = document.getElementById('products-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Shop The Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
