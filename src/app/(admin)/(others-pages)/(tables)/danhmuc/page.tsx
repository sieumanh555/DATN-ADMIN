import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Categories from "@/components/tables/category";
import CategoryAdd from "@/components/qlhh/categoryAdd/page";
import React from "react";

export default function DanhMuc() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Task Kanban" />
      <div className="space-y-6">
        <ComponentCard title="Danh mục">
          <CategoryAdd />
          <Categories />
        </ComponentCard>
      </div>
    </div>
  );
}
