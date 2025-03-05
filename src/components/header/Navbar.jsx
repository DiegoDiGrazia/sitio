import { useState } from 'react';
import "./Navbar.css";
import ContainerUbicacion from './elegirUbicacion/ContainerUbicacion';
import { useDispatch, useSelector } from 'react-redux';
import { setMostrarUbicacion } from '../../redux/datosHome';
import { useParams } from 'react-router-dom';
import React from 'react';

function Navbar() {
  const dispatch = useDispatch();
  const SeleccionarUbicacion = useSelector((state) => state.datosHome.mostrarUbicacion);
  const { pais, provincia, municipio } = useParams();
  const actualHomeUbicacion = municipio || provincia || pais;
  
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavbarToggle = () => {
    if (window.matchMedia("(max-width: 992px)").matches) {
      setShowModal(true); // Abrir modal en mobile
    } else {
      setIsMenuOpen(!isMenuOpen); // Alternar el menú en pantallas grandes
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logoNoticiasd.png" alt="" />
          </a>
          <p className="nombreUbicacion">
            {actualHomeUbicacion ? actualHomeUbicacion.replace(/-/g, " ").toUpperCase() : "Argentina"}
          </p>

          {/* Botón hamburguesa con evento onClick */}
          <button
            className="navbar-toggler ml-auto" // Usamos ms-auto para que se pegue a la derecha
            type="button"
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle} // Llama a la función que abre el modal en mobile
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú colapsable en pantallas grandes */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <form className="d-flex ms-auto" role="search">
              <input
                className="buscador"
                type="search"
                placeholder="    Buscar noticias, palabras clave..."
                aria-label="Search"
              />
              <button className="btn ocultar" type="submit">
                Elegir ubicación
              </button>
            </form>
            <button className="btn" type="button" onClick={() => dispatch(setMostrarUbicacion(!SeleccionarUbicacion))}>
              Elegir ubicación
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Bootstrap */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"></h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  style={{ filter: "invert(1)" }} // Convierte el botón a blanco
                ></button>
              </div>
                <input
                  className="buscador"
                  type="search"
                  placeholder="    Buscar noticias, palabras clave..."
                  aria-label="Search"
                />
                <ul>
                  <li>Politica</li>
                  <li>Sociedad</li>
                  <li>Economia</li>
                  <li>Ciencia</li>
                  <li>Salud</li>
                  <li>Cultura</li>
                  <li>Deportes</li>
                  <li>Tendencias</li>
                </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
