"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
