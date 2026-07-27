import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogo from "@/components/auth/AuthLogo";

import ChangePasswordForm from "../components/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Change Password"
          subtitle="Update your password to keep your account secure."
        />

        <ChangePasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}
