"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authRoutes } from "@/config/auth-routes";

export default function AuthHeader() {
  const pathname = usePathname();

  const showCreateAccount = authRoutes.createAccountGroup.includes(pathname);
  const showLogin = authRoutes.loginGroup.includes(pathname);

  return (
    <header className="h-16 flex items-center py-2 px-4">
      <div className="max-w-screen-2xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <p className="text-primary text-xl">
            Edu<span className="font-bold">Pro</span>
          </p>
        </div>

        {showCreateAccount && (
          <Link href="/register">
            <button className="bg-white px-6 py-2 rounded-full border border-primary  transition duration-200 active:scale-95 cursor-pointer shadow-[var(--shadow-primary-soft)]">
              Create an Account
            </button>
          </Link>
        )}

        {showLogin && (
          <Link href="/login">
            <button className="bg-white px-6 py-2 rounded-full border border-primary  transition duration-200 active:scale-95 cursor-pointer shadow-[var(--shadow-primary-soft)]">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
