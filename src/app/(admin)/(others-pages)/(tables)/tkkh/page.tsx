import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import User from "@/components/tables/user";

import React from "react";

export default function SanPham() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Quản lý khách hàng" />
      <div className="space-y-6">
        <ComponentCard title="Khách hàng">
          <User />
        </ComponentCard>
      </div>
    </div>
  );
}
