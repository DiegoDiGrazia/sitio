import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function NotaConFondoNegro({width,height, tieneContenido,border, marginTop, fontSizeContenido, fontSizeTitulo}) {
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
    <div style={{width, marginLeft: "8px", padding: "0px", marginTop} }>

                <img src={nota.src} style={{height, width, objectFit: "cover", borderRadius: "20px", padding: "0px"}}/>
                <div className="col-auto p-0 mt-3 "> 
                    <p style={{fontSize: fontSizeTitulo, fontWeight: "bold", marginTop: "10px", color: "white", marginBottom: "5px"}}>{nota.titulo}</p>
                    {tieneContenido &&
                    <p style={{fontSize: fontSizeContenido, marginTop: "0px", color: "white", opacity: "75%"}}>{nota.contenido}</p>
                    }

                </div>

            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none", marginLeft: "0px" }}>

            </div>
            </div>
    </>

  );
}

export default NotaConFondoNegro;