import { useState } from "react";

export type BenefitTabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const BenefitTabs = ({ activeTab, onTabChange }: BenefitTabsProps) => {
  return (
    <div
      role="tablist"
      className="text-slate-500 items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent grid grid-cols-[repeat(3,minmax(0px,1fr))] h-9 justify-center w-full mb-12 p-2 rounded-2xl"
    >
      <button
        type="button"
        role="tab"
        onClick={() => onTabChange("Assinatura")}
        className={`text-sm font-medium items-center caret-transparent gap-x-1.5 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-nowrap border px-2 py-1 rounded-[14px] border-solid border-transparent ${
          activeTab === "Assinatura"
            ? "text-white bg-transparent bg-[linear-gradient(to_right,oklch(0.546_0.245_262.881)_0%,rgb(0,156,73)_100%)]"
            : "text-blue-950 bg-transparent hover:bg-gray-100"
        }`}
      >
        Assinatura
      </button>
      <button
        type="button"
        role="tab"
        onClick={() => onTabChange("Consórcio")}
        className={`text-sm font-medium items-center caret-transparent gap-x-1.5 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-nowrap border px-2 py-1 rounded-[14px] border-solid border-transparent ${
          activeTab === "Consórcio"
            ? "text-white bg-transparent bg-[linear-gradient(to_right,oklch(0.546_0.245_262.881)_0%,rgb(0,156,73)_100%)]"
            : "text-blue-950 bg-transparent hover:bg-gray-100"
        }`}
      >
        Consórcio
      </button>
      <button
        type="button"
        role="tab"
        onClick={() => onTabChange("Financiamento")}
        className={`text-sm font-medium items-center caret-transparent gap-x-1.5 flex basis-[0%] grow h-[calc(100%_-_1px)] justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-nowrap border px-2 py-1 rounded-[14px] border-solid border-transparent ${
          activeTab === "Financiamento"
            ? "text-white bg-transparent bg-[linear-gradient(to_right,oklch(0.546_0.245_262.881)_0%,rgb(0,156,73)_100%)]"
            : "text-blue-950 bg-transparent hover:bg-gray-100"
        }`}
      >
        Financiamento
      </button>
    </div>
  );
};
