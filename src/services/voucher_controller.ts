import axios from "axios";
import type { Voucher } from "@/model/voucher_model";
import type { Disvoucher } from "@/model/voucher_model";

const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const voucherService = {
  async getAllVoucher(): Promise<Voucher[]> {
    const response = await axios.get(`${API_URL}/voucher`);
    return response.data;
  },
};
export const disvoucherService = {
  async getAlldisVoucher(): Promise<Disvoucher[]> {
    const response = await axios.get(`${API_URL}/litmitvc`);
    return response.data;
  },
};
