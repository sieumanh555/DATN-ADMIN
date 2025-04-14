"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { categoryService } from "@/services/categories_controller";
import { Categories } from "@/model/categories_model";

export const useCategory_hook = () => {
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
  return { category, loading };
};
