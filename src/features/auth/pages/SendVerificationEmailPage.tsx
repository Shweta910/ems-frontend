import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogo from "@/components/auth/AuthLogo";

import SendVerificationEmail from "../components/SendVerificationEmail";

export default function SendVerificationEmailPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Verify Your Email"
          subtitle="Send a verification email to activate your account."
        />

        <SendVerificationEmail />
      </AuthCard>
    </AuthLayout>
  );
}
