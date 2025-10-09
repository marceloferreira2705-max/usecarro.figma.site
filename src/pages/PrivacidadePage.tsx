import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const PrivacidadePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Política de <span className="text-green-600">Privacidade</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Saiba como coletamos, utilizamos e protegemos seus dados pessoais.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">1. Informações que Coletamos</h2>
            <p className="mb-6">
              Coletamos informações que você nos fornece diretamente, como:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Dados pessoais (nome, CPF, RG, endereço)</li>
              <li>Informações de contato (e-mail, telefone)</li>
              <li>Dados financeiros (renda, histórico de crédito)</li>
              <li>Preferências de veículos</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">2. Como Utilizamos suas Informações</h2>
            <p className="mb-6">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Processar suas solicitações de serviços</li>
              <li>Realizar análises de crédito</li>
              <li>Personalizar recomendações através da IA Clara</li>
              <li>Comunicar sobre nossos serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">3. Compartilhamento de Dados</h2>
            <p className="mb-6">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Parceiros financeiros para análise de crédito</li>
              <li>Seguradoras para cotação de seguros</li>
              <li>Concessionárias para entrega de veículos</li>
              <li>Órgãos reguladores quando exigido por lei</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">4. Segurança dos Dados</h2>
            <p className="mb-6">
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2 className="text-2xl font-bold mb-6">5. Seus Direitos</h2>
            <p className="mb-6">
              Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimentos</li>
              <li>Portabilidade de dados</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">6. Cookies e Tecnologias Similares</h2>
            <p className="mb-6">
              Utilizamos cookies para melhorar sua experiência em nossa plataforma. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>

            <h2 className="text-2xl font-bold mb-6">7. Retenção de Dados</h2>
            <p className="mb-6">
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
            </p>

            <h2 className="text-2xl font-bold mb-6">8. Contato</h2>
            <p className="mb-6">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>E-mail: privacidade@usecarro.com.br</li>
              <li>Telefone: (11) 4000-1234</li>
              <li>Endereço: Av. Nove de Julho, nº 95 - Sala 21, Vila Adyana, São José dos Campos - SP</li>
            </ul>

            <p className="text-sm text-gray-500 mt-8">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
