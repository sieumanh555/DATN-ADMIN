import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Voucher from "@/components/tables/voucher";

import React from "react";

export default function Product() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Task Kanban" />
      <div className="space-y-6">
        <ComponentCard title="Sản phẩm">
          <Voucher />
        </ComponentCard>
      </div>
    </div>
  );
}
