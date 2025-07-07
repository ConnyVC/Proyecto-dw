import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;//sta línea asegura que cada solicitud lleve el token de autenticación necesario para acceder a recursos protegidos en la API.
  }
  return config;
});

export default api;
