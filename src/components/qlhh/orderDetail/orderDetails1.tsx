import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { CalenderIcon } from "../../../icons";
import Button from "@/components/ui/button/Button";

export default function Orderdetail() {
  return (
    <ComponentCard title="Default Inputs">
      <div className="space-y-6">
        <div>
          <Label>Order ID</Label>
          <Input type="text" placeholder="info@gmail.com" disabled />
        </div>
        <div>
          <Label>ProductID</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Quantity</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Price</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Discount Amount</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label htmlFor="datePicker">Creation Date</Label>
          <div className="relative">
            <Input
              type="date"
              id="datePicker"
              name="datePicker"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <CalenderIcon />
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="datePicker">Updation Date</Label>
          <div className="relative">
            <Input
              type="date"
              id="datePicker"
              name="datePicker"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <CalenderIcon />
            </span>
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
    </ComponentCard>
  );
}
