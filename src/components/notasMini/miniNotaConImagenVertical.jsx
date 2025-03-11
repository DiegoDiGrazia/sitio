import React, { useEffect, useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { useSelector } from 'react-redux';
import { formatearFecha } from "../common/formats";
import { Link } from "react-router-dom";
import FirmaNotas from "../common/firmaNotas";

function MiniNotaConImagenVertical({border, nota}) {
    if(!nota){
        return(
            <div>cargando</div>
        )
    }
const iso_3 = useSelector((state) => state.datosHome.datoPais.iso_3);
  return (
    <> 
            <div className="row imagenYNota p-0">
                {/* columna imagen */}
                <div className="col-4 p-0"> 
                    <img src={nota.imagen} className="notaMiniVertical"/>

                </div>
                {/* columna categoria y nota */}
                <div className="col-8" style={{width: "220px"}}> 
                        <Categoria categoria={nota.categorias}/>
                        <p style={{fontSize: "18px", fontWeight: "bold", marginTop: "10px", color: "#101828"}} className="truncate-text-5">              
                            <Link 
                                to={`/nota/${nota.id_noti }`} 
                                target="_blank" 
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                {nota.titulo}
                            </Link></p>
                </div>
            </div>
            <div className="row mt-3 filaDatosNota mb-4" style={{ border: border ? undefined : "none" }}>
            </div>
    </>

  );
}

export default MiniNotaConImagenVertical;