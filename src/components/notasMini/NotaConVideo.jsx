import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { formatearFecha } from "../common/formats";
import { Link } from "react-router-dom";

function NotaConVideo({nota}) {
  if(!nota){
    return(
        <div>cargando</div>
    )
}

  const border = false;


  return (
    <>      
    <div style={{width: "338px", marginLeft: "50px", padding: "0px"} } className="contenedorMiniVideo">

                    <img src={nota.imagen} style={{height: "180px", width: "338px", objectFit: "cover", borderRadius: "20px", padding: "0px"}}/>
                <div className="col-auto p-0"> 
                          <Link 
                          to={`/nota/${nota.id_noti}`} 
                          target="_blank" 
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                        <p style={{fontSize: "16px", fontWeight: "bold", marginTop: "10px", color: "#ffffff"}}>
                          {nota.titulo}
                      </p>
                        </Link>
                </div>

            </div>
    </>

  );
}

export default NotaConVideo;