import { CardHoverEffect } from "@/components/Home/CardHoverEffect";
import { HeroParallaxDemo } from "@/components/Home/HeroParallax";
import { InfiniteMovingCard } from "@/components/Home/InfiniteMovingCard";

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <CardHoverEffect />
      <InfiniteMovingCard />
    </>
  );
}
