import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function BannerNegroVerticalMasLeidas({notas}) {
  if(!notas){
    return(
        <div>cargando</div>
    )
  }



  return (
    <>      
        <div style={{background: "black", width: "330px", marginLeft: "50px", borderRadius: "15px", padding: "30px 25px 0px 25px"}}>
            <p style={{color: "white", fontSize: "28px", fontFamily: 'Big Shoulders Text, sans-serif', fontWeight: "bold"}}>
                LAS MAS LEIDAS EN <span style={{color: "#DD2590"}}>CORDOBA</span></p>
                {notas.map((nota, index) => (
          <div 
            key={nota.id || index} // Agregamos la key
            className="row"  
            style={{ 
              color: "white", 
              fontWeight: "bold", 
              fontSize: "20px", 
              padding: "0px", 
              borderBottom: index === 3 ? "none" : "1px solid #DD2590", 
              margin: "20px 0px", 
              paddingBottom: "30px" 
            }}
          >
            <div 
              className="col-auto" 
              style={{ 
                padding: "10px 10px 0px 0px", 
                fontSize: "43px", 
                fontFamily: 'Big Shoulders Text, sans-serif', 
                color: "#DD2590" 
              }}
            >
              {index + 1}
            </div>
            <div 
              className="col" 
              style={{ fontFamily: 'Big Shoulders Text, sans-serif' }}
            >
              {nota.titulo}
            </div>
          </div>
        ))}



        </div>
    </>

  );
}

export default BannerNegroVerticalMasLeidas;