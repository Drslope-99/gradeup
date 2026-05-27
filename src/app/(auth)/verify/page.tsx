import AuthLayoutContent from "@/components/layout/AuthLayoutContent";
import OTPVerifyForm from "@/features/auth/components/OTPVerifyForm";

export default function VerifyEmailPage() {
  return (
    <AuthLayoutContent>
      <OTPVerifyForm />
    </AuthLayoutContent>
  );
}
