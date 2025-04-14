"use client";
import React from "react";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/icons";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import { Formik, Form, Field } from "formik";
import Label from "@/components/form/Label";
import * as Yup from "yup";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function ProductVariantsButton() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const validationSchema = Yup.object().shape({
    size: Yup.string().required("Vui lòng nhập kích thước"),
    color: Yup.string().required("Vui lòng nhập màu sắc"),
    stock: Yup.number().required("Vui lòng nhập số lượng kho"),
    price: Yup.number().required("Vui lòng nhập giá"),
    image: Yup.string().required("Vui lòng nhập đường dẫn hình ảnh"),
  });

  const { isOpen, openModal, closeModal } = useModal();

  const handleSubmit = async (values: {
    size: string;
    color: string;
    stock: number;
    price: number;
    image: [];
  }) => {
    const { size, color, stock, image, price } = values;
    try {
      const requestBody = {
        variants: [
          {
            size: size,
            color: color,
            price: price,
            stock: stock,
            images: image ? [image] : [],
          },
        ],
      };

      console.log("Body gửi đi:", requestBody); // Log body trước khi gửi

      const response = await axios.post(
        `http://localhost:5000/product/variant/${id}`,
        requestBody,
      );

      if (response.status === 200) {
        alert("Thêm thuộc tính thành công!");
      }
    } catch (error) {
      console.error("Lỗi khi thêm:", error);
      alert("Thêm thuộc tính thất bại. Vui lòng thử lại.");
    }
    closeModal();
  };
  return (
    <>
      <div className="flex items-center justify-end gap-5">
        <Button
          onClick={openModal}
          size="sm"
          variant="primary"
          endIcon={<BoxIcon />}
        >
          Thêm thuộc tính
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
        <div className="no-scrollbar relative w-full overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Thêm thuộc tính
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Nhập thông tin thuộc tính sản phẩm.
            </p>
          </div>
          <Formik
            initialValues={{
              size: "",
              color: "",
              stock: 0,
              price: 0,
              image: [],
            }}
            validationSchema={validationSchema} // Use the defined validation schema
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
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
                        placeholder="name@flowbite.com"
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
                        placeholder="name@flowbite.com"
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
                        placeholder="name@flowbite.com"
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
                        placeholder="name@flowbite.com"
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
                        placeholder="name@flowbite.com"
                        required
                      />
                      {touched.image && errors.image && (
                        <div className="text-red-500">{errors.image}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
                  <Button size="sm" variant="outline" onClick={closeModal}>
                    Close
                  </Button>
                  <Button size="sm" type="submit">
                    Xác nhận thêm
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}
