import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useState, useEffect } from "react";
import { vehiclesData, VehicleData } from "@/data/vehiclesData";

export const AdminVehiclesPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [vehicles, setVehicles] = useState<Record<string, VehicleData>>(vehiclesData);
  const [editingVehicle, setEditingVehicle] = useState<string | null>(null);
  const [formData, setFormData] = useState<VehicleData | null>(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Record<string, string>>({});

  useEffect(() => {
    // Carrega datas de atualização do localStorage
    const savedDates = localStorage.getItem('vehicleUpdateDates');
    if (savedDates) {
      setLastUpdated(JSON.parse(savedDates));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "FERREIRALUCA") {
      setIsAuthenticated(true);
      setSaveMessage("");
    } else {
      alert("Senha incorreta!");
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
    const newId = String(Math.max(...Object.keys(vehicles).map(Number)) + 1);
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
      
      const updatedDates = { ...lastUpdated };
      delete updatedDates[vehicleId];
      setLastUpdated(updatedDates);
      localStorage.setItem('vehicleUpdateDates', JSON.stringify(updatedDates));
      
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

    setVehicles(updatedVehicles);
    
    // Atualiza data de modificação
    const now = new Date().toLocaleString('pt-BR');
    const updatedDates = {
      ...lastUpdated,
      [editingVehicle]: now
    };
    setLastUpdated(updatedDates);
    localStorage.setItem('vehicleUpdateDates', JSON.stringify(updatedDates));
    
    console.log("Dados atualizados:", updatedVehicles[editingVehicle]);
    
    setSaveMessage(isCreating 
      ? "✅ Novo veículo criado com sucesso! Os dados foram salvos." 
      : "✅ Veículo atualizado com sucesso! Os dados foram salvos."
    );
    
    setTimeout(() => {
      setEditingVehicle(null);
      setFormData(null);
      setIsCreating(false);
    }, 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🔒</span>
            </div>
            <h1 className="text-3xl font-black text-blue-950 mb-2">Área Administrativa</h1>
            <p className="text-gray-600">Gerenciamento de Veículos</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
                placeholder="Digite a senha"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Acessar Sistema
            </button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            Acesso restrito apenas para administradores autorizados
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Admin Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 pt-32 pb-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-black text-white mb-2">Gerenciamento de Veículos</h1>
              <p className="text-blue-100">Administração Use Carro • {Object.keys(vehicles).length} veículos cadastrados</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleCreate}
                className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors cursor-pointer flex items-center gap-2"
              >
                <span className="text-xl">➕</span> Novo Veículo
              </button>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setPassword("");
                  setEditingVehicle(null);
                  setFormData(null);
                }}
                className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles List */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          {saveMessage && (
            <div className="bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg mb-6 font-semibold">
              {saveMessage}
            </div>
          )}
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">ID</th>
                    <th className="px-6 py-4 text-left font-bold">Veículo</th>
                    <th className="px-6 py-4 text-left font-bold">Marca</th>
                    <th className="px-6 py-4 text-left font-bold">Tipo</th>
                    <th className="px-6 py-4 text-left font-bold">Assinatura</th>
                    <th className="px-6 py-4 text-left font-bold">Última Atualização</th>
                    <th className="px-6 py-4 text-left font-bold">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(vehicles).map((vehicle, index) => (
                    <tr key={vehicle.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-mono text-sm">{vehicle.id}</td>
                      <td className="px-6 py-4 font-semibold">{vehicle.title}</td>
                      <td className="px-6 py-4">{vehicle.brand}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {vehicle.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-green-600">
                        {vehicle.prices.assinatura.monthly}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {lastUpdated[vehicle.id] || "Não atualizado"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(vehicle.id)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer font-semibold text-sm"
                          >
                            ✏️ Editar
                          </button>
                          <button
                            onClick={() => handleDelete(vehicle.id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors cursor-pointer font-semibold text-sm"
                          >
                            🗑️ Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Edit/Create Modal */}
      {editingVehicle && formData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">
                  {isCreating ? "➕ Criar Novo Veículo" : `✏️ Editar Veículo #${editingVehicle}`}
                </h3>
                <button 
                  onClick={handleCancel}
                  className="text-white hover:text-gray-200 text-3xl font-bold cursor-pointer"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <form className="space-y-6">
                {/* Images Section */}
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">🖼️ Imagens do Veículo</h4>
                  
                  {/* Image Preview */}
                  <div className="mb-4">
                    <div className="bg-white rounded-lg p-4 border-2 border-dashed border-purple-300">
                      <img
                        src={formData.images[0]}
                        alt="Preview"
                        className="w-full h-64 object-contain rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/600x400?text=Imagem+não+disponível";
                        }}
                      />
                    </div>
                  </div>

                  {/* Upload Image */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      📤 Upload de Imagem (Base64)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:font-semibold hover:file:bg-purple-700 cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      A imagem será convertida em Base64 e armazenada diretamente
                    </p>
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      🔗 URL da Imagem Principal
                    </label>
                    <input
                      type="text"
                      value={formData.images[0]}
                      onChange={(e) => handleImageUrlChange(0, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                      placeholder="https://exemplo.com/imagem.png"
                    />
                  </div>
                </div>

                {/* Basic Info */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">📋 Informações Básicas</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título do Veículo *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Marca *</label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => handleInputChange("brand", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Versão *</label>
                      <input
                        type="text"
                        value={formData.version}
                        onChange={(e) => handleInputChange("version", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo *</label>
                      <input
                        type="text"
                        value={formData.type}
                        onChange={(e) => handleInputChange("type", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="Ex: SUV Compacto, Hatch, Sedan"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ano *</label>
                      <input
                        type="text"
                        value={formData.year}
                        onChange={(e) => handleInputChange("year", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Cliente *</label>
                      <select
                        value={formData.clientType}
                        onChange={(e) => handleInputChange("clientType", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Pessoa Física">Pessoa Física</option>
                        <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-cyan-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">⚙️ Especificações</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Combustível</label>
                      <input
                        type="text"
                        value={formData.fuelType}
                        onChange={(e) => handleInputChange("fuelType", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="Ex: Flex, Gasolina"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Transmissão</label>
                      <input
                        type="text"
                        value={formData.transmission}
                        onChange={(e) => handleInputChange("transmission", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="Ex: Manual, Automático"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Lugares</label>
                      <input
                        type="text"
                        value={formData.seats}
                        onChange={(e) => handleInputChange("seats", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="Ex: 5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Motor</label>
                      <input
                        type="text"
                        value={formData.engine}
                        onChange={(e) => handleInputChange("engine", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="Ex: 1.0, 1.6 Turbo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cor</label>
                      <input
                        type="text"
                        value={formData.color}
                        onChange={(e) => handleInputChange("color", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="Ex: Branco, Prata"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Portas</label>
                      <input
                        type="text"
                        value={formData.doors}
                        onChange={(e) => handleInputChange("doors", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="Ex: 4"
                      />
                    </div>
                  </div>
                </div>

                {/* Prices - Assinatura */}
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">💳 Assinatura</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Valor Mensal *</label>
                      <input
                        type="text"
                        value={formData.prices.assinatura.monthly}
                        onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "monthly")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="R$ 0,00"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prazo</label>
                      <input
                        type="text"
                        value={formData.prices.assinatura.term}
                        onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "term")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="36 meses"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quilometragem</label>
                      <input
                        type="text"
                        value={formData.prices.assinatura.mileage}
                        onChange={(e) => handleInputChange("prices", e.target.value, "assinatura", "mileage")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="1.000 km/mês"
                      />
                    </div>
                  </div>
                </div>

                {/* Prices - Financiamento */}
                <div className="bg-blue-900/5 rounded-xl p-6 border-2 border-blue-900/20">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">🏦 Financiamento</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Valor Mensal *</label>
                      <input
                        type="text"
                        value={formData.prices.financiamento.monthly}
                        onChange={(e) => handleInputChange("prices", e.target.value, "financiamento", "monthly")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="R$ 0,00"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prazo</label>
                      <input
                        type="text"
                        value={formData.prices.financiamento.term}
                        onChange={(e) => handleInputChange("prices", e.target.value, "financiamento", "term")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                        placeholder="60 meses"
                      />
                    </div>
                  </div>
                </div>

                {/* Prices - Consórcio */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">🤝 Consórcio</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Valor Mensal *</label>
                      <input
                        type="text"
                        value={formData.prices.consorcio.monthly}
                        onChange={(e) => handleInputChange("prices", e.target.value, "consorcio", "monthly")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                        placeholder="R$ 0,00"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prazo</label>
                      <input
                        type="text"
                        value={formData.prices.consorcio.term}
                        onChange={(e) => handleInputChange("prices", e.target.value, "consorcio", "term")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                        placeholder="80 meses"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">📝 Descrição</h4>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                    placeholder="Descrição detalhada do veículo..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 bg-gray-200 text-gray-700 font-bold py-4 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
                  >
                    ❌ Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    {isCreating ? "➕ Criar Veículo" : "💾 Atualizar Online"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
