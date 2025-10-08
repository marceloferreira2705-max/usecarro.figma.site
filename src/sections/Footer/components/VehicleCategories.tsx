export const VehicleCategories = () => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-16">
      <h2 className="text-green-600 text-2xl font-bold box-border caret-transparent leading-8 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center mb-12">
        Nossos Veículos
      </h2>
      <div className="box-border caret-transparent gap-x-12 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-12 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <h3 className="text-green-600 text-xl font-bold box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
            Assinatura
          </h3>
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                Fiat:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <button
                  onClick={() => window.location.href = "/veiculo/1"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Mobi 1.0,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/2"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Argo 1.0,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/5"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Argo 1.0,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/7"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Strada Endurance,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/9"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Pulse Drive,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/11"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Argo Drive,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/17"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Pulse Audace,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/18"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Fiorino Endurance,
                </button>
                <button
                  onClick={() => window.location.href = "/veiculo/22"}
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] cursor-pointer hover:text-green-600"
                >
                  Fastback Audace
                </button>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                Volkswagen:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <a
                  href="/veiculo/4"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Polo Track,
                </a>
                <a
                  href="/veiculo/10"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Polo Sense,
                </a>
                <a
                  href="/veiculo/12"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Polo Highline,
                </a>
                <a
                  href="/veiculo/14"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Tera Comfort,
                </a>
                <a
                  href="/veiculo/15"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Tera High,
                </a>
                <a
                  href="/veiculo/19"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  T-Cross TSI,
                </a>
                <a
                  href="/veiculo/23"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Virtus Comfortline,
                </a>
                <a
                  href="/veiculo/24"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Nivus Highline,
                </a>
                <a
                  href="/veiculo/25"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  T-Cross Comfortline,
                </a>
                <a
                  href="/veiculo/30"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  T-Cross Highline
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                Chevrolet:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <a
                  href="/veiculo/6"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Onix Plus,
                </a>
                <a
                  href="/veiculo/16"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Tracker 1.0,
                </a>
                <a
                  href="/veiculo/26"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Tracker LT
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                Hyundai:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <a
                  href="/veiculo/3"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  HB20 1.0,
                </a>
                <a
                  href="/veiculo/8"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  HB20 1.0,
                </a>
                <a
                  href="/veiculo/20"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Creta 1.0,
                </a>
                <a
                  href="/veiculo/27"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Creta Limited
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                Jeep:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <a
                  href="/veiculo/28"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Renegade Longitude,
                </a>
                <a
                  href="/veiculo/31"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Compass Long.
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                Nissan:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <a
                  href="/veiculo/29"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Kicks Sense
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                RAM:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <a
                  href="/veiculo/32"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Rampage Big
                </a>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              <h4 className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
                Citroen:
              </h4>
              <div className="box-border caret-transparent gap-x-2 flex flex-wrap outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2">
                <a
                  href="/veiculo/13"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Basalt Feel,
                </a>
                <a
                  href="/veiculo/21"
                  className="text-[oklch(0.707_0.022_261.325)] text-sm box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
                >
                  Basalt Shine
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <h3 className="text-green-600 text-xl font-bold box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
            Financiamento
          </h3>
          <p className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
            Os mais procurados:
          </p>
          <ul className="box-border caret-transparent list-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pl-0">
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/financiamento"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                Toyota Corolla
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/financiamento"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                Corolla Cross
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/financiamento"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                Hyundai Tucson
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/financiamento"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                Volkswagen Jetta
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              <a
                href="/financiamento"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                Jeep Commander
              </a>
            </li>
          </ul>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <h3 className="text-green-600 text-xl font-bold box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
            Consórcio
          </h3>
          <p className="text-[oklch(0.872_0.01_258.338)] font-medium box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-4">
            As melhores opções:
          </p>
          <ul className="box-border caret-transparent list-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pl-0">
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/consorcio"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                BYD Dolphin
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/consorcio"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                GWM Haval H6
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/consorcio"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                BMW 320i
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
              <a
                href="/consorcio"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                Toyota Hilux
              </a>
            </li>
            <li className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              <a
                href="/consorcio"
                className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
              >
                Chevrolet S10
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
