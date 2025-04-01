

/// Recibe una fecha "2025-02-12 13:23:05" y devuelve una fecha formateada "12 febrero 2025"
export function formatearFecha(fechaStr) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const fecha = new Date(fechaStr);

    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();
    return `${dia} ${mes} ${anio}`;
}

export const escapeHTML = (str) => {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

    export const replaceSpecialQuotes = (str) => {
        if (!str) return "";
            return str.replace(/(\s)\?(\s)/g, '$1"$2'); // Reemplaza " ? " por ' " '
};

export const jsonParseCopetes = (copetes) => {
    if (!copetes) return ""; // Maneja valores nulos o indefinidos

    try {
        // Intenta procesar el texto como JSON
        const escapedCopetes = copetes.replace(/"/g, '\\"');
        return `${JSON.parse( '"'+ escapedCopetes + '"')}`;
    } catch (error) {
        console.error("Error al procesar el copete:", error);
        // Devuelve el texto original si ocurre un error
        return copetes;
    }
};

export const decodearContenidoNota = (contenido) => {
    return decodeURIComponent(escape(atob(contenido)))
}
