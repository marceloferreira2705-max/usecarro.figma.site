export type FAQListProps = {
  question: string;
  variant?: string;
};

export const FAQList = (props: FAQListProps) => {
  const handleClick = () => {
    // Simulate clicking on FAQ - could trigger chat or navigate
    console.log("FAQ clicked:", props.question);
  };

  return (
    <button
      onClick={handleClick}
      className={`backdrop-blur bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 rounded-[14px] w-full text-left hover:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] transition-colors ${props.variant || "mb-4"}`}
    >
      <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] pt-4 pb-6 px-4">
        <p className="text-white box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          {props.question}
        </p>
        <img
          src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-5.svg"
          alt="Icon"
          className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] box-border caret-transparent h-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-5"
        />
      </div>
    </button>
  );
};
