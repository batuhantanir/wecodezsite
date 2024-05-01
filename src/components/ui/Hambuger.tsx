import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface HambugerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  spanClass?: string;
}

function Hambuger({
  isOpen,
  setIsOpen,
  className,
  spanClass = "bg-black dark:bg-white",
  ...props
}: HambugerProps) {
  return (
    <button
      className={cn(
        "md:hidden cursor-pointer  active:scale-90 transition-all duration-300 z-20  flex flex-col justify-center items-center gap-1 w-10 h-10 rounded-md",
        className
      )}
      type="button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      {...props}
    >
      <motion.span
        className={cn(" block w-6 h-0.5", spanClass)}
        initial={{ rotate: 0 }}
        animate={{
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? 7.5 : 0,
          height: isOpen ? 2.5 : 2,
        }}
      ></motion.span>
      <motion.span
        className={cn(" block w-6 h-0.5", spanClass)}
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 20 : 0 }}
      ></motion.span>
      <motion.span
        className={cn(" block w-6 h-0.5", spanClass)}
        initial={{ rotate: 0 }}
        animate={{
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? -4.5 : 0,
          height: isOpen ? 2.5 : 2,
        }}
      ></motion.span>
    </button>
  );
}

export default Hambuger;
