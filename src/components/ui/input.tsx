import * as React from "react";

import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-md border border-custom-gray-200 bg-transparent px-3 py-2 text-sm font-semibold text-custom-gray-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/75 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-custom-gray-600 dark:bg-custom-gray-600 dark:text-custom-gray-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
