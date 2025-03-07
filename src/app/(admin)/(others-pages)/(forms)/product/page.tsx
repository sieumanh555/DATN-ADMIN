import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Product from "@/components/qlhh/product/page";
import Product2 from "@/components/qlhh/product/page2";
import { Metadata } from "next";
import React from "react";
import Button from "@/components/ui/button/Button";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <Product />
        </div>
        <div className="space-y-6">
          <Product2 />
        </div>
      </div>
      <div className="col-span-full flex flex-col gap-5">
        <Button className="w-full" size="sm" color="gray">
          Decline
        </Button>
        <Button className="w-full" size="sm" color="green">
          Accept
        </Button>
      </div>
    </div>
  );
}
