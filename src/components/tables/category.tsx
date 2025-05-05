"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import { DocsIcon, TrashBinIcon } from "@/icons";
import { categoryService } from "@/services/categories_controller";
import type { Categories } from "@/model/categories_model";

import { format } from "date-fns";
import { vi } from "date-fns/locale"; // Import locale nếu cần
import Link from "next/link";

export default function Categories() {
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    categoryService.getAllCategory().then(setCategories);
  }, []);
  const handleDelete = async (id: string) => {
    if (!id) {
      alert("ID không hợp lệ.");
      return;
    }
    try {
      const confirmDelete = confirm("Bạn có chắc muốn xóa danh mục này?");
      if (!confirmDelete) return;
      const response = await categoryService.deleteCategory(id);
      if (response.status === 200) {
        alert("Xóa danh mục thành công!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Lỗi khi xóa danh mục:", error);
      alert("Xóa danh mục thất bại. Vì danh mục này đang có sản phẩm tồn tại.");
      window.location.reload();
    }
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
                  CategoryID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  CategoryName
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  CreationDate
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  UpdationDate
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
              {categories.map((items, index) => (
                <TableRow key={items._id}>
                  <TableCell className="px-5 py-4 text-start sm:px-6">
                    <div className="flex items-center gap-3">{index + 1}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    {items.sku_id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    {items.name}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      <Badge
                        size="sm"
                        color={
                          items.status === "Còn hàng"
                            ? "success"
                            : items.status === "Chờ hàng"
                              ? "warning"
                              : "error"
                        }
                      >
                        {items.status}
                      </Badge>
                    </div>
                  </TableCell>

                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {format(items.createdAt, "dd/MM/yyyy HH:mm:ss", {
                        locale: vi,
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      {format(items.updatedAt, "dd/MM/yyyy HH:mm:ss", {
                        locale: vi,
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex gap-5 -space-x-2">
                      <Link href={`/category?id=${items._id}`}>
                        <DocsIcon className="cursor-pointer text-green-500" />
                      </Link>
                      <button onClick={() => handleDelete(items._id)}>
                        <TrashBinIcon className="cursor-pointer" />
                      </button>
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
