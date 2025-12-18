import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FormularioEnviadoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona para a home após 3 segundos
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <span className="text-7xl">✅</span>
        </div>
        
        <h1 className="text-4xl font-black text-blue-950 mb-4">
          Sua Solicitação Chegou ao Use Carro! 🥳
        </h1>
        
        <div className="text-lg text-gray-700 space-y-4 mb-8">
          <p>Olá!</p>
          <p>
            Obrigado pelo seu interesse! Recebemos seu pedido de informações e nossos especialistas 
            (os "caçadores de detalhes automotivos") já estão analisando tudo com carinho. 🔎
          </p>
          <p>
            Enquanto preparamos a resposta perfeita, que tal continuar a navegar? 
            O próximo carro dos seus sonhos pode estar a um clique de distância! 😉
          </p>
          <p className="font-bold text-green-600">Voltamos em breve!</p>
          <p className="text-sm text-gray-600">Equipe Use Carro 🚗💨</p>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-900">
            Você será redirecionado para a página inicial em alguns segundos...
          </p>
        </div>
        
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          Voltar para Home Agora
        </button>
      </div>
    </div>
  );
};
