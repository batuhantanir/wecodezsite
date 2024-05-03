import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

function Button({
  type = "button",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
