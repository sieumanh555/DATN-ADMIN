"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Product = dynamic(() => import("./products"));

export default function ProductClientWrapper() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Product />
    </Suspense>
  );
}
