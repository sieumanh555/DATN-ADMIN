import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

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
];

export default function Supplier() {
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
                  ID Supplier
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Name Supplier
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Address
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Numberphone
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
                  Contact Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Tax Code
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Type of Business
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 text-start sm:px-6">
                    <div className="flex items-center gap-3">1</div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    {order.projectName}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">ABCXYZ</div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    <div className="flex -space-x-2">
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
