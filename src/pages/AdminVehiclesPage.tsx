import { LuxuryHeader } from "@/components/LuxuryHeader";
import { LuxuryFooter } from "@/components/LuxuryFooter";
import { useState, useEffect } from "react";
import { VehicleData } from "@/data/vehiclesData";
import { getVehicles, saveVehicles, getLastUpdates, saveLastUpdate, removeLastUpdate, clearAllStorage, getStorageUsage } from "@/utils/vehicleStorage";

export const AdminVehiclesPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [vehicles, setVehicles] = useState<Record<string, VehicleData>>({});
  const [editingVehicle, setEditingVehicle] = useState<string | null>(null);
  const [formData, setFormData] = useState<VehicleData | null>(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Record<string, string>>({});
  const [storageUsage, setStorageUsage] = useState("0");
  const [isCompressing, setIsCompressing] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = () => {
    setVehicles(getVehicles());
    setLastUpdated(getLastUpdates());
    setStorageUsage(getStorageUsage());
  };

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
    const existingIds = Object.keys(vehicles).map(Number).sort((a, b) => a - b);
    let nextId = 1;
    for (let i = 0; i < existingIds.length; i++) {
      if (existingIds[i] === nextId) nextId++;
      else if (existingIds[i] > nextId) break;
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
        assinatura: { monthly: "R$ 0,00", term: "36 meses", mileage: "1.000 km/mês", details: [] },
        financiamento: { monthly: "R$ 0,00", term: "60 meses", details: [] },
        consorcio: { monthly: "R$ 0,00", term: "80 meses", details: [] }
      },
      images: ["https://via.placeholder.com/600x400?text=Sem+Imagem"],
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
      
      try {
        saveVehicles(updatedVehicles);
        setVehicles(updatedVehicles);
        removeLastUpdate(vehicleId);
        setLastUpdated(getLastUpdates());
        setStorageUsage(getStorageUsage());
        setSaveMessage(`✅ Veículo excluído com sucesso!`);
      } catch (error) {
        alert("Erro ao excluir. Tente limpar a memória.");
      }
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
      return { ...prev, [field]: value };
    });
  };

  // Função de Compressão de Imagem Otimizada
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 600; // Reduzido para economizar espaço
          const scaleSize = MAX_WIDTH / img.width;
          const width = Math.min(MAX_WIDTH, img.width);
          const height = img.height * (width / img.width);

          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Comprime para JPEG com qualidade 0.5 (50%)
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.5);
          resolve(compressedBase64);
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && formData) {
      setIsCompressing(true);
      try {
        const compressedUrl = await compressImage(file);
        setFormData(prev => {
          if (!prev) return prev;
          return {
            ...prev,
            images: [compressedUrl, ...prev.images.slice(1)]
          };
        });
      } catch (error) {
        alert("Erro ao processar imagem.");
      } finally {
        setIsCompressing(false);
      }
    }
  };

  const handleImageUrlChange = (index: number, url: string) => {
    if (!formData) return;
    setFormData(prev => {
      if (!prev) return prev;
      const newImages = [...prev.images];
      newImages[index] = url;
      return { ...prev, images: newImages };
    });
  };

  const handleSave = () => {
    if (!formData || !editingVehicle) return;

    const updatedVehicles = {
      ...vehicles,
      [editingVehicle]: formData
    };

    try {
      saveVehicles(updatedVehicles);
      setVehicles(updatedVehicles);
      saveLastUpdate(editingVehicle);
      setLastUpdated(getLastUpdates());
      setStorageUsage(getStorageUsage());
      
      setSaveMessage(isCreating 
        ? "✅ Novo veículo criado com sucesso!" 
        : "✅ Veículo atualizado com sucesso!"
      );
      
      setTimeout(() => {
        setEditingVehicle(null);
        setFormData(null);
        setIsCreating(false);
      }, 1500);
    } catch (error: any) {
      alert(`ERRO AO SALVAR: ${error.message}\n\nTente usar o botão 'LIMPEZA TOTAL' no topo da página para liberar espaço.`);
    }
  };

  const handleFullCleanup = () => {
    if (window.confirm("⚠️ ATENÇÃO: Isso apagará TODOS os dados salvos no navegador e restaurará o site para o estado original. Use isso se estiver com erros de 'Armazenamento Cheio'. Continuar?")) {
      clearAllStorage();
      loadData();
      alert("✅ Memória limpa com sucesso! O sistema foi resetado.");
      window.location.reload();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans selection:bg-[#C5A059] selection:text-black">
        <div className="bg-[#121212] border border-white/10 rounded-sm p-12 max-w-md w-full text-center">
          <div className="mb-8">
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-4">Grupo Nexi</span>
            <h1 className="font-serif text-3xl text-white mb-2">Portal Administrativo</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-3 text-white text-center focus:border-[#C5A059] focus:outline-none tracking-widest"
              placeholder="SENHA DE ACESSO"
              required
            />
            <button type="submit" className="w-full py-4 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059] selection:text-black">
      <LuxuryHeader />
      
      <section className="pt-40 pb-12 px-6 border-b border-white/5">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Barra de Ferramentas de Manutenção */}
          <div className="bg-red-900/20 border border-red-900/50 p-4 mb-8 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              <div>
                <h3 className="text-red-400 font-bold text-sm uppercase tracking-wider">Ferramentas de Manutenção</h3>
                <p className="text-xs text-gray-400">Use se estiver enfrentando problemas de salvamento ou erros.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-xs font-mono ${parseFloat(storageUsage) > 4.5 ? 'text-red-500 font-bold animate-pulse' : 'text-gray-400'}`}>
                Memória: {storageUsage} MB / 5.00 MB
              </span>
              <button 
                onClick={handleFullCleanup} 
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider transition-colors"
              >
                Limpeza Total (Corrigir Erros)
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-4">Backoffice</span>
              <h1 className="font-serif text-4xl text-white mb-2">Gestão de Veículos</h1>
              <p className="text-[#A0A0A0] text-sm mt-2">{Object.keys(vehicles).length} veículos ativos.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={handleCreate} className="px-6 py-3 border border-[#C5A059] text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-black transition-colors">+ Novo Veículo</button>
              <button onClick={() => setIsAuthenticated(false)} className="px-6 py-3 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">Sair</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-[1600px] mx-auto">
          {saveMessage && <div className="bg-[#C5A059]/10 border border-[#C5A059] text-[#C5A059] px-6 py-4 mb-8 text-sm tracking-wide rounded">{saveMessage}</div>}
          
          <div className="overflow-x-auto bg-[#121212] border border-white/5 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest">ID</th>
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest">Veículo</th>
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest">Marca</th>
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest">Assinatura</th>
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {Object.values(vehicles).length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">Nenhum veículo cadastrado. Clique em "+ Novo Veículo" para começar.</td>
                  </tr>
                ) : (
                  Object.values(vehicles).map((vehicle) => (
                    <tr key={vehicle.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-[#A0A0A0] font-mono">{vehicle.id}</td>
                      <td className="py-4 px-4 font-medium text-white">{vehicle.title}</td>
                      <td className="py-4 px-4 text-[#CCCCCC]">{vehicle.brand}</td>
                      <td className="py-4 px-4 text-[#C5A059]">{vehicle.prices.assinatura.monthly}</td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex justify-end gap-4">
                          <button onClick={() => handleEdit(vehicle.id)} className="text-white hover:text-[#C5A059] text-xs uppercase tracking-wider font-bold">Editar</button>
                          <button onClick={() => handleDelete(vehicle.id)} className="text-[#A0A0A0] hover:text-red-500 text-xs uppercase tracking-wider">Excluir</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {editingVehicle && formData && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#121212] border border-white/10 w-full max-w-5xl my-8 shadow-2xl relative rounded-lg">
            <div className="sticky top-0 bg-[#121212] border-b border-white/10 p-8 z-10 flex justify-between items-center rounded-t-lg">
              <div>
                <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase block mb-2">Editor de Ativo</span>
                <h3 className="font-serif text-2xl text-white">{isCreating ? "Novo Cadastro" : `Editando: ${formData.title}`}</h3>
              </div>
              <button onClick={handleCancel} className="text-[#A0A0A0] hover:text-white text-2xl transition-colors">✕</button>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <form className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Imagens & Visual</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden rounded">
                      <img src={formData.images[0]} alt="Preview" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400/000000/FFFFFF?text=Sem+Imagem"; }} />
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded border border-white/10">
                        <label className="block text-[#C5A059] text-xs uppercase tracking-widest mb-2 font-bold">Upload de Foto (Recomendado)</label>
                        <p className="text-xs text-gray-400 mb-3">A imagem será comprimida automaticamente para economizar espaço.</p>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-sm text-[#A0A0A0] file:mr-4 file:py-2 file:px-4 file:border file:border-[#C5A059] file:text-[#C5A059] file:bg-transparent file:text-xs file:uppercase file:tracking-widest hover:file:bg-[#C5A059] hover:file:text-black transition-all cursor-pointer rounded" />
                        {isCompressing && <p className="text-[#C5A059] text-xs mt-2 animate-pulse font-bold">⏳ Otimizando imagem... aguarde...</p>}
                      </div>
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Ou URL da Imagem</label>
                        <input type="text" value={formData.images[0]} onChange={(e) => handleImageUrlChange(0, e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none transition-colors rounded" placeholder="https://..." />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Dados Principais</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Título *</label>
                      <input type="text" value={formData.title} onChange={(e) => handleInputChange("title", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" required />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Marca *</label>
                      <input type="text" value={formData.brand} onChange={(e) => handleInputChange("brand", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" required />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Versão *</label>
                      <input type="text" value={formData.version} onChange={(e) => handleInputChange("version", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" required />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Tipo *</label>
                      <input type="text" value={formData.type} onChange={(e) => handleInputChange("type", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" required />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Ano *</label>
                      <input type="text" value={formData.year} onChange={(e) => handleInputChange("year", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" required />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Cliente *</label>
                      <select value={formData.clientType} onChange={(e) => handleInputChange("clientType", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded">
                        <option value="Pessoa Física">Pessoa Física</option>
                        <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Descrição</h4>
                  <div>
                    <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Sobre o Veículo</label>
                    <textarea 
                      value={formData.description} 
                      onChange={(e) => handleInputChange("description", e.target.value)} 
                      className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded h-32 resize-y" 
                      placeholder="Descreva os detalhes, diferenciais e equipamentos do veículo..."
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-serif text-xl border-b border-white/10 pb-2">Precificação</h4>
                  <div className="bg-white/5 p-6 border border-white/10 rounded">
                    <h5 className="text-[#C5A059] font-serif text-lg mb-4">Signature Experience (Assinatura)</h5>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Mensalidade *</label>
                        <input type="text" value={formData.prices.assinatura.monthly} onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "monthly")} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" required />
                      </div>
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Prazo</label>
                        <input type="text" value={formData.prices.assinatura.term} onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "term")} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-6 border border-white/10 rounded">
                    <h5 className="text-[#C5A059] font-serif text-lg mb-4">Equity Planning (Consórcio)</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Mensalidade *</label>
                        <input type="text" value={formData.prices.consorcio.monthly} onChange={(e) => handleInputChange("prices", e.target.value, "consorcio", "monthly")} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" required />
                      </div>
                      <div>
                        <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Prazo</label>
                        <input type="text" value={formData.prices.consorcio.term} onChange={(e) => handleInputChange("prices", e.target.value, "consorcio", "term")} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-8 border-t border-white/10">
                  <button type="button" onClick={handleCancel} className="flex-1 py-4 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors rounded">Cancelar</button>
                  <button type="button" onClick={handleSave} className="flex-1 py-4 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors rounded">{isCreating ? "Cadastrar Ativo" : "Salvar Alterações"}</button>
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
