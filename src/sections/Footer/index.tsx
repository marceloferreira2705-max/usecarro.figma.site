import { VehicleCategories } from "@/sections/Footer/components/VehicleCategories";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="text-white bg-blue-950 box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-16">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <VehicleCategories />
        <FooterLinks />
        <FooterCopyright />
      </div>
    </footer>
  );
};
