import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function DestacadaDeLaSemanaMini({border}) {

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
        <div className="destacadaDeLaSemanaContainer" style={{width: "708px", height: "374px", background: "black", marginLeft: "50px", borderRadius: "10px", marginRight: "20px"}}>
            <div className="row p-0">
                {/* columna imagen */}
                <div className="col-6 p-0"> 
                    <img src={nota.src} style={{width: "322px", height: "326px", margin: "20px", border: "15px"}}/>

                </div>
                {/* columna categoria y nota */}
                <div className="col-6"> 
                        <p style={{color: "#FF653B", fontSize: "24px", fontWeight: "bold", marginTop: "20px"}}>Destacada de la semana</p>
                        <p style={{fontSize: "24px", fontWeight: "bold", marginTop: "10px", color: "#ffffff"}}>{nota.titulo}</p>
                        <p style={{fontSize: "16px", fontWeight: "", marginTop: "10px", color: "#FFFFFF"}}>{nota.contenido}</p>
                    <div className="row">
                        <div className="col-2 p-0">
                            <p className="inicialesConColores" style={{marginLeft: "10px"}}>CBA</p>
                        </div>
                        <div className="col-10" >
                            <p className="lugarDeLaNota" style={{color: "white"}}>autor</p>
                            <p style={{color: "white"}}>12 Marzo 2024</p>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>

  );
}

export default DestacadaDeLaSemanaMini;