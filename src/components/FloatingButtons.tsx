export type FloatingButtonsProps = {
  containerVariant: string;
  innerVariant: string;
  iconUrl: string;
  iconClassName: string;
  hasButton: boolean;
};

export const FloatingButtons = (props: FloatingButtonsProps) => {
  return (
    <div
      className={`fixed box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] ${props.containerVariant}`}
    >
      <div
        className={`box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] ${props.innerVariant}`}
      >
        {props.hasButton ? (
          <button 
            onClick={() => window.location.href = "/contato"}
            className="text-white text-sm font-medium items-center bg-transparent bg-[linear-gradient(to_right_bottom_in_oklab,rgb(53,168,82)_0%,rgb(42,147,215)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] caret-transparent gap-x-2 inline-flex shrink-0 h-16 justify-center leading-5 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-2 text-nowrap w-16 px-3 py-2 rounded-[3.35544e+07px] hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={props.iconUrl}
              alt="Contato"
              className={props.iconClassName}
            />
          </button>
        ) : (
          <img src={props.iconUrl} alt="Icon" className={props.iconClassName} />
        )}
      </div>
    </div>
  );
};
