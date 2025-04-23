import axios from "axios";
import type { Product } from "@/model/product_model";
import type { Variant } from "@/model/product_model";

const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const productService = {
  // Lấy danh sách sản phẩm
  async getProducts(): Promise<Product[]> {
    const response = await axios.get(`${API_URL}/product`);
    return response.data;
  },
  // Lấy 1 sản phẩm theo ID
  async getProductById(id: string): Promise<Product> {
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response.data;
  },

  // // Lấy 1 sản phẩm theo ID
  // async getProductVariantsById(id: string): Promise<Product> {
  //   const response = await axios.get(`${API_URL}/product/${id}/variants`);
  //   return response.data;
  // },

  // Thêm sản phẩm mới
  async createProduct(product: Partial<Product>): Promise<Product> {
    const response = await axios.post(`${API_URL}/product`, product);
    return response.data;
  },
  // Cập nhật sản phẩm
  async updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    const response = await axios.put(`${API_URL}/product/${id}`, product);
    return response.data;
  },
  // Xóa sản phẩm
  async deleteProduct(id: string): Promise<void> {
    await axios.delete(`${API_URL}/product/${id}`);
  },
  //variant
  async getVariantById(id: string): Promise<Variant> {
    const response = await axios.get(`${API_URL}/product/${id}/variants`);
    return response.data;
  },
  async updateVariantById(
    id: string,
    variant: Partial<Variant>,
  ): Promise<Variant> {
    const response = await axios.put(
      `${API_URL}/product/variant/${id}`,
      variant,
    );
    return response.data;
  },
  async deleteVariant(id: string): Promise<void> {
    await axios.delete(`${API_URL}/product/variant/${id}`);
  },
};
