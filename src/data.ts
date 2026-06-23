import { Product, StoreEvent } from './types';

export const PRODUCTS: Product[] = [
  // SNEAKERS
  {
    id: 'nb-9060-rain-cloud',
    name: 'New Balance 9060 "Rain Cloud"',
    brand: 'New Balance',
    price: 150,
    originalPrice: 150,
    category: 'Sneakers',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'],
    description: 'The 9060 is a new expression of the refined style and innovation-led design that has made the 99X series home to some of the most iconic models in New Balance history.',
    details: [
      'Mesh upper with pigskin suede overlays',
      'Dual-density midsole featuring ABZORB and SBS cushioning',
      'Logo on tongue inspired by original 991 lace jewel',
      'Translucent CR device at heel',
      'Diamond outsole pattern inspired by classic 860 design'
    ],
    colors: ['Rain Cloud', 'Castlerock', 'White'],
    trending: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.8,
    reviewsCount: 124
  },
  {
    id: 'jordan-1-retro-chicago',
    name: 'Air Jordan 1 Retro High OG "Lost & Found"',
    brand: 'Jordan',
    price: 180,
    originalPrice: 180,
    category: 'Sneakers',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['8', '9', '9.5', '10', '10.5', '11', '12'],
    description: 'The Air Jordan 1 Retro High OG "Lost & Found" brings back the iconic high-top silhouette in the original "Chicago" colorway, featuring pre-aged aesthetic details.',
    details: [
      'Cracked leather collar and sail-colored midsole for a vintage look',
      'Traditional Nike Air branding on the tongue',
      'Encapsulated Air-Sole cushioning in the heel',
      'Special edition packaging with mismatched lids and retail receipts'
    ],
    colors: ['Varsity Red', 'Black', 'Sail', 'White'],
    trending: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.9,
    reviewsCount: 342
  },
  {
    id: 'asics-gel-kayano-14',
    name: 'ASICS Gel-Kayano 14 "Cream Black"',
    brand: 'ASICS',
    price: 150,
    originalPrice: 150,
    category: 'Sneakers',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    description: 'Conveying a new perception to the retro running shape, the Gel-Kayano 14 resurfaces with its late 2000s aesthetic as a nod to the storied series.',
    details: [
      'Late 2000s running designer aesthetic',
      'GEL technology cushioning provides excellent shock absorption',
      'TRUSSTIC support system improves stability',
      'Leather and mesh upper construction'
    ],
    colors: ['Cream', 'Black', 'Metallic Gold'],
    trending: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviewsCount: 88
  },
  {
    id: 'nike-dunk-low-panda',
    name: 'Nike Dunk Low "Retro White Black"',
    brand: 'Nike',
    price: 115,
    originalPrice: 115,
    category: 'Sneakers',
    images: [
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13'],
    description: 'Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.',
    details: [
      'Premium leather upper with vintage basketball design',
      'Foam midsole offers lightweight, responsive cushioning',
      'Padded, low-cut collar adds a sleek look and comfortable feel',
      'Rubber outsole with classic hoops pivot circle adds durability'
    ],
    colors: ['White', 'Black'],
    trending: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.6,
    reviewsCount: 512
  },
  {
    id: 'adidas-samba-og',
    name: 'Adidas Samba OG "Core Black"',
    brand: 'Adidas',
    price: 100,
    originalPrice: 100,
    category: 'Sneakers',
    images: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['6', '7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    description: 'Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper.',
    details: [
      'Full grain leather upper with gritty suede and gold foil details',
      'Synthetic leather lining',
      'Gum rubber midsole and outsole'
    ],
    colors: ['Core Black', 'Cloud White', 'Gum'],
    trending: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviewsCount: 290
  },
  {
    id: 'hoka-clifton-9',
    name: 'Hoka Clifton 9 "All White"',
    brand: 'Hoka',
    price: 145,
    originalPrice: 145,
    category: 'Sneakers',
    images: [
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    description: 'The ninth iteration of our award-winning Clifton franchise has launched, lighter and more cushioned than ever before.',
    details: [
      'Breathable engineered knit upper',
      'Compression-molded EVA foam midsole',
      'Early stage Meta-Rocker for smooth heel-to-toe transition',
      'Durabrasion rubber outsole'
    ],
    colors: ['White', 'Nimbus Cloud'],
    trending: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviewsCount: 64
  },

  // STREETWEAR
  {
    id: 'fog-essentials-hoodie',
    name: 'Fear of God Essentials Knit Hoodie',
    brand: 'Fear of God',
    price: 135,
    originalPrice: 135,
    category: 'Streetwear',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Crafted with a luxurious heavy knit texture, this hoodie features the signature oversized Essentials fit with a double-layered hood and relaxed shoulders.',
    details: [
      '80% Cotton, 20% Polyester premium blend',
      'Essentials rubberized logo applique on chest and sleeve',
      'Ribbed knit cuffs and waist hem',
      'Double-lined hood without drawstrings for a clean, structural fit'
    ],
    colors: ['Oatmeal', 'Buttercream', 'Black'],
    trending: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.7,
    reviewsCount: 198
  },
  {
    id: 'represent-owners-tee',
    name: 'Represent "Owners Club" Heavy Tee',
    brand: 'Represent',
    price: 95,
    originalPrice: 95,
    category: 'Streetwear',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'The Owners Club T-Shirt in flat white is crafted from luxury medium-weight jersey cotton, designed with a slightly oversized fit and signature graphics on chest and back.',
    details: [
      '100% Cotton, 220gsm luxury jersey',
      'Screen printed branding on chest and back',
      'Represent metal bar logo at hem',
      'Ribbed crewneck collar'
    ],
    colors: ['Flat White', 'Cobalt Blue', 'Vintage Black'],
    trending: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviewsCount: 45
  },
  {
    id: 'fog-essentials-pants',
    name: 'Fear of God Essentials Sweatpants',
    brand: 'Fear of God',
    price: 110,
    originalPrice: 110,
    category: 'Streetwear',
    images: [
      'https://images.unsplash.com/photo-1517438476312-10d79c07750d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Relaxed-fit lounge pants in a soft fleece-back cotton-blend knit, featuring an elasticized waistband with long drawstrings and signature rubberized logo detailing.',
    details: [
      'Heavyweight 80% Cotton, 20% Polyester fleece back',
      'Elasticized cuffs and drawstring waist',
      'Side seam pockets and rear pocket',
      'Essentials rubberized label at center front waist'
    ],
    colors: ['Cement', 'Taupe', 'Black'],
    trending: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.5,
    reviewsCount: 160
  },

  // ACCESSORIES
  {
    id: 'pulse-trucker-hat',
    name: 'PULSE Houston Utility Trucker Hat',
    brand: 'PULSE',
    price: 45,
    originalPrice: 45,
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['One Size'],
    description: 'Designed in-house to commemorate our flagship Tanger Outlets Houston location, this vintage-cut trucker features curated structural mesh and elevated embroidery.',
    details: [
      'Cotton canvas front panel and premium nylon mesh back',
      '3D raised puff embroidery stating "PULSE HOUSTON TX"',
      'Adjustable snapback closure for a personalized fit',
      'Slightly curved visor profile'
    ],
    colors: ['Pulse Green', 'Rich Black', 'Vintage White'],
    trending: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviewsCount: 74
  },
  {
    id: 'represent-capsule-socks',
    name: 'Represent Everyday Ribbed Socks (3-Pack)',
    brand: 'Represent',
    price: 35,
    originalPrice: 40,
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1582966772680-860e372bb558?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524242174126-17fa613470ab?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['One Size'],
    description: 'Elevate your daily wear with this triple-pack of premium, heavy-weight athletic ribbed socks, engineered with breathable weave zones and cushioned soles.',
    details: [
      '80% Combed Cotton, 17% Polyamide, 3% Elastane',
      'Jacquard knit logo at lateral leg and toe',
      'High-stretch arch support banding',
      'Presented in custom matte collection box'
    ],
    colors: ['Multi-color Pack'],
    trending: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviewsCount: 52
  },
  {
    id: 'pulse-scent-candle',
    name: 'PULSE Scent No. 1 "Concrete & Sandalwood"',
    brand: 'PULSE',
    price: 55,
    originalPrice: 55,
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508247967583-7d982ea00926?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: ['One Size'],
    description: 'Our signature studio fragrance custom-blended in collaboration with Texas-based artisans. It captures clean mineral energy with an earthy sandalwood foundation.',
    details: [
      '8oz hand-poured natural soy wax blend in matte concrete vessel',
      'Notes: Wet concrete, Cardamom, Sandalwood, Virginia Cedar, Amber',
      'Burn time: Approximately 45-50 hours',
      'Cotton core single wick design for clean extraction'
    ],
    colors: ['Concrete Grey'],
    trending: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.9,
    reviewsCount: 31
  }
];

export const BRANDS: string[] = [
  'Nike',
  'Jordan',
  'New Balance',
  'ASICS',
  'Adidas',
  'Hoka',
  'On',
  'Represent',
  'Fear of God'
];

export const STORE_EVENTS: StoreEvent[] = [
  {
    id: 'ev-1',
    title: 'New Balance 990v6 Flagship Release',
    date: 'Saturday, June 27th — 10:00 AM',
    description: 'An exclusive live drop at our Tanger Outlets Houston location. First 50 guests receive limited-edition PULSE Houston custom packaging and dustbags.',
    location: 'Flagship Store Court'
  },
  {
    id: 'ev-2',
    title: 'Houston Streetwear Swap & Culture Talk',
    date: 'Thursday, July 9th — 6:00 PM to 9:00 PM',
    description: 'Join local tastemakers, collectors, and designers for an evening of networking, streetwear appraisal, live music, and panel discussions on regional style.',
    location: 'PULSE Studio Lounge'
  },
  {
    id: 'ev-3',
    title: 'Fear of God Essentials Summer Drops',
    date: 'Friday, July 17th — 9:00 AM',
    description: 'Direct shipment arrival featuring the complete seasonal pastel colorways. Early reservation and catalog pre-orders will go live in-app for VIP members.',
    location: 'Full Catalog Showcase'
  }
];
