import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogo from "@/components/auth/AuthLogo";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title=""
          subtitle="Sign in to continue to Employee Management System"
        />

        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}
