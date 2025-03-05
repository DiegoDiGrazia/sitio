import React from 'react';
import AppMapa from './MapaUbicaciones';
import MapaUbicaciones from './MapaUbicaciones';
import "./ubicacion.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ContainerUbicacion = () => {



  const paises = useSelector(state => state.datosHome?.datoGeo?.paises) || []; // Asegura que es un array
  const provinciasArgentinas = paises.find(pais => pais.nombre === "Argentina")?.provincias;

  if(!provinciasArgentinas){
    return <div>cargando...</div>
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center containerUbicacion" style={{ backgroundColor: 'black', color: "white" }}>
      <p className="row mt-3" style={{ fontWeight: "bold", fontSize: "36px", textAlign: "center" }}>
        Noticias adaptadas a tu ubicación
      </p>
      <p className="row" style={{fontSize: "18px", textAlign: "center", opacity: "75%", width: "700px" }}>
        Explora noticias a nivel nacional, provincial o municipal, con nuestro filtrode ubicacion 
        y mantenete siempre al tanto de lo que sucede cerca tuyo.
      </p>
      <form className="d-flex mb-4 mr-5" role="search">
        <input
          className="buscador"
          type="search"
          placeholder="      Buscar noticias, palabras clave..."
          aria-label="Search"
        />
        <button className="btn" type="submit" onClick={""}>
          Usar ubicacion actual
        </button>
      </form>
      <div className='row contenedorProvinciasYUbicacion pt-4' style={{ backgroundColor: "white", width: "100%" }}>
        <div className='col-6 contenedorNombreProvincias' style={{ color: "black" }}>
          {provinciasArgentinas && provinciasArgentinas.map((provincia) => (
            <div className="row filaDatosNota align-items-center">
                <div className="col-auto p-0">
                    <p className="inicialesConColores mb-0">{provincia.iso_id}</p>
                </div>
                <div className="col-10 p-0 align-items-center nombreProvincia" >
                    <p >
                    <Link 
                      to={`/Argentina/${provincia.cat_provincia}`.replace(/\s/g, "-")}
                      target="_blank" 
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {provincia.nombre_completo}
                      </Link>
                      </p>
                </div>
                <div className="col-1 p-0 d-flex justify-content-end" >
                  <button onClick={() => console.log(provincia)} className="botonIrAProvincia">  
                    <img className= "imagenBotonIrAProvincia" src='/images/iconoIrAProvincia.png'/>
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