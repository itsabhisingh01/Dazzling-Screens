import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";

    const variantStyles = {
      default:
        "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",
      outline:
        "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
      secondary:
        "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
      ghost:
        "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
      danger:
        "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          isLoading && "opacity-70 cursor-not-allowed",
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
