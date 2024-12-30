import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function MiniNotaConImagenVertical({border}) {
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
            <div className="row imagenYNota p-0">
                {/* columna imagen */}
                <div className="col-4 p-0"> 
                    <img src={nota.src}/>

                </div>
                {/* columna categoria y nota */}
                <div className="col-8"> 
                        <Categoria categoria={"Sociedad"}/>
                        <p style={{fontSize: "16px", fontWeight: "bold", marginTop: "10px", color: "#101828"}}>{nota.contenido}</p>
                </div>
            </div>
            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none" }}>
                <div className="col-2 p-0">
                    <p className="inicialesConColores">CBA</p>
                </div>
                <div className="col-10" >
                    <p className="lugarDeLaNota">Gobierno de la provincia de Cordoba</p>
                    <p>12 Marzo 2024</p>

                </div>

            </div>
    </>

  );
}

export default MiniNotaConImagenVertical;