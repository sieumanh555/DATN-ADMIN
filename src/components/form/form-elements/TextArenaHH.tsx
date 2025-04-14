"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";

interface TextArenaHHProps {
  value?: string;
  rows?: number;
  onChange?: (value: string) => void;
}

export default function TextArenaHH({
  value = "",
  rows = 6,
  onChange,
}: TextArenaHHProps) {
  return (
    <ComponentCard title="Data">
      <div className="space-y-6">
        <div>
          <TextArea
            rows={rows}
            value={value}
            error={!value}
            onChange={(event) => onChange?.(event)}
            hint={!value ? "Please enter a valid message." : ""}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
