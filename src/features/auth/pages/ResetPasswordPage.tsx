import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogo from "@/components/auth/AuthLogo";

import ResetPasswordForm from "../components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Reset Password"
          subtitle="Create a new password for your account."
        />

        <ResetPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}
