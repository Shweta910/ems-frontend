import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import PasswordInput from "./PasswordInput";

import { loginSchema, type LoginFormData } from "../schemas/loginSchema";

import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form Submitted", data);
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Input placeholder="Email" {...register("email")} />

        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
      </div>

      <div>
        <PasswordInput placeholder="Password" {...register("password")} />

        <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-sm text-blue-600 hover:underline">
          Forgot Password?
        </Link>
      </div>

      <div className="mt-6 text-center text-sm">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:underline">
          Create Account
        </Link>
      </div>
    </form>
  );
}
