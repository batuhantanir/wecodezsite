"use client";
import React, { useEffect, useState } from "react";
import Hambuger from "./ui/Hambuger";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/utils/useMediaQuery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./Theme/ThemeSwitch";
import { useLocale, useTranslations } from "next-intl";

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(769);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();

  const navItems = [
    {
      title: t("home"),
      href: `/${locale}`,
    },
    {
      title: t("about"),
      href: `/${locale}/about`,
    },
    {
      title: t("contact"),
      href: `/${locale}/contact`,
    },
  ];

  const container = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
        type: "tween",
        stiffness: 300,
      },
      display: "flex",
    },
    closed: {
      opacity: 0,
      x: "100%",
      display: "none",
    },
  };

  const child = {
    open: {
      opacity: 1,
    },
    closed: { opacity: 0 },
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "absolute top-0 md:left-1/2 md:-translate-x-1/2 w-full bg-transparent py-5   overflow-x-hidden h-fit md:h-fit md:max-w-7xl transition-colors duration-300 z-40",
          isOpen && isMobile && " bg-neutral-100 dark:bg-neutral-950"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="max-w-7xl w-full bg-transparent px-8 md:px-4 py-5 flex justify-between items-center ">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              className="hover:cursor-pointer"
            >
              <img className="w-28 h-18" src="/we.svg" alt="Logo" />
            </motion.a>
            {!isMobile ? (
              <motion.nav
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center gap-4 text-slate-950 dark:text-white"
              >
                {navItems.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className={cn(
                      " text-xl ml-4 font-semibold transition-all duration-300",
                      pathname == item.href && "opacity-[.80] "
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="ml-5 flex gap-4 w-fit">
                  {/* <LangSwitch /> */}
                  <ThemeSwitch />
                </div>
              </motion.nav>
            ) : (
              <>
                <Hambuger isOpen={isOpen} setIsOpen={setIsOpen} />
              </>
            )}
          </div>
        </div>
        {isMobile && (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.2, staggerChildren: 0.15 }}
                className=" shadow-4xl px-5 pt-5 bg-transparent "
              >
                <nav className="grid gap-2">
                  {navItems.map((item, index) => {
                    return (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: pathname !== item.href ? 0.7 : 1,
                        }}
                        whileHover={{ scale: 1.05, opacity: 1 }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                          transition: {
                            when: "afterChildren",
                          },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + index / 10,
                        }}
                        key={index}
                        className={cn(
                          "w-full p-[0.08rem] rounded-xl bg-gradient-to-tr dark:from-neutral-800 dark:via-neutral-950 dark:to-neutral-700 from-neutral-200 via-neutral-50 to-neutral-300"
                        )}
                      >
                        <Link
                          onClick={() => setIsOpen((prev) => !prev)}
                          className={cn(
                            "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-200 dark:bg-neutral-950 font-medium text-neutral-950 dark:text-white",
                            pathname !== item.href &&
                              "opacity-[.80] hover:opacity-100 transition-opacity duration-300"
                          )}
                          href={item.href}
                        >
                          <span className="flex gap-1 text-lg">
                            {item.title}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      transition: {
                        when: "afterChildren",
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + navItems.length / 10,
                    }}
                    className="ml-5 flex gap-4 w-fit"
                  >
                    {/* <LangSwitch /> */}
                    <ThemeSwitch />
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      {isMobile && isOpen && (
        <AnimatePresence>
          <motion.div
            onClick={() => {
              setIsOpen(false);
            }}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{
              opacity: 0,
              y: "100%",
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.2,
            }}
            className="absolute top-0 left-0 min-h-full w-full bg-black z-30"
          ></motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default HeaderNav;
