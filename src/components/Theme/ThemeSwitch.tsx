"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TbSun, TbMoon } from "react-icons/tb";

function ThemeSwitch({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    if (resolvedTheme == "light") {
      setTheme("dark");
    } else if (resolvedTheme == "dark") {
      setTheme("light");
    }
  };

  if (!mounted) return null;

  return (
    <button className={className} onClick={changeTheme} name="theme switch">
      {resolvedTheme === "dark" ? (
        <TbMoon size={20} className="active:scale-95" />
      ) : (
        <TbSun size={20} className="active:scale-95" />
      )}
    </button>
  );
}
export default ThemeSwitch;
