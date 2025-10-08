import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const TermosPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Termos de <span className="text-green-600">Uso</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os termos e condições para utilização dos serviços da Use Carro.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">1. Aceitação dos Termos</h2>
            <p className="mb-6">
              Ao acessar e utilizar os serviços da Use Carro, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
            </p>

            <h2 className="text-2xl font-bold mb-6">2. Descrição dos Serviços</h2>
            <p className="mb-6">
              A Use Carro oferece soluções automotivas incluindo assinatura de veículos, consórcio e financiamento. Nossos serviços são prestados através de nossa plataforma digital e parceiros credenciados.
            </p>

            <h2 className="text-2xl font-bold mb-6">3. Elegibilidade</h2>
            <p className="mb-6">
              Para utilizar nossos serviços, você deve:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Possuir CPF válido</li>
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Ter capacidade legal para contratar</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">4. Responsabilidades do Usuário</h2>
            <p className="mb-6">
              Você se compromete a:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Manter a confidencialidade de suas credenciais de acesso</li>
              <li>Utilizar os serviços de forma legal e ética</li>
              <li>Cumprir com todas as obrigações contratuais</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">5. Propriedade Intelectual</h2>
            <p className="mb-6">
              Todo o conteúdo presente em nossa plataforma, incluindo textos, imagens, logotipos e software, é de propriedade da Use Carro ou de seus licenciadores e está protegido por leis de propriedade intelectual.
            </p>

            <h2 className="text-2xl font-bold mb-6">6. Limitação de Responsabilidade</h2>
            <p className="mb-6">
              A Use Carro não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços, exceto nos casos previstos em lei.
            </p>

            <h2 className="text-2xl font-bold mb-6">7. Modificações dos Termos</h2>
            <p className="mb-6">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação em nossa plataforma.
            </p>

            <h2 className="text-2xl font-bold mb-6">8. Contato</h2>
            <p className="mb-6">
              Para dúvidas sobre estes termos, entre em contato conosco através do e-mail: juridico@usecarro.com.br ou telefone (11) 4000-1234.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons
        containerVariant="z-50 right-6 bottom-6"
        innerVariant="relative"
        iconUrl="https://c.animaapp.com/mfxz26rhnSsSP4/assets/icon-33.svg"
        iconClassName="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] text-nowrap w-4"
        hasButton={true}
      />
    </div>
  );
};
