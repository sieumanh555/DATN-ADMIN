import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Order from "@/components/tables/orderDetail";

import React from "react";

export default function SanPham() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Halo-Shop" />
      <div className="space-y-6">
        <ComponentCard title="Sản phẩm">
          <Order />
        </ComponentCard>
      </div>
    </div>
  );
}
