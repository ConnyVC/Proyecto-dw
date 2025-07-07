import api from "./api";
import { Arriendo } from "../types;

export async function crearArriendo(data: Arriendo) {
  const response = await api.post("/arriendos", data);
  return response.data;
}
