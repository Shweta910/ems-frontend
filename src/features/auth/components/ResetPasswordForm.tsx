import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useNavigate } from "react-router-dom";

import SubmitButton from "@/components/form/SubmitButton";

import PasswordInput from "./PasswordInput";

import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from "../schemas/resetPasswordSchema";

import { useResetPassword } from "../hooks/useResetPassword";

export default function ResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const { mutate, isPending } = useResetPassword();

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

    mutate(
      {
        token,
        password: values.password,
      },
      {
        onSuccess: () => {
          navigate("/login");
        },
      },
    );
  };

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

      <SubmitButton loading={isPending}>Reset Password</SubmitButton>
    </form>
  );
}
