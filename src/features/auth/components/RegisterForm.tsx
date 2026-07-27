import { useState } from "react";
// import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import {
  registerSchema,
  type RegisterFormValues,
} from "../schemas/registerSchema";

import { useRegister } from "../hooks/useRegister";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    if (!acceptedTerms) return;

    mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* First Name */}
      <div>
        <Label htmlFor="firstName" className="auth__label">
          First Name
        </Label>

        <Input id="firstName" placeholder="John" {...register("firstName")} />

        {errors.firstName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <Label htmlFor="lastName" className="auth__label">
          Last Name
        </Label>

        <Input id="lastName" placeholder="Doe" {...register("lastName")} />

        {errors.lastName && (
          <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="auth__label">
          Email
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="auth__label">
          Phone
        </Label>

        <Input id="phone" placeholder="+91 9876543210" {...register("phone")} />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password" className="auth__label">
          Password
        </Label>

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            {...register("password")}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <Label htmlFor="confirmPassword" className="auth__label">
          Confirm Password
        </Label>

        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="********"
            {...register("confirmPassword")}
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-3">
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Terms */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={acceptedTerms}
          onCheckedChange={(checked) => setAcceptedTerms(Boolean(checked))}
        />

        <Label htmlFor="terms" className="text-sm">
          I accept the Terms & Conditions
        </Label>
      </div>

      {!acceptedTerms && (
        <p className="text-sm text-red-500">
          Please accept the Terms & Conditions.
        </p>
      )}

      {/* Submit */}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Creating Account..." : "Create Account"}
      </Button>

      {/* Login Link
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-600 hover:underline">
          Login
        </Link>
      </div> */}
    </form>
  );
}
