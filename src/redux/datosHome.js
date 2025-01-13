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
}
});

// Exportar las acciones y el reducer
export const { setDatoPais, setDatoProvincia,  setDatoGeo, 
  setNotasMunicipio, setNotasPais, setNotasProvincia, setNotasSuProvincia, setNotasMostradas } = datosHome.actions;
export default datosHome.reducer;