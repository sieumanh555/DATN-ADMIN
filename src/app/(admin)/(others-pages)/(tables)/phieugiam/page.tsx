import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Voucher from "@/components/tables/voucher";

import React from "react";

export default function PhieuGiam() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Voucher" />
      <div className="space-y-6">
        <ComponentCard title="Danh sách voucher">
          <Voucher />
        </ComponentCard>
      </div>
    </div>
  );
}
