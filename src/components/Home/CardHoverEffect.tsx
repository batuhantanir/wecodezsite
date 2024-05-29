"use client";
import { useTranslations } from "next-intl";
import { HoverEffect } from "../ui/card-hover-effect";
import { TbWorldCode, TbDeviceMobileCode, TbShieldCode } from "react-icons/tb";

export function CardHoverEffect() {
  const t = useTranslations("card");

  const projects = [
    {
      title: t("cardOne.title"),
      description: t("cardOne.description"),
      icon: TbWorldCode,
    },
    {
      title: t("cardTwo.title"),
      description: t("cardTwo.description"),
      icon: TbDeviceMobileCode,
    },
    {
      title: t("cardThree.title"),
      description: t("cardThree.description"),
      icon: TbShieldCode,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-8 pt-32">
      <HoverEffect items={projects} />
    </div>
  );
}
