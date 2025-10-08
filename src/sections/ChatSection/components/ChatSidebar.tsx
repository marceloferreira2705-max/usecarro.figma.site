import { FAQList } from "@/sections/ChatSection/components/FAQList";

export const ChatSidebar = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-8 md:text-left">
        <h2 className="text-white text-3xl box-border caret-transparent leading-9 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-4 md:text-4xl md:leading-10 md:text-left">
          Converse com nossa IA Clara
        </h2>
        <p className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] text-lg box-border caret-transparent leading-[29.25px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center md:text-left">
          Nossa inteligência artificial está pronta para esclarecer suas dúvidas
          e te ajudar a tomar a melhor decisão sobre seu próximo carro.
        </p>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-8">
        <h3 className="text-white text-xl box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
          Perguntas frequentes:
        </h3>
        <FAQList question="Qual a diferença entre assinatura e financiamento?" />
        <FAQList question="Quanto custa para ter um carro na assinatura?" />
        <FAQList question="Como funciona o consórcio sem juros?" />
        <FAQList question="Quais documentos preciso para começar?" />
        <FAQList question="Posso trocar de carro durante o contrato?" />
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pt-6">
        <button 
          onClick={() => window.location.href = "/contato"}
          className="text-green-600 text-lg font-medium items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-nowrap px-8 py-4 rounded-2xl hover:shadow-xl transition-shadow cursor-pointer"
        >
          Começar conversa com Clara
        </button>
      </div>
    </div>
  );
};
