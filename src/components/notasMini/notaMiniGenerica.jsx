import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function NotaMiniGenerica({width,height, tieneContenido,border, marginTop}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nota = {
    id: 1,
    src: "./images/imagenMiniVertical.png",
    alt: "Slide 1",
    categoria: "economia",
    titulo: "Starlink: los precios del servicio satelital de internet de elon Musk",
    contenido: " Llariora otrogo aportes a vecinos afectados por el temporal y entrego viviendas semillas a 18 familias"
};


  return (
    <>      
    <div style={{width, marginLeft: "50px", padding: "0px", marginTop} }>

                <img src={nota.src} style={{height, width, objectFit: "cover", borderRadius: "20px", padding: "0px"}}/>
                <div className="col-auto p-0 mt-3 "> 
                    <Categoria categoria={"alguna"}/>
                    <p style={{fontSize: "16px", fontWeight: "bold", marginTop: "10px", color: "black", marginBottom: "5px"}}>{nota.titulo}</p>
                    {tieneContenido &&
                    <p style={{fontSize: "16px", marginTop: "0px", color: "#101828", opacity: "75%"}}>{nota.contenido}</p>
                    }

                </div>

            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none", marginLeft: "0px" }}>
                <div className="col-auto p-0">
                    <p className="inicialesConColores ml-3">CBA</p>
                </div>
                <div className="col-10 p-0" >
                    <p style={{color: "black", fontWeight: "bold", marginBottom: "0px", marginLeft: "10px"}}>Provincia mendoza</p>
                    <p style={{color: "#BABABA" , marginLeft: "10px"}}>12 Marzo 2024</p>

                </div>

            </div>
            </div>
    </>

  );
}

export default NotaMiniGenerica;