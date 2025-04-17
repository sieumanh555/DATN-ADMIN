"use client"; // ✅ Đây là Client Component

import React from "react";
import Button from "@/components/ui/button/Button";
import { useProduct } from "@/components/qlhh/product/product_context";
import { productService } from "@/services/product_controller";
import Joi from "joi";
import { useProduct_hook } from "@/components/qlhh/product/product_hook";
import { useRouter } from "next/navigation";

export default function SaveButton() {
  const { productData } = useProduct();

  const router = useRouter();
  const { product, loading } = useProduct_hook();
  const productSchema = Joi.object({
    _id: Joi.string(),
    sku_id: Joi.string(),
    name: Joi.string().min(3).max(100),
    price: Joi.number().min(0),
    pricePromo: Joi.number().min(0),
    mota: Joi.string().allow(""), // Cho phép rỗng
    hinhanh: Joi.string().uri(),
    quantity: Joi.number().min(0),
    hot: Joi.number(),
    view: Joi.number().min(0),
    rating: Joi.number().min(0).max(5),
    status: Joi.string().valid("Còn hàng", "Hết hàng"),
    category: Joi.string(),
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleSave = async () => {
    const { error } = productSchema.validate(productData);

    console.log(productData);

    if (error) {
      alert("Lỗi: " + error.details[0].message);
      return;
    }
    try {
      await productService.updateProduct(product?._id || "", productData);
      alert("Cập nhật thành công!");
      router.push("/sanpham");
    } catch (error) {
      console.log(error);
      alert("Lỗi khi cập nhật sản phẩm!");
    }
  };
  return (
    <Button onClick={handleSave} className="w-full" size="sm" color="green">
      Accept
    </Button>
  );
}
