import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  changePasswordSchema,
  type ChangePasswordFormData,
} from "../schemas/changePasswordSchema";

import { useChangePassword } from "@/features/auth/hooks/useChangePassword";

export default function ChangePasswordForm() {
  const { mutate, isPending } = useChangePassword();

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  function onSubmit(data: ChangePasswordFormData) {
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Current Password */}

      <div className="space-y-2">
        <label className="text-sm font-medium">Current Password</label>

        <div className="relative">
          <Input
            type={showCurrent ? "text" : "password"}
            placeholder="Enter current password"
            autoComplete="current-password"
            {...register("currentPassword")}
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-3 top-1/2 -translate-y-1/2">
            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errors.currentPassword && (
          <p className="text-sm text-red-500">
            {errors.currentPassword.message}
          </p>
        )}
      </div>

      {/* New Password */}

      <div className="space-y-2">
        <label className="text-sm font-medium">New Password</label>

        <div className="relative">
          <Input
            type={showNew ? "text" : "password"}
            placeholder="Enter new password"
            autoComplete="new-password"
            {...register("newPassword")}
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-1/2 -translate-y-1/2">
            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errors.newPassword && (
          <p className="text-sm text-red-500">{errors.newPassword.message}</p>
        )}
      </div>

      {/* Confirm Password */}

      <div className="space-y-2">
        <label className="text-sm font-medium">Confirm Password</label>

        <div className="relative">
          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm new password"
            autoComplete="new-password"
            {...register("confirmPassword")}
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2">
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Password Requirements */}

      <div className="rounded-md border bg-muted/30 p-4 text-sm">
        <p className="font-medium mb-2">Password Requirements</p>

        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Minimum 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          <li>At least one number</li>
          <li>At least one special character</li>
        </ul>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Changing Password...
          </>
        ) : (
          "Change Password"
        )}
      </Button>
    </form>
  );
}
