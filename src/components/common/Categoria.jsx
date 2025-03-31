
import React from "react";

function extraerCategoria(str) {
  // Dividir la cadena por '|' y buscar la parte que contiene 'Categorías/'
  let partes = str.split('|');
  let categoria = partes.find(parte => parte.includes('Categorías/'));
  
  if (categoria) {
      // Extraer la parte después de 'Categorías/'
      return categoria.split('Categorías/')[1];
  }
  return null; // Retornar null si no se encuentra 'Categorías/'
}

function Categoria({ categoria }) {
    const estiloCategoria = {
      fontSize: "16px",
      color: "#667085",
      backgroundColor:"rgb(223, 226, 233)",
      width: "max-content",
      margin: "2px",
      padding: "2px 10px",
      borderRadius: "10px",
      textTransform: "uppercase",
    };
  
    const estiloContenedor = {
      display: "flex", // Configura un diseño en línea
      gap: "10px", // Espacio entre las categorías
    };
  
    return (
      <div style={estiloContenedor}>
        <p style={estiloCategoria}>{extraerCategoria(categoria)}</p>
      </div>
    );
  }
  
  export default Categoria;