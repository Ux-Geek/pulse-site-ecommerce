export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: 'Sneakers' | 'Streetwear' | 'Accessories';
  images: [string, string]; // [primary, hover]
  sizes: string[];
  description: string;
  details: string[];
  colors: string[];
  trending: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface Brand {
  name: string;
  logoUrl?: string;
  description: string;
}

export interface StoreEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}
