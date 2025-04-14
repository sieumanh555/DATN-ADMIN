import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ProductAdd from "@/components/qlhh/addProduct/page";
import { Metadata } from "next";
import React from "react";
import { ProductProvider } from "@/components/qlhh/product/product_context";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function FormElements() {
  return (
    <ProductProvider>
      <div>
        <PageBreadcrumb pageTitle="Chỉnh sửa" />
        <div className="space-y-6">
          <ProductAdd />
        </div>
      </div>
    </ProductProvider>
  );
}
