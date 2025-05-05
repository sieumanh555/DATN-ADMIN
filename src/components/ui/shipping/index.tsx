import React, { useState, useEffect } from "react";

import type { Order } from "@/model/order_model";

interface MonthlyTargetProps {
  data: Order | null;
}
const statusMap: Record<string, number> = {
  processing: 0, // "Chờ xác nhận"
  received: 1,   // "Đã lấy hàng"
  shipping: 3, // "Đang giao"
  complete: 4,   // "Đã giao"
  cancelled: 5,     // "Đã hủy" (nếu có)
};
const Shipping = ({ data }: MonthlyTargetProps) => {
  const statusImages = [
    { status: "Chờ xác nhận", color: "bg-gray-500" }, // 0
    { status: "Đã lấy hàng", color: "bg-rose-400" },   // 1
    { status: "Xử lý giao dịch", color: "bg-blue-500" }, // 2
    { status: "Đang giao", color: "bg-yellow-500" },   // 3
    { status: "Đã giao", color: "bg-green-500" },      // 4
    { status: "Đã hủy", color: "bg-red-500" },         // 5 (nếu bạn muốn thêm hủy hàng)
  ];

  // Ánh xạ trạng thái từ props.data sang chỉ số của statusImages


  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    if (data?.status && statusMap[data.status] !== undefined) {
      setCurrentStatusIndex(statusMap[data.status]);
    }
  }, [data]);

  const currentStatus = statusImages[currentStatusIndex] || statusImages[0];
  const progressPercentage =
    ((currentStatusIndex + 1) / statusImages.length) * 100;

  return (
    <div className="max-w mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white py-4 px-6">
        <h2 className="text-xl font-semibold">Theo dõi đơn hàng</h2>
        <p className="text-sm">Mã đơn hàng: #{data?._id || "123456789"}</p>
      </div>

      <div className="p-6">
        <div className="flex justify-between mb-4">
          {statusImages.map((item, index) => (
            <div key={item.status} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full shadow flex items-center justify-center ${
                  index <= currentStatusIndex
                    ? item.color
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                {index === 0 && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4l4-4m0 0l4 4m-4-4v8" /></svg>}
                {index === 1 && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4l4-4m0 0l4 4m-4-4v8" /></svg>}
                {index === 2 && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-2m-3 4l-3-3m0 0l-3 3" /></svg>}
                {index === 3 && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4l4-4m0 0l4 4m-4-4v8" /></svg>}
                {index === 4 && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </div>
              <p className="text-xs text-gray-600 mt-1 text-center">
                {item.status}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Trạng thái hiện tại:</h3>
          <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
            <div
              className={`${currentStatus.color} h-full rounded-full`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-2 text-xs font-semibold text-gray-700">
              {statusImages.map((item) => (
                <span key={item.status}>{item.status}</span>
              ))}
            </div>
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow ${currentStatus.color}`}
              style={{ left: `calc(${progressPercentage}% - 0.375rem)` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {currentStatus.status === "Chờ xác nhận" &&
              "Đơn hàng của bạn đang chờ được xác nhận."}
            {currentStatus.status === "Đã lấy hàng" &&
              "Đơn hàng của bạn đã được lấy từ người bán."}
            {currentStatus.status === "Đang giao" &&
              "Shipper đang trên đường giao hàng cho bạn."}
            {currentStatus.status === "Đã giao" &&
              "Đơn hàng đã được giao thành công."}
            {currentStatus.status === "Đã hủy" &&
              "Đơn hàng đã bị hủy bởi hệ thống hoặc người dùng."}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Lịch sử cập nhật:</h3>
          <ul className="space-y-2">
            {statusImages.map((item, index) => (
              <li key={item.status} className="flex items-center">
                <span
                  className={`w-3 h-3 rounded-full mr-2 ${
                    index <= currentStatusIndex ? item.color : "bg-gray-400"
                  }`}
                ></span>
                <span className="text-sm text-gray-700">
                  {item.status}: cập nhật thời gian tương ứng...
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
