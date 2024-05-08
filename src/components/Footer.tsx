"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { useLanguage } from "./lang/LanguageContext";
import { FaPaperPlane } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import FooterDescription from "./Home/FooterDescription";
import { footerData } from "../utils/data/footerData";

export function Footer() {
  const { intl } = useLanguage();
  const groups = footerData.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} href={link.link} className="hover:underline">
        {link.label}
      </Link>
    ));

    return (
      <div className="flex flex-col gap-1.5" key={group.title}>
        <div className="mb-2 text-lg sm:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          {group.title}
        </div>
        {links}
      </div>
    );
  });

  return (
    <footer className="">
      <div className="w-full bg-neutral-950 relative py-20 md:py-16 md:flex items-center antialiased ">
        <div className="w-full flex flex-col lg:flex-row items-start gap-10 justify-between container mx-auto">
          <div className="max-w-lg p-4 ">
            <h1 className="relative z-10 text-sm md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
              {intl.footerTitle}
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm relative z-10">
              {intl.footerDescription}
            </p>
            <div className="flex gap-2 ">
              <input
                type="text"
                placeholder="info@wecodez.com"
                className="rounded-lg hover:border-neutral-600 border border-neutral-800 text-white ring-0 outline-none w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700 transition-colors duration-200 p-2"
              />
              <button className="px-3 rounded-lg bg-gradient-to-b from-neutral-600 to-neutral-400 flex w-fit z-10 cursor-pointer items-center justify-center">
                <FaPaperPlane />
              </button>
            </div>
          </div>
          <div className="inline-flex z-10 text-neutral-600 flex-col sm:flex-row gap-5 justify-between p-4 pr-20 sm:gap-10 lg:gap-20 md:justify-end lg:flex-nowrap ">
            {groups}
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <FooterDescription />
    </footer>
  );
}
