export type OptionCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
};

export const OptionCard = (props: OptionCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 rounded-2xl">
      <div className="items-start box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-1.5 text-center pt-6 pb-4 px-6">
        <div className="items-center bg-[linear-gradient(to_right_bottom_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] box-border caret-transparent flex h-16 justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-16 mb-4 mx-auto rounded-2xl">
          <img
            src={props.iconSrc}
            alt="Icon"
            className="text-white box-border caret-transparent h-8 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-8"
          />
        </div>
        <h4 className="text-xl box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          {props.title}
        </h4>
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center pb-6 px-6">
        <p className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent leading-[26px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-6">
          {props.description}
        </p>
        <a
          href={props.href}
          className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]"
        >
          <button className="text-green-600 text-sm font-medium items-center bg-white caret-transparent gap-x-2 inline-flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-left text-nowrap w-full border border-green-600 px-4 py-2 rounded-[14px] border-solid">
            {props.buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};
