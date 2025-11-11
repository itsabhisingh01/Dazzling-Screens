import * as React from "react";
import { cn } from "@/lib/utils/cn";

// ✅ Card wrapper
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-white shadow-sm transition-all hover:shadow-md duration-300 ease-in-out",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

// ✅ Card Header (used for titles, headings)
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-4 border-b border-gray-200 flex flex-col gap-1.5", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// ✅ Card Title (used inside header)
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(" text-gray-500 text-sm font-semibold tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// ✅ Card Content (main section)
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(" text-gray-700 m-3 mt-0 cp-4 flex flex-col gap-2", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";
