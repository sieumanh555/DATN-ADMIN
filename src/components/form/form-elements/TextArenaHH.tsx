"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";

export default function TextArenaHH() {
  const [messageTwo, setMessageTwo] = useState("");
  return (
    <ComponentCard title="Data">
      <div className="space-y-6">
        <div>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint="Please enter a valid message."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
