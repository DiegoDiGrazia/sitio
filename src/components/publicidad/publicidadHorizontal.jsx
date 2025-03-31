import "./publicidad.css";
import React, { useEffect } from "react";

function PublicidadHorizontal() {
  useEffect(() => {
    if (window.googletag && window.googletag.cmd) {
      window.googletag.cmd.push(function () {
        googletag.display("div-gpt-ad-laderboard_1");
      });
    } else {
      console.error("googletag no está definido. Asegúrate de que el script de Google Ads se haya cargado.");
    }
  }, []);

  return (
    <div id="div-gpt-ad-laderboard_1" style={{ width: "970px", height: "250px" }}>
      {/* El anuncio se renderizará aquí */}
    </div>
  );
}

export default PublicidadHorizontal;