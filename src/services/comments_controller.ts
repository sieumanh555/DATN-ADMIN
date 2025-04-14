import axios from "axios";
import type { Comments } from "@/model/comments_model";

const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const commentsService = {
  async getAllComments(): Promise<Comments[]> {
    const response = await axios.get(`${API_URL}/comments`);
    return response.data;
  },
};
