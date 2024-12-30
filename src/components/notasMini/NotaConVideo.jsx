import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function NotaConVideo({border}) {
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
    <div style={{width: "338px", marginLeft: "50px", padding: "0px"} }>

                    <img src={nota.src} style={{height: "180px", width: "338px", objectFit: "cover", borderRadius: "20px", padding: "0px"}}/>
                <div className="col-auto p-0"> 
                        <p style={{fontSize: "16px", fontWeight: "bold", marginTop: "10px", color: "#ffffff"}}>{nota.contenido}</p>
                </div>

            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none" }}>
                <div className="col-2 p-0">
                    <p className="inicialesConColores">CBA</p>
                </div>
                <div className="col-10 p-0" >
                    <p style={{color: "#ffffff", fontWeight: "bold", marginBottom: "0px", marginLeft: "10px"}}>Provincia mendoza</p>
                    <p style={{color: "#BABABA" , marginLeft: "10px"}}>12 Marzo 2024</p>

                </div>

            </div>
            </div>
    </>

  );
}

export default NotaConVideo;