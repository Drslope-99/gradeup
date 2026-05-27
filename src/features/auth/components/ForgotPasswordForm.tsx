"use client";
import React from "react";
import NameInput from "@/components/ui/input/NameInput";
import PasswordInput from "@/components/ui/input/PasswordInput";
import EmailInput from "@/components/ui/input/EmailInput";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/ui/GoogleIcon";
import Link from "next/link";

export default function ForgotPasswordForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-lg mx-auto px-4"
    >
      <header className="py-6 text-center">
        <h1 className="text-2xl md:text-4xl text-gray-700 font-bold mb-2">
          Forgot your password?
        </h1>
        <p className="text-gray-500 mb-6">
          No worries!,Enter your email and we'll send you reset instructions
        </p>
      </header>

      {/* the form input fields and goes here */}
      <section className="flex flex-col gap-5">
        <EmailInput label="Email Address" />

        <Button title="Send Reset link" variant="primary" />
        <Link href="/login" className="capitalize underline text-center">
          Back to Sign in
        </Link>
      </section>
    </form>
  );
}
