import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleArrendar = () => {// Esta función se ejecuta cuando el usuario hace clic en el botón "Arrendar"
    navigate("/nuevo-arriendo");// Redirige al usuario a la página de ingreso de arriendo
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Elige vehiculo para arrendar</h2>
      <div className="row">
        
        <div className="col-md-4">
          <div className="card">
            <img
              src="/images/sedan.jpg"
              className="card-img-top"
              alt="Sedán"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Sedán</h5>
              <button className="btn btn-primary" onClick={handleArrendar}>{/* Al hacer clic en el botón, se llama a la función handleArrendar */}
                Arrendar
              </button>
            </div>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card">
            <img
              src="/images/suv.jpg"

              className="card-img-top"
              alt="SUV"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">SUV</h5>
              <button className="btn btn-primary" onClick={handleArrendar}>{/* Al hacer clic en el botón, se llama a la función handleArrendar */}
                Arrendar
              </button>
            </div>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card">
            <img
              src="/images/camioneta.jpg"
              className="card-img-top"
              alt="Camioneta"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Camioneta</h5>
              <button className="btn btn-primary" onClick={handleArrendar}>
                Arrendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
