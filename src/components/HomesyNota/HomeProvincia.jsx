import { useState } from 'react';
import PublicidadHorizontal from '../publicidad/PublicidadHorizontal.jsx';
import ModuloPortadaConCarrusel from '../modulos/ModuloPortadaConCarrusel.jsx';
import ModuloLoMasVisto from '../modulos/ModuloLoMasVisto.jsx';
import ModuloUltimasNoticiasConLoMasLeidoALaDerecha from '../modulos/ModuloUltimasNoticiasConLoMasLeidoALaDerecha.jsx';
import ModuloUltimasNoticiasConDestacadaDeLaSemana from '../modulos/ModuloUltimasNoticiasConDestacadaDeLaSemana.jsx';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Footer from '../navbars y footer/Footer.jsx';
import { useDispatch } from 'react-redux';
import { setNotasMunicipio, setNotasPais, setNotasProvincia, setNotasSuProvincia } from '../../redux/datosHome.js';
import { fetchNotas } from '../common/Api.jsx';
import { eliminarRepetidos } from '../../redux/datosHome.js';
import Header from '../header/Header.jsx';
import "./mobileHome.css"
import React from 'react';


function HomeProvincia({ pais, provincia }) {
    const [datoGeoProvincia, setDatoGeoProvincia ] = useState("");
    
    const dispatch = useDispatch();
    const notasPais = useSelector((state) => state.datosHome.notasHome.pais);
    const suProvincia = useSelector((state) => state.datosHome.notasHome.suProvincia);
    const provinciaHome = useSelector((state) => state.datosHome.notasHome.provincia);
    const notasMunicipio = useSelector((state) => state.datosHome.notasHome.municipio);

    const provinciaFormateada = provincia.replace(/-/g, " ");
    console.log(provinciaFormateada);

    const paises = useSelector((state) => state.datosHome.datoGeo.paises);
    useEffect(() => {
      if (paises) {
        const provincias = paises.filter(paiss => paiss.nombre === pais)[0].provincias;
        const ProvinciaActual = provincias.filter(prov => prov.nombre.toLowerCase() === provinciaFormateada.toLowerCase())[0];
        setDatoGeoProvincia(ProvinciaActual)
      }
      console.log(datoGeoProvincia, "USE EFFECT GEO")
    }, [paises, datoGeoProvincia]);


    const [notasScrollInfinito, setNotasScrollInfinito] = useState([]);
    const [page, setPage] = useState(0);
  
    useEffect(() => {
      const fetchAllNotas = async () => {
        const formData1 = new FormData();
        formData1.append('token', 1);
        formData1.append("pais", pais);
        const fetch1 = fetchNotas(formData1, setNotasPais, dispatch);
  
        const formData2 = new FormData();
        formData2.append('token', 1);
        formData2.append("provincia", provinciaFormateada);
        const fetch2 = fetchNotas(formData2, setNotasProvincia, dispatch);
  
        const formData3 = new FormData();
        formData3.append('token', 1);
        formData3.append("provincia", "LOCAL");
        const fetch3 = fetchNotas(formData3, setNotasSuProvincia, dispatch);

        const formData4 = new FormData();
        formData4.append('token', 1);
        formData4.append("municipio", "municipio de lanús");
        const fetch4 = fetchNotas(formData4, setNotasMunicipio, dispatch);
  
        await Promise.all([fetch1, fetch2, fetch3, fetch4]);
  
        // Ejecutar la función cuando terminen de cargar los 3 fetch
        console.log('Todos los fetch han terminado');
        // Aquí puedes llamar a la función que desees ejecutar
        dispatch(eliminarRepetidos());
      };
  
      fetchAllNotas();
    }, [pais, dispatch]);

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight / 2) return;
        setPage(prevPage => prevPage + 9);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      const loadMoreNotas = async () => {
        const formData = new FormData();
        formData.append('token', 1);
        formData.append("provincia", provinciaFormateada);
        formData.append("region", datoGeoProvincia.region);
        formData.append("limite", "9");
        formData.append("desde_limite", page);
        const response = await fetchNotas(formData, "", dispatch);
        setNotasScrollInfinito(prevNotas => [...prevNotas, ...response.data.item.notas]);
      };
  
      loadMoreNotas();
    }, [page, pais, dispatch]);
  

  return (
    <>
    <PublicidadHorizontal/>
    <Header/>

    <div
        className="row m-0 justify-content-center"
        style={{
            minHeight: "100vh", // La fila debe cubrir toda la altura del viewport
        }}
    >
  <div className="col-auto p-0">
    <ModuloPortadaConCarrusel notasCarrusel={provinciaHome} notasDerechaCarrusel={notasPais}/>
    <ModuloUltimasNoticiasConDestacadaDeLaSemana notasSuProvincia = {provinciaHome.slice(2)} /> {/* notas de la provincia */}
    <ModuloLoMasVisto notas = {notasMunicipio}/>  {/* Aca van las notas de los municipios de la provincia */}
    <PublicidadHorizontal />
    <ModuloUltimasNoticiasConLoMasLeidoALaDerecha notas = {provinciaHome.slice(10)} notasScrollInfinito = {notasScrollInfinito}/>


  </div>

  <div
    className="col-auto p-0 ml-5"
        style={{
        backgroundColor: "grey",
        minHeight: "100vh",
        width: "300px",
        marginLeft: "40px", 
        marginTop: "20px",
        }}
    >
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default HomeProvincia;
