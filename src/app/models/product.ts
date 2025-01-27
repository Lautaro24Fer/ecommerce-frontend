export interface Product {
  id: number;
  name: string;
  price: number;
  offer?: number;
  imageUrl: string;
  description: string;
  color: string[];
  category: string;
  stock: number;
  brand: string;
}
