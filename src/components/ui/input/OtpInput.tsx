"use client";
import { useRef, useEffect } from "react";

interface VerificationInputProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  onComplete: (code: string) => void;
  disabled?: boolean;
  error?: string;
}

export default function VerificationInput({
  otp,
  setOtp,
  onComplete,
  disabled = false,
  error,
}: VerificationInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const hasSubmitted = useRef(false);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // clear current input first
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, otp.length);

    if (!pasted) return;

    const newOtp = [...otp];

    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }

    setOtp(newOtp);

    setTimeout(() => {
      inputRefs.current[pasted.length - 1]?.focus();
    }, 0);
  };

  useEffect(() => {
    if (otp.every((d) => d !== "") && !hasSubmitted.current) {
      hasSubmitted.current = true;
      onComplete(otp.join(""));
    }

    if (otp.some((d) => d === "")) {
      hasSubmitted.current = false;
    }
  }, [otp, onComplete]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center gap-2 mt-6 mb-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d*"
            maxLength={1}
            value={digit}
            disabled={disabled}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 outline-none border bg-white border-gray-400 rounded-md text-center"
          />
        ))}
      </div>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
    </div>
  );
}
