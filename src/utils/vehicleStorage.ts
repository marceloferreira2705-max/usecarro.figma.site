import { vehiclesData, VehicleData } from "@/data/vehiclesData";

// NOVA CHAVE PARA FORÇAR O RESET TOTAL E LIMPEZA DE DADOS ANTIGOS
const STORAGE_KEY = "useCarro_Clean_Start_v13_FINAL_COLLECTION";
const UPDATE_DATE_KEY = "useCarro_Clean_Dates_v13_FINAL_COLLECTION";

export const getStorageUsage = () => {
  try {
    let total = 0;
    for (const x in localStorage) {
      if (!localStorage.hasOwnProperty(x)) continue;
      total += (localStorage[x].length * 2) / 1024 / 1024;
    }
    return total.toFixed(2); // Retorna em MB
  } catch {
    return "0";
  }
};

export const getVehicles = (): Record<string, VehicleData> => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error("Erro ao carregar veículos do storage:", error);
  }
  // Retorna os dados padrão (apenas o Volvo) se não houver nada salvo
  return vehiclesData;
};

export const saveVehicles = (vehicles: Record<string, VehicleData>) => {
  try {
    const serialized = JSON.stringify(vehicles);
    localStorage.setItem(STORAGE_KEY, serialized);
    
    // Dispara evento para atualizar a tela
    window.dispatchEvent(new Event("vehiclesUpdated"));
    return true;
  } catch (error: any) {
    console.error("Erro ao salvar veículos:", error);
    
    if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      throw new Error("Memória do navegador cheia! Tente usar o botão 'Limpar Memória Fantasma' ou use imagens menores.");
    }
    throw error;
  }
};

export const resetVehiclesStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(UPDATE_DATE_KEY);
    window.dispatchEvent(new Event("vehiclesUpdated"));
    return true;
  } catch (error) {
    console.error("Erro ao limpar storage:", error);
    return false;
  }
};

// Função drástica para limpar TUDO do localStorage se estiver corrompido/cheio
export const clearAllStorage = () => {
  try {
    localStorage.clear();
    window.dispatchEvent(new Event("vehiclesUpdated"));
    return true;
  } catch (error) {
    console.error("Erro ao limpar tudo:", error);
    return false;
  }
};

export const getVehicleById = (id: string): VehicleData | undefined => {
  const vehicles = getVehicles();
  return vehicles[id];
};

export const getLastUpdates = (): Record<string, string> => {
  try {
    const storedDates = localStorage.getItem(UPDATE_DATE_KEY);
    return storedDates ? JSON.parse(storedDates) : {};
  } catch {
    return {};
  }
};

export const saveLastUpdate = (id: string) => {
  try {
    const updates = getLastUpdates();
    updates[id] = new Date().toLocaleString('pt-BR');
    localStorage.setItem(UPDATE_DATE_KEY, JSON.stringify(updates));
  } catch (error) {
    console.error("Erro ao salvar data de atualização:", error);
  }
};

export const removeLastUpdate = (id: string) => {
  try {
    const updates = getLastUpdates();
    delete updates[id];
    localStorage.setItem(UPDATE_DATE_KEY, JSON.stringify(updates));
  } catch (error) {
    console.error("Erro ao remover data de atualização:", error);
  }
};
