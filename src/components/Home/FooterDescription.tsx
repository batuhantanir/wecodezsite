import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

function FooterDescription() {
  return (
    <div className=" md:mx-auto border-t border-neutral-600 px-4 lg:px-20 bg-neutral-950">
      <div className="flex justify-between container mx-auto py-8">
        <p className="text-neutral-300  text-sm md:text-base font-sans font-medium z-10">
          © 2024 We Codez. All rights reserved.
        </p>
        <div className="flex gap-5 z-10">
          <Link href="https://wa.me/+905462737734">
            <span className="sr-only">whatsapp</span>
            <FaWhatsapp
              name="whatsapp"
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/we-codez/">
            <span className="sr-only">linkedin</span>
            <FaLinkedin
              name="linkedin"
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
          <Link href="https://www.instagram.com/wecodez/">
            <span className="sr-only">instagram</span>
            <FaInstagram
              name="instagram"
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
