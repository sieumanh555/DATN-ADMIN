"use client"; // Đánh dấu là client component

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "../progress/loader.css";

export default function Loader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500); // Tự động kết thúc sau 500ms (tránh lỗi chờ lâu)

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]); // Kích hoạt khi pathname thay đổi

  return null;
}
