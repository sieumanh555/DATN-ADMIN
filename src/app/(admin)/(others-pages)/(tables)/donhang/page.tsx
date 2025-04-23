import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Order from "@/components/tables/donhang/donhang";

import React from "react";

export default function SanPham() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Task Kanban" />
      <div className="space-y-6">
        <ComponentCard title="Sản phẩm">
          <Order />
        </ComponentCard>
      </div>
    </div>
  );
}
