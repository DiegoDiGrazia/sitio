
import React, { useState } from "react";
import { formatearFecha } from "../common/formats";

const provincias = {
    "Provincia de Misiones": "MIS",
    "Provincia de San Luis": "SLU",
    "Provincia de San Juan": "SJU",
    "Provincia de Entre Ríos": "ERI",
    "Provincia de Santa Cruz": "SCR",
    "Provincia de Río Negro": "RNE",
    "Provincia del Chubut": "CHU",
    "Provincia de Córdoba": "COR",
    "Provincia de Mendoza": "MEND",
    "Provincia de La Rioja": "LRIO",
    "Provincia de Catamarca": "CAT",
    "Provincia de La Pampa": "LPAM",
    "Provincia de Santiago del Estero": "SDE",
    "Provincia de Corrientes": "CORR",
    "Provincia de Santa Fe": "SF",
    "Provincia de Tucumán": "TUC",
    "Provincia del Neuquén": "NEU",
    "Provincia de Salta": "SAL",
    "Provincia del Chaco": "CHA",
    "Provincia de Formosa": "FOR",
    "Provincia de Jujuy": "JUJ",
    "Ciudad Autónoma de Buenos Aires": "CABA",
    "Provincia de Buenos Aires": "BA",
    "Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur": "TDF",
    "Republica de Ecuador": "ECU",
    "República de Colombia": "COL",
    "Republica Dominicana": "DOM",
    "República del Paraguay": "PAR",
    "República del Peru": "PER",
    "Miami": "MIA"
};

function FirmaNotas({border, nombreCLiente, f_pub, iso_id}) {

  if(!nombreCLiente){   
    return(
        <div>cargando</div>
    )
    }
    const esUnMunicipio = nombreCLiente.toLowerCase().includes("municipio");
    const esUnaProvincia = nombreCLiente.toLowerCase().includes("provin");

return (
  
    <div className="row mt-3 filaDatosNota" style={{ border: border ? undefined : "none", marginLeft: "0px", marginTop: "auto" }}>
        <div className="col-auto p-0">
        {esUnMunicipio && <img src= "/images/FirmaMunicipio.png" style={{marginBottom:"0px",  marginTop : "0px"}}/>}
        {esUnaProvincia ? <p className="inicialesConColores ml-3">{provincias[nombreCLiente]}</p> :
        !esUnMunicipio && <img src= "/images/AvatarEditor.png" style={{marginBottom:"0px",  marginTop : "0px"}}/>
        }
        </div>
        <div className="col-10 p-0">
        <p style={{ color: "black", fontWeight: "bold", marginBottom: "0px", marginLeft: "10px" }}>{nombreCLiente}</p>
        <p style={{ color: "#BABABA", marginLeft: "10px" }}>{formatearFecha(f_pub)}</p>
        </div>
    </div>
);
}

export default FirmaNotas;
