import { CardHoverEffect } from "@/components/Home/CardHoverEffect";
import { HeroParallaxDemo } from "@/components/Home/HeroParallax";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <CardHoverEffect />
    </>
  );
}
