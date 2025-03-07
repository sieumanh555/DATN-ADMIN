import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DiscountLimit from "@/components/tables/discountLimit";
import VoucherAdd from "@/components/tables/voucherAdd";

import React from "react";

export default function Product() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Voucher Management" />
      <div className="space-y-6">
        <ComponentCard title="Tìm kiếm hạn mức voucher">
          <VoucherAdd></VoucherAdd>
        </ComponentCard>
        <ComponentCard title="Hạn mức voucher">
          <DiscountLimit />
        </ComponentCard>
      </div>
    </div>
  );
}
