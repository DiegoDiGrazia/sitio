import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { useSelector } from "react-redux";
import { formatearFecha } from "../common/formats";

function NotaMiniGenerica({width,height, tieneContenido,border, marginTop, fontSizeContenido, fontSizeTitulo, nota}) {
  if(!nota){
    return(
        <div>cargando</div>
    )
}


  return (
    <>      
    <div style={{width, marginLeft: "50px", padding: "0px", marginTop} }>

                <img src={nota.imagen} style={{height, width, objectFit: "cover", borderRadius: "20px", padding: "0px"}}/>
                <div className="col-auto p-0 mt-3 "> 
                    <Categoria categoria={nota.categorias}/>
                    <p style={{fontSize: fontSizeTitulo, fontWeight: "bold", marginTop: "10px", color: "black", marginBottom: "5px"}}>{nota.titulo}</p>
                    {tieneContenido &&
                    <p style={{fontSize: fontSizeContenido, marginTop: "0px", color: "#101828", opacity: "75%"}}>{nota.contenido}</p>
                    }

                </div>

            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none", marginLeft: "0px" }}>
                <div className="col-auto p-0">
                    <p className="inicialesConColores ml-3">CBA</p>
                </div>
                <div className="col-10 p-0" >
                    <p style={{color: "black", fontWeight: "bold", marginBottom: "0px", marginLeft: "10px"}}>{nota.cliente}</p>
                    <p style={{color: "#BABABA" , marginLeft: "10px"}}>{formatearFecha(nota.f_pub)}</p>

                </div>

            </div>
            </div>
    </>

  );
}

export default NotaMiniGenerica;