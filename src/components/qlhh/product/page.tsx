"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Select from "../../form/Select";
import TextArenHH from "@/components/form/form-elements/TextArenaHH";

export default function Product() {
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <ComponentCard title="Default Inputs">
      <div className="space-y-6">
        <div>
          <Label>ProductID</Label>
          <Input type="text" placeholder="info@gmail.com" disabled />
        </div>
        <div>
          <Label>ProductName</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Price</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Promotion Price</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Describe</Label>
          <TextArenHH />
        </div>
        <div>
          <Label>Status</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
