import { useReducer, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import HomePais from './HomesyNota/HomePais';
import { useParams } from 'react-router-dom';
import { setDatoGeo, setDatoPais } from '../redux/datosHome';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import HomeProvincia from './HomesyNota/HomeProvincia';
import HomeMunicipio from './HomesyNota/HomeMunicipio';
import "./HomesyNota/mobileHome.css"
import React from 'react'; // Asegúrate de que esté presente
import CategoriasHome from './HomesyNota/CategoriaHome';
import { obtenerGeo, obtenerToken } from './common/Api';

function Sitio(homeCategoria) {
  const [TOKEN, setTOKEN] = useState("");
  const [tokenLoaded, setTokenLoaded] = useState(false)
  const { pais, provincia, municipio } = useParams();
  const { categoria } = useParams();
  const [provinciasDeUnPais, setProvinciasDeUnPais] = useState([]);
  const dispatch = useDispatch();
  const SeleccionarUbicacion = useSelector((state) => state.datosHome.mostrarUbicacion);

  useEffect(() => {
    console.log("Cambiando de categoría:", categoria);
  }, [categoria]); 
 




return (
    <>
      {categoria ? (
        <CategoriasHome categoria={categoria} />) :
      
      municipio ? (
        <HomeMunicipio pais={pais} provincia={provincia} municipio={municipio} />
      ) : provincia ? (
        <HomeProvincia pais={pais} provincia={provincia} />
      ) : pais ? (
        <HomePais pais={pais} />
      ) : (
        <HomePais pais="Argentina" />
      )}
    </>
  );
}

export default Sitio;
