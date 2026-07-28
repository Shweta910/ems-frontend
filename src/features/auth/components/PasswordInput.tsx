import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";


interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}


export default function PasswordInput({
  id,
  label,
  error,
  className,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="space-y-2">

      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}


      <div className="relative">

        <input
          id={id}
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full rounded-md border px-3 py-2 pr-10",
            "focus:outline-none focus:ring-2 focus:ring-purple-500",
            error && "border-red-500",
            className,
          )}
          {...props}
        />


        <button
          type="button"
          onClick={() =>
            setShowPassword((prev) => !prev)
          }
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-gray-500
            hover:text-gray-700
          "
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>


      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}