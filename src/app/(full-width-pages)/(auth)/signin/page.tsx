import SignInForm from "@/components/auth/SignInForm";
import GridShape from "@/components/common/GridShape";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

export default function SignIn() {
  return (
    <div className="relative z-1 flex h-screen w-full overflow-hidden bg-white px-4 py-6 dark:bg-gray-900 sm:p-0">
      <SignInForm />
      <div className="relative z-1 hidden flex-1 items-center justify-center bg-brand-950 p-8 dark:bg-white/5 lg:flex">
        {/* <!-- ===== Common Grid Shape Start ===== --> */}
        <GridShape />
        <div className="flex max-w-xs flex-col items-center">
          <Link href="/" className="mb-4 block">
            <Image
              width={231}
              height={48}
              src="/images/logo/logo.png"
              alt="Logo"
            />
          </Link>
          <p className="text-center text-gray-400 dark:text-white/60">
            Trang quản trị administrator của Halo-Shop
          </p>
        </div>
      </div>
    </div>
  );
}
