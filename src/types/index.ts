
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = "All" | "Electronics" | "Fashion" | "Books" | "Computers" | "Mobiles" | "Gadgets";
