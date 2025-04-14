"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Select from "../../form/Select";
import Button from "@/components/ui/button/Button";
import { CalenderIcon } from "../../../icons";
import DropzoneComponent from "@/components/form/form-elements/DropZone";
import FileInput from "@/components/form/input/FileInput";
import TextAreaNews from "@/components/form/input/TextArenaNews";
export default function Tintuc() {
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
          <Label>News ID</Label>
          <Input type="text" placeholder="info@gmail.com" disabled />
        </div>
        <div>
          <Label>News Tittle</Label>
          <Input type="text" placeholder="info@gmail.com" />
        </div>
        <div>
          <Label>Content</Label>
          <TextAreaNews />
        </div>
        <div>
          <Label>Image</Label>
          <FileInput></FileInput>
        </div>
        <div>
          <Label>Child Image</Label>
          <DropzoneComponent></DropzoneComponent>
        </div>
        <div>
          <Label>Category</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
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
        <div>
          <Label htmlFor="datePicker">Publish Date</Label>
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
