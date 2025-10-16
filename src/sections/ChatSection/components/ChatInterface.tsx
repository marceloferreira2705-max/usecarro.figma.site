export const ChatInterface = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] overflow-hidden rounded-2xl h-full">
      <div className="text-white bg-[linear-gradient(to_right_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] p-4">
        <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <span className="relative box-border caret-transparent flex shrink-0 h-10 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-10 overflow-hidden mr-3 rounded-[3.35544e+07px] border-2 border-solid border-white">
            <span className="text-green-600 items-center bg-white box-border caret-transparent flex h-full justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full rounded-[3.35544e+07px]">
              <img
                src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent h-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-5"
              />
            </span>
          </span>
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <h3 className="text-lg font-medium box-border caret-transparent leading-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Clara - IA Assistente
            </h3>
            <p className="text-xs box-border caret-transparent leading-4 opacity-90 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Especialista em soluções automotivas
            </p>
          </div>
        </div>
      </div>
      
      {/* Chatbase Iframe */}
      {/* Removido min-height do div pai, deixado height:100% e max-height para controle */}
      <div className="w-full h-full" style={{ maxHeight: '550px' }}> {/* Altura máxima para o card da IA */}
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/5fRwrAroJGoXqpBWFMTyB"
          width="100%"
          style={{ height: '100%', minHeight: '100%' }} // Iframe ocupa 100% do pai, com scroll interno se necessário
          frameBorder="0"
          title="Clara - IA Assistente"
        ></iframe>
      </div>
    </div>
  );
};
