"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Select from "../../form/Select";
import Button from "@/components/ui/button/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "@/components/form/input/InputField";
import { voucherService } from "@/services/voucher_controller";

export default function Phieugiam() {
  const statusOptions = [
    { value: "Hoạt động", label: "Hoạt động" },
    { value: "Tạm ngưng", label: "Tạm ngưng" },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Tên không được để trống"),
    code: Yup.string().required("Mã không được để trống"),
    type: Yup.string().required("Loại giảm giá là bắt buộc"),
    value: Yup.number()
      .required("Giá trị giảm là bắt buộc")
      .min(0, "Giá trị phải lớn hơn hoặc bằng 0"),
    status: Yup.string().required("Trạng thái là bắt buộc"),
  });

  const handleSubmit = async (values: {
    name: string;
    code: string;
    type: string;
    value: string;
    status: string;
  }) => {
    try {
      const requestBody = {
        name: values.name,
        code: values.code,
        type: values.type,
        value: values.value,
        status: values.status,
      };

      console.log("Submitting voucher:", requestBody);

      // TODO: Gọi API ở đây
      await voucherService.createVoucher(requestBody);

      alert("Tạo phiếu giảm giá thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo voucher:", error);
      alert("Đã có lỗi xảy ra khi tạo phiếu giảm giá.");
    }
  };

  return (
    <ComponentCard title="Thông tin phiếu giảm giá">
      <Formik
        initialValues={{
          name: "",
          code: "",
          type: "",
          value: "",
          status: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div className="space-y-6">
              <div>
                <Label>Voucher Name</Label>
                <Field
                  name="name"
                  as={Input}
                  placeholder="Tên phiếu giảm"
                />
                {touched.name && errors.name && (
                  <div className="text-red-500 text-sm">{errors.name}</div>
                )}
              </div>

              <div>
                <Label>Voucher Code</Label>
                <Field
                  name="code"
                  as={Input}
                  placeholder="Mã giảm giá"
                />
                {touched.code && errors.code && (
                  <div className="text-red-500 text-sm">{errors.code}</div>
                )}
              </div>

              <div>
                <Label>Discount Type</Label>
                <Field
                  name="type"
                  as={Input}
                  placeholder="percent hoặc fixed"
                />
                {touched.type && errors.type && (
                  <div className="text-red-500 text-sm">{errors.type}</div>
                )}
              </div>

              <div>
                <Label>Discount Value</Label>
                <Field
                  name="value"
                  type="number"
                  as={Input}
                />
                {touched.value && errors.value && (
                  <div className="text-red-500 text-sm">{errors.value}</div>
                )}
              </div>

              <div>
                <Label>Status</Label>
                <Select
                  options={statusOptions}
                  placeholder="Chọn trạng thái"
                  onChange={(val) => setFieldValue("status", val)}
                  className="dark:bg-dark-900"
                />
                {touched.status && errors.status && (
                  <div className="text-red-500 text-sm">{errors.status}</div>
                )}
              </div>

              <div className="col-span-full flex flex-col gap-5">
                <Button type="button" className="w-full" size="sm" color="gray">
                  Decline
                </Button>
                <Button type="submit" className="w-full" size="sm" color="green">
                  Accept
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ComponentCard>
  );
}
