import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { vehiclesData } from "@/data/vehiclesData"; // Usando alias absoluto

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgvndwrv"); // Seu endpoint Formspree
  const allVehicles = Object.values(vehiclesData);

  if (state.succeeded) {
    return (
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] overflow-hidden rounded-2xl h-full flex items-center justify-center p-6 text-center">
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">Pedido Enviado com Sucesso!</h3>
          <p className="text-gray-700 mb-6">Agradecemos seu contato. Em breve, um de nossos especialistas entrará em contato com você.</p>
          <button
            onClick={() => window.location.reload()} // Recarrega a página para permitir novo envio
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-sm"
          >
            Fazer Novo Pedido
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] overflow-hidden rounded-2xl h-full">
      <div className="text-white bg-[linear-gradient(to_right_in_oklab,rgb(42,147,215)_0%,rgb(53,168,82)_100%)] box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] p-4">
        <div className="items-center box-border caret-transparent flex outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
          <span className="relative box-border caret-transparent flex shrink-0 h-10 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-10 overflow-hidden mr-3 rounded-[3.35544e+07px] border-2 border-solid border-white">
            <span className="text-blue-600 items-center bg-white box-border caret-transparent flex h-full justify-center outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)] w-full rounded-[3.35544e+07px]">
              <span className="text-2xl">📋</span>
            </span>
          </span>
          <div className="box-border caret-transparent outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
            <h3 className="text-lg font-medium box-border caret-transparent leading-6 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Envie um Pedido
            </h3>
            <p className="text-xs box-border caret-transparent leading-4 opacity-90 outline-[oklab(0.636981_-0.0629281_-0.121936_/_0.5)]">
              Receba proposta personalizada
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 overflow-y-auto max-h-[500px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_subject" value="Nova Proposta - Use Carro (Home)" />
          <div>
            <label htmlFor="nome" className="text-sm font-medium block mb-2">Nome completo</label>
            <input
              type="text"
              id="nome"
              name="Nome Completo"
              placeholder="Seu nome"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              required
            />
            <ValidationError 
              prefix="Nome Completo" 
              field="Nome Completo"
              errors={state.errors}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="seu@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="Email"
              errors={state.errors}
            />
          </div>
          
          <div>
            <label htmlFor="telefone" className="text-sm font-medium block mb-2">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="Telefone"
              placeholder="(11) 99999-9999"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              required
            />
            <ValidationError 
              prefix="Telefone" 
              field="Telefone"
              errors={state.errors}
            />
          </div>
          
          <div>
            <label htmlFor="interesse" className="text-sm font-medium block mb-2">Interesse</label>
            <select
              id="interesse"
              name="Interesse"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="Assinatura">Assinatura</option>
              <option value="Consórcio">Consórcio</option>
              <option value="Financiamento">Financiamento</option>
            </select>
            <ValidationError 
              prefix="Interesse" 
              field="Interesse"
              errors={state.errors}
            />
          </div>
          
          <div>
            <label htmlFor="veiculo" className="text-sm font-medium block mb-2">Escolha seu veículo</label>
            <select
              id="veiculo"
              name="Veiculo de Interesse"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            >
              <option value="">Selecione um veículo (opcional)</option>
              {allVehicles.map((vehicle) => (
                <option key={vehicle.id} value={`${vehicle.brand} ${vehicle.version} - ${vehicle.clientType}`}>
                  {vehicle.brand} {vehicle.version} - {vehicle.clientType}
                </option>
              ))}
            </select>
            <ValidationError 
              prefix="Veiculo de Interesse" 
              field="Veiculo de Interesse"
              errors={state.errors}
            />
          </div>
          
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-sm"
          >
            Receber Proposta
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            Ao enviar, você concorda com nossa política de privacidade
          </p>
        </form>
      </div>
    </div>
  );
};
