import axios from "axios";
import type { User } from "@/model/user_model";

const API_URL = "https://datn-api-production.up.railway.app"; // Đổi thành API của bạn

export const userService = {
  async getAllUser(): Promise<User[]> {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  },
  async getUser(id: string): Promise<User> {
    const response = await axios.get(`${API_URL}/user/${id}`);
    return response.data.data;
  },
  async deleteUser(id: string): Promise<User[]> {
    const response = await axios.delete(`${API_URL}/user/${id}`);
    return response.data;
  },
  async updateUser(id: string, user: Partial<User>): Promise<User[]> {
    const response = await axios.put(`${API_URL}/user/${id}`, user);
    return response.data;
  },
};

export const employeeService = {
  async getAllEmployee(): Promise<User[]> {
    const response = await axios.get(`${API_URL}/user/getemployee`);
    return response.data;
  },
  async getUser(id: string): Promise<User> {
    const response = await axios.get(`${API_URL}/user/${id}`);
    return response.data.data;
  },
  async deleteUser(id: string): Promise<User[]> {
    const response = await axios.delete(`${API_URL}/user/${id}`);
    return response.data;
  },
  async updateUser(id: string, user: Partial<User>): Promise<User[]> {
    const response = await axios.put(`${API_URL}/user/${id}`, user);
    return response.data;
  },
  async loginAdmin(user: { email: string; password: string }) {
    const response = await axios.post(`${API_URL}/user/admin/login`, user);
    return response;
  },
};
