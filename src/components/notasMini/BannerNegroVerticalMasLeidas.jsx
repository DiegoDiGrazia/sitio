import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function BannerNegroVerticalMasLeidas({border}) {

    const notas= [
        { id: 1, src: "./images/notaPortadaImagen.png", alt: "Slide 1", categoria: "economia", titulo: "Starlink: los precios del servicio satelital de internet de elon Musk", 
          contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius lorem in tortor interdum, non efficitur justo malesuada. Suspendisse potenti. Mauris ultrices, sapien eu volutpat elementum, nunc lectus malesuada risus, at viverra turpis eros vel turpis. Nullam sodales sapien eu est. " },
        { id: 2, src: "./images/notaPortadaImagen.png", alt: "Slide 2", categoria: "Agricultura", titulo: "Starlink: los precios del servicio satelital de internet de elon Musk", contenido: "contenido de la nota 2 " },
        { id: 3, src: "./images/notaPortadaImagen.png", alt: "Slide 3", categoria: "Agricultura", titulo: "Starlink: los precios del servicio satelital de internet de elon Musk", contenido: "contenido de la nota 3" },
        { id: 4, src: "./images/notaPortadaImagen.png", alt: "Slide 4", categoria: "Agricultura", titulo: "Starlink: los precios del servicio satelital de internet de elon Musk", contenido: "contenido de la nota 4" },
    ]

  return (
    <>      
        <div style={{background: "black", width: "330px", marginLeft: "50px", borderRadius: "15px", padding: "30px 25px 0px 25px"}}>
            <p style={{color: "white", fontSize: "28px", fontFamily: 'Big Shoulders Text, sans-serif', fontWeight: "bold"}}>
                LAS MAS LEIDAS EN <span style={{color: "#DD2590"}}>CORDOBA</span></p>
            {notas.map((nota, index) => (
            <div className="row" style={{color: "white", fontWeight: "bold", fontSize: "20px", padding: "0px", borderBottom: index === 3 ? "none" : "1px solid #DD2590", margin: "20px 0px", paddingBottom: "30px"}}>
                  <div className="col-auto" style={{padding: "10px 10px 0px 0px", fontSize: "43px", fontFamily: 'Big Shoulders Text, sans-serif', color: "#DD2590"}}>
                  {index + 1}
                  </div>
                  <div className="col" style={{ fontFamily: 'Big Shoulders Text, sans-serif' }}>
                      {nota.titulo}
                  </div>

            </div>
              ))}


        </div>
    </>

  );
}

export default BannerNegroVerticalMasLeidas;