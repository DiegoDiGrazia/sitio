import React from 'react';
import AppMapa from './MapaUbicaciones';
import MapaUbicaciones from './MapaUbicaciones';

const ContainerUbicacion = () => {

  const listaProvincias = [
    {nombre : "buenos aires", id: "1"},
    {nombre : "la plata", id: "2"},
    {nombre : "caba", id: "3"},
  ]


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
      <div className='row pt-5' style={{ backgroundColor: "white", width: "100%" }}>
        <div className='col-6 d-flex flex-column justify-content-center align-items-center' style={{ color: "black" }}>
          {listaProvincias.map((provincia) => (
            <div key={provincia.id} style={{ color: "black" }}>{provincia.nombre}</div>
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