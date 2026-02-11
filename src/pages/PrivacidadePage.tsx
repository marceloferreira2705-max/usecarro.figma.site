import { LegalLayout } from "@/components/LegalLayout";

export const PrivacidadePage = () => {
  const sections = [
    { id: "compromisso", title: "1. Compromisso de Privacidade" },
    { id: "coleta", title: "2. Coleta de Dados" },
    { id: "uso", title: "3. Uso das Informações" },
    { id: "compartilhamento", title: "4. Compartilhamento (Grupo Nexi)" },
    { id: "seguranca", title: "5. Segurança e LGPD" },
    { id: "direitos", title: "6. Seus Direitos" },
    { id: "contato", title: "7. Encarregado de Dados (DPO)" },
  ];

  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Proteção de dados e confidencialidade com o padrão de segurança do Grupo Nexi."
      sections={sections}
    >
      <div id="compromisso" className="mb-16 scroll-mt-40">
        <h2>1. Compromisso de Privacidade</h2>
        <p>
          A <strong>Use Carro</strong> entende que a privacidade é o pilar fundamental da confiança. Tratamos seus dados pessoais com o mais alto nível de sigilo e segurança, em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>
      </div>

      <div id="coleta" className="mb-16 scroll-mt-40">
        <h2>2. Coleta de Dados</h2>
        <p>
          Coletamos apenas os dados estritamente necessários para a prestação de nossos serviços de consultoria e intermediação automotiva:
        </p>
        <ul>
          <li><strong>Dados Cadastrais:</strong> Nome, CPF, endereço, e-mail e telefone.</li>
          <li><strong>Dados Financeiros:</strong> Informações necessárias para análise de crédito e viabilidade financeira (Equity Planning).</li>
          <li><strong>Dados de Navegação:</strong> Cookies e logs de acesso para melhoria da experiência do usuário e segurança da plataforma.</li>
        </ul>
      </div>

      <div id="uso" className="mb-16 scroll-mt-40">
        <h2>3. Uso das Informações</h2>
        <p>
          As informações coletadas são utilizadas para:
        </p>
        <ul>
          <li>Personalizar o atendimento do nosso <strong>Concierge</strong>.</li>
          <li>Processar simulações de assinatura, consórcio e financiamento.</li>
          <li>Realizar verificações de segurança e prevenção a fraudes.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </div>

      <div id="compartilhamento" className="mb-16 scroll-mt-40">
        <h2>4. Compartilhamento de Dados</h2>
        <p>
          Seus dados podem ser compartilhados com empresas do <strong>Grupo Nexi</strong> para fins administrativos e de gestão. Externamente, compartilhamos dados apenas com parceiros essenciais para a execução do serviço (Montadoras, Seguradoras, Instituições Financeiras), sempre sob contratos de confidencialidade rigorosos.
        </p>
        <p>
          <strong>Não vendemos seus dados a terceiros.</strong>
        </p>
      </div>

      <div id="seguranca" className="mb-16 scroll-mt-40">
        <h2>5. Segurança da Informação</h2>
        <p>
          Adotamos medidas técnicas e organizacionais robustas, incluindo criptografia de ponta a ponta, controles de acesso restrito e monitoramento contínuo de nossa infraestrutura digital para prevenir acessos não autorizados ou vazamentos.
        </p>
      </div>

      <div id="direitos" className="mb-16 scroll-mt-40">
        <h2>6. Seus Direitos (Titular dos Dados)</h2>
        <p>
          Você tem total controle sobre seus dados. A qualquer momento, você pode solicitar:
        </p>
        <ul>
          <li>Confirmação da existência de tratamento.</li>
          <li>Acesso aos dados.</li>
          <li>Correção de dados incompletos ou desatualizados.</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Portabilidade dos dados.</li>
        </ul>
      </div>

      <div id="contato" className="mb-16 scroll-mt-40">
        <h2>7. Encarregado de Dados (DPO)</h2>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre nossa governança de dados, entre em contato com nosso Encarregado de Proteção de Dados:
        </p>
        <p className="mt-4 border-l-2 border-[#C5A059] pl-4">
          <strong>E-mail:</strong> dpo@usecarro.com.br<br />
          <strong>Endereço:</strong> Av. Nove de Julho, nº 95 - Sala 21, Vila Adyana, São José dos Campos - SP
        </p>
      </div>
    </LegalLayout>
  );
};
