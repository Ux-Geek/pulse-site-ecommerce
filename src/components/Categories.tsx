import React from 'react';

interface CategoriesProps {
  onCategorySelect: (category: 'All' | 'Sneakers' | 'Streetwear' | 'Accessories') => void;
}

export default function Categories({ onCategorySelect }: CategoriesProps) {
  const items = [
    {
      title: 'Sneakers',
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'Sneakers'
    },
    {
      title: 'Streetwear',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'Streetwear'
    },
    {
      title: 'Accessories',
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'Accessories'
    },
    {
      title: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
      categoryKey: 'All'
    }
  ];

  const handleCardClick = (categoryKey: string) => {
    onCategorySelect(categoryKey as any);
    const section = document.getElementById('products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-nb-black font-headline uppercase">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid — 2x2 on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item.categoryKey)}
              className="group relative h-[320px] sm:h-[400px] overflow-hidden cursor-pointer bg-nb-grey-100"
              id={`category-card-${item.title.toLowerCase().replace(' ', '-')}`}
            >
              {/* Image with hover zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover img-zoom"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Category Label — bottom left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-headline">
                  {item.title}
                </h3>
                <div className="mt-2 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                  <span className="text-[12px] font-medium text-white/80 uppercase tracking-wider underline underline-offset-4">
                    Shop Now
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
