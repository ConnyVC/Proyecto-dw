import { useEffect, useState } from "react";
import {
  obtenerArriendosActivos,
  registrarDevolucion,
  eliminarArriendo,
} from "../services/arriendoService";
import type { ArriendoCompleto } from "../types";

export default function ArriendosActivos() {
  const [arriendos, setArriendos] = useState<ArriendoCompleto[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    cargarArriendos();
  }, []);

  const cargarArriendos = async () => {
    try {
      const data = await obtenerArriendosActivos();
      setArriendos(data);
    } catch (err) {
      setError("Error al cargar los arriendos.");
    }
  };

  const handleDevolucion = async (id: number) => {
    if (!window.confirm("¿Confirmar devolución de vehículo?")) return;

    try {
      await registrarDevolucion(id);
      await cargarArriendos(); // Recargar lista
    } catch (err) {
      setError("Error al registrar devolución.");
    }
  };

  const handleEliminar = async (id: number) => {
    if (!window.confirm("¿Seguro que deseas eliminar este arriendo?")) return;
    try {
      await eliminarArriendo(id);
      await cargarArriendos();
    } catch (err) {
      setError("Error al eliminar arriendo.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Arriendos Activos</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      {arriendos.length === 0 ? (
        <p>No hay arriendos activos.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Fecha inicio</th>
              <th>Patente</th>
              <th>Tipo</th>
              <th>RUT cliente</th>
              <th>Nombre cliente</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {arriendos.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{new Date(a.fecha_inicio).toLocaleDateString()}</td>
                <td>{a.patente_vehiculo}</td>
                <td>{a.tipo_vehiculo}</td>
                <td>{a.rut_cliente}</td>
                <td>{a.nombre_cliente}</td>
                <td>
                  <button
                    onClick={() => handleDevolucion(a.id)}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Registrar devolución
                  </button>
                  <button
                    onClick={() => handleEliminar(a.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
