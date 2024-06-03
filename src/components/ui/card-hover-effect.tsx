"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const t = useTranslations("card");
  return (
    <>
      <h2 className="sr-only">{t("title")}</h2>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group  block p-3.5 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle Icon={item.icon}>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <Link
                href="/contact"
                className=" flex gap-2 flex-ce items-center border border-zinc-300 hover:bg-zinc-200 text-zinc-300 hover:text-black w-fit rounded-lg px-2 py-0.5 transition-colors duration-200 ease-in-out"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                  letterSpacing: "0.05em",
                }}
              >
                {t("button")} <FaArrowRight className="-rotate-45" />
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-950 text-white  border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4 flex flex-col h-full ">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
  Icon,
}: {
  className?: string;
  children: React.ReactNode;
  Icon?: React.ElementType;
}) => {
  return (
    <div className="flex items-center flex-nowrap gap-4 font-mono">
      {Icon ? (
        <Icon className="min-w-7 size-8" />
      ) : (
        <div className=" min-w-7 size-8"></div>
      )}
      <h3 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
        {children}
      </h3>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 mb-4    text-zinc-400 tracking-wide leading-relaxed text-sm flex-1",
        className
      )}
    >
      {children}
    </p>
  );
};
