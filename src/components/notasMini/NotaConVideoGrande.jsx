import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";
import { formatearFecha } from "../common/formats";

function NotaConVideoGrande({nota}) {
  const [activeIndex, setActiveIndex] = useState(0);
  if(!nota){
    return(
        <div>cargando</div>
    )
}

  const border = false;



  return (
    <>      
    <div style={{width: "1110px", marginLeft: "50px", padding: "0px"} }>

                    <img src={nota.imagen} style={{height: "660px", width: "1110px", objectFit: "cover", borderRadius: "20px", padding: "0px"}}/>
                <div className="col-auto p-0"> 
                        <p style={{fontSize: "30px", fontWeight: "bold", marginTop: "10px", color: "#ffffff"}}>{nota.titulo}</p>
                </div>

            <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none" }}>
                <div className="col-10 p-0" >
                    <p style={{color: "#BABABA" , marginLeft: "10px"}}>{formatearFecha(nota.f_pub)}</p>

                </div>

            </div>
            </div>
    </>

  );
}

export default NotaConVideoGrande;