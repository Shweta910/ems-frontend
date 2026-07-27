import AuthCard from "@/components/auth/AuthCard";
import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthLogo from "@/components/auth/AuthLogo";

import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title=""
          subtitle="Register to access Employee Management System"
        />

        <RegisterForm />

        <AuthFooter
          text="Already have an account?"
          linkText="Login"
          to="/login"
        />
      </AuthCard>
    </AuthLayout>
  );
}
