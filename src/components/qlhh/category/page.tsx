"use client";
import React, { useState, useEffect } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Select from "../../form/Select";
import Button from "@/components/ui/button/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { categoryService } from "@/services/categories_controller";
import { useRouter } from "next/navigation";
import { Categories } from "@/model/categories_model";
import { useSearchParams } from "next/navigation";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
  status: Yup.string().required("Status is required"),
});
export default function Category() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [category, setCategory] = useState<Categories | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    setLoading(true);
    categoryService
      .getCategoryById(id)
      .then((response) => setCategory(response))
      .catch((error) => console.error("Lỗi khi lấy sản phẩm:", error))
      .finally(() => setLoading(false));
  }, [id]);
  const handleSubmit = async (values: { name: string; status: string }) => {
    try {
      const requestBody = {
        name: values.name,
        status: values.status,
      };
      console.log(requestBody);
      await categoryService.updateCategory(category?._id || "", requestBody);
      alert("Cập nhật danh mục thành công");
      router.push("/danhmuc");
    } catch (error) {
      console.error("Lỗi khi thêm:", error);
      alert("Thêm sản phẩm thất bại. Vui lòng thử lại.");
    }
  };

  const options = [
    { value: "Còn hàng", label: "Còn hàng" },
    { value: "Chờ hàng", label: "Chờ hàng" },
  ];

  return (
    <ComponentCard title="Default Inputs">
      {loading}
      <Formik
        initialValues={{
          name: category?.name || "",
          status: category?.status || "",
        }}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="space-y-6">
            <div>
              <Label>Category Name</Label>
              <Field
                name="name"
                id="name"
                type="text"
                as={Input}
                className="form-input"
                placeholder={category?.name}
              />
              {errors.name && touched.name && (
                <div className="text-red-500">{errors.name}</div>
              )}
            </div>

            <div>
              <Label>Status</Label>
              <Select
                options={options}
                placeholder={category?.status}
                onChange={(val) => setFieldValue("status", val)}
                className="dark:bg-dark-900"
              />
              {errors.status && touched.status && (
                <div className="text-red-500">{errors.status}</div>
              )}
            </div>
            <div className="col-span-full flex flex-col gap-5">
              <Button className="w-full" size="sm" color="gray" type="reset">
                Decline
              </Button>
              <Button className="w-full" size="sm" color="green" type="submit">
                Accept
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </ComponentCard>
  );
}
