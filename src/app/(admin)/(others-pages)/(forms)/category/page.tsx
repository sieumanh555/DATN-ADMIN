import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Category from "@/components/qlhh/category/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Categories() {
  return (
    <div>
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
        <div className="space-y-6">
          <Category />
        </div>
      </div>
    </div>
  );
}
