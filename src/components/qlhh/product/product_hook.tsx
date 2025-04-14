"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { productService } from "@/services/product_controller";
import { Product } from "@/model/product_model";

export const useProduct_hook = () => {
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
  return { product, loading };
};
