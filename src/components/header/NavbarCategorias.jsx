import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";



function NavbarCategorias() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbarCategorias">
        <div className="container-fluid ">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex justify-content-center w-100">
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/politica">Política</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/sociedad-y-seguridad">Sociedad</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/salud-y-ciencia">Salud</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/cultura-y-educacion">Cultura</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/economia-y-negocios">Economia</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/campo">Campo</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/tendencias">Tendencias</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/espectaculos">Espectáculos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categoria/internacionales">Internacionales</Link>
                </li>
                
                
            </ul>
            </div>
        </div>
        </nav>
    </>
  );
}

export default NavbarCategorias;
