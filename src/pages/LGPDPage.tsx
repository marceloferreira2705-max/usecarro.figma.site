import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const LGPDPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              <span className="text-green-600">LGPD</span> - Lei Geral de Proteção de Dados
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso compromisso com a proteção dos seus dados pessoais conforme a LGPD.
            </p>
          </div>
        </div>
      </section>

      {/* LGPD Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Nosso Compromisso com a LGPD</h2>
            <p className="mb-6">
              A Use Carro está comprometida em cumprir integralmente a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantindo a proteção dos dados pessoais de nossos clientes e usuários.
            </p>

            <h2 className="text-2xl font-bold mb-6">Bases Legais para Tratamento de Dados</h2>
            <p className="mb-6">
              Tratamos seus dados pessoais com base nas seguintes hipóteses legais:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Consentimento:</strong> Quando você autoriza expressamente o tratamento</li>
              <li><strong>Execução de contrato:</strong> Para cumprir obrigações contratuais</li>
              <li><strong>Legítimo interesse:</strong> Para melhorar nossos serviços</li>
              <li><strong>Cumprimento de obrigação legal:</strong> Quando exigido por lei</li>
              <li><strong>Exercício de direitos:</strong> Em processos judiciais ou administrativos</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Seus Direitos como Titular de Dados</h2>
            <p className="mb-6">
              Conforme a LGPD, você possui os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li><strong>Anonimização ou eliminação:</strong> Solicitar a anonimização ou exclusão de dados desnecessários</li>
              <li><strong>Portabilidade:</strong> Transferir seus dados para outro fornecedor</li>
              <li><strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos seus dados</li>
              <li><strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Como Exercer seus Direitos</h2>
            <p className="mb-6">
              Para exercer qualquer um dos seus direitos, você pode:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Enviar e-mail para: lgpd@usecarro.com.br</li>
              <li>Ligar para: (12) 98290-0169</li>
              <li>Acessar nossa plataforma e utilizar as opções de privacidade</li>
              <li>Enviar correspondência para nosso endereço físico</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Encarregado de Proteção de Dados (DPO)</h2>
            <p className="mb-6">
              Nosso Encarregado de Proteção de Dados é responsável por:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Orientar funcionários sobre práticas de proteção de dados</li>
              <li>Atender solicitações dos titulares de dados</li>
              <li>Interagir com a Autoridade Nacional de Proteção de Dados (ANPD)</li>
              <li>Monitorar o cumprimento da LGPD</li>
            </ul>
            <p className="mb-6">
              <strong>Contato do DPO:</strong> dpo@usecarro.com.br
            </p>

            <h2 className="text-2xl font-bold mb-6">Medidas de Segurança</h2>
            <p className="mb-6">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Criptografia de dados sensíveis</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Treinamento regular de funcionários</li>
              <li>Auditorias periódicas de segurança</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Incidentes de Segurança</h2>
            <p className="mb-6">
              Em caso de incidente de segurança que possa acarretar risco aos direitos e liberdades dos titulares, comunicaremos:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>À ANPD no prazo de 72 horas</li>
              <li>Aos titulares afetados quando o risco for alto</li>
              <li>Medidas adotadas para mitigar os danos</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Transferência Internacional de Dados</h2>
            <p className="mb-6">
              Quando necessário transferir dados para outros países, garantimos que:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>O país possui nível adequado de proteção</li>
              <li>Existem garantias contratuais específicas</li>
              <li>Há consentimento específico do titular</li>
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
