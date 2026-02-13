import { vehiclesData, VehicleData } from "@/data/vehiclesData";

// VERSÃO SIMPLIFICADA - SEM LOCALSTORAGE
// Retorna SEMPRE os dados do código para evitar tela branca

export const getVehicles = (): Record<string, VehicleData> => {
  return { ...vehiclesData };
};

export const getVehicleById = (id: string): VehicleData | undefined => {
  if (!id) return undefined;
  return vehiclesData[id];
};

export const saveVehicles = (vehicles: Record<string, VehicleData>) => {
  console.log("saveVehicles chamado (desabilitado nesta versão)");
  return true;
};

export const resetVehiclesStorage = () => {
  console.log("resetVehiclesStorage chamado (desabilitado nesta versão)");
  return true;
};

export const clearAllStorage = () => {
  try {
    localStorage.clear();
  } catch (e) {
    console.error(e);
  }
  return true;
};

export const getStorageUsage = () => "0";
export const getLastUpdates = () => ({});
export const saveLastUpdate = (id: string) => {};
export const removeLastUpdate = (id: string) => {};
