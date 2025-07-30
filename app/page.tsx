import HeroImagesGrid from "@/components/hero-images-grid";
import { HeroParallaxDemo } from "@/components/hero-parallax";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";
import { Waitlist } from "@clerk/nextjs";

export default function Home() {
  const words = ["Modern", "Luxurious", "Affordable", "Stylish"];

  return (
    <>
      <HeroParallaxDemo />
    </>
  );
}
