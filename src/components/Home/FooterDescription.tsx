import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

function FooterDescription() {
  return (
    <div className="py-8 md:mx-auto border-t border-neutral-600 px-4 lg:px-20 bg-black">
      <div className="flex justify-between container mx-auto">
        <p className="text-neutral-800 dark:text-neutral-300 text-sm md:text-base font-sans font-medium">
          © 2024 We Codez. All rights reserved.
        </p>
        <div className="space-x-5 flex">
          <Link href="https://github.com/emiryasa">
            <FaWhatsapp
              className="text-neutral-800 dark:text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/emir-yasa/">
            <FaLinkedin
              className="text-neutral-800 dark:text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
          <Link href="https://www.instagram.com/bzarreuproar/">
            <FaInstagram
              className="text-neutral-800 dark:text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterDescription;
