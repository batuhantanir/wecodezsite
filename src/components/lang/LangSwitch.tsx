"use client";
import React from "react";
import { Language, useLanguage } from "./LanguageContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function LangSwitch() {
  const { handleSwitcherClick, lang } = useLanguage();

  return (
    <Select
      value={lang}
      onValueChange={(value: any) => {
        handleSwitcherClick(value as Language);
      }}
    >
      <SelectTrigger className="absolute top-100 right-50 w-fit z-[999]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="tr">TR</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LangSwitch;
