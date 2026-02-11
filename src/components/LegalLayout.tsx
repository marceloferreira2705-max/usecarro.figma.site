import { ReactNode, useEffect, useState } from "react";
import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";

type Section = {
  id: string;
  title: string;
};

type LegalLayoutProps = {
  title: string;
  subtitle: string;
  sections: Section[];
  children: ReactNode;
};

export const LegalLayout = ({ title, subtitle, sections, children }: LegalLayoutProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#CCCCCC] font-sans selection:bg-[#C5A059] selection:text-black">
      <LuxuryHeader />

      {/* Header */}
      <section className="pt-48 pb-20 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-6">
            Grupo Nexi
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-[#A0A0A0] text-lg font-light tracking-wide max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Navigation (Sticky) */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32">
              <h3 className="text-white font-serif text-lg mb-8 pl-4">Índice</h3>
              <nav className="flex flex-col gap-2 border-l border-white/10">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left py-2 pl-4 text-sm tracking-wide transition-all duration-300 border-l-2 -ml-[1px] ${
                      activeSection === section.id
                        ? "border-[#C5A059] text-white font-medium"
                        : "border-transparent text-[#8C8C8C] hover:text-white"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-[#CCCCCC] prose-p:leading-relaxed prose-strong:text-white prose-li:text-[#CCCCCC]">
            {children}
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  );
};
