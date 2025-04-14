export interface User {
  userID: string;
  name: string;
}

export interface ProductInfo {
  productID: string;
  productName: string;
}

export interface Comments {
  _id: string;
  sku_id: string;
  user: User;
  product: ProductInfo;
  content: string;
  like: number;
  dislike: number;
  createdAt: Date;
  updatedAt: Date;
}
