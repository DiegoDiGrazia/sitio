
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
        <p style={estiloCategoria}>{categoria.split("/").pop().split(" ")[0]}</p>
      </div>
    );
  }
  
  export default Categoria;