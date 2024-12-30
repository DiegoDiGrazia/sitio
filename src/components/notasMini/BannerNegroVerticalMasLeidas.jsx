import React, { useState } from "react";
import "./MiniNotaConImagenVertical.css"
import Categoria from "../common/Categoria";

function BannerNegroVerticalMasLeidas({border}) {

    const notas= [
        { id: 1, src: "./images/notaPortadaImagen.png", alt: "Slide 1", categoria: "economia", titulo: "Starlink: los precios del servicio satelital de internet de elon Musk", 
          contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius lorem in tortor interdum, non efficitur justo malesuada. Suspendisse potenti. Mauris ultrices, sapien eu volutpat elementum, nunc lectus malesuada risus, at viverra turpis eros vel turpis. Nullam sodales sapien eu est. " },
        { id: 2, src: "./images/notaPortadaImagen.png", alt: "Slide 2", categoria: "Agricultura", titulo: "el tiulo de la nota 2", contenido: "contenido de la nota 2 " },
        { id: 3, src: "./images/notaPortadaImagen.png", alt: "Slide 3", categoria: "Agricultura", titulo: "el tiulo de la nota 3", contenido: "contenido de la nota 3" },
        { id: 4, src: "./images/notaPortadaImagen.png", alt: "Slide 4", categoria: "Agricultura", titulo: "el tiulo de la nota 4", contenido: "contenido de la nota 4" },
        { id: 5, src: "./images/notaPortadaImagen.png", alt: "Slide 5", categoria: "Agricultura", titulo: "el tiulo de la nota 5", contenido: "contenido de la nota 5" },
  
  
    ]

  return (
    <>      
        <div style={{background: "black", width: "330px", marginLeft: "50px", borderRadius: "15px"}}>
            <p style={{color: "white", fontSize: "28px", fontWeight: "bold", transform: "scale(0.9, 1.1)", marginTop: "10px"}}>
                LAS MAS LEIDAS EN <span style={{color: "#DD2590"}}>CORDOBA</span></p>
            <div className="row">
                <div className="col-auto">1</div>
                <div className="col"> en semana santa secuentraron 75kg de pejeerrey y 40 monos asdf</div>
            </div>


        </div>
    </>

  );
}

export default BannerNegroVerticalMasLeidas;