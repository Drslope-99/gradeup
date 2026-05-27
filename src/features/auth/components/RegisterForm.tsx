"use client";
import React from "react";
import NameInput from "@/components/ui/input/NameInput";
import PasswordInput from "@/components/ui/input/PasswordInput";
import EmailInput from "@/components/ui/input/EmailInput";
import Button from "@/components/ui/Button";
import GoogleIcon from "@/components/ui/GoogleIcon";

export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-lg mx-auto px-4"
    >
      <header className="py-6 text-center">
        <h1 className="text-2xl md:text-4xl text-gray-700 font-bold mb-2">
          Start your exam prep journey today
        </h1>
        <p className="text-gray-500">
          Join over 50,000 students improving their scores
        </p>
      </header>

      {/* the form input fields and goes here */}
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <NameInput label="First Name" />
          <NameInput label="Last Name" />
        </div>
        <EmailInput label="Email Address" />
        <PasswordInput label="Password" />
        <p className="text-gray-500 text-center font-thin">
          By signing up, you agree to our terms of service and privacy policy
        </p>
        <Button title="Create an Account" variant="primary" />
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
