"use client";
import React, { createContext, useContext, useState } from "react";
import type { Product } from "@/model/product_model";

interface ProductContextType {
  productData: Partial<Product>;
  setProductData: (data: Partial<Product>) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [productData, setProductData] = useState<Partial<Product>>({});

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
