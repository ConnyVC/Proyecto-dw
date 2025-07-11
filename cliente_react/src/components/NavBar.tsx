import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">Sistema de Arriendos</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nuevo-arriendo" className="nav-link">Ingresar Arriendo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/arriendos" className="nav-link">Arriendos Activos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/arriendos-finalizados" className="nav-link">Arriendos Finalizados</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/estadisticas" className="nav-link">Estadísticas</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
