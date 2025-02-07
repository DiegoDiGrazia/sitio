import { useReducer, useState } from 'react';
import Navbar from './header/Navbar';
import NavbarCategorias from './header/NavbarCategorias';
import PublicidadHorizontal from './publicidad/PublicidadHorizontal';
import ModuloPortadaConCarrusel from './modulos/ModuloPortadaConCarrusel';
import ModuloLoMasVisto from './modulos/ModuloLoMasVisto';
import ModuloUltimasNoticiasConDestacadaDeLaSemana from './modulos/ModuloUltimasNoticiasConDestacadaDeLaSemana';
import ModuloUltimasNoticiasConLoMasLeidoALaDerecha from './modulos/ModuloUltimasNoticiasConLoMasLeidoALaDerecha';
import ModuloWebstories from './modulos/ModuloWebstories';
import ModuloUltimasNoticiasConTendenciasAbajo from './modulos/ModuloUltimasNoticiasConTendenciasAbajo';
import { useEffect } from 'react';
import axios from 'axios';
import HomePais from './Homes/HomePais';
import { useParams } from 'react-router-dom';
import { setDatoGeo, setDatoPais } from '../redux/datosHome';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import HomeProvincia from './Homes/HomeProvincia';
import HomeMunicipio from './Homes/HomeMunicipio';

function Sitio() {
  const [TOKEN, setTOKEN] = useState("");
  const [tokenLoaded, setTokenLoaded] = useState(false)
  const { pais, provincia, municipio } = useParams();
  const [provinciasDeUnPais, setProvinciasDeUnPais] = useState([]);
  const dispatch = useDispatch();
  const SeleccionarUbicacion = useSelector((state) => state.datosHome.mostrarUbicacion);

 
  useEffect(() => {
    if (!tokenLoaded) {
        axios.post("https://builder.ntcias.de/public/index.php", {}, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
            if (response) {
                console.log(response);
                setTOKEN(response.data.token);
                setTokenLoaded(true); // Marca el token como cargado
            } else {
                console.error('Error en login:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error en login:', error);
        });
    } else {
        // Crear el FormData para enviar el token
        const formData = new FormData();
        formData.append('token', TOKEN);

        axios.post("https://panel.serviciosd.com/app_obtener_geo", formData, { 
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
            if (response) {
                setProvinciasDeUnPais(response.data.item.geo.paises.filter(pais => pais.nombre === "Argentina"))
                console.log(response.data.item.geo.paises.filter(pais => pais.nombre === "Argentina"))
                dispatch(setDatoGeo(response.data.item.geo))
                dispatch(setDatoPais(response.data.item.geo.paises.filter(pais => pais.nombre === "Argentina")[0]))


            } else {
                console.error('Error en obtener geo:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error en obtener geo:', error);
        });
    }
}, [TOKEN, tokenLoaded]);



  return (
    <>
        {municipio && <HomeMunicipio pais = {pais} provincia = {provincia} municipio = {municipio} />}
        {provincia && !municipio && <HomeProvincia pais = {pais} provincia = {provincia} />}
        {(pais && !provincia && !municipio) && <HomePais pais = {pais}/>}
    </>
  );
}

export default Sitio;
