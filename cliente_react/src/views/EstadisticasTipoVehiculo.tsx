import { useEffect, useState } from "react";
import { obtenerEstadisticas } from "../services/arriendoService";
import type { Estadistica } from "../types/index";

export default function EstadisticasTipoVehiculo() {
  const [stats, setStats] = useState<Estadistica[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    cargarEstadisticas();
  }, []);

  const cargarEstadisticas = async () => {
    try {
      const data = await obtenerEstadisticas();
      setStats(data);
    } catch (err) {
      setError("Error al cargar estadísticas.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Estadísticas por tipo de vehículo</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row mt-4">
        {stats.map((item) => (
          <div className="col-md-4" key={item.tipo_vehiculo}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{item.tipo_vehiculo}</h5>
                <p className="card-text display-6">{item.cantidad}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
