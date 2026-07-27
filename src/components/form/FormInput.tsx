import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className = "", readOnly, disabled, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="text-sm font-medium">{label}</label>

        <input
          ref={ref}
          readOnly={readOnly}
          disabled={disabled}
          {...props}
          className={`
            w-full rounded-lg border px-3 py-2 outline-none transition-colors

            ${
              error
                ? "border-red-500"
                : "border-slate-300 focus:border-indigo-500"
            }

            ${
              readOnly
                ? "bg-slate-100 text-slate-700 cursor-default"
                : "bg-white text-slate-900"
            }

            ${
              disabled
                ? "bg-slate-100 text-slate-400 cursor-not-allowed opacity-70"
                : ""
            }

            ${className}
          `}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;
