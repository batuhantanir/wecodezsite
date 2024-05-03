"use client";
import React from "react";
import { Language, useLanguage } from "./LanguageContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IoLanguage } from "react-icons/io5";
function LangSwitch() {
  const { handleSwitcherClick, lang, intl } = useLanguage();

  return (
    <Popover>
      <PopoverTrigger className="hover:dark:bg-white/20 p-1.5 hover:dark:text-white rounded-md">
        <IoLanguage className="text-xl" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-start space-y-3 dark:bg-[#121212] outline-none w-fit border-none  dark:text-neutral-300 p-4 px-6">
        <button className="text-sm " onClick={() => handleSwitcherClick("en")}>
          {intl.languageOne}
        </button>
        <button className="text-sm" onClick={() => handleSwitcherClick("tr")}>
          {intl.languageTwo}
        </button>
      </PopoverContent>
    </Popover>
  );
}

export default LangSwitch;
