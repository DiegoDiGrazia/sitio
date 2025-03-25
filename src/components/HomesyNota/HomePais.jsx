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
import React from 'react';

function HomePais({ pais }) {
    const datosDeArgentina = useSelector((state) => state.datosHome);
    const dispatch = useDispatch();
    const notasPais = useSelector((state) => state.datosHome.notasHome.pais);
    const notasProvincia = useSelector((state) => state.datosHome.notasHome.provincia);
    const suProvincia = useSelector((state) => state.datosHome.notasHome.suProvincia);
    const notasMunicipio = useSelector((state) => state.datosHome.notasHome.municipio);

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
        formData2.append("pais", pais);
        formData2.append("ALL", pais);
        const fetch2 = fetchNotas(formData2, setNotasProvincia, dispatch);
  
        const formData3 = new FormData();
        formData3.append('token', 1);
        formData3.append("provincia", "LOCAL");
        const fetch3 = fetchNotas(formData3, setNotasSuProvincia, dispatch);

        const formData4 = new FormData(); /// ACA AGREGAR LO DEL MUNI ALL
        formData4.append('token', 1);
        formData4.append("municipio", "");
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
  
    const [isFetching, setIsFetching] = useState(false); // Nuevo estado

    useEffect(() => {
      const loadMoreNotas = async () => {
        if (isFetching) return; // Evita múltiples llamadas simultáneas
        setIsFetching(true); // Indica que la petición está en curso
        const formData = new FormData();
        formData.append('token', 1);
        formData.append("pais", pais);
        formData.append("limite", "9");
        formData.append("desde_limite", page);
                try {
                  const response = await fetchNotas(formData, "", dispatch);
                  setNotasScrollInfinito(prevNotas => [...prevNotas, ...response.data.item.notas]);
                } catch (error) {
                  console.error("Error cargando más notas:", error);
                } finally {
                  setIsFetching(false); // Libera el bloqueo cuando termina la petición
                }

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
    <ModuloPortadaConCarrusel notasCarrusel={notasPais} notasDebajoCarrusel1Fila={suProvincia} notasDerechaCarrusel= {notasPais.slice(2)}/>
    <ModuloUltimasNoticiasConDestacadaDeLaSemana notasSuProvincia = {suProvincia.slice(3)} />
    <ModuloLoMasVisto notas = {notasMunicipio}/>
    <PublicidadHorizontal />
    <ModuloUltimasNoticiasConLoMasLeidoALaDerecha notas = {notasPais.slice(5)} notasScrollInfinito = {notasScrollInfinito.slice(5)}/>


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

export default HomePais;
