import React, { useState } from "react";
import "./CarruselNotas.css"
import Categoria from "./common/Categoria";

function CarruselNotas2({notas, iso3}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  
  
  const notas2= [
    { id: 1, src: "./images/notaPortadaImagen.png", alt: "Slide 1", categorias: "economia", titulo: "Starlink: los precios del servicio satelital de internet de elon Musk", 
      contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius lorem in tortor interdum, non efficitur justo malesuada. Suspendisse potenti. Mauris ultrices, sapien eu volutpat elementum, nunc lectus malesuada risus, at viverra turpis eros vel turpis. Nullam sodales sapien eu est. " },
      { id: 2, src: "./images/notaPortadaImagen.png", alt: "Slide 2", categorias: "Agricultura", titulo: "el tiulo de la nota 2", contenido: "contenido de la nota 2 " },
      { id: 3, src: "./images/notaPortadaImagen.png", alt: "Slide 3", categorias: "Agricultura", titulo: "el tiulo de la nota 3", contenido: "contenido de la nota 3" },
      { id: 4, src: "./images/notaPortadaImagen.png", alt: "Slide 4", categorias: "Agricultura", titulo: "el tiulo de la nota 4", contenido: "contenido de la nota 4" },
      { id: 5, src: "./images/notaPortadaImagen.png", alt: "Slide 5", categorias: "Agricultura", titulo: "el tiulo de la nota 5", contenido: "contenido de la nota 5" },
      
      
    ]


  const handleSelect = (index) => {
    setActiveIndex(index);
  };
 
  return (
    <div
      id="carouselExampleIndicators" 
      className="carousel slide carruselContainer"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {notas.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={activeIndex === index ? "active" : ""}
            aria-current={activeIndex === index}  
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSelect(index)}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {notas.map((nota, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? "active" : ""}`}
          >
            <img src={nota.imagen} className="d-block w-100" alt={nota.alt} />
            <div style={{marginTop:"30px"}}>
              <Categoria categoria={nota.categorias}/>
              <p className="titulo">{nota.titulo}</p>
              <p className="contenido">{nota.contenido}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() => handleSelect()}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={() => handleSelect()}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarruselNotas2;