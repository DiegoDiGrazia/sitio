import { useState } from 'react';
import Navbar from './navbars y footer/Navbar';
import NavbarCategorias from './navbars y footer/NavbarCategorias';
import PublicidadHorizontal from './publicidad/PublicidadHorizontal';
import ModuloPortadaConCarrusel from './ModuloPortadaConCarrusel';
import ModuloLoMasVisto from './ModuloLoMasVisto';
import ModuloUltimasNoticiasConDestacadaDeLaSemana from './ModuloUltimasNoticiasConDestacadaDeLaSemana';
import ModuloUltimasNoticiasConLoMasLeidoALaDerecha from './ModuloUltimasNoticiasConLoMasLeidoALaDerecha';
import ModuloWebstories from './ModuloWebstories';
import ModuloUltimasNoticiasConTendenciasAbajo from './ModuloUltimasNoticiasConTendenciasAbajo';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Footer from './navbars y footer/Footer';
import { useDispatch } from 'react-redux';
import { setNotasPais, setNotasProvincia, setNotasSuProvincia } from '../redux/datosHome';
import { fetchNotas } from './common/Api.jsx';

function HomePais({ pais }) {
    const datosDeArgentina = useSelector((state) => state.datosHome);
    const dispatch = useDispatch();
    const notasPais = useSelector((state) => state.datosHome.notasHome.pais);
    const notasProvincia = useSelector((state) => state.datosHome.notasHome.provincia);
    const suProvincia = useSelector((state) => state.datosHome.notasHome.suProvincia);
  
    useEffect(() => {

      ///NOTAS DEL PAIS QUE VIENE POR PARAMETRO DE URL  
      const formData1 = new FormData();
      formData1.append('token', 1);
      formData1.append("pais", pais);
      fetchNotas(formData1, setNotasPais, dispatch);
  
      ///NOTAS DE LAS PROVINCIAS DE SU PAIS
      const formData2 = new FormData();
      formData2.append('token', 1);
      formData2.append("pais", pais);
      formData2.append("ALL", pais);
      fetchNotas(formData2, setNotasProvincia, dispatch);
  
      /// NOTAS DE SU PROVINCIA
      const formData3 = new FormData();
      formData3.append('token', 1);
      formData3.append("provincia", "LOCAL");
      fetchNotas(formData3, setNotasSuProvincia, dispatch);
    }, [pais, dispatch]);
  

  return (
    <>
    <PublicidadHorizontal/>
        <div className='row row m-0 justify-content-center'>
            <div className="col-10 p-0" style={{width: "1560px"}}>
                <Navbar/>
                <NavbarCategorias/>
            </div>
        </div>
    <div
        className="row m-0 justify-content-center"
        style={{
            minHeight: "100vh", // La fila debe cubrir toda la altura del viewport
        }}
    >
  <div className="col-auto p-0">
    <ModuloPortadaConCarrusel notasCarrusel={notasPais} notasDerechaCarrusel={notasProvincia} notasDebajoCarrusel={suProvincia}/>
    <ModuloLoMasVisto />
    <ModuloUltimasNoticiasConDestacadaDeLaSemana />
    <PublicidadHorizontal />
    <ModuloUltimasNoticiasConLoMasLeidoALaDerecha />
    <PublicidadHorizontal />
    <ModuloWebstories />
    <ModuloUltimasNoticiasConTendenciasAbajo />
  </div>

  <div
    className="col-3 p-0 ml-5"
        style={{
        backgroundColor: "grey",
        minHeight: "100vh",
        width: "340px",
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
