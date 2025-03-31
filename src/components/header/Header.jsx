import { useState } from 'react';
import Navbar from './Navbar';
import NavbarCategorias from './NavbarCategorias';
import ContainerUbicacion from './elegirUbicacion/ContainerUbicacion';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setDatoGeo, setDatoPais } from '../../redux/datosHome';
import { useDispatch } from 'react-redux';
import React from 'react'; // Asegúrate de que esté presente
import { obtenerGeo, obtenerToken } from '../common/Api';
import DynamicHeaders from './DynamicHeaders';


function Header( {cliente} ) {
    const SeleccionarUbicacion = useSelector((state) => state.datosHome.mostrarUbicacion);
    const [TOKEN, setTOKEN] = useState("");
    const [tokenLoaded, setTokenLoaded] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
    const fetchData = async () => {
      try {
        if (!tokenLoaded) {
          const token = await obtenerToken();
          setTOKEN(token);
          setTokenLoaded(true);
        } else {
          const geoData = await obtenerGeo(TOKEN);
          console.log("GEO DATA" , geoData)
          const argentina = geoData.paises.filter((pais) => pais.nombre === "Argentina");
          dispatch(setDatoGeo(geoData));
          dispatch(setDatoPais(argentina[0]));
        }
      } catch (error) {
        console.error('Error en fetchData:', error);
      }
    };

    fetchData();
  }, [TOKEN, tokenLoaded, dispatch]);
  return (
    <>
        <DynamicHeaders/>
        <div className='row row m-0 justify-content-center'>
            <div className="col-10 p-0" style={{width: "1560px"}}>
                <Navbar cliente = {cliente}/>
                <NavbarCategorias/>
                {SeleccionarUbicacion && <ContainerUbicacion/>}
            </div>
        </div>
    </>
    )
    }

export default Header;