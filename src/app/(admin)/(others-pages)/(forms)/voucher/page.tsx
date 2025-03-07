import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Phieugiam from "@/components/qlhh/phieugiam/page";
import Phieugiam2 from "@/components/qlhh/phieugiam/page2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Voucher() {
  return (
    <div>
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <Phieugiam />
        </div>
        <div className="space-y-6">
          <Phieugiam2 />
        </div>
      </div>
    </div>
  );
}
