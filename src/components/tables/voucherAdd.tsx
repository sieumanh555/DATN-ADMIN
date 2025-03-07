"use client";
import React from "react";
import ComponentCard from "../common/ComponentCard";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import { CalenderIcon } from "../../icons";
import Button from "../ui/button/Button";

export default function DefaultInputs() {
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <ComponentCard title="Voucher">
      <div className="grid grid-cols-4 gap-6 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Label>Input with Placeholder</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Label>Select Input</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <Label htmlFor="datePicker">Date Picker Input</Label>
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
        <div className="col-span-2 sm:col-span-1">
          <Label htmlFor="datePicker">Controller</Label>
          <Button size="sm">Find</Button>
        </div>
      </div>
    </ComponentCard>
  );
}
