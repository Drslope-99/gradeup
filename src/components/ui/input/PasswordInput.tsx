"use client";
import { useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

type PasswordInputProps = {
  id?: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-gray-600">
        {label}
      </label>
      <div className="bg-white border border-gray-200 rounded-md flex">
        <input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border-none outline-none bg-transparent w-full px-4 py-2 sm:py-3 rounded-md text-gray-500"
        />
        <button
          type="button"
          className="px-2 bg-white border-none rounded-md"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <EyeOff className="text-gray-400" />
          ) : (
            <Eye className="text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}
