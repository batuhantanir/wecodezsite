"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { useLanguage } from "./lang/LanguageContext";

export function Footer() {
  const { intl } = useLanguage();
  return (
    <footer className="h-[25rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {intl.footerTitle}
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {intl.footerDescription}
        </p>
        <input
          type="text"
          placeholder="info@wecodez.com"
          className="rounded-lg border border-neutral-800 text-white ring-0 outline-none  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-2 b"
        />
      </div>
      <BackgroundBeams />
    </footer>
  );
}
