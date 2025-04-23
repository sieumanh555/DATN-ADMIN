export interface Category {
  categoryId: string;
  categoryName: string;
  _id: string;
}
export interface Variant {
  _id: string;
  productId: string;
  size: string | number;
  color: string;
  price: number;
  stock: number;
  images: string[];
  status: string;
}
export interface Product {
  _id: string;
  sku_id: string;
  name: string;
  price: number;
  pricePromo: number;
  mota: string;
  hinhanh: string;
  quantity: number;
  hot: number;
  view: number;
  location: string;
  rating: number;
  status: string;
  category: string | Category;
  variants: Variant[];
  createdAt: Date;
  updatedAt: Date;
}
