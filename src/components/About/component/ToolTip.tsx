"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Emir Yaşa",
    designation: "Full Stack Developer",
    image: "/EmirPP.png",
  },
  {
    id: 2,
    name: "Batuhan Tanır",
    designation: "Full Stack Developer",
    image: "/BatuhanPP.png",
  },
  {
    id: 3,
    name: "Emrullah Yıldırım",
    designation: "Full Stack Developer & UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
