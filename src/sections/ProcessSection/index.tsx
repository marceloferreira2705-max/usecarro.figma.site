import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";

export const ProcessSection = () => {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,oklch(0.985_0.002_247.839)_0%,rgb(255,255,255)_100%)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-16">
          <h2 className="text-3xl box-border caret-transparent leading-9 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4 md:text-4xl md:leading-10">
            Como funciona
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mx-auto">
            Processo simples e transparente em apenas 3 passos
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-8 md:gap-x-12 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-12">
          <ProcessStep
            stepNumber="1"
            iconUrl="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-12.svg"
            title="Escolha o plano"
            description="Nossa IA analisa seu perfil e sugere a melhor opção para você"
            showTopLine={true}
          />
          <ProcessStep
            stepNumber="2"
            iconUrl="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-13.svg"
            title="Assine online"
            description="Processo 100% digital, sem burocracia e documentos físicos"
            showTopLine={true}
          />
          <ProcessStep
            stepNumber="3"
            iconUrl="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-14.svg"
            title="Receba o carro"
            description="Seu veículo é entregue onde você estiver, pronto para usar"
          />
        </div>
      </div>
    </section>
  );
};
