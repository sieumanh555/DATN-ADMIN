import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Product from "@/components/tables/product";
import React from "react";

export default function SanPham() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Quản lý sản phẩm" />
      <div className="space-y-6">
        <ComponentCard title="Sản phẩm">
          <Product />
        </ComponentCard>
      </div>
    </div>
  );
}
