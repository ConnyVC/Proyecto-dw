import { useEffect, useState } from "react";
import { obtenerArriendosFinalizados } from "../services/arriendoService";
import type { ArriendoCompleto } from "../types";

export default function ArriendosFinalizados() {
  const [arriendos, setArriendos] = useState<ArriendoCompleto[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    cargarArriendos();
  }, []);

  const cargarArriendos = async () => {
    try {
      const data = await obtenerArriendosFinalizados();
      setArriendos(data);
    } catch (err) {
      setError("Error al cargar los arriendos finalizados.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Arriendos Finalizados</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      {arriendos.length === 0 ? (
        <p>No hay arriendos finalizados aún.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Fecha inicio</th>
              <th>Fecha fin</th>
              <th>Patente</th>
              <th>Tipo</th>
              <th>RUT cliente</th>
              <th>Nombre cliente</th>
            </tr>
          </thead>
          <tbody>
            {arriendos.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{new Date(a.fecha_inicio).toLocaleDateString()}</td>
                <td>{a.fecha_fin ? new Date(a.fecha_fin).toLocaleDateString() : "-"}</td>
                <td>{a.patente_vehiculo}</td>
                <td>{a.tipo_vehiculo}</td>
                <td>{a.rut_cliente}</td>
                <td>{a.nombre_cliente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
