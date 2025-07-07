import api from "./api";
import type { Arriendo } from "../types/index"
import type { ArriendoCompleto } from "../types/index";
import type { Estadistica } from "../types/index";

export async function crearArriendo(data: Arriendo) {
  const response = await api.post("/arriendos", data);
  return response.data;
}
export async function obtenerArriendosActivos(): Promise<ArriendoCompleto[]> {
  const response = await api.get("/arriendos/activos");
  return response.data;
}

export async function registrarDevolucion(id: number) {
  const response = await api.patch(`/arriendos/${id}/devolver`);
  return response.data;
}

export async function eliminarArriendo(id: number) {
  const response = await api.delete(`/arriendos/${id}`);
  return response.data;
}

export async function obtenerArriendosFinalizados(): Promise<ArriendoCompleto[]> {
  const response = await api.get("/arriendos/finalizados");
  return response.data;
}

export async function obtenerEstadisticas(): Promise<Estadistica[]> {
  const response = await api.get("/arriendos/estadisticas");
  return response.data;
}