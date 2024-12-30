import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function NotaConVideoGrande({border}) {
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
    <div style={{width: "1110px", marginLeft: "50px", padding: "0px"} }>

                    <img src={nota.src} style={{height: "660px", width: "1110px", objectFit: "cover", borderRadius: "20px", padding: "0px"}}/>
                <div className="col-auto p-0"> 
                        <p style={{fontSize: "30px", fontWeight: "bold", marginTop: "10px", color: "#ffffff"}}>{nota.contenido}</p>
                </div>

            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none" }}>
                <div className="col-10 p-0" >
                    <p style={{color: "#BABABA" , marginLeft: "10px"}}>12 Marzo 2024</p>

                </div>

            </div>
            </div>
    </>

  );
}

export default NotaConVideoGrande;