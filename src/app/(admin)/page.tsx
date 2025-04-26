"use client"
// import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
// import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";

import { useProduct_Data } from "@/components/ecommerce_client/financial";
import RecentOrders1 from "@/components/ecommerce/RecentOrder1";
import RecentUser from "@/components/ecommerce/RecentUser";

// export const metadata: Metadata = {
//   title: "HaloShop E-commerce Dashboard",
//   description: "Halo Shop - Web Bán Giày",
// };



export default function Ecommerce() {
  const { product, user, newuser, voucher, category, order, orderfailed, ordertoday } = useProduct_Data();
  const totalProduct = product.length;
  const totalUser = user.length;
  const totalNewuser = newuser.length;
  const totalVoucher = voucher.length;
  const totalCategory = category.length;
  const totalOrder = order.length;
  const totalorderfailed = orderfailed.length
  const totalordertoday = ordertoday.length;
  
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 md:gap-6">
  <div className="col-span-1 md:col-span-2 lg:col-span-6 space-y-6">
    <EcommerceMetrics
      name1="Khách hàng"
      name2="Khách hàng mới"
      icon1Name="UserGroupIcon"
      icon2Name="UserIcon"
      itemBackgroundColor1="lightgreen"
      itemBackgroundColor2="lightblue"
      value1={totalUser}
      value2={totalNewuser}
    />
    <EcommerceMetrics
      name1="Tổng sản phẩm"
      name2="Tổng danh mục"
      icon1Name="CircleStackIcon"
      icon2Name="Bars4Icon"
      itemBackgroundColor1="skyblue"
      itemBackgroundColor2="lavender"
      value1={totalProduct}
      value2={totalCategory}
    />
    {/* <MonthlySalesChart /> */}
  </div>
  <div className="col-span-1 md:col-span-2 lg:col-span-6 space-y-6">
    <EcommerceMetrics
      name1="Đơn hàng đang xử lý"
      name2="Tổng đơn hàng 1 ngày"
      icon1Name="Bars2Icon"
      icon2Name="Bars3BottomLeftIcon"
      itemBackgroundColor1="aquamarine"
      itemBackgroundColor2="lightsteelblue"
      value1={totalorderfailed}
      value2={totalordertoday}
    />
    <EcommerceMetrics
      name1="Tổng đơn hàng"
      name2="Tổng phiếu Voucher"
      icon1Name="Bars3BottomRightIcon"
      icon2Name="RectangleStackIcon"
      itemBackgroundColor1="powderblue"
      itemBackgroundColor2="lavender"
      value1={totalOrder}
      value2={totalVoucher}
    />
  </div>
  <div className="col-span-1 md:col-span-2 lg:col-span-6 space-y-6">
    <MonthlyTarget name1="Tổng doanh thu COD" />
    <MonthlyTarget name1="Tổng doanh thu ATM/Transfer/Payment" />
  </div>
  <div className="col-span-1 md:col-span-2 lg:col-span-6 space-y-6">
    <MonthlyTarget name1="Doanh thu tổng" />
    <MonthlyTarget name1="Tổng doanh thu 1 ngày" />
  </div>
  {/* <div className="col-span-12">
        <StatisticsChart />
      </div> */}

  {/* <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div> */}
  <div className="col-span-1 md:col-span-2 lg:col-span-12 space-y-6">
    <RecentUser name1="Bảng thống kê người dùng mới" data={newuser}/>
  </div>
  <div className="col-span-1 md:col-span-2 lg:col-span-12 space-y-6">
    <RecentOrders name1="Bảng thống kê đơn hàng đang chờ xử lý" data={orderfailed}/>
  </div>
  <div className="col-span-1 md:col-span-2 lg:col-span-12 space-y-6">
    <RecentOrders1 name1="Bảng thống kê đơn hàng 1 ngày" data={ordertoday}/>
  </div>
</div>
  );
}
