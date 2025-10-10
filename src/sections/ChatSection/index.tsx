import { ChatInterface } from "@/sections/ChatSection/components/ChatInterface";
import { ChatSidebar } from "@/sections/ChatSection/components/ChatSidebar";
import { ContactForm } from "@/sections/ChatSection/components/ContactForm";
import { WhatsAppContact } from "@/sections/ChatSection/components/WhatsAppContact";

export const ChatSection = () => {
  return (
    <section className="bg-[linear-gradient(to_right_bottom_in_oklab,rgb(0,156,73)_0%,rgb(21,182,3)_100%)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl md:px-8">
        <ChatSidebar />
        
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] gap-y-6 mt-12 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <ChatInterface />
          <ContactForm />
          <WhatsAppContact />
        </div>
      </div>
    </section>
  );
};
