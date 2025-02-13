export interface Product {
  id: number;
  name: string;
  price: number;
  offer?: number;
  imageUrl: string;
  secondariesImages?: string[];
  sizes: ProductSize[]
  description: string;
  color: string[];
  category: string;
  stock: number;
  brand: string;
}

export interface ProductSize {
  size: string | number;
  stock: number;
}
