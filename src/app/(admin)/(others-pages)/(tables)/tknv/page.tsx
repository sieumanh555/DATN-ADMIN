import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Staff from "@/components/tables/staff";

import React from "react";

export default function SanPham() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Quản lý nhân viên" />
      <div className="space-y-6">
        <ComponentCard title="Nhân viên">
          <Staff />
        </ComponentCard>
      </div>
    </div>
  );
}
