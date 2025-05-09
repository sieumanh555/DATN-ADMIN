import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import News from "@/components/tables/tintuc";

import React from "react";

export default function Tintuc() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Quản lý sản phẩm" />
      <div className="space-y-6">
        <ComponentCard title="Sản phẩm">
          <News />
        </ComponentCard>
      </div>
    </div>
  );
}
