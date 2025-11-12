export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-8 pt-12 border-t border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] md:grid-cols-[repeat(5,minmax(0px,1fr))]">
      <div className="box-border caret-transparent col-end-auto col-start-auto outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] md:col-end-[span_2] md:col-start-[span_2]">
        <div className="items-center box-border caret-transparent gap-x-3 flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-3 mb-4">
          <img
            src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/6acf225b678e2ac6faff243270c8d2c0abf86127.png"
            alt="Use Carro"
            className="box-border caret-transparent brightness-100 contrast-100 h-20 max-w-full object-contain outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
          />
          <div className="box-border caret-transparent flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <h3 className="text-xl font-black box-border caret-transparent tracking-[-0.5px] leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              <span className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
                Use
              </span>
              <span className="text-green-600 box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
                Carro
              </span>
            </h3>
          </div>
        </div>
        <p className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent leading-[26px] max-w-md outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
          A maneira mais inteligente de ter seu carro. Nossa IA ajuda você a
          escolher a melhor modalidade para seu perfil.
        </p>
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-26.svg"
              alt="Icon"
              className="text-green-600 box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4 mr-3"
            />
            <span className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent block outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              (12) 99109-5018
            </span>
          </div>
          <div className="items-start box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-27.svg"
              alt="Icon"
              className="text-green-600 box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4 mr-3 mt-1"
            />
            <span className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent block outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Av. Nove de Julho, nº 95 - Sala 21
              <br className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]" />
              Vila Adyana, São José dos Campos - SP
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-28.svg"
              alt="Icon"
              className="text-green-600 box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4 mr-3"
            />
            <span className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent block outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              vendas@usecarro.com.br
            </span>
          </div>
        </div>
        <div className="box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mt-6">
          <button
            onClick={() => window.location.href = "/contato"}
            className="items-center bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.5)] box-border caret-transparent flex h-8 justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-8 mr-4 rounded-[10px] hover:bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.7)] transition-colors cursor-pointer"
          >
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-29.svg"
              alt="Facebook"
              className="box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4"
            />
          </button>
          <button
            onClick={() => window.location.href = "/contato"}
            className="items-center bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.5)] box-border caret-transparent flex h-8 justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-8 mr-4 rounded-[10px] hover:bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.7)] transition-colors cursor-pointer"
          >
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-30.svg"
              alt="Instagram"
              className="box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4"
            />
          </button>
          <button
            onClick={() => window.location.href = "/contato"}
            className="items-center bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.5)] box-border caret-transparent flex h-8 justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-8 mr-4 rounded-[10px] hover:bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.7)] transition-colors cursor-pointer"
          >
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-31.svg"
              alt="Twitter"
              className="box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4"
            />
          </button>
          <button
            onClick={() => window.location.href = "/contato"}
            className="items-center bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.5)] box-border caret-transparent flex h-8 justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-8 rounded-[10px] hover:bg-[oklab(0.30707_-0.00555673_-0.0662257_/_0.7)] transition-colors cursor-pointer"
          >
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-32.svg"
              alt="LinkedIn"
              className="box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4"
            />
          </button>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
        <h3 className="text-lg box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
          Produtos
        </h3>
        <ul className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent list-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pl-0">
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/assinatura"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Assinatura
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/consorcio"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Consórcio
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/financiamento"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Financiamento
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/veiculos"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Veículos
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <button
              onClick={() => window.location.href = "/assinatura"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Seguros
            </button>
          </li>
        </ul>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
        <h3 className="text-lg box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
          Empresa
        </h3>
        <ul className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent list-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pl-0">
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/sobre"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Sobre nós
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/contato"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Contato
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/sobre"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Carreiras
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/contato"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Imprensa
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <button
              onClick={() => window.location.href = "/contato"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Blog
            </button>
          </li>
        </ul>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
        <h3 className="text-lg box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
          Legal
        </h3>
        <ul className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent list-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pl-0">
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/termos"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Termos de Uso
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/privacidade"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Política de Privacidade
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/lgpd"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              LGPD
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
            <button
              onClick={() => window.location.href = "/cookies"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Cookies
            </button>
          </li>
          <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <button
              onClick={() => window.location.href = "/ouvidoria"}
              className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
            >
              Ouvidoria
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
