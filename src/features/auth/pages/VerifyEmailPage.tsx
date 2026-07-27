import AuthCard from "@/components/auth/AuthCard";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogo from "@/components/auth/AuthLogo";
import AuthHeader from "@/components/auth/AuthHeader";

import VerifyEmail from "../components/VerifyEmail";

export default function VerifyEmailPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Verify Email"
          subtitle="Please wait while we verify your email."
        />

        <VerifyEmail />
      </AuthCard>
    </AuthLayout>
  );
}
