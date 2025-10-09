import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Política de <span className="text-green-600">Cookies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda como utilizamos cookies para melhorar sua experiência em nossa plataforma.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">O que são Cookies?</h2>
            <p className="mb-6">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.
            </p>

            <h2 className="text-2xl font-bold mb-6">Como Utilizamos Cookies</h2>
            <p className="mb-6">
              A Use Carro utiliza cookies para:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Manter você conectado durante sua sessão</li>
              <li>Lembrar suas preferências e configurações</li>
              <li>Personalizar conteúdo e recomendações</li>
              <li>Analisar como você usa nosso site</li>
              <li>Melhorar a segurança da plataforma</li>
              <li>Exibir anúncios relevantes</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold mb-4">1. Cookies Essenciais</h3>
            <p className="mb-4">
              Necessários para o funcionamento básico do site. Não podem ser desabilitados.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Cookies de sessão</li>
              <li>Cookies de segurança</li>
              <li>Cookies de funcionalidade básica</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">2. Cookies de Funcionalidade</h3>
            <p className="mb-4">
              Permitem que o site lembre suas escolhas e forneça recursos aprimorados.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Preferências de idioma</li>
              <li>Configurações de interface</li>
              <li>Dados de formulários</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3. Cookies de Análise</h3>
            <p className="mb-4">
              Coletam informações sobre como você usa o site para nos ajudar a melhorá-lo.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Google Analytics</li>
              <li>Métricas de desempenho</li>
              <li>Análise de comportamento</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">4. Cookies de Marketing</h3>
            <p className="mb-4">
              Utilizados para exibir anúncios relevantes e medir a eficácia das campanhas.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Cookies de remarketing</li>
              <li>Rastreamento de conversões</li>
              <li>Personalização de anúncios</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Cookies de Terceiros</h2>
            <p className="mb-6">
              Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Google Analytics:</strong> Para análise de tráfego</li>
              <li><strong>Facebook Pixel:</strong> Para remarketing</li>
              <li><strong>Google Ads:</strong> Para publicidade direcionada</li>
              <li><strong>Hotjar:</strong> Para análise de comportamento</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Gerenciamento de Cookies</h2>
            <p className="mb-6">
              Você pode controlar e gerenciar cookies de várias maneiras:
            </p>

            <h3 className="text-xl font-semibold mb-4">Configurações do Navegador</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Chrome:</strong> Configurações &gt; Privacidade e segurança &gt; Cookies</li>
                <li><strong>Firefox:</strong> Opções &gt; Privacidade e Segurança</li>
                <li><strong>Safari:</strong> Preferências &gt; Privacidade</li>
                <li><strong>Edge:</strong> Configurações &gt; Cookies e permissões do site</li>
              </ul>

            <h3 className="text-xl font-semibold mb-4">Central de Preferências</h3>
            <p className="mb-6">
              Você pode gerenciar suas preferências de cookies através de nossa central de privacidade, acessível através do banner de cookies ou nas configurações da sua conta.
            </p>

            <h2 className="text-2xl font-bold mb-6">Consequências de Desabilitar Cookies</h2>
            <p className="mb-6">
              Se você desabilitar cookies, algumas funcionalidades podem ser afetadas:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Necessidade de fazer login repetidamente</li>
              <li>Perda de preferências personalizadas</li>
              <li>Funcionalidades limitadas da IA Clara</li>
              <li>Experiência menos personalizada</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Atualizações desta Política</h2>
            <p className="mb-6">
              Esta política de cookies pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como utilizamos cookies.
            </p>

            <h2 className="text-2xl font-bold mb-6">Contato</h2>
            <p className="mb-6">
              Se você tiver dúvidas sobre nossa política de cookies, entre em contato:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>E-mail: privacidade@usecarro.com.br</li>
              <li>Telefone: (11) 4000-1234</li>
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
