import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";
import { useState, useEffect } from "react";
import { VehicleData } from "@/data/vehiclesData";
import { getVehicles, saveVehicles, getLastUpdates, saveLastUpdate, removeLastUpdate } from "@/utils/vehicleStorage";

export const AdminVehiclesPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [vehicles, setVehicles] = useState<Record<string, VehicleData>>({});
  const [editingVehicle, setEditingVehicle] = useState<string | null>(null);
  const [formData, setFormData] = useState<VehicleData | null>(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Record<string, string>>({});

  useEffect(() => {
    // Carrega veículos e datas do storage ao iniciar
    setVehicles(getVehicles());
    setLastUpdated(getLastUpdates());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "NEXI2026") {
      setIsAuthenticated(true);
      setSaveMessage("");
    } else {
      alert("Acesso Negado. Credenciais inválidas.");
      setPassword("");
    }
  };

  const handleEdit = (vehicleId: string) => {
    setEditingVehicle(vehicleId);
    setFormData({ ...vehicles[vehicleId] });
    setIsCreating(false);
    setSaveMessage("");
  };

  const handleCreate = () => {
    // Lógica inteligente para encontrar o menor ID disponível (reutiliza IDs excluídos)
    const existingIds = Object.keys(vehicles).map(Number).sort((a, b) => a - b);
    let nextId = 1;
    
    for (let i = 0; i < existingIds.length; i++) {
      if (existingIds[i] === nextId) {
        nextId++;
      } else if (existingIds[i] > nextId) {
        break; // Encontrou um buraco na sequência
      }
    }
    
    const newId = String(nextId);

    const newVehicle: VehicleData = {
      id: newId,
      title: "",
      brand: "",
      version: "",
      type: "",
      clientType: "Pessoa Física",
      fuelType: "",
      transmission: "",
      seats: "",
      engine: "",
      color: "",
      doors: "",
      year: "2026",
      prices: {
        assinatura: {
          monthly: "R$ 0,00",
          term: "36 meses",
          mileage: "1.000 km/mês",
          details: ["Seguro incluso", "Manutenção inclusa", "IPVA incluso", "Assistência 24h"]
        },
        financiamento: {
          monthly: "R$ 0,00",
          term: "60 meses",
          details: ["Taxas competitivas", "Aprovação rápida", "Processo 100% digital"]
        },
        consorcio: {
          monthly: "R$ 0,00",
          term: "80 meses",
          details: ["Sem juros", "Planejamento financeiro", "Flexibilidade de escolha"]
        }
      },
      images: ["https://via.placeholder.com/600x400?text=Adicione+uma+imagem"],
      description: ""
    };
    
    setEditingVehicle(newId);
    setFormData(newVehicle);
    setIsCreating(true);
    setSaveMessage("");
  };

  const handleDelete = (vehicleId: string) => {
    if (window.confirm(`Tem certeza que deseja excluir o veículo ${vehicles[vehicleId].title}?`)) {
      const updatedVehicles = { ...vehicles };
      delete updatedVehicles[vehicleId];
      
      setVehicles(updatedVehicles);
      saveVehicles(updatedVehicles); // Salva no storage
      
      removeLastUpdate(vehicleId);
      setLastUpdated(getLastUpdates());
      
      setSaveMessage(`✅ Veículo excluído com sucesso!`);
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const handleCancel = () => {
    setEditingVehicle(null);
    setFormData(null);
    setIsCreating(false);
    setSaveMessage("");
  };

  const handleInputChange = (field: string, value: string, nestedField?: string, subField?: string) => {
    if (!formData) return;

    setFormData(prev => {
      if (!prev) return prev;
      
      if (nestedField && subField) {
        return {
          ...prev,
          [field]: {
            ...prev[field as keyof VehicleData] as any,
            [nestedField]: {
              ...(prev[field as keyof VehicleData] as any)[nestedField],
              [subField]: value
            }
          }
        };
      }
      
      return {
        ...prev,
        [field]: value
      };
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && formData) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setFormData(prev => {
          if (!prev) return prev;
          return {
            ...prev,
            images: [imageUrl, ...prev.images.slice(1)]
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (index: number, url: string) => {
    if (!formData) return;
    
    setFormData(prev => {
      if (!prev) return prev;
      const newImages = [...prev.images];
      newImages[index] = url;
      return {
        ...prev,
        images: newImages
      };
    });
  };

  const handleSave = () => {
    if (!formData || !editingVehicle) return;

    const updatedVehicles = {
      ...vehicles,
      [editingVehicle]: formData
    };

    try {
      saveVehicles(updatedVehicles); // Tenta salvar no storage
      
      // Se chegou aqui, salvou com sucesso
      setVehicles(updatedVehicles);
      
      // Atualiza data de modificação
      saveLastUpdate(editingVehicle);
      setLastUpdated(getLastUpdates());
      
      setSaveMessage(isCreating 
        ? "✅ Novo veículo criado com sucesso! Os dados foram salvos." 
        : "✅ Veículo atualizado com sucesso! Os dados foram salvos."
      );
      
      setTimeout(() => {
        setEditingVehicle(null);
        setFormData(null);
        setIsCreating(false);
      }, 2000);
    } catch (error: any) {
      alert(`ERRO AO SALVAR: ${error.message}\n\nDica: Se você fez upload de muitas imagens, tente usar URLs de imagens da internet em vez de enviar o arquivo.`);
    }
  };

  const handleResetDatabase = () => {
    if (window.confirm("ATENÇÃO: Isso apagará TODOS os veículos cadastrados e restaurará o padrão do sistema. Tem certeza?")) {
      const { resetVehiclesStorage } = require("@/utils/vehicleStorage");
      resetVehiclesStorage();
      setVehicles(getVehicles()); // Recarrega o padrão
      alert("Banco de dados resetado para o padrão inicial.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans selection:bg-[#C5A059] selection:text-black">
        <div className="bg-[#121212] border border-white/10 rounded-sm p-12 max-w-md w-full text-center">
          <div className="mb-8">
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-4">
              Grupo Nexi
            </span>
            <h1 className="font-serif text-3xl text-white mb-2">Portal Administrativo</h1>
            <p className="text-[#A0A0A0] text-sm font-light tracking-wide">Gestão de Ativos & Frota</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white text-center placeholder:text-[#A0A0A0]/50 focus:border-[#C5A059] focus:outline-none transition-colors tracking-widest"
                placeholder="SENHA DE ACESSO"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
            >
              Entrar
            </button>
          </form>
          
          <p className="text-[10px] text-[#A0A0A0] mt-8 uppercase tracking-widest opacity-50">
            Acesso Restrito • Monitorado
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black">
      <LuxuryHeader />
      
      {/* Admin Header */}
      <section className="pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-4">
                Backoffice
              </span>
              <h1 className="font-serif text-4xl text-white mb-2">Gestão de Veículos</h1>
              <p className="text-[#A0A0A0] font-light tracking-wide text-sm">
                {Object.keys(vehicles).length} ativos cadastrados no portfólio.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleCreate}
                className="px-6 py-3 border border-[#C5A059] text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-black transition-colors duration-300"
              >
                + Novo Veículo
              </button>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setPassword("");
                  setEditingVehicle(null);
                  setFormData(null);
                }}
                className="px-6 py-3 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
              >
                Sair
              </button>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
             <button 
               onClick={handleResetDatabase}
               className="text-red-500 text-[10px] uppercase tracking-widest hover:text-red-400 underline"
             >
               Resetar Banco de Dados (Emergência)
             </button>
          </div>
        </div>
      </section>

      {/* Vehicles List */}
      <section className="py-12 px-6">
        <div className="max-w-[1600px] mx-auto">
          {saveMessage && (
            <div className="bg-[#C5A059]/10 border border-[#C5A059] text-[#C5A059] px-6 py-4 mb-8 text-sm tracking-wide">
              {saveMessage}
            </div>
          )}
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-[#A0A0A0] font-normal text-xs uppercase tracking-widest">ID</th>
                  <th className="py-4 px-4 text-[#A0A0A0] font-normal text-xs uppercase tracking-widest">Veículo</th>
                  <th className="py-4 px-4 text-[#A0A0A0] font-normal text-xs uppercase tracking-widest">Marca</th>
                  <th className="py-4 px-4 text-[#A0A0A0] font-normal text-xs uppercase tracking-widest">Tipo</th>
                  <th className="py-4 px-4 text-[#A0A0A0] font-normal text-xs uppercase tracking-widest">Assinatura</th>
                  <th className="py-4 px-4 text-[#A0A0A0] font-normal text-xs uppercase tracking-widest">Atualizado em</th>
                  <th className="py-4 px-4 text-[#A0A0A0] font-normal text-xs uppercase tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {Object.values(vehicles).map((vehicle, index) => (
                  <tr key={vehicle.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-[#A0A0A0] font-mono">{vehicle.id}</td>
                    <td className="py-4 px-4 font-medium text-white">{vehicle.title}</td>
                    <td className="py-4 px-4 text-[#CCCCCC]">{vehicle.brand}</td>
                    <td className="py-4 px-4">
                      <span className="border border-white/20 px-2 py-1 text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                        {vehicle.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#C5A059]">{vehicle.prices.assinatura.monthly}</td>
                    <td className="py-4 px-4 text-[#A0A0A0] text-xs">
                      {lastUpdated[vehicle.id] || "-"}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex justify-end gap-4">
                        <button
                          onClick={() => handleEdit(vehicle.id)}
                          className="text-white hover:text-[#C5A059] transition-colors text-xs uppercase tracking-wider"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(vehicle.id)}
                          className="text-[#A0A0A0] hover:text-red-500 transition-colors text-xs uppercase tracking-wider"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Edit/Create Modal */}
      {editingVehicle && formData && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#121212] border border-white/10 w-full max-w-5xl my-8 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#121212] border-b border-white/10 p-8 z-10 flex justify-between items-center">
              <div>
                <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase block mb-2">
                  Editor de Ativo
                </span>
                <h3 className="font-serif text-2xl text-white">
                  {isCreating ? "Novo Cadastro" : `Editando: ${formData.title}`}
                </h3>
              </div>
              <button 
                onClick={handleCancel}
                className="text-[#A0A0A0] hover:text-white text-2xl transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <form className="space-y-12">
                
                {/* Images Section */}
                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Imagens & Visual</h4>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={formData.images[0]}
                        alt="Preview"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/600x400/000000/FFFFFF?text=Sem+Imagem";
                        }}
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">
                          Upload (Base64)
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="w-full text-sm text-[#A0A0A0] file:mr-4 file:py-2 file:px-4 file:border file:border-[#C5A059] file:text-[#C5A059] file:bg-transparent file:text-xs file:uppercase file:tracking-widest hover:file:bg-[#C5A059] hover:file:text-black transition-all cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">
                          URL da Imagem
                        </label>
                        <input
                          type="text"
                          value={formData.images[0]}
                          onChange={(e) => handleImageUrlChange(0, e.target.value)}
                          className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Dados Principais</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Título *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Marca *</label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => handleInputChange("brand", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Versão *</label>
                      <input
                        type="text"
                        value={formData.version}
                        onChange={(e) => handleInputChange("version", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Tipo *</label>
                      <input
                        type="text"
                        value={formData.type}
                        onChange={(e) => handleInputChange("type", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Ano *</label>
                      <input
                        type="text"
                        value={formData.year}
                        onChange={(e) => handleInputChange("year", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Cliente *</label>
                      <select
                        value={formData.clientType}
                        onChange={(e) => handleInputChange("clientType", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                      >
                        <option value="Pessoa Física">Pessoa Física</option>
                        <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Especificações Técnicas</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Combustível</label>
                      <input
                        type="text"
                        value={formData.fuelType}
                        onChange={(e) => handleInputChange("fuelType", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Câmbio</label>
                      <input
                        type="text"
                        value={formData.transmission}
                        onChange={(e) => handleInputChange("transmission", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Lugares</label>
                      <input
                        type="text"
                        value={formData.seats}
                        onChange={(e) => handleInputChange("seats", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Motor</label>
                      <input
                        type="text"
                        value={formData.engine}
                        onChange={(e) => handleInputChange("engine", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Cor</label>
                      <input
                        type="text"
                        value={formData.color}
                        onChange={(e) => handleInputChange("color", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Portas</label>
                      <input
                        type="text"
                        value={formData.doors}
                        onChange={(e) => handleInputChange("doors", e.target.value)}
                        className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Precificação</h4>
                  
                  {/* Assinatura */}
                  <div className="bg-white/5 p-6 border border-white/10">
                    <h5 className="text-[#C5A059] font-serif text-lg mb-4">Signature Experience (Assinatura)</h5>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Mensalidade *</label>
                        <input
                          type="text"
                          value={formData.prices.assinatura.monthly}
                          onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "monthly")}
                          className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Prazo</label>
                        <input
                          type="text"
                          value={formData.prices.assinatura.term}
                          onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "term")}
                          className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Franquia</label>
                        <input
                          type="text"
                          value={formData.prices.assinatura.mileage}
                          onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "mileage")}
                          className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consórcio */}
                  <div className="bg-white/5 p-6 border border-white/10">
                    <h5 className="text-[#C5A059] font-serif text-lg mb-4">Equity Planning (Consórcio)</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Mensalidade *</label>
                        <input
                          type="text"
                          value={formData.prices.consorcio.monthly}
                          onChange={(e) => handleInputChange("prices", e.target.value, "consorcio", "monthly")}
                          className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Prazo</label>
                        <input
                          type="text"
                          value={formData.prices.consorcio.term}
                          onChange={(e) => handleInputChange("prices", e.target.value, "consorcio", "term")}
                          className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Descrição Editorial</h4>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 p-4 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors leading-relaxed"
                    placeholder="Texto descritivo para a página de detalhes..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-8 border-t border-white/10">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 py-4 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex-1 py-4 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
                  >
                    {isCreating ? "Cadastrar Ativo" : "Salvar Alterações"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <LuxuryFooter />
    </div>
  );
};
