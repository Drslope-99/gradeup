"use client";
import React from "react";
import NameInput from "@/components/ui/input/NameInput";
import PasswordInput from "@/components/ui/input/PasswordInput";
import EmailInput from "@/components/ui/input/EmailInput";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/ui/GoogleIcon";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-lg mx-auto px-4"
    >
      <header className="py-6 text-center">
        <h1 className="text-2xl md:text-4xl text-gray-700 font-bold mb-2">
          Welcome back
        </h1>
        <p className="text-gray-500 mb-6">
          Sign into you account to continue learning
        </p>
      </header>

      {/* the form input fields and goes here */}
      <section className="flex flex-col gap-5">
        <EmailInput label="Email Address" />
        <PasswordInput label="Password" />

        <Button title="Log in" variant="primary" />
        <Link
          href="/forgot-password"
          className="capitalize underline text-center"
        >
          forgot password?
        </Link>
        <p className="text-center">Or</p>
        <Button
          title="Continue with Google"
          variant="secondary"
          leftIcon={<GoogleIcon />}
        />
      </section>
    </form>
  );
}
