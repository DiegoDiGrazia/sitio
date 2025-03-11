import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { formatearFecha } from "../common/formats";
import { Link } from "react-router-dom";

function DestacadaDeLaSemanaMini({nota}) {
    if(!nota){
        return(
            <div>cargando</div>
        );}



  return (
    <>      
        <div  style={{width: "708px", height: "374px", background: "black", marginLeft: "50px", borderRadius: "10px", marginRight: "20px"}} className="destacadaDeLaSemanaContainer">
            <div className="row p-0">
                {/* columna imagen */}
                <div className="col-12 col-md-6 p-0"> 
                    <img src={nota.imagen} style={{width: "322px", height: "326px", margin: "20px", border: "15px", objectFit: "cover", borderRadius: "10px"}}/>

                </div>
                {/* columna categoria y nota */}
                <div className="col-12 col-md-6"> 
                        <p style={{color: "#FF653B", fontSize: "24px", fontWeight: "bold", marginTop: "20px"}}>Destacada de la semana</p>
                        <p style={{fontSize: "24px", fontWeight: "bold", marginTop: "10px", color: "#ffffff"}}>
                            <Link 
                                to={`/nota/${nota.id_noti }`} 
                                target="_blank" 
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                {nota.titulo}
                            </Link></p>
                        <p style={{fontSize: "16px", fontWeight: "", marginTop: "10px", color: "#FFFFFF"}}>{nota.copete}</p>
                </div>
            </div>


        </div>
    </>

  );
}

export default DestacadaDeLaSemanaMini;