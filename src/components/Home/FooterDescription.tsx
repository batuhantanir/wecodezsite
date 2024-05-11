import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

function FooterDescription() {
  return (
    <div className="py-8 md:mx-auto border-t border-neutral-600 px-4 lg:px-20 bg-neutral-950">
      <div className="flex justify-between container mx-auto">
        <p className="text-neutral-300  text-sm md:text-base font-sans font-medium z-10">
          © 2024 We Codez. All rights reserved.
        </p>
        <div className="space-x-5 flex z-10">
          <Link href="https://wa.me/+905462737734">
            <FaWhatsapp
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/we-codez/">
            <FaLinkedin
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
          <Link href="https://www.instagram.com/wecodez/">
            <FaInstagram
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterDescription;
