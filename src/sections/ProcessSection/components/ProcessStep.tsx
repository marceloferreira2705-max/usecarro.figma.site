export type ProcessStepProps = {
  stepNumber: string;
  iconUrl: string;
  title: string;
  description: string;
  showTopLine?: boolean;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div className="relative box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-center">
      {props.showTopLine && (
        <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] absolute bg-[linear-gradient(to_right_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] hidden h-0.5 w-full z-0 left-2/4 top-8 md:block"></div>
      )}
      <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] z-10 p-8 rounded-2xl">
        <div className="text-white text-xl items-center bg-[linear-gradient(to_right_bottom_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] box-border caret-transparent flex h-16 justify-center leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-16 mb-6 mx-auto rounded-[3.35544e+07px]">
          {props.stepNumber}
        </div>
        <div className="items-center bg-[oklch(0.967_0.003_264.542)] box-border caret-transparent flex h-12 justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-12 mb-4 mx-auto rounded-[14px]">
          <img
            src={props.iconUrl}
            alt="Icon"
            className="text-green-600 box-border caret-transparent h-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-6"
          />
        </div>
        <h3 className="text-xl box-border caret-transparent leading-7 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] mb-3">
          {props.title}
        </h3>
        <p className="text-[oklch(0.446_0.03_256.802)] box-border caret-transparent leading-[26px] outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
