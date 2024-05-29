"use client";
import React, { useEffect, useState } from "react";
import { Tooltip } from "./component/ToolTip";
import Skeleton from "./component/AboutSkeleton";
import { IoMdMailOpen } from "react-icons/io";
import { FaWhatsapp, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import AboutAnimation from "./component/AboutAnimation";
import { useTranslations } from "next-intl";

function About() {
  const [loading, setLoading] = useState(true);
  const t = useTranslations("about");

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className=" pt-40 md:pt-44 max-w-7xl mx-auto mb-20">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 px-5 md:px-0 text-neutral-700 dark:text-zinc-200">
            <div className=" md:w-3/5">
              <AboutAnimation>
                <div className="space-y-3">
                  <h2 className="font-medium dark:text-neutral-400  text-zinc-800 text-xl">
                    {t("sectionOne.title")}
                  </h2>
                  <p className="ml-2">{t("sectionOne.description")}</p>
                </div>
              </AboutAnimation>
              <AboutAnimation>
                <div className="space-y-3">
                  <h2 className="font-medium text-xl dark:text-neutral-400  text-zinc-800 pt-10">
                    {t("sectionTwo.title")}
                  </h2>
                  <p className="ml-2">{t("sectionTwo.description")}</p>
                </div>
              </AboutAnimation>
              <AboutAnimation>
                <div className="space-y-3">
                  <h2 className="font-medium text-xl dark:text-neutral-400  text-zinc-800 pt-10">
                    {t("sectionThree.title")}
                  </h2>
                  <p className="ml-2">{t("sectionThree.description")}</p>
                </div>
              </AboutAnimation>
              <AboutAnimation>
                <div className="space-y-4">
                  <h2 className="font-medium text-xl dark:text-neutral-400  text-zinc-800 pt-10">
                    {t("sectionFour.title")}

                  </h2>
                  <div className="ml-2 flex flex-col md:flex-row gap-4 md:gap-14">
                    <div className="flex flex-col gap-4">
                      <Link
                        href="tel:+905362621566"
                        className="flex gap-5 items-center"
                      >
                        <FaPhoneAlt className="text-orange-400" />
                        <span>+905362621566</span>
                      </Link>
                      <Link
                        href="https://wa.me/+905362621566"
                        className="flex gap-4 items-center"
                      >
                        <FaWhatsapp size={20} className="text-green-500" />
                        <span>+905462737734</span>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Link
                        href="mailto:batuhan.tanir00@gmail.com"
                        className="flex gap-4 items-center"
                      >
                        <IoMdMailOpen size={20} className="text-zinc-600" />
                        <span>batuhan.tanir00@gmail.com</span>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/102354830/admin/feed/posts/"
                        className="flex gap-4 items-center"
                      >
                        <FaLinkedin size={20} className="text-[#0762C8]" />
                        <span>We Codez</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </AboutAnimation>
            </div>
            <div className="md:pt-10 md:w-2/5 flex flex-col gap-20 items-center">
              <Tooltip />
              <img
                className="hidden md:block w-[500px] h-[500px]
                object-cover rounded-lg  drop-shadow-xl dark:shadow-white"
                src="/about.png"
                alt="about image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
