import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Voucher from "@/components/tables/voucher";
import VoucherAdd from "@/components/tables/voucherAdd";

import React from "react";

export default function Product() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Voucher" />
      <div className="space-y-6">
        <ComponentCard title="Nhập danh sách voucher">
          <VoucherAdd></VoucherAdd>
        </ComponentCard>
        <ComponentCard title="Danh sách voucher">
          <Voucher />
        </ComponentCard>
      </div>
    </div>
  );
}
