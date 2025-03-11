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
import { setNotasMunicipio, setNotasPais, setNotasPorCategoria, setNotasProvincia, setNotasSuProvincia } from '../../redux/datosHome.js';
import { fetchNotas } from '../common/Api.jsx';
import { eliminarRepetidos } from '../../redux/datosHome.js';
import Header from '../header/Header.jsx';
import React from 'react';
import { useParams } from 'react-router-dom';

function CategoriasHome() {
    const dispatch = useDispatch();
    const notasPorCategoria = useSelector((state) => state.datosHome.notasHome.categoria);
    const { categoria } = useParams();


    console.log("ENTRE A LA HOME DE CATREGORIA")

    const [notasScrollInfinito, setNotasScrollInfinito] = useState([]);
    const [page, setPage] = useState(0);
  
    useEffect(() => {
      const fetchAllNotas = async () => {
        const formData1 = new FormData();
        formData1.append('token', 1);
        formData1.append("categoria", categoria.replace(/-/g, " "));
        const fetch1 = fetchNotas(formData1, setNotasPorCategoria, dispatch);
  
        await Promise.all([fetch1]); ///despues de terminar, elimino los repetidos
        dispatch(eliminarRepetidos());
      };
  
      fetchAllNotas();
    }, [ dispatch, categoria]);

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight / 2) return;
        setPage(prevPage => prevPage + 15);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      const loadMoreNotas = async () => {
        const formData = new FormData();
        formData.append('token', 1);
        formData.append("categoria", categoria.replace(/-/g, " "));
        formData.append("limite", "15");
        formData.append("desde_limite", page);
        const response = await fetchNotas(formData, "", dispatch);
        setNotasScrollInfinito(prevNotas => [...prevNotas, ...response.data.item.notas]);
      };
  
      loadMoreNotas();
    }, [page, dispatch, categoria, notasPorCategoria]);
  

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
    <ModuloPortadaConCarrusel notasCarrusel={notasPorCategoria.slice(0,2)} notasDerechaCarrusel={notasPorCategoria.slice(2)}/>
    <ModuloUltimasNoticiasConLoMasLeidoALaDerecha notas = {notasPorCategoria.slice(7)} notasScrollInfinito = {notasScrollInfinito.slice(15)}/>


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

export default CategoriasHome;
