"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useLanguage } from "../lang/LanguageContext";

export function InfiniteMovingCard() {
  const { intl } = useLanguage();
  const testimonials = [
    {
      quote: intl.commentOneQuote,
      name: intl.commentOneAuthor,
      title: intl.commentOneTitle,
    },
    {
      quote: intl.commentTwoQuote,
      name: intl.commentTwoAuthor,
      title: intl.commentTwoTitle,
    },
    {
      quote: intl.commentThreeQuote,
      name: intl.commentThreeAuthor,
      title: intl.commentThreeTitle,
    },
    {
      quote: intl.commentFourQuote,
      name: intl.commentFourAuthor,
      title: intl.commentFourTitle,
    },
    {
      quote: intl.commentFiveQuote,
      name: intl.commentFiveAuthor,
      title: intl.commentFiveTitle,
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
