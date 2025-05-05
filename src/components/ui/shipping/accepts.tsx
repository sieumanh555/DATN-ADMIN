"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { EnvelopeIcon } from "../../../icons";
import { UserIcon, PlusIcon, ShootingStarIcon,TaskIcon, PencilIcon } from "../../../icons";
import PhoneInput from "@/components/form/group-input/PhoneInput";
import Button from "../button/Button";
import { Order } from "@/model/order_model";
import { orderService } from "@/services/order_controller";
interface MonthlyTargetProps {
  data: Order | null;
}
export default function AcceptShipping(props: MonthlyTargetProps) {
  const formatCurrency = (price?: number) => {
    if (typeof price !== "number") return "";
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const countries = [
    { code: "VN", label: "+84" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };
const handleDelete = async (id: string | null ) => {
    if (!id) {
      alert("ID không hợp lệ.");
      return;
    }

    try {
      const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
      if (!confirmDelete) return;

      await orderService.deleteOrder(id);
      alert("Xóa sản phẩm thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa sản phẩm thất bại. Vui lòng thử lại.");
    }
  };
  return (
    <ComponentCard title="Thông tin đơn hàng của khách hàng">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <div>
            <Label>Email</Label>
            <div className="relative">
              <Input
                placeholder="info@gmail.com"
                defaultValue={props.data?.userId.email}
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <EnvelopeIcon />
              </span>
            </div>
          </div>
          <div>
            <Label>Name</Label>
            <div className="relative">
              <Input
                placeholder="info@gmail.com"
                defaultValue={props.data?.userId.name}
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <UserIcon />
              </span>
            </div>
          </div>
          <div>
            <Label>Địa chỉ</Label>
            <div className="relative">
              <Input
                placeholder="info@gmail.com"
                defaultValue={props.data?.userId.address}
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <PlusIcon />
              </span>
            </div>
          </div>
          <div>
            <Label>Phone</Label>
            <PhoneInput
              selectPosition="start"
              placeholder={props.data?.userId.phone}
              countries={countries}
              onChange={handlePhoneNumberChange}
              value={props.data?.userId.phone}
            />
          </div>{" "}
        </div>
        <div className="space-y-6">
          <div>
            <Label>Mã đơn hàng</Label>
            <div className="relative">
              <Input
                placeholder="info@gmail.com"
                type="text"
                defaultValue={props.data?.uniqueKey}
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <ShootingStarIcon />
              </span>
            </div>
          </div>
          <div>
            <Label>Phương thức thanh toán</Label>
            <div className="relative">
              <Input
                placeholder="info@gmail.com"
                defaultValue={props.data?.paymentMethod}
                type="text"
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <TaskIcon />
              </span>
            </div>
          </div>
          <div>
            <Label>Phí VAT</Label>
            <div className="relative">
              <Input
                placeholder="info@gmail.com"
                type="text"
                defaultValue={formatCurrency(20000)}
                className="pl-[62px]"
              />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <PencilIcon />
              </span>
            </div>
          </div>
          <div className="mt-14">
            <Label>Phí VAT</Label>
                <div className="flex space-x-5">
                  <Button className="md">Cập nhật thông tin</Button>
                  <Button className="md" color="red">Thay đổi trạng thái</Button>
                  <Button className="md" color="pink" onClick={() => handleDelete(props.data?._id || null)}>Xóa bỏ đơn hàng</Button>
                  <Button className="md" color="green">Xác nhận đơn hàng</Button>
                </div>
        </div>
        </div>
        
      </div>
    </ComponentCard>
  );
}
