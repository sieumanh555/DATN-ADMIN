'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import { EyeIcon, TrashBinIcon } from "@/icons";
import { format } from "date-fns";
import { vi } from "date-fns/locale";


import type { Order } from "@/model/order_model";
import { orderService } from "@/services/order_controller";

export default function Order() {
  const [order, setOrder] = useState<Order[]>([]);
  
  useEffect(() => {
    orderService
      .getAllOrder()
      .then(setOrder)
      .catch((error) => {
        console.error("Failed to fetch orders", error);
      });
  }, []);
  console.log(order);
  const formatCurrency = (price?: number) => {
    if (typeof price !== "number") return "";
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  
  return (
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
                  ordersID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  usersName
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  orderDate
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  note
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  vouchersID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Ammount
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Shipping
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Shipping Method
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  paymentStatus
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  paymentMethod
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  orderStatus
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
              {order.map((orders, index) => (
                <TableRow key={orders._id}>
                  <TableCell className="px-5 py-4 text-start sm:px-6">
                    <div className="flex items-center gap-3">{index + 1}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 underline dark:text-gray-400 sm:px-6">
                    <Link
                     href={`/chitietdh?id=${orders.orderDetailId._id}`}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      {orders.uniqueKey}
                    </Link>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">{orders.userId?.name}</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      {format(orders.createdAt, "dd/MM/yyyy HH:mm:ss", {
                        locale: vi,
                      })}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                  <div className="flex -space-x-2">
                    {orders.description ? orders.description : "Không có ghi chú"}
                  </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">{orders.voucherId?.code}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                    <div className="flex -space-x-2">{formatCurrency(orders.amount)}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                    <div className="flex -space-x-2">{orders.shipping}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                    <div className="flex -space-x-2">{orders.shippingMethod}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                    <div className="flex -space-x-2">{orders.paymentStatus}</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">{orders.paymentMethod}</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      <Badge
                        size="sm"
                        color={
                          orders.status === "Processing"
                            ? "warning" // Màu vàng/cam cho trạng thái đang xử lý
                            : orders.status === "Shipped"
                            ? "primary" // Màu xanh dương cho trạng thái đã giao hàng
                            : orders.status === "Delivered"
                            ? "success" // Màu xanh lá cây cho trạng thái đã nhận hàng
                            : orders.status === "Cancelled"
                            ? "error" // Màu đỏ cho trạng thái đã hủy
                            : "primary" // Màu mặc định nếu không khớp với trạng thái nào
                        }
                      >
                        {orders.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex gap-5 -space-x-2">
                      <Link href={`/chitietdh?id=${orders.orderDetailId._id}`}>
                        <EyeIcon className="cursor-pointer text-green-500" />
                      </Link>
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
  );
}
