import { AboutHeader } from "@/sections/AboutSection/components/AboutHeader";
import { AboutImage } from "@/sections/AboutSection/components/AboutImage";
import { FeatureGrid } from "@/sections/AboutSection/components/FeatureGrid";

export const AboutSection = () => {
  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-16">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center">
          <AboutHeader />
          <AboutImage />
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
};
