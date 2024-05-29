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
  spanClass,
  ...props
}: HambugerProps) {
  return (
    <motion.button
      className={cn(
        "md:hidden cursor-pointer  active:scale-90 transition-all duration-300 z-50  flex flex-col justify-center items-center gap-1 w-10 h-10 rounded-md",
        className
      )}
      type="button"
      name="hambuger menu button"
      aria-label="hambuger menu button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      {...props}
    >
      <motion.span
        className={cn(" block w-6 h-0.5 bg-black dark:bg-white", spanClass)}
        animate={{
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? 7.5 : 0,
          height: isOpen ? 2.5 : 2,
        }}
      ></motion.span>
      <motion.span
        className={cn(" block w-6 h-0.5 bg-black dark:bg-white", spanClass)}
        animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 20 : 0 }}
      ></motion.span>
      <motion.span
        className={cn(" block w-6 h-0.5 bg-black dark:bg-white", spanClass)}
        animate={{
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? -4.5 : 0,
          height: isOpen ? 2.5 : 2,
        }}
      ></motion.span>
    </motion.button>
  );
}

export default Hambuger;
