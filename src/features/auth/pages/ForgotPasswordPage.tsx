import AuthCard from "@/components/auth/AuthCard";
import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogo from "@/components/auth/AuthLogo";

import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Forgot Password"
          subtitle="Enter your email to receive a password reset link."
        />

        <ForgotPasswordForm />

        <AuthFooter
          text="Remember your password?"
          linkText="Back to Login"
          to="/login"
        />
      </AuthCard>
    </AuthLayout>
  );
}
