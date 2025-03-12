import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMostrarUbicacion } from '../../redux/datosHome';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import "./Navbar.css"

function Navbar() {
  const dispatch = useDispatch();
  const SeleccionarUbicacion = useSelector((state) => state.datosHome.mostrarUbicacion);
  const { pais, provincia, municipio } = useParams();
  const { categoria } = useParams();

  const actualHomeUbicacion = municipio || provincia || pais;
  
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [TOKEN, setTOKEN] = useState(null); // Para almacenar el token
  const [tokenLoaded, setTokenLoaded] = useState(false); // Para verificar si el token está cargado
  const [noticias, setNoticias] = useState([]); // Para almacenar las noticias obtenidas
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); // Término de búsqueda después del debounce
  const [isSearchActive, setIsSearchActive] = useState(false); // Estado para verificar si el buscador está activo

  // Función que maneja el cambio en el input de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // useEffect para manejar el debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Después de un delay, actualizamos el término de búsqueda debounced
    }, 500); // 500ms de retraso

    return () => {
      clearTimeout(handler); // Limpiar el timeout si el usuario sigue escribiendo
    };
  }, [searchTerm]); // Este useEffect se ejecuta cada vez que cambia `searchTerm`

  // useEffect para hacer la búsqueda cuando el término de búsqueda debounced cambie
  useEffect(() => {
    if (!debouncedSearchTerm || !TOKEN) return; // No hacer nada si el término de búsqueda está vacío

    // Realizar la solicitud a la API usando el término de búsqueda debounced
    axios.post("https://panel.serviciosd.com/app_obtener_notas_portada", 
      {
        token: TOKEN,
        titulo: debouncedSearchTerm, // Pasamos el término de búsqueda
        limite : 5,
      },
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    .then((response) => {
      if (response && response.data && response.data.item && response.data.item.notas) {
        setNoticias(response.data.item.notas);
      } else {
        console.error('No se encontraron notas.');
      }
    })
    .catch((error) => {
      console.error('Error en obtener notas:', error);
    });
  }, [debouncedSearchTerm, TOKEN]); // Este useEffect depende del `debouncedSearchTerm` y del `TOKEN`

  // useEffect para cargar el token y las provincias
  useEffect(() => {
    if (!tokenLoaded) {
      axios.post("https://builder.ntcias.de/public/index.php", {}, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        if (response) {
          setTOKEN(response.data.token);
          setTokenLoaded(true); // Marca el token como cargado
        } else {
          console.error('Error en login:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error en login:', error);
      });
    }
  }, [TOKEN, tokenLoaded]);

  // Función para manejar el clic en el input de búsqueda
  const handleSearchClick = () => {
    setIsSearchActive(true); // Activa la visualización de las notas
  };

  // Función para manejar el clic fuera del input de búsqueda
  const handleSearchBlur = () => {
    setIsSearchActive(false); // Desactiva la visualización de las notas si el input pierde el foco
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logoNoticiasd.png" alt="" />
          </a>
          <p className="nombreUbicacion">
            {actualHomeUbicacion ? actualHomeUbicacion.replace(/-/g, " ").toUpperCase() : 
            categoria ? categoria.toUpperCase() : "Argentina"}
          </p>
  
          <button
            className="navbar-toggler ml-auto"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <div>
              <form className="d-flex ms-auto position-relative" role="search">
                <input
                  className="buscador"
                  type="search"
                  placeholder="Buscar noticias, palabras clave..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleSearchClick} // Activar la visualización cuando el input se enfoca
                  onBlur={handleSearchBlur} // Desactivar la visualización cuando el input pierde el foco
                />
                <button className="btn ocultar" type="submit">Buscar</button>
  
                {/* Mostrar noticias solo si el buscador está activo */}
                {isSearchActive && (
                  <div className="resultados-busqueda">
                    <h3>Resultados de búsqueda:</h3>
                    {noticias.length > 0 ? (
                      <ul>
                        {noticias.map((nota, index) => (
                          <li key={index}>{nota.titulo}</li> // Asumiendo que las noticias tienen un campo "titulo"
                        ))}
                      </ul>
                    ) : (
                      <p>No se encontraron noticias.</p>
                    )}
                  </div>
                )}
              </form>
            </div>
  
            <button className="btn" type="button" onClick={() => dispatch(setMostrarUbicacion(!SeleccionarUbicacion))}>
              Elegir ubicación
            </button>
          </div>
        </div>
      </nav>
  
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
                  style={{ filter: "invert(1)" }}
                ></button>
              </div>
              <input
                className="buscador"
                type="search"
                placeholder="    Buscar noticias, palabras clave..."
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
