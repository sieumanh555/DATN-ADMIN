"use client";
import React, { useState, useEffect } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Select from "../../form/Select";
import TextArenaHH from "@/components/form/form-elements/TextArenaHH";
import { useProduct } from "./product_context";
import { categoryService } from "@/services/categories_controller";
import { Categories, CategoryName } from "@/model/categories_model";
import { productService } from "@/services/product_controller";
import type { Product } from "@/model/product_model";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
export default function Product() {
  const [message, setMessage] = useState("");
  const { productData, setProductData } = useProduct();
  const [categories, setCategories] = useState<Categories[]>([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    setLoading(true);
    productService
      .getProductById(id)
      .then((response) => setProduct(response))
      .catch((error) => console.error("Lỗi khi lấy sản phẩm:", error))
      .finally(() => setLoading(false));
  }, [id]);
  useEffect(() => {
    categoryService.getAllCategory().then(setCategories);
  }, []);

  useEffect(() => {
    if (product?.mota) {
      setMessage(product.mota);
    }
  }, [product?.mota]); // Chạy khi product?.mota thay đổi

  const options =
    product?.status === "Còn hàng"
      ? [{ value: "Hết hàng", label: "Hết hàng" }]
      : product?.status === "available"
        ? [{ value: "Còn hàng", label: "Còn hàng" }]
        : [];
  const optionsHot =
    product?.hot === 1
      ? [{ value: "2", label: "Bán chạy" }]
      : product?.hot === 2
        ? [{ value: "1", label: "Bình thường" }]
        : [];
  const optionsCategory = categories.map((category) => ({
    value: category._id,
    label: category.name,
  }));
  
  useEffect(() => {
    console.log("productData thay đổi:", product);
  }, [product]);

  return (
    <ComponentCard title="Product">
      {loading}
      <div className="space-y-6">
        <div>
          <Label>ProductID</Label>
          <Input type="text" defaultValue={product?.sku_id} disabled />
        </div>
        <div>
          <Label>ProductName</Label>
          <Input
            type="text"
            defaultValue={product?.name}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
          />
        </div>
        <div>
          <Label>Price</Label>
          <Input
            type="text"
            defaultValue={product?.price}
            onChange={(e) =>
              setProductData({ ...productData, price: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <Label>Promotion Price</Label>
          <Input
            type="text"
            defaultValue={product?.pricePromo}
            onChange={(e) =>
              setProductData({
                ...productData,
                pricePromo: Number(e.target.value),
              })
            }
          />
        </div>
        <div>
          <Label>Quantity</Label>
          <Input
            type="text"
            defaultValue={product?.pricePromo}
            onChange={(e) =>
              setProductData({
                ...productData,
                quantity: Number(e.target.value),
              })
            }
          />
        </div>
        <div>
          <Label>View</Label>
          <Input
            type="text"
            defaultValue={product?.pricePromo}
            onChange={(e) =>
              setProductData({ ...productData, view: Number(e.target.value) })
            }
            disabled
          />
        </div>
        <div>
          <Label>Describe</Label>
          <TextArenaHH
            value={message}
            onChange={(newValue: string) => {
              setMessage(newValue); // Cập nhật state message
              setProductData({ ...productData, mota: newValue }); // Cập nhật productData
            }}
          />
        </div>
        <div>
          <Label>Image</Label>
          <div className="my-5">
            <Image
              width={80}
              height={40}
              src={product?.hinhanh ?? "/default-image.jpg"} // Đường dẫn ảnh mặc định
              alt={product?.name ?? "No Image"}
            />
          </div>
          <Input
            type="text"
            defaultValue={product?.hinhanh}
            onChange={(e) =>
              setProductData({ ...productData, hinhanh: e.target.value })
            }
          />
        </div>
        <div>
          <Label>Hot</Label>
          <Select
            options={optionsHot}
            placeholder={
              product?.hot === 0
                ? "Hàng mới"
                : product?.hot === 2
                  ? "Bán chạy"
                  : "Bình thường"
            }
            onChange={(handleSelectChange) =>
              setProductData({
                ...productData,
                hot: Number(handleSelectChange),
              })
            }
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label>Status</Label>
          <Select
            options={options}
            placeholder={product?.status}
            onChange={(handleSelectChange) =>
              setProductData({ ...productData, status: handleSelectChange })
            }
            className="dark:bg-dark-900"
          />
        </div>
        <div>
          <Label>Category</Label>
          <Select
            options={optionsCategory}
            placeholder={
              typeof product?.category === 'object' && product?.category !== null
                ? (product.category as CategoryName).categoryName
                : "Chọn danh mục"
            }
            onChange={(handleSelectChange) =>
              setProductData({ ...productData, category: handleSelectChange })
            }
            className="dark:bg-dark-900"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
