import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ChatSection } from "@/sections/ChatSection";
import { OptionsSection } from "@/sections/OptionsSection";
import { VehiclesSection } from "@/sections/VehiclesSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { FAQSection } from "@/sections/FAQSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const App = () => {
  return (
    <body className="text-blue-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-left indent-[0px] normal-case visible border-separate font-montserrat">
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <div className="relative box-border caret-transparent basis-0 grow shrink-0 min-h-px min-w-px outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full">
              <div className="bg-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
                <Header />
                <HeroSection />
                <OptionsSection />
                <BenefitsSection />
                <VehiclesSection />
                <ChatSection />
                <PartnersSection />
                <FAQSection />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
