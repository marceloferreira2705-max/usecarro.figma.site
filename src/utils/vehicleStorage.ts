import { vehiclesData, VehicleData } from "@/data/vehiclesData";

const STORAGE_KEY = "useCarroVehicles";
const UPDATE_DATE_KEY = "vehicleUpdateDates";

export const getVehicles = (): Record<string, VehicleData> => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error("Erro ao carregar veículos do storage:", error);
  }
  // Retorna os dados padrão se não houver nada salvo ou der erro
  return vehiclesData;
};

export const saveVehicles = (vehicles: Record<string, VehicleData>) => {
  try {
    const serialized = JSON.stringify(vehicles);
    localStorage.setItem(STORAGE_KEY, serialized);
    // Dispara um evento para que outros componentes saibam que os dados mudaram
    window.dispatchEvent(new Event("vehiclesUpdated"));
    return true;
  } catch (error) {
    console.error("Erro ao salvar veículos:", error);
    // Se for erro de cota (armazenamento cheio)
    if (error instanceof DOMException && 
        (error.name === 'QuotaExceededError' || 
         error.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
      throw new Error("Armazenamento cheio! Imagens muito grandes. Tente usar URLs externas ou imagens menores.");
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
