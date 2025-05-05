import axios from "axios";
import type { Order, OrderItem, OrderItemGroup } from "@/model/order_model";


const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const orderService = {
  async getAllOrder(): Promise<Order[]> {
    const response = await axios.get(`${API_URL}/order`);
    return response.data.data;
  },
  async getAllOrderFailed(): Promise<Order[]> {
    const response = await axios.get(`${API_URL}/order/orderfailed`);
    return response.data.data;
  },
  async getAllOrderToDay(): Promise<Order[]> {
    const response = await axios.get(`${API_URL}/order/orderday`);
    return response.data.data;
  },
  async getOrderTotalToDay(): Promise<Order[]> {
    const response = await axios.get(`${API_URL}/order/ordertotaladay`);
    return response.data.data;
    
  },
  async getOrderTotal(): Promise<Order[]> {
    const response = await axios.get(`${API_URL}/order/ordertotal`);
    return response.data.data;
  },
  async getOrderById(id: string): Promise<Order> {
    const response = await axios.get(`${API_URL}/order/${id}`);
    return response.data.data;
  },
  async deleteOrder(id: string): Promise<void> {
    await axios.delete(`${API_URL}/order/${id}`);
  },
  async updateOrder(
    id: string,
    categories: Partial<Order>,
  ): Promise<Order> {
    const response = await axios.put(`${API_URL}/category/${id}`, categories);
    return response.data;
  },
};
export const orderItemService = {
    async getAllOrderItem(): Promise<OrderItem[]> {
      const response = await axios.get(`${API_URL}/orderDetails`);
      return response.data;
    },
    async getOrderItemsById(id: string): Promise<OrderItemGroup> {
      const response = await axios.get(`${API_URL}/orderDetails/${id}`);
      return response.data.data;
    },
  };