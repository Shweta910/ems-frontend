import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";

import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "../schemas/forgotPasswordSchema";

import { useForgotPassword } from "../hooks/useForgotPassword";

export default function ForgotPasswordForm() {
  const { mutate, isPending } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (values: ForgotPasswordFormValues) => {
    mutate(values.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <FormInput
        id="email"
        label="Email"
        placeholder="john@example.com"
        {...register("email")}
        error={errors.email?.message}
      />

      <SubmitButton loading={isPending}>Send Reset Link</SubmitButton>
    </form>
  );
}
