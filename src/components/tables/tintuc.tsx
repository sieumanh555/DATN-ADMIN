"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Image from "next/image";
import TextArea from "../form/input/TextArea";
import { DocsIcon, TrashBinIcon } from "@/icons";
import type { News } from "@/model/news_model";
import { newsService } from "@/services/news_controller";
import { format } from "date-fns";
import { vi } from "date-fns/locale"; // Import locale nếu cần
export default function News() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    newsService.getAllNews().then(setNews);
  }, []);
  const [message] = useState<{ [key: string]: string }>({});
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
                  newsID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Tittle
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Content
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
                  ImageChild
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  publishDate
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  category
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
              {news.map((items, index) => (
                <TableRow key={items._id}>
                  <TableCell className="px-5 py-4 text-start sm:px-6">
                    <div className="flex items-center gap-3">{index + 1}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    {items.sku_id}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <TextArea
                      value={message[items.sku_id] || items.content || ""} // Hiển thị nội dung từ items.content nếu chưa có trong state
                      rows={5}
                    />
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      <Image
                        width={40}
                        height={40}
                        src={
                          items.image ||
                          "https://i.pinimg.com/736x/80/72/cd/8072cda28d2883367424be826a757708.jpg"
                        }
                        alt={items.title}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      {items.imageChild?.map((teamImage) => (
                        <div
                          key={teamImage}
                          className="h-6 w-6 overflow-hidden rounded-full border-2 border-white dark:border-gray-900"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={teamImage}
                            alt="Team member"
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </TableCell>

                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      {format(items.createdAt, "dd/MM/yyyy HH:mm:ss", {
                        locale: vi,
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {items.category.categoryName}
                    </div>
                  </TableCell>

                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex gap-5 -space-x-2">
                      <DocsIcon className="cursor-pointer text-green-500" />
                      <TrashBinIcon className="cursor-pointer" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            {/* Table Body
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image
                          width={40}
                          height={40}
                          src={order.user.image}
                          alt={order.user.name}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.user.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.projectName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {order.team.images.map((teamImage, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={teamImage}
                            alt={`Team member ${index + 1}`}
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        order.status === "Active"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.budget}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </div>
      </div>
    </div>
  );
}
