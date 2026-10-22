import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, hint, required, className, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-semibold text-ink-800"
        >
          {label}
          {required && (
            <span className="ml-1 text-error-600" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={!!error}
          aria-describedby={cn(error && errorId, hint && hintId) || undefined}
          className={cn(
            "w-full rounded-control border bg-white px-3.5 py-2.5 text-base text-ink-900 placeholder:text-ink-400 min-h-[44px]",
            "transition-colors duration-150 focus-visible:outline-brand-600",
            error
              ? "border-error-600 focus-visible:outline-error-600"
              : "border-ink-300 hover:border-ink-400 focus:border-brand-600",
            className,
          )}
          {...props}
        />

        {hint && !error && (
          <p id={hintId} className="mt-1 text-xs text-ink-500">
            {hint}
          </p>
        )}

        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-error-600"
          >
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
