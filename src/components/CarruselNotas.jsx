import React, { useState } from "react";
import "./CarruselNotas.css"
import Categoria from "./common/Categoria";
import { Link } from "react-router-dom";
import { jsonParseCopetes } from "./common/formats";

function CarruselNotas2({notas}) {
  const [activeIndex, setActiveIndex] = useState(0);
  

 
  return (
    <div
      id="carouselExampleIndicators" 
      className="carousel slide carruselContainer"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {notas.map((Nota, index) => (
          <button
            key={Nota.id_noti}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={activeIndex === index ? "active" : ""}
            aria-current={activeIndex === index}  
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
  {notas.length > 0 ? (
    notas.map((nota, index) => (
      <div
        key={nota.id_noti}
        className={`carousel-item ${activeIndex === index ? "active" : ""}`}
      >
        <Link
          to={`/nota/${nota.id_noti}`}
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {nota.imagen ? (
            <img src={nota.imagen} className="d-block w-100" alt={nota.alt} />
          ) : (
            <div
              className="d-block w-100"
              style={{
                height: "300px", // Ajusta la altura según sea necesario
                backgroundColor: "gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "18px",
              }}
            >
              Aguarde unos segundos por favor
            </div>
          )}
          <div style={{ marginTop: "30px" }}>
            <Categoria categoria={nota.categorias} />
            <p className="titulo">{nota.titulo}</p>
            <p className="contenido">{jsonParseCopetes(nota.copete)}</p>
          </div>
        </Link>
      </div>
    ))
  ) : (
    <div
      className="carousel-item active"
      style={{
        height: "300px", // Ajusta la altura según sea necesario
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "18px",
      }}
    >
      No hay notas disponibles
    </div>
  )}
</div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarruselNotas2;