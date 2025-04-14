import { Outfit } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});
// pages/_app.tsx
import "../components/progress/loader.css"; // Import CSS của NProgress
import Loader from "../components/progress/loader"; // Import Loader

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Loader />
      <body className={`${outfit.variable} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
