import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    // Tenta limpar dados corrompidos que podem estar causando o erro
    try {
      // Limpa todas as chaves possíveis para garantir
      localStorage.removeItem("useCarro_Clean_Start_v13_FINAL_COLLECTION");
      localStorage.removeItem("useCarro_Clean_Dates_v13_FINAL_COLLECTION");
      localStorage.clear(); // Reset total em caso de emergência
      window.location.href = "/";
    } catch (e) {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans text-white">
          <div className="max-w-md w-full text-center bg-[#121212] border border-white/10 p-10 rounded-lg shadow-2xl">
            <div className="w-16 h-16 border-2 border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[#C5A059] text-2xl">!</span>
            </div>
            <h1 className="font-serif text-2xl text-white mb-4">Algo deu errado</h1>
            <p className="text-[#A0A0A0] text-sm mb-8 leading-relaxed">
              Identificamos um problema técnico ao carregar esta página. Isso geralmente ocorre devido a dados incompletos de um veículo novo.
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.href = "/"}
                className="w-full py-3 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors rounded"
              >
                Voltar para o Início
              </button>
              
              <button
                onClick={this.handleReset}
                className="w-full py-3 border border-red-900/50 text-red-500 text-xs font-bold tracking-[0.2em] uppercase hover:bg-red-900/20 transition-colors rounded"
              >
                Resetar Sistema (Correção)
              </button>
            </div>
            
            {this.state.error && (
              <div className="mt-8 p-4 bg-black/50 rounded text-left overflow-hidden">
                <p className="text-[10px] text-gray-500 font-mono break-all">
                  Erro: {this.state.error.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
