"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import { TrashBinIcon } from "@/icons";
import Link from "next/link";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { format } from "date-fns";
import { vi } from "date-fns/locale"; // Import locale nếu cần

import type { User } from "@/model/user_model";
import { userService } from "@/services/user_controller";

export default function User() {
  const [users, setUser] = useState<User[]>([]);
  useEffect(() => {
    userService.getAllUser().then(setUser);
  }, []);
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
                  UsersID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  UserName
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Email
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
                  status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  registerDate
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
              {users.map((users, index) => (
                <TableRow key={users._id}>
                  <TableCell className="px-5 py-4 text-start sm:px-6">
                    <div className="flex items-center gap-3">{index + 1}</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <Link
                      href={`/user?id=${users._id}`} // Thêm _id vào query
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      {users.kyc_id}
                    </Link>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">{users.firstname}</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">{users.firstname}</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      <Image
                        width={40}
                        height={40}
                        src={
                          users.image.startsWith("http")
                            ? users.image
                            : `/${users.image}`
                        }
                        alt={users.firstname}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      <Badge
                        size="sm"
                        color={
                          users.status === "On"
                            ? "success"
                            : users.status === "Off"
                              ? "warning"
                              : "error"
                        }
                      >
                        {users.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      {" "}
                      {format(users.createdAt, "dd/MM/yyyy HH:mm:ss", {
                        locale: vi,
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
                      {format(users.updatedAt, "dd/MM/yyyy HH:mm:ss", {
                        locale: vi,
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex gap-5 -space-x-2">
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
