export const ChatInterface = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] overflow-hidden rounded-2xl h-full">
      <div className="text-white bg-[linear-gradient(to_right_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] p-6">
        <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <span className="relative box-border caret-transparent flex shrink-0 h-12 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-12 overflow-hidden mr-4 rounded-[3.35544e+07px] border-2 border-solid border-white">
            <span className="text-green-600 items-center bg-white box-border caret-transparent flex h-full justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full rounded-[3.35544e+07px]">
              <img
                src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-6"
              />
            </span>
          </span>
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <h3 className="text-xl font-medium box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Clara - IA Assistente
            </h3>
            <p className="text-sm box-border caret-transparent leading-5 opacity-90 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Especialista em soluções automotivas
            </p>
          </div>
        </div>
      </div>
      
      {/* Chatbase Iframe */}
      <div className="h-[700px] w-full">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/Ey1TW94MhZcS3j_kJfNd7"
          width="100%"
          height="100%"
          frameBorder="0"
          className="w-full h-full"
          title="Clara - IA Assistente"
        />
      </div>
    </div>
  );
};
