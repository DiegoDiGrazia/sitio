import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MapaUbicaciones from './MapaUbicaciones';
import "./ubicacion.css";

const ContainerUbicacion = () => {
  const paises = useSelector(state => state.datosHome?.datoGeo?.paises) || [];
  const argentina = paises.find(pais => pais.nombre === "Argentina");
  const provinciasArgentinas = argentina?.provincias || [];
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleSearchBlur = () => {
    setIsSearchActive(false);
  };

  if (!provinciasArgentinas.length) {
    return <div>cargando...</div>;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center containerUbicacion" style={{ backgroundColor: 'black', color: "white" }}>
      <p className="row mt-3" style={{ fontWeight: "bold", fontSize: "36px", textAlign: "center" }}>
        Noticias adaptadas a tu ubicación
      </p>
      <p className="row" style={{ fontSize: "18px", textAlign: "center", opacity: "75%", width: "700px" }}>
        Explora noticias a nivel nacional, provincial o municipal, con nuestro filtro de ubicación 
        y mantenete siempre al tanto de lo que sucede cerca tuyo.
      </p>
      <form className="d-flex mb-4 mr-5 position-relative" role="search" style={{ width: "700px" }}>
        <input
          className="buscador"
          type="search"
          placeholder="    Elegir ubicacion"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleSearchClick}
          onBlur={handleSearchBlur}
        />
        {/* <button className="btn" type="submit">
          Usar ubicación actual
        </button> */}
        {isSearchActive && (
          <div className="resultados-busqueda">
            {provinciasArgentinas && provinciasArgentinas.length > 0 ? (
              <ul>
                {provinciasArgentinas.map((provincia, index) => (
                  <li key={index} className="link-noticia">
                    <Link 
                      to={`/argentina/${provincia.cat_provincia.replace(/\s/g, "-")}`}
                      target="_blank" 
                      style={{ textDecoration: "none", color: "inherit" }}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {provincia.nombre_completo}
                    </Link>
                    <ul>
                    {provincia.municipios.map((municipio, index) => (
                      municipio.cat_municipio && municipio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) && (
                        <li key={index} className="link-noticia">
                          <Link 
                            to={`/argentina/${provincia.cat_provincia.replace(/\s/g, "-")}/${municipio.cat_municipio.replace(/\s/g, "-")}`} 
                            target="_blank" 
                            style={{ textDecoration: "none", color: "inherit" }}
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            {municipio.nombre}
                          </Link>
                        </li>
                      )
                    ))}
                  </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No se encontraron noticias.</p>
            )}
          </div>
        )}
      </form>
      
      <div className='row contenedorProvinciasYUbicacion pt-4' style={{ backgroundColor: "white", width: "100%" }}>
        <div className='col-6 contenedorNombreProvincias' style={{ color: "black" }}>
          {provinciasArgentinas && provinciasArgentinas.map((provincia) => (
            <div key={provincia.iso_id} className="row filaDatosNota align-items-center">
              <div className="col-auto p-0">
                <p className="inicialesConColores mb-0">{provincia.iso_id}</p>
              </div>
              <div className="col-10 p-0 align-items-center nombreProvincia">
                <p>
                  <Link 
                    to={`/Argentina/${provincia.cat_provincia}`.replace(/\s/g, "-")}
                    target="_blank" 
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {provincia.nombre_completo}
                  </Link>
                </p>
              </div>
              <div className="col-1 p-0 d-flex justify-content-end">
                <button onClick={() => console.log(provincia)} className="botonIrAProvincia">  
                  <img className="imagenBotonIrAProvincia" src='/images/iconoIrAProvincia.png' alt="Ir a Provincia" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='col-6 d-flex justify-content-center align-items-center'>
          <MapaUbicaciones />
        </div>
      </div>
    </div>
  );
};

export default ContainerUbicacion;