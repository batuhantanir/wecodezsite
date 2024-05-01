"use client";
import React, { use, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "@/utils/cn";
import { useMediaQuery } from "@/utils/useMediaQuery";
import Hambuger from "./Hambuger";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] md:h-[280vh] pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const container = {
    open: {
      opacity: 1,
      width: "100%",
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      width: 0,
    },
  };

  const child = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  console.log(isOpen);
  return (
    <>
      <div className="absolute top-0  z-10 w-full bg-transparent py-5 flex items-center justify-center ">
        <div className="max-w-7xl w-full bg-transparent px-4 py-5 flex justify-between items-center">
          <img className="w-28 " src="/we.svg" alt="Logo" />
          {isMobile ? (
            <motion.nav
              className={cn(
                "absolute order-3 md:order-2 flex flex-col items-center gap-4 top-0 right-0 bg-white text-slate-950 dark:bg-slate-950 dark:text-white h-[100dvh] w-full pt-24"
              )}
              variants={container}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              exit={{ opacity: 0 }}
            >
              {navItems.map((item) => (
                <motion.a
                  href={item.link}
                  key={item.title}
                  variants={child}
                  className=" text-xl ml-4 font-semibold transition-colors duration-300"
                >
                  {item.title}
                </motion.a>
              ))}
            </motion.nav>
          ) : (
            <nav className="hidden md:block">
              {navItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.title}
                  className="text-white text-lg md:text-xl ml-4 font-medium transition-colors duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
          <Hambuger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          The Ultimate <br /> development studio
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          We build beautiful products with the latest technologies and
          frameworks. We are a team of passionate developers and designers that
          love to build amazing products.
        </p>
      </div>
    </>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
