import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="fixed backdrop-blur-md bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.98)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] z-50 border-[oklab(0.30707_-0.00555673_-0.0662257_/_0.1)] border-b border-solid top-0 inset-x-0">
      <Navbar />
    </header>
  );
};
