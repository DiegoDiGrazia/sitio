import { createSlice } from '@reduxjs/toolkit';

// Definir el slice
const datosHome = createSlice({
  name: 'datosHome',
  initialState: {
    datoPais: {},
    datoProvincia: {},
    notasHome: {pais: [], provincia: [], suProvincia: [], municipio: []},
    datoGeo: {},
    notasMostradas: [],
    mostrarUbicacion: false,

  },
  reducers: {
    setDatoPais: (state, action) => {
      state.datoPais = action.payload;
    },
    setDatoProvincia: (state, action) => {
      state.datoProvincia = action.payload;
    },
    setNotasPais: (state, action) => {
      state.notasHome.pais = state.notasHome.pais.concat(action.payload);
    },
    setNotasProvincia: (state, action) =>{
      state.notasHome.provincia= state.notasHome.provincia.concat(action.payload);
    },
    setNotasMunicipio: (state, action) =>{
      state.notasHome.municipio= state.notasHome.municipio.concat(action.payload);
    },
    setNotasSuProvincia: (state, action) =>{
      state.notasHome.suProvincia = state.notasHome.suProvincia.concat(action.payload);
    },
    setDatoGeo: (state, action) => {
      state.datoGeo = action.payload;
    },
    setNotasMostradas: (state, action) => {
      state.notasMostradas = [...state.notasMostradas, action.payload]; 
    },
      setMostrarUbicacion: (state, action) => {
      state.mostrarUbicacion = action.payload
    },

    eliminarRepetidos: (state) => {
      let idRecorridos = new Set();

      // Recorrer todas las propiedades de notasHome
      for (let clave in state.notasHome) {
        state.notasHome[clave] = state.notasHome[clave].filter(nota => {
          if (idRecorridos.has(nota.id_noti)) {
            return false;
          } else {
            idRecorridos.add(nota.id_noti);
            return true;
          }
        });
      }
    },
  },
});

// Exportar las acciones y el reducer
export const { setDatoPais, setDatoProvincia,  setDatoGeo, 
  setNotasMunicipio, setNotasPais, setNotasProvincia, setNotasSuProvincia, setNotasMostradas, eliminarRepetidos, setMostrarUbicacion } = datosHome.actions;
export default datosHome.reducer;