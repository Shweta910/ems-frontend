import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";

import PasswordInput from "@/components/form/PasswordInput";
import SubmitButton from "@/components/form/SubmitButton";

import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from "../schemas/resetPasswordSchema";

import { useResetPassword } from "../hooks/useResetPassword";

export default function ResetPasswordForm() {
  const { mutate, isPending } = useResetPassword();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token") ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: ResetPasswordFormValues) => {
    if (!token) {
      return;
    }

    mutate({
      token,
      password: values.password,
    });
  };

  if (!token) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold">Invalid or Expired Reset Link</h2>

        <p className="mt-2 text-muted-foreground">
          Please request a new password reset link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <PasswordInput
        id="password"
        label="New Password"
        placeholder="Enter new password"
        {...register("password")}
        error={errors.password?.message}
      />

      <PasswordInput
        id="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm new password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <SubmitButton
        loading={isPending}
        title="Reset Password"
        loadingTitle="Resetting Password..."
      />
    </form>
  );
}
