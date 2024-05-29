"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useTranslations } from "next-intl";

export function InfiniteMovingCard() {
  const t = useTranslations("comments");

  const testimonials = [
    {
      quote: t("commentOne.quote"),
      name: t("commentOne.author"),
      title: t("commentOne.title"),
    },
    {
      quote: t("commentTwo.quote"),
      name: t("commentTwo.author"),
      title: t("commentTwo.title"),
    },
    {
      quote: t("commentThree.quote"),
      name: t("commentThree.author"),
      title: t("commentThree.title"),
    },
    {
      quote: t("commentFour.quote"),
      name: t("commentFour.author"),
      title: t("commentFour.title"),
    },
    {
      quote: t("commentFive.quote"),
      name: t("commentFive.author"),
      title: t("commentFive.title"),
    },
  ];

  if (testimonials[0].quote === "" || testimonials[0].quote === undefined)
    return null;

  return (
    <div className="py-32 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
