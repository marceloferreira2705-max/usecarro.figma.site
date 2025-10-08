export const ContactForm = () => {
  return (
    <form className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 mb-6 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[14px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 mb-2">
            Nome completo
          </label>
          <input
            placeholder="Seu nome"
            className="text-base bg-slate-50 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-start w-full border px-3 py-1 rounded-[14px] border-solid border-[oklch(0.928_0.006_264.531)] md:text-sm md:leading-5"
          />
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[14px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 mb-2">
            E-mail
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="text-base bg-slate-50 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-start w-full border px-3 py-1 rounded-[14px] border-solid border-[oklch(0.928_0.006_264.531)] md:text-sm md:leading-5"
          />
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 mb-6 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[14px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 mb-2">
            Telefone
          </label>
          <input
            placeholder="(11) 99999-9999"
            className="text-base bg-slate-50 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-start w-full border px-3 py-1 rounded-[14px] border-solid border-[oklch(0.928_0.006_264.531)] md:text-sm md:leading-5"
          />
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[14px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 mb-2">
            Interesse
          </label>
          <button
            type="button"
            role="combobox"
            className="text-slate-500 text-sm items-center bg-slate-50 caret-transparent gap-x-2 flex h-9 justify-between leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-nowrap w-full border mb-2 px-3 py-2 rounded-[14px] border-solid border-[oklch(0.928_0.006_264.531)]"
          >
            <span className="items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-nowrap overflow-hidden">
              Selecione uma opção
            </span>
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-25.svg"
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-4 opacity-50 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-nowrap w-4"
            />
          </button>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
        <label className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[14px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 mb-2">
          Carro de interesse (opcional)
        </label>
        <input
          placeholder="Ex: Honda Civic, Toyota Corolla, qualquer SUV..."
          className="text-base bg-slate-50 box-border caret-transparent flex h-9 leading-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-start w-full border px-3 py-1 rounded-[14px] border-solid border-[oklch(0.928_0.006_264.531)] md:text-sm md:leading-5"
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          alert("Formulário enviado! Entraremos em contato em breve.");
        }}
        className="text-white text-sm font-medium items-center bg-transparent bg-[linear-gradient(to_right_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] caret-transparent gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-nowrap w-full mb-6 px-6 py-4 rounded-[14px] hover:shadow-xl transition-shadow cursor-pointer"
      >
        Receber proposta
      </button>
      <p className="text-[oklch(0.551_0.027_264.364)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center">
        Ao enviar, você concorda com nossa política de privacidade
      </p>
    </form>
  );
};
