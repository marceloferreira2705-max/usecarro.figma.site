import { useState } from "react";
import { BenefitTabs } from "@/sections/BenefitsSection/components/BenefitTabs";
import { BenefitGrid } from "@/sections/BenefitsSection/components/BenefitGrid";

export const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState("Assinatura");

  return (
    <section className="bg-[linear-gradient(to_right_bottom,oklch(0.985_0.002_247.839)_0%,rgb(255,255,255)_100%)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-16">
          <h2 className="text-3xl box-border caret-transparent leading-9 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4 md:text-4xl md:leading-10">
            Benefícios de cada modalidade
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mx-auto">
            Descubra as vantagens únicas de cada forma de ter seu veículo
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-2 flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 w-full">
          <BenefitTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div
            role="tabpanel"
            className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
          >
            <BenefitGrid activeTab={activeTab} />
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mt-12">
          <div className="items-center bg-[linear-gradient(to_right,oklab(0.546_-0.030363_-0.243111_/_0.1)_0%,oklab(0.605781_-0.143492_0.0811708_/_0.1)_100%)] box-border caret-transparent inline-flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] px-8 py-4 rounded-2xl">
            <span className="text-2xl box-border caret-transparent block leading-8 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mr-3">
              ⭐
            </span>
            <span className="text-[oklch(0.373_0.034_259.733)] text-lg box-border caret-transparent block leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Mais de{" "}
              <strong className="font-bold box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
                20.000 clientes
              </strong>
              satisfeitos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
