"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Emir Yaşa",
    designation: "Software Developer",
    image: "/EmirPP.png",
  },
  {
    id: 2,
    name: "Batuhan Tanır",
    designation: "Software Developer",
    image: "/BatuhanPP.png",
  },
  {
    id: 3,
    name: "Doğan altın",
    designation: "Software Developer",
    image:
      "/DoganPP.png",
  },
];

export function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
