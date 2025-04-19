"use client";
import React, { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button/Button";
import { Field, Formik, Form } from "formik";
import Label from "@/components/form/Label";
import { useSearchParams } from "next/navigation";
import { User } from "@/model/user_model";
import { userService } from "@/services/user_controller";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import * as Yup from "yup";

export default function EmployeeInfoCard() {
  const searchParams = useSearchParams();
  const [employee, setEmployee] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const id = searchParams.get("id");
  const { isOpen, openModal, closeModal } = useModal();

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Vui lòng nhập tên")
      .max(50, "Tên quá dài"),
    lastname: Yup.string().required("Vui lòng nhập họ").max(50, "Họ quá dài"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email"),
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ"),
    gender: Yup.string()
      .oneOf(["Nam", "Nữ", "Khác"], "Giới tính không hợp lệ")
      .required("Vui lòng chọn giới tính"),
    birthday: Yup.date().required("Vui lòng nhập ngày sinh"),
    password: Yup.string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .required("Vui lòng nhập mật khẩu"),
    facebook: Yup.string().url().nullable(),
    twitter: Yup.string().url().nullable(),
    linkedin: Yup.string().url().nullable(),
    instagram: Yup.string().url().nullable(),
  });

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    userService
      .getUser(id)
      .then((response) => setEmployee(response))
      .catch((error) => console.error("Lỗi khi lấy user:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) return <p>Không tìm thấy ID sản phẩm</p>;
  if (loading) return <p>Đang tải...</p>;
  type FormValues = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: string;
    birthday: string;
    password: string;
    role: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  const handleSave = async (values: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: string;
    birthday: string;
    password: string;
    role: number;
  }) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      gender,
      birthday,
      password,
      role,
    } = values;

    try {
      // Kiểu dữ liệu gửi lên server
      type RequestBody = Partial<{
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        gender: string;
        birthday: string;
        password: string;
        role: number;
      }>;

      // Lọc bỏ các giá trị không hợp lệ (null, undefined, chuỗi rỗng)
      const requestBody: RequestBody = Object.fromEntries(
        Object.entries({
          firstname,
          lastname,
          email,
          phone,
          gender,
          birthday,
          password,
          role,
        }).filter(([, value]) => {
          if (value === undefined || value === null) return false;
          if (typeof value === "string" && value.trim() === "") return false;
          return true;
        }),
      );
      console.log(requestBody);
      console.log("Body gửi đi:", requestBody);
      await userService.updateUser(id!, requestBody);
      alert("Cập nhật thông tin cá nhân thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      alert("Cập nhật thất bại. Vui lòng thử lại.");
    }
    closeModal();
  };
  const fieldConfigs: {
    name: keyof FormValues;
    label: string;
    type?: string;
    options?: { label: string; value: string }[];
  }[] = [
    { name: "firstname", label: "First Name" },
    { name: "lastname", label: "Last Name" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone" },
    { name: "birthday", label: "Birthday", type: "date" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { label: "Nam", value: "Nam" },
        { label: "Nữ", value: "Nữ" },
        { label: "Khác", value: "Khác" },
      ],
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: [
        { label: "Admin", value: "1" },
        { label: "Khách hàng", value: "0" },
      ],
    },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800 lg:p-6">
      {/* Phần hiển thị thông tin người dùng */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information User
          </h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            {[
              ["ID User", employee?.kyc_id],
              ["Email address", employee?.email],
              ["First Name", employee?.firstname],
              ["Last Name", employee?.lastname],
              ["Password", employee?.password],
              ["Phone", employee?.phone && "+" + employee.phone],
              ["Birthday", employee?.birthday],
              ["Gender", employee?.gender],
              ["Rank", employee?.role],
              ["Office Location", "Chi nhánh 2"],
              [
                "Register Date",
                employee?.createdAt &&
                  format(employee.createdAt, "dd/MM/yyyy HH:mm:ss", {
                    locale: vi,
                  }),
              ],
              [
                "Updation Date",
                employee?.updatedAt &&
                  format(employee.updatedAt, "dd/MM/yyyy HH:mm:ss", {
                    locale: vi,
                  }),
              ],
            ].map(([label, value]) => (
              <div key={label as string}>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  {label}
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => openModal(employee?._id)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          Edit
        </button>
      </div>

      {/* Modal chỉnh sửa */}
      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
        <div className="relative w-full max-w-[700px] rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>

          {employee && (
            <Formik
              initialValues={{
                firstname: employee.firstname || "",
                lastname: employee.lastname || "",
                email: employee.email || "",
                phone: employee.phone || "",
                gender: employee.gender || "",
                role: employee.role || 0,
                birthday: employee.birthday || "",
                password: employee.password || "",
                facebook: "",
                twitter: "",
                linkedin: "",
                instagram: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSave}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col">
                  <div className="h-[450px] overflow-y-auto px-2 pb-3">
                    <div>
                      <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90">
                        Social Links
                      </h5>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        {["facebook", "twitter", "linkedin", "instagram"].map(
                          (field) => (
                            <div key={field}>
                              <Label>
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                              </Label>
                              <Field
                                type="text"
                                name={field}
                                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mt-7">
                      <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90">
                        Personal Information
                      </h5>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        {fieldConfigs.map(({ name, label, type, options }) => (
                          <div key={name}>
                            <Label>{label}</Label>

                            {type === "select" && options ? (
                              <Field
                                as="select"
                                id={name}
                                name={name}
                                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              >
                                <option value="">Select {label}</option>
                                {options.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                ))}
                              </Field>
                            ) : (
                              <Field
                                name={name}
                                type={type || "text"}
                                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              />
                            )}

                            {touched[name as keyof typeof touched] &&
                              errors[name as keyof typeof errors] && (
                                <p className="mt-1 text-xs text-red-500">
                                  {errors[name as keyof typeof errors]}
                                </p>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
                    <Button size="sm" variant="outline" onClick={closeModal}>
                      Close
                    </Button>
                    <Button size="sm" type="submit">
                      Save Changes
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </Modal>
    </div>
  );
}
