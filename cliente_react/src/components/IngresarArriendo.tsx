import { useState } from "react";//Importa el hook useState desde la librería React
import { crearArriendo } from "../services/arriendoService";// Importa la función crearArriendo desde el servicio arriendoService
import { useNavigate } from "react-router-dom";// Importa el hook useNavigate desde la librería react-router-dom para manejar la navegación

export default function IngresarArriendo() {// Componente funcional para ingresar un nuevo arriendo
  const [patente, setPatente] = useState("");// Estado para almacenar la patente del vehículo
  const [tipo, setTipo] = useState("Sedán");// Estado para almacenar el tipo de vehículo, con valor por defecto "Sedán"
  const [rut, setRut] = useState("");// Estado para almacenar el RUT del cliente
  const [nombre, setNombre] = useState("");// Estado para almacenar el nombre del cliente
  const [error, setError] = useState("");// Estado para almacenar mensajes de error
  const [success, setSuccess] = useState("");// Estado para almacenar mensajes de éxito
  const navigate = useNavigate();// Hook para manejar la navegación entre rutas

  const validarRut = (rut: string) => {// Función para validar el formato del RUT chileno
    return /^[0-9]+-[0-9kK]$/.test(rut);// Expresión regular que verifica si el RUT tiene el formato correcto (números seguidos de un guion y un dígito verificador)
  };

  const validarPatente = (pat: string) => {// Función para validar el formato de la patente del vehículo
    // La patente debe tener 4 letras seguidas de 2 números (ej: ABC D12)
    return /^[A-Z]{4}[0-9]{2}$/i.test(pat);// Expresión regular que verifica si la patente tiene el formato correcto (4 letras seguidas de 2 números)
    // ^ inicio de la cadena
    //[A-Z]{4} exactamente 4 letras (mayúsculas o minúsculas por la bandera i)
    //[0-9]{2} exactamente 2 dígitos
    //$ fin de la cadena
    //i hace que no distinga entre mayúsculas y minúsculas
    //.test(pat) devuelve true si pat coincide con ese formato, y false si no.
  };

  const handleSubmit = async (e: React.FormEvent) => {// Función para manejar el envío del formulario
    // e es el evento del formulario, que contiene información sobre el evento que ocurrió
    e.preventDefault();// Evita que el formulario se envíe de forma predeterminada y recargue la página
    setError("");// Limpia el mensaje de error
    setSuccess("");// Limpia el mensaje de éxito

    if (!patente || !tipo || !rut || !nombre) {// Verifica si todos los campos están completos
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validarPatente(patente)) {// Verifica si la patente tiene el formato correcto
      setError("La patente debe tener 4 letras y 2 números (ej: ABCD12).");
      return;
    }

    if (!validarRut(rut)) {// Verifica si el RUT tiene el formato correcto
      setError("El RUT debe tener formato correcto (ej: 12345678-9).");
      return;
    }

    try {// Intenta crear el arriendo llamando al servicio
      await crearArriendo({// Envía los datos del arriendo al servicio 
        patente_vehiculo: patente,
        tipo_vehiculo: tipo as "Sedán" | "SUV" | "Camioneta",
        rut_cliente: rut,
        nombre_cliente: nombre,
      });
      setSuccess("Arriendo registrado exitosamente.");
      setPatente("");// Limpia el campo de patente
      setTipo("Sedán");
      setRut("");
      setNombre("");
      navigate('/arriendos')
    } catch (err) {// Captura cualquier error al crear el arriendo
      setError("Error al registrar el arriendo.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3>Ingresar nuevo arriendo</h3>
      <form onSubmit={handleSubmit}> {/* handleSubmit.Esta función se encarga de validar los datos y
       procesar el registro del arriendo, en vez de que el formulario recargue la página*/}
        <div className="mb-3">
          <label className="form-label">Patente:</label>
          <input
            type="text"
            className="form-control"
            value={patente}
            onChange={(e) => setPatente(e.target.value.toUpperCase())}//hace que, cada vez que el usuario escribe en el input de patente, 
            // el valor ingresado se convierta automáticamente a mayúsculas y se guarde en el estado patente.
            placeholder="ABCD12"
            required// indica que este campo es obligatorio
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de vehículo:</label>
          <select
            className="form-select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}// actualiza el estado tipo con el valor seleccionado
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
