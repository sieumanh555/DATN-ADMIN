"use client";
import React, { useState, useEffect } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Select from "../../form/Select";
import TextArenaHH from "@/components/form/form-elements/TextArenaHH";
import { categoryService } from "@/services/categories_controller";
import { Categories } from "@/model/categories_model";
import Button from "@/components/ui/button/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@/components/ui/alert/Alert";
import { productService } from "@/services/product_controller";
import { useRouter } from "next/navigation";

export default function Product() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [messageTwo, setMessageTwo] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]); // State chứa mảng lỗi
  const [successMessages, setSuccessMessages] = useState(false); // State chứa mảng lỗi
  const router = useRouter();

  const handleRouter = () => {
    router.push("/sanpham");
  };
  useEffect(() => {
    categoryService.getAllCategory().then(setCategories);
  }, []);
  const hot = [
    { value: "0", label: "Hàng mới" },
    { value: "2", label: "Siêu Hot" },
    { value: "1", label: "Bình thường" },
  ];
  const status = [
    { value: "Còn hàng", label: "Còn hàng" },
    { value: "Chờ hàng", label: "Chờ hàng" },
  ];
  const ncc = [
    { value: "Kho HCM", label: "Kho HCM" },
    { value: "Kho Hà Nội", label: "Kho Hà Nội" },
  ];
  const category = categories.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const validationSchema = Yup.object({
    name: Yup.string().required("Tên sản phẩm không được để trống"),
    price: Yup.number().required("Giá là bắt buộc").min(0, "Giá không hợp lệ"),
    pricePromo: Yup.number().min(0, "Giá khuyến mãi không hợp lệ"),
    quantity: Yup.number().min(0, "Số lượng không hợp lệ"),
    hinhanh: Yup.string().url("Phải là đường dẫn hình ảnh hợp lệ"),
  });

  const handleSubmit = async (values: {
    name: string;
    price: number;
    pricePromo: number;
    quantity: number;
    hinhanh: string;
    hot: string;
    status: string;
    location: string;
    mota: string;
    category: string;
  }) => {
    // Kiểm tra tất cả các trường cần thiết trước khi gửi
    const requiredFields = [
      "name",
      "price",
      "pricePromo",
      "quantity",
      "hinhanh",
      "hot",
      "status",
      "location",
      "mota",
      "category",
    ];

    const missingFields: string[] = []; // Mảng chứa các trường thiếu

    for (const field of requiredFields) {
      if (!values[field] || values[field] === "") {
        missingFields.push(field); // Thêm trường thiếu vào mảng
      }
    }

    // Nếu có trường thiếu, thêm thông báo lỗi vào mảng
    if (missingFields.length > 0) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        `Vui lòng nhập đầy đủ thông tin: ${missingFields.join(", ")}`,
      ]);
      return; // Dừng lại nếu có lỗi
    }

    try {
      const requestBody = {
        name: values.name,
        price: values.price,
        pricePromo: values.pricePromo,
        quantity: values.quantity,
        hinhanh: values.hinhanh,
        hot: parseInt(values.hot),
        status: values.status,
        location: values.location,
        mota: values.mota,
        category: values.category,
      };
      console.log(requestBody);

      await productService.createProduct(requestBody);

      setErrorMessages([]);
      setSuccessMessages(true); // Ẩn thông báo thành công sau 3 giây
    } catch (error) {
      console.error("Lỗi khi thêm:", error);
      alert("Thêm sản phẩm thất bại. Vui lòng thử lại.");
    }
  };
  // Hàm để ẩn thông báo lỗi sau 4 giây
  useEffect(() => {
    if (errorMessages.length > 0) {
      const timer = setTimeout(() => {
        setErrorMessages([]); // Reset error messages on successful submission
      }, 4000); // 4 giây
      return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
    }
  }, [errorMessages]);
  useEffect(() => {
    if (successMessages) {
      const timer = setTimeout(() => {
        setSuccessMessages(false); // Reset error messages on successful submission
        router.push("/sanpham"); // Chuyển hướng khi thành công
      }, 3000); // 4 giây
      return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
    }
  }, [successMessages]);
  return (
    <>
      {errorMessages.length > 0 && (
        <div className="fixed right-0 top-0 z-9999 mt-[77px] flex flex-col gap-5">
          {errorMessages.map((message, index) => (
            <Alert
              key={index}
              variant="error"
              title="Error"
              message={message} // Hiển thị từng thông báo lỗi
              showLink={false}
            />
          ))}
        </div>
      )}
      {successMessages && (
        <div className="fixed right-0 top-0 z-9999 mt-[77px] flex flex-col gap-5">
          <Alert
            variant="success"
            title="Success Message"
            message="Be cautious when performing this action."
            showLink={false}
          />
        </div>
      )}
      <ComponentCard title="Product">
        <Formik
          initialValues={{
            name: "",
            price: 0,
            pricePromo: 0,
            quantity: 0,
            hinhanh: "",
            hot: "0",
            status: "",
            location: "",
            mota: "",
            category: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue, isValid, isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <Label>ProductID</Label>
                <Field
                  name="productId"
                  type="text"
                  disabled
                  as={Input}
                  placeholder="Tự động phát sinh"
                  className="bg-gray-100"
                />
              </div>

              <div>
                <Label>ProductName</Label>
                <Field
                  name="name"
                  as={Input}
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                />
                {errors.name && touched.name && (
                  <div className="text-sm text-red-500">{errors.name}</div>
                )}
              </div>

              <div>
                <Label>Price</Label>
                <Field name="price" as={Input} type="number" />
                {errors.price && touched.price && (
                  <div className="text-sm text-red-500">{errors.price}</div>
                )}
              </div>

              <div>
                <Label>Promotion Price</Label>
                <Field name="pricePromo" as={Input} type="number" />
                {errors.pricePromo && touched.pricePromo && (
                  <div className="text-sm text-red-500">
                    {errors.pricePromo}
                  </div>
                )}
              </div>

              <div>
                <Label>Quantity</Label>
                <Field name="quantity" as={Input} type="number" />
                {errors.quantity && touched.quantity && (
                  <div className="text-sm text-red-500">{errors.quantity}</div>
                )}
              </div>

              <div>
                <Label>Describe</Label>
                <TextArenaHH
                  value={messageTwo}
                  onChange={(val: string) => {
                    setMessageTwo(val);
                    setFieldValue("mota", val); // Update form field value
                  }}
                />
                {errors.mota && touched.mota && (
                  <div className="text-sm text-red-500">{errors.mota}</div>
                )}
              </div>

              <div>
                <Label>Image</Label>
                <Field name="hinhanh" as={Input} type="text" />
                {errors.hinhanh && touched.hinhanh && (
                  <div className="text-sm text-red-500">{errors.hinhanh}</div>
                )}
              </div>

              <div>
                <Label>Hot</Label>
                <Select
                  options={hot}
                  placeholder="Chọn độ hot"
                  onChange={(val) => setFieldValue("hot", val)}
                  className="dark:bg-dark-900"
                />
              </div>

              <div>
                <Label>Status</Label>
                <Select
                  options={status}
                  placeholder="Chọn trạng thái"
                  onChange={(val) => setFieldValue("status", val)}
                  className="dark:bg-dark-900"
                />
              </div>

              <div>
                <Label>Category</Label>
                <Select
                  options={category}
                  placeholder="Chọn danh mục"
                  onChange={(val) => setFieldValue("category", val)}
                  className="dark:bg-dark-900"
                />
              </div>

              <div>
                <Label>Nhà cung cấp</Label>
                <Select
                  options={ncc}
                  placeholder="Chọn nhà cung cấp"
                  onChange={(val) => setFieldValue("location", val)}
                  className="dark:bg-dark-900"
                />
              </div>

              <div className="col-span-full flex gap-5">
                <Button
                  onClick={handleRouter}
                  type="reset"
                  className="w-full"
                  size="sm"
                  color="gray"
                  disabled={isSubmitting}
                >
                  Decline
                </Button>
                <Button
                  type="submit"
                  className="w-full"
                  size="sm"
                  color="green"
                  disabled={isSubmitting || !isValid}
                >
                  Accept
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </ComponentCard>
    </>
  );
}
