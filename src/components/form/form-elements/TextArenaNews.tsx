"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextAreaNews from "../input/TextArenaNews";

interface TextArenaHHProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function TextArenaHH({ value = "", onChange }: TextArenaHHProps) {
  const [messageTwo, setMessageTwo] = useState(value);

  const handleChange = (val: string) => {
    setMessageTwo(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <ComponentCard title="Data">
      <div className="space-y-6">
        <div>
          <TextAreaNews
            rows={6}
            value={messageTwo}
            error
            onChange={handleChange}
            hint="Please enter a valid message."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
