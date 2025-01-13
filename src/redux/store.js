import { configureStore } from '@reduxjs/toolkit';
import datosHome from './datosHome'; // Importar el reducer correctamente

// Configurar la tienda
export const store = configureStore({
  reducer: {
    datosHome, // Usar el reducer que definiste
  },
});

export default store;