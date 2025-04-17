import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Category from "@/components/qlhh/category/page";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Categories() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Category Management" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
        <div className="space-y-6">
        <Suspense fallback={<p>Loading...</p>}>
          <Category />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
