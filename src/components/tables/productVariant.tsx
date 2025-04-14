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
import Badge from "../ui/badge/Badge";
import { DocsIcon, TrashBinIcon } from "@/icons";
import { productService } from "@/services/product_controller";
import type { Product } from "@/model/product_model";
import { useSearchParams } from "next/navigation";
import Label from "../form/Label";
import { Formik, Form, Field } from "formik";
import Button from "../ui/button/Button";
import type { Variant } from "@/model/product_model";
import * as Yup from "yup";

import { useModal } from "@/hooks/useModal";
import { Modal } from "../ui/modal";

export default function ProductVariant() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Lấy id từ URL query params

  const [product, setProduct] = useState<Product | null>(null);
  const [variant, setVariant] = useState<Variant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { isOpen, openModal, closeModal, selectedId } = useModal();
  const validationSchema = Yup.object().shape({
    size: Yup.string(),
    color: Yup.string(),
    stock: Yup.number(),
    price: Yup.number(),
    image: Yup.array().of(Yup.string()),
  });
  // Array of objects (recommended for more flexibility)
  const statusOptions = [
    { value: "Còn hàng", label: "Còn hàng" },
    { value: "Chờ hàng", label: "Chờ hàng" },
    { value: "Hết hàng", label: "Hết hàng" },
    // Add more status options as needed
  ];

  // Or, if you only need the values, you can use an array of strings
  // const statusOptions = ["active", "inactive", "pending"];

  // productVariant
  useEffect(() => {
    if (!selectedId) return;
    setLoading(true);
    productService
      .getVariantById(selectedId)
      .then((data) => {
        if (data) setVariant(data);
      })
      .finally(() => setLoading(false));
  }, [selectedId]);

  const deleteVariant = async (id: string) => {
    if (!id) {
      alert("ID không hợp lệ.");
      return;
    }

    try {
      const confirmDelete = confirm("Bạn có chắc muốn xóa variant này?");
      if (!confirmDelete) return;

      await productService.deleteVariant(id);
      alert("Xóa variant thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi xóa variant:", error);
      alert("Xóa variant thất bại. Vui lòng thử lại.");
    }
  };

  const handleSubmit = async (values: {
    size?: string;
    color?: string;
    stock?: number;
    price?: number;
    status?: string;
    image?: string[];
  }) => {
    const { size, color, stock, image, price, status } = values;

    try {
      if (!selectedId) {
        alert("Không có sản phẩm được chọn.");
        return;
      }

      // Định nghĩa kiểu dữ liệu chính xác cho request body
      type RequestBody = Partial<{
        size: string;
        color: string;
        price: number;
        stock: number;
        status: string;
        images: string[];
      }>;

      // Lọc bỏ các thuộc tính có giá trị rỗng
      const requestBody: RequestBody = Object.fromEntries(
        Object.entries({
          size,
          color,
          price,
          stock,
          status,
          images: Array.isArray(image) ? image : [],
        }).filter(([, value]) => {
          if (value === undefined || value === null) return false;
          if (Array.isArray(value) && value.length === 0) return false;
          if (typeof value === "string" && value.trim() === "") return false;
          return true;
        }),
      );
      console.log("Body gửi đi:", requestBody);

      await productService.updateVariantById(selectedId, requestBody);
      alert("Sửa thuộc tính thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi sửa:", error);
      alert("Sửa thuộc tính thất bại. Vui lòng thử lại.");
    }

    closeModal();
  };

  // productid
  useEffect(() => {
    if (!id) return; // Nếu chưa có id, không gọi API

    setLoading(true);
    productService
      .getProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]); // Chạy lại khi id thay đổi

  if (!id) return <p>Không tìm thấy ID sản phẩm</p>;
  if (loading) return <p>Đang tải...</p>;

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
                    VariantsID
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    Size
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    Color
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    Stock
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    Images
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
                    Controller
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {loading ? (
                  <TableRow>
                    <TableCell className="py-4 text-center">
                      Đang tải...
                    </TableCell>
                  </TableRow>
                ) : product && product.variants.length > 0 ? (
                  product?.variants.map((items, index) => (
                    <TableRow key={items._id}>
                      <TableCell className="px-5 py-4 text-start sm:px-6">
                        <div className="flex items-center gap-3">
                          {index + 1}
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                        {items._id}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                        <div className="flex -space-x-2">{items.size}</div>
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                        <div className="flex -space-x-2">{items.color}</div>
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                        <div className="flex -space-x-2">{items.stock}</div>
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                        <div className="flex -space-x-2">
                          <Image
                            width={40}
                            height={40}
                            src={
                              items.images.length > 0
                                ? items.images[0].startsWith("http://") ||
                                  items.images[0].startsWith("https://")
                                  ? items.images[0] // Đường dẫn tuyệt đối
                                  : `/${items.images[0]}` // Đường dẫn tương đối
                                : "https://i.pinimg.com/736x/6d/25/c1/6d25c1a4f2bb20e4b89a3bada8824d3e.jpg"
                            }
                            alt={"a"}
                            className="rounded"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                        <div className="flex -space-x-2">
                          <Badge
                            size="sm"
                            color={
                              items.status === "Còn hàng"
                                ? "success"
                                : items.status === "Chờ hàng"
                                  ? "info"
                                  : items.status === "Hết hàng"
                                    ? "warning"
                                    : "error"
                            }
                          >
                            {items.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-500 dark:text-gray-400 sm:px-6">
                        <div className="flex gap-5 -space-x-2">
                          <button onClick={() => openModal(items._id)}>
                            {" "}
                            {/* ✅ Chỉ gọi khi click */}
                            <DocsIcon className="cursor-pointer text-green-500" />
                          </button>
                          <button onClick={() => deleteVariant(items._id)}>
                            <TrashBinIcon className="cursor-pointer" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="py-4 text-center font-semibold text-gray-800 dark:text-white/90">
                      Không tìm thấy thuộc tính sản phẩm.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
        <div className="no-scrollbar relative w-full overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Cập nhật Variant
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Chỉnh sửa thông tin variant của sản phẩm.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
          ) : variant ? (
            <Formik
              initialValues={{
                size: "",
                color: "",
                stock: 0,
                price: 0,
                image: [],
                status: "Chờ",
              }}
              validationSchema={validationSchema} // Use the defined validation schema
              onSubmit={handleSubmit}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form className="flex flex-col">
                  <div className="custom-scrollbar overflow-y-auto px-2">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                      <div>
                        <Label>Size</Label>
                        <Field
                          type="text"
                          id="size"
                          name="size"
                          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          value={variant.size}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            setFieldValue("size", e.target.value); // Cập nhật values.size
                            setVariant({ ...variant, size: e.target.value });
                          }}
                          required
                        />
                        {touched.size && errors.size && (
                          <div className="text-red-500">{errors.size}</div>
                        )}
                      </div>
                      <div>
                        <Label>Color</Label>
                        <Field
                          type="text"
                          id="color"
                          name="color"
                          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          value={variant.color}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            setFieldValue("color", e.target.value); // Cập nhật values.size
                            setVariant({ ...variant, color: e.target.value });
                          }}
                          required
                        />
                        {touched.color && errors.color && (
                          <div className="text-red-500">{errors.color}</div>
                        )}
                      </div>

                      <div>
                        <Label>Stock</Label>
                        <Field
                          type="number"
                          id="stock"
                          name="stock"
                          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          value={variant.stock}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            const parsedValue = parseInt(e.target.value, 10); // Chuyển đổi chuỗi thành số nguyên
                            setFieldValue("stock", parsedValue || 0); // Cập nhật values.stock, sử dụng 0 nếu không phải số
                            setVariant({ ...variant, stock: parsedValue || 0 }); // Cập nhật variant.stock, sử dụng 0 nếu không phải số
                          }}
                          required
                        />
                        {touched.stock && errors.stock && (
                          <div className="text-red-500">{errors.stock}</div>
                        )}
                      </div>
                      <div>
                        <Label>Price</Label>
                        <Field
                          type="number"
                          id="price"
                          name="price"
                          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          value={variant.price}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            const parsedValue = parseInt(e.target.value, 10); // Chuyển đổi chuỗi thành số nguyên
                            setFieldValue("price", parsedValue || 0); // Cập nhật values.stock, sử dụng 0 nếu không phải số
                            setVariant({ ...variant, price: parsedValue || 0 }); // Cập nhật variant.stock, sử dụng 0 nếu không phải số
                          }}
                          required
                        />
                        {touched.price && errors.price && (
                          <div className="text-red-500">{errors.price}</div>
                        )}
                      </div>

                      <div>
                        <Label>Image</Label>
                        <Field
                          type="text"
                          id="image"
                          name="image"
                          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          value={
                            Array.isArray(variant.images) &&
                            variant.images.length > 0
                              ? variant.images[0]
                              : ""
                          }
                          placeholder={
                            Array.isArray(variant.images) &&
                            variant.images.length === 0
                              ? "Không có ảnh"
                              : ""
                          }
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            setFieldValue("image", [e.target.value]); // Cập nhật values.size
                            setVariant({
                              ...variant,
                              images: [e.target.value],
                            });
                          }}
                          required
                        />
                        {touched.image && errors.image && (
                          <div className="text-red-500">{errors.image}</div>
                        )}
                      </div>
                      <div>
                        <Label>Status</Label>
                        <select
                          id="status" // Change ID to status, as the input is now status.
                          name="status" // Change name to status
                          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          value={variant.status} // Set the selected value
                          required
                          onChange={(e) => {
                            setFieldValue("status", e.target.value); // Cập nhật values.size
                            setVariant({ ...variant, status: e.target.value });
                          }}
                        >
                          {statusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label || option.value}
                            </option>
                          ))}
                        </select>
                        {touched.status &&
                          errors.status && ( // Change touched.image and errors.image to touched.status and errors.status
                            <div className="text-red-500">{errors.status}</div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
                    <Button size="sm" variant="outline" onClick={closeModal}>
                      Close
                    </Button>
                    <Button size="sm" type="submit">
                      Xác nhận sửa
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <p className="text-center text-gray-500">Không tìm thấy dữ liệu.</p>
          )}
        </div>
      </Modal>
    </>
  );
}
