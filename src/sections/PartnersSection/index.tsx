import { StatsGrid } from "@/sections/PartnersSection/components/StatsGrid";
import { PartnerGrid } from "@/sections/PartnersSection/components/PartnerGrid";

export const PartnersSection = () => {
  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-16">
          <h2 className="text-3xl box-border caret-transparent leading-9 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4 md:text-4xl md:leading-10">
            Nossos parceiros
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mx-auto">
            Trabalhamos com as melhores seguradoras e locadoras do mercado
          </p>
        </div>
        <StatsGrid />
        <PartnerGrid />
      </div>
    </section>
  );
};
