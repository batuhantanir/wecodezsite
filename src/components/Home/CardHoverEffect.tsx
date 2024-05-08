"use client";
import { useLanguage } from "../lang/LanguageContext";
import { HoverEffect } from "../ui/card-hover-effect";
import { TbWorldCode, TbDeviceMobileCode, TbShieldCode } from "react-icons/tb";

export function CardHoverEffect() {
  const { intl } = useLanguage();
  const projects = [
    {
      title: intl.cardTitleOne,
      description: intl.cardDescriptionOne,
      icon: TbWorldCode,
    },
    {
      title: intl.cardTitleTwo,
      description: intl.cardDescriptionTwo,
      icon: TbDeviceMobileCode,
    },
    {
      title: intl.cardTitleThree,
      description: intl.cardDescriptionThree,
      icon: TbShieldCode,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-8 pt-32">
      <HoverEffect items={projects} />
    </div>
  );
}
