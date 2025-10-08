export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-8">
        <h1 className="text-4xl font-black box-border caret-transparent leading-[45px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6 md:text-6xl md:leading-[75px]">
          Qual é a melhor forma de ter o seu
          <span className="text-green-600 text-4xl box-border caret-transparent leading-[45px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] md:text-6xl md:leading-[75px]">
            carro
          </span>
          ?
        </h1>
        <p className="text-[oklab(0.30707_-0.00555673_-0.0662257_/_0.7)] text-lg box-border caret-transparent leading-[29.25px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] md:text-xl md:leading-[32.5px]">
          Nossa IA ajuda você a decidir entre assinatura, consórcio ou
          financiamento — sem burocracia.
        </p>
      </div>
      <a
        href="/veiculos"
        className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
      >
        <button className="text-white text-lg font-semibold items-center bg-transparent bg-[linear-gradient(to_right_in_oklab,rgb(53,168,82)_0%,rgb(42,147,215)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-nowrap px-8 py-4 rounded-2xl">
          Descubra agora
        </button>
      </a>
    </div>
  );
};
