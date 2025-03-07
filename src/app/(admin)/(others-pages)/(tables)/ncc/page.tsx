import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Supplier from "@/components/tables/supplier";

import React from "react";

export default function Ncc() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Task Kanban" />
      <div className="space-y-6">
        <ComponentCard title="Sản phẩm">
          <Supplier />
        </ComponentCard>
      </div>
    </div>
  );
}
