import { LegalLayout } from "@/components/LegalLayout";

export const TermosPage = () => {
  const sections = [
    { id: "intro", title: "1. Introdução e Aceitação" },
    { id: "servicos", title: "2. Descrição dos Serviços" },
    { id: "elegibilidade", title: "3. Elegibilidade e Cadastro" },
    { id: "responsabilidades", title: "4. Responsabilidades" },
    { id: "propriedade", title: "5. Propriedade Intelectual" },
    { id: "limitacao", title: "6. Limitação de Responsabilidade" },
    { id: "alteracoes", title: "7. Alterações e Vigência" },
    { id: "foro", title: "8. Legislação e Foro" },
  ];

  return (
    <LegalLayout
      title="Compliance & Governança"
      subtitle="Transparência e segurança jurídica garantidas pelo Grupo Nexi. Termos de Uso da Plataforma."
      sections={sections}
    >
      <div id="intro" className="mb-16 scroll-mt-40">
        <h2>1. Introdução e Aceitação</h2>
        <p>
          Bem-vindo à <strong>Use Carro</strong>, uma empresa do <strong>Grupo Nexi</strong>. Estes Termos de Uso regem o acesso e a utilização de nossa plataforma digital e serviços de curadoria automotiva.
        </p>
        <p>
          Ao acessar ou utilizar nossos serviços, você concorda expressamente com estes termos. Nossa estrutura opera sob rigorosos padrões de compliance e governança corporativa, visando proteger os interesses de todas as partes envolvidas.
        </p>
      </div>

      <div id="servicos" className="mb-16 scroll-mt-40">
        <h2>2. Descrição dos Serviços</h2>
        <p>
          A Use Carro atua como uma boutique automotiva digital e intermediadora de negócios, oferecendo:
        </p>
        <ul>
          <li><strong>Signature Experience:</strong> Gestão e intermediação de contratos de assinatura de veículos (Carro por Assinatura).</li>
          <li><strong>Equity Planning:</strong> Consultoria em consórcios e planejamento financeiro para aquisição de ativos.</li>
          <li><strong>Financiamento Premium:</strong> Estruturação de operações de crédito com instituições financeiras parceiras.</li>
        </ul>
      </div>

      <div id="elegibilidade" className="mb-16 scroll-mt-40">
        <h2>3. Elegibilidade e Cadastro</h2>
        <p>
          Para utilizar nossos serviços, o usuário deve possuir capacidade civil plena. No caso de Pessoas Jurídicas, o representante deve ter poderes estatutários para assumir obrigações.
        </p>
        <p>
          Todas as informações fornecidas durante o cadastro ou solicitação de "Concierge" devem ser precisas, verdadeiras e atuais. A Use Carro reserva-se o direito de solicitar documentação comprobatória para fins de <em>Know Your Customer</em> (KYC).
        </p>
      </div>

      <div id="responsabilidades" className="mb-16 scroll-mt-40">
        <h2>4. Responsabilidades</h2>
        <p>
          <strong>Do Usuário:</strong> Manter a confidencialidade de suas credenciais, utilizar a plataforma apenas para fins lícitos e não violar direitos de terceiros.
        </p>
        <p>
          <strong>Da Use Carro:</strong> Empregar as melhores práticas de segurança da informação para proteger os dados dos usuários e garantir a disponibilidade da plataforma, ressalvadas interrupções por motivos técnicos ou de força maior.
        </p>
      </div>

      <div id="propriedade" className="mb-16 scroll-mt-40">
        <h2>5. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo, design, marcas, logotipos (incluindo "Use Carro" e "Grupo Nexi") e software presentes nesta plataforma são de propriedade exclusiva da Use Carro ou de seus licenciadores. É vedada a reprodução, distribuição ou modificação sem autorização prévia e expressa.
        </p>
      </div>

      <div id="limitacao" className="mb-16 scroll-mt-40">
        <h2>6. Limitação de Responsabilidade</h2>
        <p>
          A Use Carro atua como intermediadora e consultora. A aprovação de crédito, entrega dos veículos e serviços de manutenção (no caso de assinaturas) são de responsabilidade final das operadoras, montadoras e instituições financeiras contratadas, embora a Use Carro preste todo o suporte e <em>advocacy</em> ao cliente.
        </p>
      </div>

      <div id="alteracoes" className="mb-16 scroll-mt-40">
        <h2>7. Alterações e Vigência</h2>
        <p>
          Estes termos podem ser atualizados periodicamente para refletir mudanças na legislação ou em nossos modelos de negócio. A versão mais recente estará sempre disponível nesta página.
        </p>
      </div>

      <div id="foro" className="mb-16 scroll-mt-40">
        <h2>8. Legislação e Foro</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
        </p>
      </div>
    </LegalLayout>
  );
};
