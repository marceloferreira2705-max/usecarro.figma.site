import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="bg-[linear-gradient(to_right_bottom_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <div className="box-border caret-transparent max-w-2xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mx-auto">
          <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 overflow-hidden rounded-2xl">
            <div className="items-start bg-white box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-center p-8">
              <h4 className="text-[oklch(0.21_0.034_264.665)] text-2xl box-border caret-transparent leading-8 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2 md:text-3xl md:leading-9">
                Receba sua proposta personalizada
              </h4>
              <p className="text-[oklch(0.446_0.03_256.802)] text-lg box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
                Nossa IA Clara vai analisar seu perfil e enviar as melhores
                opções
              </p>
            </div>
            <div className="bg-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pt-8 pb-6 px-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
