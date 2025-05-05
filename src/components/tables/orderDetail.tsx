"use client"
import React, {useEffect, useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import { EyeIcon, TrashBinIcon } from "@/icons";
import { useSearchParams } from "next/navigation";
import { orderItemService } from "@/services/order_controller";
import { orderService } from "@/services/order_controller";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import Image from "next/image";
import type { OrderItemGroup } from "@/model/order_model";
import Shipping from "../ui/shipping";
import AcceptShipping from "../ui/shipping/accepts";
import type { Order } from "@/model/order_model";

export default function Order() {

  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Lấy id từ URL query params
  const [order, setOrderDetail] = useState<OrderItemGroup | null>(null);
  const [orders, setOrder] = useState<Order | null>(null);
  const [localOrderId, setLocalOrderId] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    orderItemService
      .getOrderItemsById(id)
      .then((response) => setOrderDetail(response))
      .catch((error) => console.error("Lỗi fetching order items:", error));
  }, [id]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedId = window.localStorage.getItem('id_order');
      setLocalOrderId(storedId);
    }
  }, []);
  
  useEffect(() => {
    if (!localOrderId) {
      return;
    }

    orderService
      .getOrderById(localOrderId)
      .then((response) => setOrder(response))
      .catch((error) => console.error("Lỗi fetching đơn hàng:", error));
  }, [localOrderId]); 
  console.log(orders);
  


  useEffect(() => {
    if (id) {
      console.log("ID từ router:", id);
    }
  }, [id]);
  return (
    <>
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  STT
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  orderDetailsID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  productID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  productName
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Image
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Quantity
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Price
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  DiscountAmount
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Address Order
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  creationDate
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  updationDate
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Controller
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
  {order?.items?.map((item, index) => (
    <TableRow key={index}>
      <TableCell className="px-5 py-4 text-start sm:px-6">
        {index + 1}
      </TableCell>
      <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        {order._id}
      </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        {item.productId.sku_id}
      </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        {item.productId.name}
      </TableCell>
 <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        <Image
                          width={40}
                          height={40}
                          src={item.productId.hinhanh}
                          alt={item.productId.name}
                        />
                      </div>
                    </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        {item.quantity}
      </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        {item.price.toLocaleString("vi-VN")}₫
      </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        {(item.productId.price - item.productId.pricePromo).toLocaleString("vi-VN")}₫
      </TableCell>
      <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
        {item.productId.location}
      </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        {format(order.createdAt, "dd/MM/yyyy HH:mm:ss", {
          locale: vi,
        })}
      </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
          {format(order.updatedAt, "dd/MM/yyyy HH:mm:ss", {
            locale: vi,
          })}
      </TableCell>
      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
        <div className="flex gap-5 -space-x-2">
          <EyeIcon className="cursor-pointer text-green-500" />
          <TrashBinIcon className="cursor-pointer" />
        </div>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

          </Table>
        </div>
      </div>
    </div>
      <AcceptShipping data={orders}/>
      <Shipping data={orders}/>
    </>
  );
}
