import { useState } from "react";

export type VehicleCardProps = {
  vehicleIcon: string;
  categoryName: string;
  categoryVariant: string;
  popularityLabel: string;
  popularityVariant: string;
  vehicleTitle: string;
  vehicleDescription: string;
  fuelType: string;
  transmissionType: string;
  seatingCapacity: string;
  monthlyPrice: string;
  vehicleId: string;
  category?: string;
};

export const VehicleCard = (props: VehicleCardProps) => {
  const [activeTab, setActiveTab] = useState("Assinatura");

  const getPriceByTab = (tab: string) => {
    const basePrice = parseInt(props.monthlyPrice.replace(/[^\d]/g, ''));
    switch (tab) {
      case "Assinatura":
        return props.monthlyPrice;
      case "Financiamento":
        return `R$ ${(basePrice * 1.2).toLocaleString('pt-BR')}`;
      case "Consórcio":
        return `R$ ${(basePrice * 0.8).toLocaleString('pt-BR')}`;
      default:
        return props.monthlyPrice;
    }
  };

  const getTabDescription = (tab: string) => {
    switch (tab) {
      case "Assinatura":
        return "/mês";
      case "Financiamento":
        return "/mês (60x)";
      case "Consórcio":
        return "/mês (grupo)";
      default:
        return "/mês";
    }
  };
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 overflow-hidden rounded-2xl">
      <div className="relative box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
        <div
          className={`relative items-center aspect-video box-border caret-transparent flex justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] overflow-hidden ${props.categoryVariant}`}
        >
          <div className="text-6xl box-border caret-transparent leading-[60px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-2">
            {props.vehicleIcon}
          </div>
          <div className="absolute items-center bg-[oklab(0_0_0_/_0.2)] box-border caret-transparent flex flex-col justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] inset-0">
            <span className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] text-sm font-medium box-border caret-transparent block leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {props.categoryName}
            </span>
          </div>
        </div>
        <span
          className={`absolute text-white text-xs font-medium items-center box-border caret-transparent gap-x-1 flex shrink-0 justify-center leading-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1 text-nowrap w-fit border overflow-hidden px-2 py-0.5 rounded-lg border-solid border-transparent top-4 ${props.popularityVariant}`}
        >
          {props.popularityLabel}
        </span>
      </div>
      <div className="items-start box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 pt-6 pb-4 px-6">
        <div className="items-start box-border caret-transparent flex justify-between outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <h4 className="text-lg box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {props.vehicleTitle}
            </h4>
            <p className="text-[oklch(0.446_0.03_256.802)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {props.vehicleDescription}
            </p>
          </div>
        </div>
        <div className="text-[oklch(0.446_0.03_256.802)] text-sm items-center box-border caret-transparent flex leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mt-3">
          <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mr-4">
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4 mr-1"
            />
            <span className="box-border caret-transparent block outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {props.fuelType}
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mr-4">
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-10.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4 mr-1"
            />
            <span className="box-border caret-transparent block outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {props.transmissionType}
            </span>
          </div>
          <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <img
              src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-11.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-4 mr-1"
            />
            <span className="box-border caret-transparent block outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              {props.seatingCapacity}
            </span>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pb-6 px-6">
          <div className="box-border caret-transparent gap-x-2 flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 w-full mb-4">
            <div
              role="tablist"
              className="text-slate-500 items-center bg-slate-100 box-border caret-transparent grid grid-cols-[repeat(3,minmax(0px,1fr))] justify-center w-full p-1 rounded-[14px]"
            >
              <button
                type="button"
                role="tab"
                onClick={() => setActiveTab("Assinatura")}
                className={`text-xs font-medium items-center caret-transparent gap-x-1.5 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-nowrap border p-2 rounded-[14px] border-solid transition-all duration-200 ${
                  activeTab === "Assinatura" 
                    ? "text-blue-700 bg-blue-100 border-blue-300 shadow-sm font-semibold" 
                    : "text-blue-950 bg-transparent border-transparent hover:bg-blue-50"
                }`}
              >
                Assinatura
              </button>
              <button
                type="button"
                role="tab"
                onClick={() => setActiveTab("Financiamento")}
                className={`text-xs font-medium items-center caret-transparent gap-x-1.5 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-nowrap border p-2 rounded-[14px] border-solid transition-all duration-200 ${
                  activeTab === "Financiamento" 
                    ? "text-blue-900 bg-blue-900/10 border-blue-900/30 shadow-sm font-semibold" 
                    : "text-blue-950 bg-transparent border-transparent hover:bg-blue-50"
                }`}
              >
                Financiamento
              </button>
              <button
                type="button"
                role="tab"
                onClick={() => setActiveTab("Consórcio")}
                className={`text-xs font-medium items-center caret-transparent gap-x-1.5 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-nowrap border p-2 rounded-[14px] border-solid transition-all duration-200 ${
                  activeTab === "Consórcio" 
                    ? "text-green-700 bg-green-100 border-green-300 shadow-sm font-semibold" 
                    : "text-blue-950 bg-transparent border-transparent hover:bg-green-50"
                }`}
              >
                Consórcio
              </button>
            </div>
            <div
              role="tabpanel"
              className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mt-4"
            >
              <div className={`items-center box-border caret-transparent flex justify-between outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] p-3 rounded-[14px] border-2 transition-all duration-300 ${
                activeTab === "Assinatura" 
                  ? "bg-blue-50 border-blue-300 shadow-lg shadow-blue-100" 
                  : activeTab === "Financiamento"
                  ? "bg-blue-900/5 border-blue-900/30 shadow-lg shadow-blue-900/10"
                  : activeTab === "Consórcio"
                  ? "bg-green-50 border-green-300 shadow-lg shadow-green-100"
                  : "bg-[linear-gradient(to_right,oklab(0.605781_-0.143492_0.0811708_/_0.1)_0%,oklab(0.674095_-0.17859_0.139068_/_0.1)_100%)] border-transparent"
              }`}>
                <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
                  <p className={`text-sm box-border caret-transparent leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] font-semibold ${
                    activeTab === "Assinatura" 
                      ? "text-blue-700" 
                      : activeTab === "Financiamento"
                      ? "text-blue-900"
                      : activeTab === "Consórcio"
                      ? "text-green-700"
                      : "text-[oklch(0.446_0.03_256.802)]"
                  }`}>
                    {activeTab}
                  </p>
                  <p className={`text-sm box-border caret-transparent leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] ${
                    activeTab === "Assinatura" 
                      ? "text-blue-600" 
                      : activeTab === "Financiamento"
                      ? "text-blue-800"
                      : activeTab === "Consórcio"
                      ? "text-green-600"
                      : "text-[oklch(0.551_0.027_264.364)]"
                  }`}>
                    {getTabDescription(activeTab)}
                  </p>
                </div>
                <p className={`text-lg font-bold box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] ${
                  activeTab === "Assinatura" 
                    ? "text-blue-700" 
                    : activeTab === "Financiamento"
                    ? "text-blue-900"
                    : activeTab === "Consórcio"
                    ? "text-green-700"
                    : "text-green-600"
                }`}>
                  {getPriceByTab(activeTab)}
                </p>
              </div>
            </div>
          </div>
        <button 
          onClick={() => window.location.href = `/veiculo/${props.vehicleId}`}
          className="text-white text-sm font-medium items-center bg-transparent bg-[linear-gradient(to_right,oklch(0.546_0.245_262.881)_0%,rgb(0,156,73)_100%)] caret-transparent gap-x-2 inline-flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-nowrap w-full px-4 py-2 rounded-[14px] hover:shadow-lg transition-shadow cursor-pointer"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
};
