import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const SobrePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,oklch(0.985_0.002_247.839)_100%)] pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Sobre a <span className="text-green-600">Use Carro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossa história, missão e os valores que nos movem para revolucionar o mercado automotivo brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Use Carro nasceu em 2020 com uma missão clara: democratizar o acesso a veículos no Brasil através da tecnologia e inovação. Fundada por especialistas do mercado automotivo e tecnológico, nossa empresa surgiu da necessidade de simplificar e personalizar a experiência de ter um carro.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Percebemos que cada pessoa tem necessidades únicas quando se trata de mobilidade. Por isso, desenvolvemos uma plataforma inteligente que analisa o perfil de cada cliente e recomenda a melhor solução: assinatura, consórcio ou financiamento.
              </p>
              <p className="text-lg text-gray-600">
                Hoje, somos referência em soluções automotivas personalizadas, atendendo milhares de clientes em todo o país com transparência, agilidade e tecnologia de ponta.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://c.animaapp.com/mfxz26rhnSsSP4/assets/6acf225b678e2ac6faff243270c8d2c0abf86127.png"
                  alt="Use Carro - Nossa História"
                  className="h-80 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar o acesso a veículos através de soluções inteligentes e personalizadas, utilizando tecnologia para conectar pessoas aos seus carros ideais de forma simples e transparente.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser a principal plataforma de soluções automotivas do Brasil, reconhecida pela inovação, confiabilidade e pela capacidade de transformar a experiência de ter um veículo.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparência, inovação, excelência no atendimento, responsabilidade social e compromisso com a satisfação do cliente são os pilares que guiam todas as nossas decisões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Liderança
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais que lideram a Use Carro e trabalham incansavelmente para revolucionar o mercado automotivo brasileiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* CEO */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-6xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Carlos Eduardo Silva</h3>
              <p className="text-green-600 font-semibold mb-4">CEO & Fundador</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mais de 15 anos de experiência no mercado automotivo. Formado em Administração pela FGV, com MBA em Gestão Estratégica. Liderou projetos de transformação digital em grandes montadoras antes de fundar a Use Carro.
              </p>
            </div>

            {/* CTO */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-6xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ana Carolina Costa</h3>
              <p className="text-green-600 font-semibold mb-4">CTO & Co-fundadora</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Especialista em Inteligência Artificial e Machine Learning. Doutora em Ciência da Computação pela USP. Responsável pelo desenvolvimento da IA Clara e toda a arquitetura tecnológica da plataforma.
              </p>
            </div>

            {/* CFO */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-6xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Roberto Mendes Santos</h3>
              <p className="text-green-600 font-semibold mb-4">CFO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contador e economista com mais de 12 anos de experiência em fintechs e empresas de tecnologia. Especialista em estruturação financeira e parcerias estratégicas no setor automotivo.
              </p>
            </div>

            {/* CMO */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-6xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mariana Oliveira</h3>
              <p className="text-green-600 font-semibold mb-4">CMO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Especialista em marketing digital e growth hacking. Formada em Publicidade e Propaganda, com pós-graduação em Marketing Digital. Responsável por toda estratégia de crescimento e relacionamento com clientes.
              </p>
            </div>

            {/* COO */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-6xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Felipe Rodrigues</h3>
              <p className="text-green-600 font-semibold mb-4">COO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engenheiro de produção com vasta experiência em operações e logística. Responsável por otimizar todos os processos operacionais e garantir a excelência na entrega dos serviços.
              </p>
            </div>

            {/* Head of Customer Success */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-6xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Juliana Ferreira</h3>
              <p className="text-green-600 font-semibold mb-4">Head of Customer Success</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Psicóloga organizacional com especialização em experiência do cliente. Lidera a equipe de sucesso do cliente e garante que cada pessoa tenha a melhor experiência possível com nossos serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Numbers */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Use Carro em Números
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Nosso crescimento reflete o impacto positivo que geramos na vida das pessoas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">25k+</div>
              <div className="text-white/90 text-lg font-medium">Clientes Atendidos</div>
              <div className="text-white/70 text-sm mt-2">Desde nossa fundação</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">500+</div>
              <div className="text-white/90 text-lg font-medium">Parceiros Ativos</div>
              <div className="text-white/70 text-sm mt-2">Concessionárias e seguradoras</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">180+</div>
              <div className="text-white/90 text-lg font-medium">Cidades Atendidas</div>
              <div className="text-white/70 text-sm mt-2">Em todo território nacional</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4">98%</div>
              <div className="text-white/90 text-lg font-medium">Satisfação</div>
              <div className="text-white/70 text-sm mt-2">Índice de clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reconhecimentos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nosso trabalho tem sido reconhecido por importantes instituições do mercado automotivo e tecnológico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="font-bold mb-2">Startup do Ano</h3>
              <p className="text-gray-600 text-sm">Prêmio ABVCAP 2023</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="font-bold mb-2">Inovação em IA</h3>
              <p className="text-gray-600 text-sm">Tech Innovation Awards 2023</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="font-bold mb-2">Melhor Experiência</h3>
              <p className="text-gray-600 text-sm">Customer Experience Brasil 2023</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="font-bold mb-2">Fintech Emergente</h3>
              <p className="text-gray-600 text-sm">Fintech Awards 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos que compartilhem nossa paixão por inovação e excelência no atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/contato"}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              Ver Vagas Abertas
            </button>
            <button 
              onClick={() => window.location.href = "/contato"}
              className="border-2 border-green-600 text-green-600 font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-green-600 hover:text-white transition-colors cursor-pointer"
            >
              Enviar Currículo
            </button>
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
