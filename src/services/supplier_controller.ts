import axios from "axios";
import type { Supplier } from "@/model/supplier_model";

const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const supplierService = {
  async getAllSupplier(): Promise<Supplier[]> {
    const response = await axios.get(`${API_URL}/supplier`);
    console.log(response.data);
    return response.data;
  },
};
