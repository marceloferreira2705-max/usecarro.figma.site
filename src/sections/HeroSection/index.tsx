import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroImage } from "@/sections/HeroSection/components/HeroImage";

export const HeroSection = () => {
  return (
    <section className="items-center bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] box-border caret-transparent flex min-h-[600px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="items-center box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
