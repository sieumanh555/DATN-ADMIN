import SignUpForm from "@/components/auth/SignUpForm";
import GridShape from "@/components/common/GridShape";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js SignUp Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return (
    <div className="relative z-1 flex h-screen w-full overflow-hidden bg-white dark:bg-gray-900">
      <SignUpForm />
      <div className="relative z-1 hidden flex-1 items-center justify-center bg-brand-950 p-8 dark:bg-white/5 lg:flex">
        {/* <!-- ===== Common Grid Shape Start ===== --> */}
        <GridShape />
        {/* <!-- ===== Common Grid Shape End ===== --> */}
        <div className="flex max-w-xs flex-col items-center">
          <Link href="" className="mb-4 block">
            <Image
              src="/images/logo/auth-logo.svg"
              width={231}
              height={48}
              alt="Logo"
            />
          </Link>
          <p className="text-center text-gray-400 dark:text-white/60">
            Free and Open-Source Tailwind CSS Admin Dashboard Template
          </p>
        </div>
      </div>
    </div>
  );
}
