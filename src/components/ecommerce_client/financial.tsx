'use client';
import { useState, useEffect } from 'react';
import { productService } from '@/services/product_controller';
import { Product } from '@/model/product_model';
import { userService } from '@/services/user_controller';
import { User } from '@/model/user_model';
import { voucherService } from '@/services/voucher_controller';
import { Voucher } from '@/model/voucher_model';
import { categoryService } from '@/services/categories_controller';
import { Categories } from '@/model/categories_model';
import { Order } from '@/model/order_model';
import { orderService } from '@/services/order_controller';

export const useProduct_Data = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [user, setUser] = useState<User[]>([]);
  const [newuser, setNewUser] = useState<User[]>([]);
  const [voucher, setVoucher] = useState<Voucher[]>([]);
  const [category, setCategory] = useState<Categories[]>([]);
  const [order, setOrder]  = useState<Order[]>([]);
  const [orderfailed, setOrderfailed]  = useState<Order[]>([]);
  const [ordertoday, setOrdertoday]  = useState<Order[]>([]);
  // Lấy thông tin sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productService.getProducts();
        setProduct(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await userService.getAllUser();
        setUser(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await userService.getAllNewUser();
        setNewUser(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await voucherService.getAllVoucher();
        setVoucher(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await categoryService.getAllCategory();
        setCategory(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await orderService.getAllOrder();
        setOrder(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await orderService.getAllOrderFailed();
        setOrderfailed(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await orderService.getAllOrderToDay();
        setOrdertoday(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProduct();
  }, []);
  return { product, user, newuser, voucher, category, order,orderfailed, ordertoday };
};
