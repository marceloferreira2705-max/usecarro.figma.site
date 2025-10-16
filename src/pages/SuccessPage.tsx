import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import React from "react";

export const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Mensagem Enviada com Sucesso!</h1>
          <p className="text-gray-700 text-lg mb-6">Agradecemos seu contato. Em breve, um de nossos especialistas entrará em contato com você.</p>
          <button
            onClick={() => window.location.href = "/"} // Redireciona para a Home
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-sm"
          >
            Voltar para a Página Inicial
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
