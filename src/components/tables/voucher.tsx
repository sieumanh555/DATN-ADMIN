"use client";
import React,  { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import TextArea from "../form/input/TextArea";
import { DocsIcon, TrashBinIcon } from "@/icons";



import Badge from "../ui/badge/Badge";
// import Image from "next/image";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    projectName: "Agency Website",
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "3.9K",
    status: "Active",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    projectName: "Technology",
    team: {
      images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
    },
    budget: "24.9K",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Content Writing",
    },
    projectName: "Blog Writing",
    team: {
      images: ["/images/user/user-27.jpg"],
    },
    budget: "12.7K",
    status: "Active",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    projectName: "Social Media",
    team: {
      images: [
        "/images/user/user-28.jpg",
        "/images/user/user-29.jpg",
        "/images/user/user-30.jpg",
      ],
    },
    budget: "2.8K",
    status: "Cancel",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    projectName: "Website",
    team: {
      images: [
        "/images/user/user-31.jpg",
        "/images/user/user-32.jpg",
        "/images/user/user-33.jpg",
      ],
    },
    budget: "4.5K",
    status: "Active",
  },
];

export default function Voucher() {
    const [message, setMessage] = useState<{ [key: string]: string }>({});
    const handleTextChange = (id: number, value: string) => {
      setMessage((prev) => ({
        ...prev,
        [String(id)]: value, // Lưu message theo id của sản phẩm
      }));
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
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  STT 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  VoucherID 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  VoucherCode 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  DiscountType 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  DiscountValue  
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Description 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  CreationDate 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  UpdationDate 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Controller
                </TableCell>
              </TableRow>
            </TableHeader>




            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                          1
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 sm:px-6 text-start text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.projectName}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start  text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                     ABCXYZ
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start  text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                     ABCXYZ
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start  text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                     ABCXYZ
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start  text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                            <TextArea
                                  value={message[String(order.id)] || ""}
                                  onChange={(value) => handleTextChange(order.id, value)} // ✅ Đúng kiểu dữ liệu
                                  rows={1}
                            />
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
                  <TableCell className="px-5 py-4 sm:px-6 text-start  text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                     ABCXYZ
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start  text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                     ABCXYZ
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start  text-gray-500 text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2 gap-5">
                      <DocsIcon className="cursor-pointer text-green-500"/>
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
