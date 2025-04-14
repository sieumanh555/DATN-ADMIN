import axios from "axios";
import type { Categories } from "@/model/categories_model";

const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const categoryService = {
  async getAllCategory(): Promise<Categories[]> {
    const response = await axios.get(`${API_URL}/category`);
    console.log(response.data);
    return response.data;
  },
  async createCategory(category: { name: string; status: string }) {
    const response = await axios.post(`${API_URL}/category`, category);
    console.log(response.data);
    return response; // ← trả nguyên object response
  },
  async deleteCategory(id: string) {
    const response = await axios.delete(`${API_URL}/category/${id}`);
    console.log(response);
    return response;
  },
  async getCategoryById(id: string): Promise<Categories> {
    const response = await axios.get(`${API_URL}/category/${id}`);
    return response.data;
  },
  async updateCategory(
    id: string,
    categories: Partial<Categories>,
  ): Promise<Categories> {
    const response = await axios.put(`${API_URL}/category/${id}`, categories);
    return response.data;
  },
};
