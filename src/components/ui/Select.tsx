import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      options,
      placeholder = "-- Pilih Opsi --",
      error,
      hint,
      required,
      className,
      ...props
    },
    ref,
  ) => {
    const selectId = id ?? label.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;

    return (
      <div className="w-full">
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-semibold text-ink-800"
        >
          {label}
          {required && (
            <span className="ml-1 text-error-600" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={!!error}
            aria-describedby={cn(error && errorId, hint && hintId) || undefined}
            className={cn(
              "w-full rounded-control border bg-white px-3.5 py-2.5 text-base text-ink-900 min-h-[44px] appearance-none pr-10 cursor-pointer",
              "transition-colors duration-150 focus-visible:outline-brand-600",
              error
                ? "border-error-600 focus-visible:outline-error-600"
                : "border-ink-300 hover:border-ink-400 focus:border-brand-600",
              className,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Chevron icon indicator */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-ink-500"
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

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

Select.displayName = "Select";
