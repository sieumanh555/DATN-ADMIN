"use client";
import React from "react";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/icons";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import { Formik, Form, Field } from "formik";
import Label from "@/components/form/Label";
import * as Yup from "yup";
import { categoryService } from "@/services/categories_controller";
import Select from "@/components/form/Select";

export default function CategoryAdd() {
  const status = [
    { value: "Còn hàng", label: "Còn hàng" },
    { value: "Chờ hàng", label: "Chờ hàng" },
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên danh mục"),
    status: Yup.string().required("Vui lòng chọn trạng thái"),
  });
  const { isOpen, openModal, closeModal } = useModal();

  const handleSubmit = async (values: { name: string; status: string }) => {
    try {
      const response = await categoryService.createCategory(values);
      if (response.status === 200) {
        alert("Thêm danh mục thành công!");
        window.location.reload(); // Tải lại trang
      } else {
        alert("Thêm thất bại");
      }
    } catch (error) {
      console.error("Lỗi khi thêm:", error);
      alert("Thêm danh mục thất bại. Vui lòng thử lại.");
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
          Thêm danh mục
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
        <div className="no-scrollbar relative w-full overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Thêm danh mục
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Nhập thông tin danh mục
            </p>
          </div>

          <Formik
            initialValues={{
              name: "",
              status: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="flex flex-col">
                <div className="custom-scrollbar overflow-y-auto px-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div>
                      <Label>Name Category</Label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="input-class"
                        placeholder="Tên danh mục"
                      />
                      {touched.name && errors.name && (
                        <div className="text-red-500">{errors.name}</div>
                      )}
                    </div>

                    <div>
                      <Label>Status</Label>
                      <Select
                        options={status} // status phải là array [{ label: "Hiện", value: "active" }, ...]
                        placeholder="Chọn trạng thái"
                        onChange={(val) => setFieldValue("status", val)}
                        className="dark:bg-dark-900"
                      />
                      {touched.status && errors.status && (
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
