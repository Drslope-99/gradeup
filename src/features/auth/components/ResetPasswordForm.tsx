"use client";
import React from "react";
import NameInput from "@/components/ui/input/NameInput";
import PasswordInput from "@/components/ui/input/PasswordInput";
import EmailInput from "@/components/ui/input/EmailInput";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/ui/GoogleIcon";
import Link from "next/link";

export default function ResetPasswordForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-lg mx-auto px-4"
    >
      <header className="py-6 text-center">
        <h1 className="text-2xl md:text-4xl text-gray-700 font-bold mb-2">
          Reset password
        </h1>
        <p className="text-gray-500 mb-6">
          Enter your new password and confirm password
        </p>
      </header>

      {/* the form input fields and goes here */}
      <section className="flex flex-col gap-5">
        <PasswordInput label="Password" />
        <PasswordInput label="Confirm Password" />

        <Button title="Reset Password" variant="primary" />

        <Link
          href="/forgot-password"
          className="capitalize underline text-center"
        >
          Back to Sign in
        </Link>
      </section>
    </form>
  );
}
