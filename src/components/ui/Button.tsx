import { forwardRef, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-semibold transition-colors duration-200 select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 min-h-[44px] min-w-[44px] rounded-control";

    const variantStyles = {
      primary:
        "bg-brand-600 text-cream-50 hover:bg-brand-700 active:bg-brand-800 shadow-sm focus-visible:outline-brand-600",
      secondary:
        "bg-brand-100 text-brand-900 hover:bg-brand-200 active:bg-brand-300 focus-visible:outline-brand-600",
      outline:
        "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 active:bg-brand-100 focus-visible:outline-brand-600",
      ghost:
        "text-brand-800 hover:bg-brand-50 active:bg-brand-100 focus-visible:outline-brand-600",
      gold:
        "bg-gold-500 text-brand-950 font-bold hover:bg-gold-400 active:bg-gold-600 shadow-sm focus-visible:outline-gold-600",
    };

    const sizeStyles = {
      sm: "px-3.5 py-2 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-7 py-3.5 text-lg",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
