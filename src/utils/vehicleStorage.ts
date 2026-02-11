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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
    // Dispara um evento para que outros componentes saibam que os dados mudaram
    window.dispatchEvent(new Event("vehiclesUpdated"));
  } catch (error) {
    console.error("Erro ao salvar veículos:", error);
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
  const updates = getLastUpdates();
  updates[id] = new Date().toLocaleString('pt-BR');
  localStorage.setItem(UPDATE_DATE_KEY, JSON.stringify(updates));
};

export const removeLastUpdate = (id: string) => {
  const updates = getLastUpdates();
  delete updates[id];
  localStorage.setItem(UPDATE_DATE_KEY, JSON.stringify(updates));
};
