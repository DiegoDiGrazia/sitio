import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { formatearFecha } from "../common/formats";

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
                        <p style={{fontSize: "16px", fontWeight: "bold", marginTop: "10px", color: "#ffffff"}}>{nota.titulo}</p>
                </div>

            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none" }}>
                <div className="col-2 p-0">
                    <p className="inicialesConColores">CBA</p>
                </div>
                <div className="col-10 p-0" >
                    <p style={{color: "#ffffff", fontWeight: "bold", marginBottom: "0px", marginLeft: "10px"}}>{nota.cliente}</p>
                    <p style={{color: "#BABABA" , marginLeft: "10px"}}>{formatearFecha(nota.f_pub)}</p>

                </div>

            </div>
            </div>
    </>

  );
}

export default NotaConVideo;