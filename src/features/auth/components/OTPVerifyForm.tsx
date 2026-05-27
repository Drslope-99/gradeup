"use client";
import OtpInput from "@/components/ui/input/OtpInput";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function OTPVerifyForm() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (code: string) => {
    setIsVerifying(true);
    console.log("Submitting OTP:", code);

    setTimeout(() => {
      setIsVerifying(false);
    }, 3000);
  };

  return (
    <form className="max-w-lg mx-auto px-4">
      <header className="py-6 text-center">
        <h1 className="text-2xl md:text-4xl text-gray-700 font-bold mb-2">
          Verify Your Email Address
        </h1>
        <p className="text-gray-500">
          We've sent a 6-digit verification code to your email address, enter
          the code below
        </p>
      </header>
      <section className="flex flex-col gap-6">
        <OtpInput
          otp={otp}
          setOtp={setOtp}
          onComplete={handleSubmit}
          disabled={isVerifying}
          error={errorMessage}
        />

        <Button title="Verify & Continue" variant="primary" />
        <p className="text-center text-gray-500">
          Didn't receive the code? Resend code in{" "}
          <span className="font-bold">00:59</span>
        </p>
      </section>
    </form>
  );
}
