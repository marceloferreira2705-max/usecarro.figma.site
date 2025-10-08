import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:px-8">
      <div className="items-center box-border caret-transparent flex h-28 justify-between outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] md:h-32">
        <Logo />
        <DesktopNav />
        <MobileMenuButton />
      </div>
    </div>
  );
};
