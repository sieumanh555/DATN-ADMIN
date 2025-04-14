import axios from "axios";
import type { News } from "@/model/news_model";

const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const newsService = {
  async getAllNews(): Promise<News[]> {
    const response = await axios.get(`${API_URL}/news`);
    console.log(response.data);
    return response.data;
  },
};
