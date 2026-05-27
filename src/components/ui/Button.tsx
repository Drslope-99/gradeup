import React from "react";

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Button({
  title,
  variant = "primary",
  onClick,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 md:py-4 rounded-full flex items-center justify-center gap-2 cursor-pointer transition duration-100 active:scale-95 ${
        variant === "primary"
          ? "bg-primary text-white"
          : "border border-primary text-black bg-white"
      }`}
    >
      {leftIcon && <span>{leftIcon}</span>}

      <span>{title}</span>

      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
