import { useState } from 'react';

function NavbarCategorias() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbarCategorias">
        <div className="container-fluid ">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex justify-content-center w-100">
                <li className="nav-item">
                <a className="nav-link" href="#">Politica</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Deportes</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Sociedad</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Economia</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Salud y ciencia</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Cultura y espectaculos</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tendencias
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  );
}

export default NavbarCategorias;
