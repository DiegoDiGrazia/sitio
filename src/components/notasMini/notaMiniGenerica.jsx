import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { useSelector } from "react-redux";
import { formatearFecha } from "../common/formats";
import { Link } from "react-router-dom";

function NotaMiniGenerica({width,height, tieneContenido,border, marginTop, fontSizeContenido, fontSizeTitulo, nota}) {
  if(!nota){
    return(
        <div>cargando</div>
    )
}


return (
  <>
    <div style={{ width, marginLeft: "50px", padding: "0px", marginTop, display: "flex", flexDirection: "column" }} className="contenedorMiniNotaGenerica">
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
          <p style={{ fontSize: fontSizeContenido, marginTop: "0px", color: "#101828", opacity: "75%" }} className="truncate-text-4">{nota.copete}</p>
        }
      </div>
        </Link>

    </div>
  </>
);
}

export default NotaMiniGenerica;