import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryHero } from "@/components/LuxuryHero";
import { LuxuryCuratorship } from "@/components/LuxuryCuratorship";
import { LuxuryVehicleList } from "@/components/LuxuryVehicleList";
import { LuxuryServices } from "@/components/LuxuryServices";
import { LuxuryFooter } from "@/components/LuxuryFooter";

export const App = () => {
  return (
    <div className="bg-luxury-black min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-black">
      <LuxuryHeader />
      <LuxuryHero />
      <LuxuryCuratorship />
      <LuxuryVehicleList />
      <LuxuryServices />
      <LuxuryFooter />
    </div>
  );
};
