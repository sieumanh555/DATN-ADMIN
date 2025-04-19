import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React, { Suspense } from "react";
import Button from "@/components/ui/button/Button";
import { ProductProvider } from "@/components/qlhh/product/product_context";
import SaveButton from "@/components/qlhh/saveproduct";
import ProductClientWrapper from "@/components/qlhh/product/ProductClientWrapper"; // 👈 Wrapper mới

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
          <ProductClientWrapper />
        </div>
        <div className="col-span-full flex flex-col gap-5">
          <Button className="w-full" size="sm" color="gray">
            Decline
          </Button>
          <Suspense fallback={<p>Loading...</p>}>
            <SaveButton />
          </Suspense>
        </div>
      </div>
    </ProductProvider>
  );
}
