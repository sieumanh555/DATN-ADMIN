import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ProductVariant from "@/components/tables/productVariant";
import ProductVariantsButton from "@/components/qlhh/productVariantsButton/page";

import React, { Suspense } from "react";

export default function SanPhamVariant() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Product" />
      <div className="space-y-6">
        <ComponentCard title="Sản phẩm">
          <Suspense fallback={<p>Loading...</p>}>
            <ProductVariantsButton />
            <ProductVariant />
          </Suspense>
        </ComponentCard>
      </div>
    </div>
  );
}
