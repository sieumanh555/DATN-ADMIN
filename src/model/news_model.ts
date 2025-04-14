export interface Category {
  categoryId: string;
  categoryName: string;
}

export interface News {
  _id?: string;
  sku_id: string;
  title: string;
  content?: string;
  image?: string;
  imageChild?: string[];
  status?: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
