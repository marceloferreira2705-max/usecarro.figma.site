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
                Nascemos da experiência. Nossa equipe é formada por executivos que ajudaram a moldar o mercado de carros por assinatura no Brasil.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Com um profundo conhecimento e uma paixão pela inovação, unimos a experiência pioneira em assinaturas com uma sólida base no mercado financeiro.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mas percebemos que um único produto não serve para todo mundo. Por isso, nossa missão vai além da assinatura.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nosso propósito é te ajudar a encontrar a melhor solução de mobilidade para o seu momento de vida.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Se você busca flexibilidade, a assinatura é a resposta ideal.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Para quem quer ter o carro como um patrimônio rapidamente, o financiamento é a melhor opção.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                E para quem prefere planejar com calma e segurança, o consórcio é o caminho.
              </p>
              <p className="text-lg text-gray-600">
                Com essa visão de que o cliente está em primeiro lugar, oferecemos as soluções mais competitivas do mercado. Nosso compromisso é transformar a maneira como você se relaciona com seu carro, garantindo que a escolha certa seja sempre a sua.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://c.animaapp.com/mfxz26rhnSsSP4/img/0c7523457f58ad84086d9881698a4e981695743f.png"
                  alt="Equipe Use Carro"
                  className="h-80 object-cover rounded-2xl"
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Marcelo Rosal - CEO & Fundador */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfxz26rhnSsSP4/img/rosal.avif"
                  alt="Marcelo Rosal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Marcelo Rosal</h3>
              <p className="text-green-600 font-semibold mb-4">CEO & Fundador</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Especialista em mercado automotivo com experiência pioneira em carros por assinatura.
              </p>
            </div>

            {/* Gedson Santin - Diretor Comercial & Co-fundador */}
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfxz26rhnSsSP4/img/gedson.png"
                  alt="Gedson Santin"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Gedson Santin</h3>
              <p className="text-green-600 font-semibold mb-4">Diretor Comercial & Co-fundador</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert em soluções de mobilidade e relacionamento com clientes.
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
              <div className="text-5xl md:text-6xl font-black text-white mb-4">10+</div>
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
    </div>
  );
};
