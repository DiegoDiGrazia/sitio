import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { useSelector } from "react-redux";
import { formatearFecha } from "../common/formats";
import { Link } from "react-router-dom";
import { jsonParseCopetes } from "../common/formats";

function NotaMiniGenerica({width,height, tieneContenido,borderBottom, marginTop, fontSizeContenido, fontSizeTitulo, nota, paddingBottom}) {
  
  if (!nota) {
    return (
      <div className="card" aria-hidden="true" style={{ width, marginLeft: "50px", padding: "0px", marginTop, display: "flex", flexDirection: "column", borderBottom, paddingBottom, marginBottom: "50px" }}>
        {/* Imagen de carga */}
        <img
          src="/images/gitftND.gif" // Imagen de carga genérica
          className="card-img-top placeholder-glow"
          alt="Cargando..."
          style={{backgroundColor: "gray", width, height}}
        />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
    );
  }


return (
  <>
    <div className="contenedorMiniNotaGenerica" style={{ width, marginLeft: "50px", padding: "0px", marginTop, display: "flex", flexDirection: "column", borderBottom, paddingBottom }} >
          <Link 
            to={`/nota/${nota.id_noti }`} 
            target="_blank" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
      <img src={nota.imagen} style={{ height, width, objectFit: "cover", borderRadius: "12px", padding: "0px" }} />
      <div className="col-auto p-0 mt-3" style={{ height: tieneContenido ? "auto" : "auto" }}>
        <Categoria categoria={nota.categorias} />
        <p style={{ fontSize: fontSizeTitulo, fontWeight: "bold", marginTop: "10px", color: "#101828", marginBottom: "5px" }}>
            {nota.titulo}
          </p>
        {tieneContenido &&
          <p style={{ fontSize: fontSizeContenido, marginTop: "0px", color: "#101828", opacity: "75%" }} className="truncate-text-4">{jsonParseCopetes(nota.copete)}</p>
        }
      </div>
        </Link>

    </div>
  </>
);
}

export default NotaMiniGenerica;