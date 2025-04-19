"use client";
import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { DocsIcon, TrashBinIcon } from "@/icons";
import Link from "next/link";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import TextArea from "../form/input/TextArea";
import RingLoader from "react-spinners/RingLoader";

import { productService } from "@/services/product_controller";
import type { Product } from "@/model/product_model";
import { useEffect, useState } from "react";
import Button from "../ui/button/Button";

import * as XLSX from "xlsx";

import { useModal } from "@/hooks/useModal";
import { Modal } from "../ui/modal";
import { useRouter } from "next/navigation"; // For Next.js 13 and above
import { BoxIcon } from "@/icons";
export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const { isOpen, openModal, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(true); // State để xử lý hiệu ứng loading
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const filteredData = useMemo(() => {
    return products.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.sku_id.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [products, keyword]);

  const handleRouter = () => {
    router.push("/addproduct");
  };
  const handleExport = () => {
    const wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(filteredData);

    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  // Tìm sản phẩm hiện tại khi modal mở
  const selectedProduct = products.find((p) => p._id === selectedProductId);

  const handleOpenModal = (productId: string) => {
    setSelectedProductId(productId); // Lưu _id thay vì cả object
    openModal();
  };

  const deleteProduct = async (id: string) => {
    if (!id) {
      alert("ID không hợp lệ.");
      return;
    }

    try {
      const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
      if (!confirmDelete) return;

      await productService.deleteProduct(id);
      alert("Xóa sản phẩm thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa sản phẩm thất bại. Vui lòng thử lại.");
    }
  };

  const formatCurrency = (price?: number) => {
    if (typeof price !== "number") return "";
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      productService.getProducts().then(setProducts);
      setIsLoading(false); // Ẩn loading sau 1 giây
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <RingLoader
        color="blue"
        cssOverride={{}}
        loading
        size={50}
        speedMultiplier={1}
      />
    );
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="relative w-full max-w-[400px]">
          <input
            className="focus:shadow-outline dark:bg-dark-900 w-full appearance-none rounded-md border-2 border-gray-200/90 px-4 py-3 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-200/20 focus:border-blue-600 focus:outline-none focus:ring-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
            id="username"
            type="text"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-6 w-6 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            onClick={handleRouter}
            size="sm"
            variant="primary"
            endIcon={<BoxIcon />}
          >
            Thêm sản phẩm
          </Button>
          <Button
            onClick={handleExport}
            size="sm"
            variant="primary"
            color="green"
            endIcon={<BoxIcon />}
          >
            Export
          </Button>
        </div>
      </div>
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
                    ProductID
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    ProductName
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
                    PromotionalPrice
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
                    Des
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    Brand
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    Hot
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
                {filteredData.map((products, index) => (
                  <TableRow key={products._id}>
                    <TableCell className="px-5 py-4 text-start sm:px-6">
                      <div className="flex items-center gap-3">{index + 1}</div>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <Link
                        href={`/spvariants?id=${products._id}`} // Thêm _id vào query
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        {products.sku_id}
                      </Link>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">{products.name}</div>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        {formatCurrency(products.price)}
                      </div>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        {formatCurrency(products.pricePromo)}
                      </div>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        <Image
                          width={40}
                          height={40}
                          src={products.hinhanh}
                          alt={products.name}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        <button onClick={() => handleOpenModal(products._id)}>
                          Content
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                      <div className="flex -space-x-2">
                        {
                          typeof products.category === "object" &&
                          products.category !== null &&
                          "categoryName" in products.category
                            ? products.category.categoryName
                            : "Không có danh mục" // Or some other default value if category is not populated
                        }
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400">
                      <div className="flex -space-x-2">
                        {products.hot === 0
                          ? "Hàng mới"
                          : products.hot === 2
                            ? "Siêu hot"
                            : "Bình thường"}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        <Badge
                          size="sm"
                          color={
                            products.status === "Còn hàng"
                              ? "success"
                              : products.status === "Hết hàng"
                                ? "warning"
                                : "error"
                          }
                        >
                          {products.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        {format(products.createdAt, "dd/MM/yyyy HH:mm:ss", {
                          locale: vi,
                        })}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex -space-x-2">
                        {format(products.updatedAt, "dd/MM/yyyy HH:mm:ss", {
                          locale: vi,
                        })}
                      </div>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      <div className="flex gap-5 -space-x-2">
                        <Link href={`/product?id=${products._id}`}>
                          <DocsIcon className="cursor-pointer text-green-500" />
                        </Link>

                        <button onClick={() => deleteProduct(products._id)}>
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
      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
        <div className="no-scrollbar relative flex w-full flex-col overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Content
            </h4>
          </div>

          <form className="flex flex-1 flex-col">
            <div className="custom-scrollbar flex-1 overflow-y-auto px-2">
              <TextArea
                className="h-full w-full"
                value={selectedProduct?.mota}
              />
            </div>

            <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
