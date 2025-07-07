import { useState } from "react";
import { crearArriendo } from "../services/arriendoService";
import { useNavigate } from "react-router-dom";

export default function IngresarArriendo() {
  const [patente, setPatente] = useState("");
  const [tipo, setTipo] = useState("Sedán");
  const [rut, setRut] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validarRut = (rut: string) => {
    return /^[0-9]+-[0-9kK]$/.test(rut);
  };

  const validarPatente = (pat: string) => {
    return /^[A-Z]{4}[0-9]{2}$/i.test(pat);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!patente || !tipo || !rut || !nombre) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validarPatente(patente)) {
      setError("La patente debe tener 4 letras y 2 números (ej: ABCD12).");
      return;
    }

    if (!validarRut(rut)) {
      setError("El RUT debe tener formato correcto (ej: 12345678-9).");
      return;
    }

    try {
      await crearArriendo({
        patente_vehiculo: patente,
        tipo_vehiculo: tipo as "Sedán" | "SUV" | "Camioneta",
        rut_cliente: rut,
        nombre_cliente: nombre,
      });
      setSuccess("Arriendo registrado exitosamente.");
      setPatente("");
      setTipo("Sedán");
      setRut("");
      setNombre("");
    } catch (err) {
      setError("Error al registrar el arriendo.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3>Ingresar nuevo arriendo</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patente:</label>
          <input
            type="text"
            className="form-control"
            value={patente}
            onChange={(e) => setPatente(e.target.value.toUpperCase())}
            placeholder="ABCD12"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de vehículo:</label>
          <select
            className="form-select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <option value="Sedán">Sedán</option>
            <option value="SUV">SUV</option>
            <option value="Camioneta">Camioneta</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">RUT cliente:</label>
          <input
            type="text"
            className="form-control"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="12345678-9"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre cliente:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <button type="submit" className="btn btn-success">Guardar arriendo</button>
      </form>
    </div>
  );
}
