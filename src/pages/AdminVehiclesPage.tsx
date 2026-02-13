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
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportData, setExportData] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = () => {
    try {
      setVehicles(getVehicles());
    } catch (e) {
      console.error("Erro ao carregar dados", e);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "NEXI2026") {
      setIsAuthenticated(true);
      setSaveMessage("");
    } else {
      alert("Acesso Negado.");
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
        consorcio: { monthly: "R$ 0,00", term: "80 meses", credit: "R$ 0,00", details: [] }
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
    if (window.confirm(`Excluir ${vehicles[vehicleId].title}?`)) {
      const updatedVehicles = { ...vehicles };
      delete updatedVehicles[vehicleId];
      saveVehicles(updatedVehicles);
      setVehicles(updatedVehicles);
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
      setSaveMessage("✅ Salvo com sucesso!");
      setTimeout(() => {
        setEditingVehicle(null);
        setFormData(null);
        setIsCreating(false);
      }, 1000);
    } catch (error: any) {
      alert(`Erro ao salvar: ${error.message}`);
    }
  };

  const handleExportJSON = () => {
    // Extração limpa apenas dos dados essenciais
    const extractedData = Object.values(vehicles).map(v => ({
      titulo: v.title,
      marca: v.brand,
      versao: v.version,
      categoria: v.type,
      ano: v.year,
      preco_assinatura: v.prices.assinatura.monthly,
      preco_consorcio: v.prices.consorcio.monthly,
      imagem: v.images[0] || ""
    }));

    setExportData(JSON.stringify(extractedData, null, 2));
    setShowExportModal(true);
  };

  const handleResetSystem = () => {
    if(window.confirm("Isso irá resetar o sistema para os dados originais do código. Confirmar?")) {
      clearAllStorage();
      window.location.reload();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans selection:bg-[#C5A059] selection:text-black">
        <div className="bg-[#121212] border border-white/10 rounded-sm p-12 max-w-md w-full text-center">
          <div className="mb-8">
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase block mb-4">Grupo Nexi</span>
            <h1 className="font-serif text-3xl text-white mb-2">Portal Admin</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-3 text-white text-center focus:border-[#C5A059] focus:outline-none tracking-widest"
              placeholder="SENHA"
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
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h1 className="font-serif text-4xl text-white mb-2">Gestão de Veículos</h1>
              <p className="text-[#A0A0A0] text-sm mt-2">{Object.keys(vehicles).length} veículos ativos.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={handleResetSystem} className="px-4 py-3 border border-red-900/50 text-red-500 text-xs font-bold tracking-[0.2em] uppercase hover:bg-red-900/20 transition-colors">Resetar Sistema</button>
              <button onClick={handleExportJSON} className="px-6 py-3 bg-blue-900/30 border border-blue-500/50 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase hover:bg-blue-500 hover:text-white transition-colors">Extrair JSON</button>
              <button onClick={handleCreate} className="px-6 py-3 border border-[#C5A059] text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-black transition-colors">+ Novo</button>
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
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest">Veículo</th>
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest">Preço Assinatura</th>
                  <th className="py-4 px-4 text-[#A0A0A0] text-xs uppercase tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {Object.values(vehicles).map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-white">
                      {vehicle.title}
                      <span className="block text-xs text-[#8C8C8C]">{vehicle.brand} • {vehicle.version}</span>
                    </td>
                    <td className="py-4 px-4 text-[#C5A059]">{vehicle.prices.assinatura.monthly}</td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex justify-end gap-4">
                        <button onClick={() => handleEdit(vehicle.id)} className="text-white hover:text-[#C5A059] text-xs uppercase tracking-wider font-bold">Editar</button>
                        <button onClick={() => handleDelete(vehicle.id)} className="text-[#A0A0A0] hover:text-red-500 text-xs uppercase tracking-wider">Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal de Exportação */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#121212] border border-[#C5A059] w-full max-w-3xl shadow-2xl relative rounded-lg p-8">
            <h3 className="font-serif text-2xl text-white mb-4">Dados JSON</h3>
            <textarea 
              readOnly 
              value={exportData} 
              className="w-full h-64 bg-black/50 border border-white/10 p-4 text-xs font-mono text-green-400 rounded mb-6 focus:outline-none"
            />
            <div className="flex justify-end gap-4">
              <button onClick={() => setShowExportModal(false)} className="px-6 py-3 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">Fechar</button>
              <button onClick={() => {navigator.clipboard.writeText(exportData); alert("Copiado!");}} className="px-6 py-3 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">Copiar</button>
            </div>
          </div>
        </div>
      )}

      {editingVehicle && formData && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#121212] border border-white/10 w-full max-w-4xl my-8 shadow-2xl relative rounded-lg">
            <div className="sticky top-0 bg-[#121212] border-b border-white/10 p-6 z-10 flex justify-between items-center rounded-t-lg">
              <h3 className="font-serif text-xl text-white">{isCreating ? "Novo Veículo" : "Editar Veículo"}</h3>
              <button onClick={handleCancel} className="text-[#A0A0A0] hover:text-white text-xl">✕</button>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <form className="space-y-8">
                
                {/* Imagem */}
                <div>
                  <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">URL da Imagem Principal</label>
                  <input type="text" value={formData.images[0]} onChange={(e) => handleImageUrlChange(0, e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" placeholder="https://..." />
                  {formData.images[0] && (
                    <div className="mt-4 aspect-video bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden rounded w-48">
                      <img src={formData.images[0]} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Dados Básicos */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Título *</label>
                    <input type="text" value={formData.title} onChange={(e) => handleInputChange("title", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                  </div>
                  <div>
                    <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Marca *</label>
                    <input type="text" value={formData.brand} onChange={(e) => handleInputChange("brand", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                  </div>
                  <div>
                    <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Versão</label>
                    <input type="text" value={formData.version} onChange={(e) => handleInputChange("version", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                  </div>
                  <div>
                    <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Ano</label>
                    <input type="text" value={formData.year} onChange={(e) => handleInputChange("year", e.target.value)} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                  </div>
                </div>

                {/* Preços */}
                <div className="bg-white/5 p-6 rounded border border-white/10">
                  <h4 className="text-[#C5A059] font-serif text-lg mb-4">Valores</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Mensalidade Assinatura</label>
                      <input type="text" value={formData.prices.assinatura.monthly} onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "monthly")} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                    </div>
                    <div>
                      <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Mensalidade Consórcio</label>
                      <input type="text" value={formData.prices.consorcio.monthly} onChange={(e) => handleInputChange("prices", e.target.value, "consorcio", "monthly")} className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#C5A059] focus:outline-none rounded" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <button type="button" onClick={handleCancel} className="flex-1 py-3 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors rounded">Cancelar</button>
                  <button type="button" onClick={handleSave} className="flex-1 py-3 bg-[#C5A059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors rounded">Salvar</button>
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
