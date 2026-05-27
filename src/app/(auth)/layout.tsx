import React from "react";
import AuthHeader from "@/components/layout/AuthHeader";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  );
}
