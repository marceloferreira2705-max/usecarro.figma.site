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
                
                {/* Black Friday Banner */}
                <section className="py-8 bg-gradient-to-r from-purple-900 via-pink-600 to-orange-500">
                  <div className="max-w-screen-xl mx-auto px-6 md:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black px-4 py-1 rounded-full mb-3 animate-pulse">
                          <span className="text-xl">🔥</span>
                          <span className="text-xs uppercase">Oferta Limitada</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-2">BLACK FRIDAY USECARRO</h2>
                        <p className="text-lg md:text-xl text-white/90">Condições especiais em veículos selecionados!</p>
                      </div>
                      <button
                        onClick={() => window.location.href = "/blackfriday"}
                        className="bg-yellow-400 text-black font-black px-8 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-yellow-400/50 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
                      >
                        Ver Ofertas Black Friday 🚗
                      </button>
                    </div>
                  </div>
                </section>

                <VehiclesSection />
                <OptionsSection />
                <BenefitsSection />
                <div id="ia-clara-section">
                  <ChatSection />
                </div>
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
