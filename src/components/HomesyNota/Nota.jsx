import { useState } from 'react';
import PublicidadHorizontal from '../publicidad/PublicidadHorizontal.jsx';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from '../navbars y footer/Footer.jsx';
import Header from '../header/Header.jsx';
import { useParams } from 'react-router-dom';
import "./nota.css"
import BannerNegroVerticalMasLeidas from '../notasMini/BannerNegroVerticalMasLeidas.jsx';
import { decodearContenidoNota, formatearFecha, jsonParseCopetes } from '../common/formats.js';
import React from 'react';
import FirmaNotas from '../common/firmaNotas.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setDatoNota } from '../../redux/datosHome.js'
import he from 'he';

function Nota({ pais }) {
  const [TOKEN, setTOKEN] = useState("");
  const [tokenLoaded, setTokenLoaded] = useState(false)
  const { id } = useParams();

  const nota = useSelector(state => state.datosHome.nota)
  const [notaABM, setNotaABM] = useState("")
  const [notasBanner, setNotasBanner] = useState("")
  const dispatch = useDispatch()


 
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
    } else if(nota && Object.keys(nota).length === 0){
        // Crear el FormData para enviar el token
        const formData = new FormData();
        formData.append('token', TOKEN);
        formData.append('id_noti', id);

        axios.post("https://panel.serviciosd.com/app_obtener_noticia", formData, { 
            headers: { 'Content-Type': 'multipart/form-data' },
        })

        .then((response) => {
            if (response) {
              dispatch(setDatoNota(response.data.item[0]))
            } else {
                console.error('Error en obtener geo:', response.data.message);
            }
        })
        .catch((error) => {
            console.error('Error en obtener geo:', error);
        });
    }else if(nota){
      const formData = new FormData();
      formData.append('token', TOKEN);
      formData.append('categoria', "PUBLICADO");
      formData.append('desde', "");
      formData.append('hasta', "");
      formData.append('cliente', nota.cliente);
      formData.append('limit', 15);
      formData.append('offset', 0);
      formData.append('id', "");
      axios.post("https://panel.serviciosd.com/app_obtener_noticias_abm", formData, { 
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
        if (response) {
          console.log(response)
          setNotaABM(response.data.item[0])
          setNotasBanner(response.data.item.slice(1,5))

        } else {
            console.error('Error en obtener geo:', response.data.message);
        }
    })
    .catch((error) => {
        console.error('Error en obtener geo:', error);
    });

    }
}, [TOKEN, tokenLoaded, nota]);

  if(Object.keys(nota).length === 0){
    return (
      <>
        <PublicidadHorizontal />
        <Header cliente={nota?.cliente} />

        <div className="row g-0 contenedorNota">
          <div className="col-auto ">
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card" aria-hidden="true">
                <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>

                    </p>
                  <img
                    src="/images/gitftND.gif" // Imagen de carga genérica
                    className="card-img-top"
                    alt="Cargando..."
                    style={{width: "100%", backgroundColor: "gray"}}
                  />
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  
  }

  const fixQuotes = (html) => {
    if (!html) return "";
    return html.replace(/<p[^>]*>(.*?)<\/p>/g, (match, content) => {
      // Reemplaza los "?" solo dentro del contenido de <p>
      const fixedContent = content.replace(/\?/g, "'");
      return `<p>${fixedContent}</p>`;
    });
  };

  return (
    <>
    <PublicidadHorizontal/>
    <Header cliente = {nota.cliente}/>
    
    <div className='row g-0 contenedorNota'>
      <div className='col-auto '>
        <div className='row justify-content-center mt-4'>
          <div className='col-12 col-md-6'> 
          <h1 className='tituloNota'>{nota?.titulo ? he.decode(nota.titulo) : "Título no disponible"}</h1>
          <h2 className='copete'>{jsonParseCopetes(nota.copete)} </h2>
          <img src={nota.imagen}></img>

          <div className='contenidoNotaDanger' dangerouslySetInnerHTML={{ __html: decodearContenidoNota(nota.content) }} />

          {/* SECTOR AUTOR */}
          <FirmaNotas border = {false} nombreCLiente = {nota.cliente} f_pub = {formatearFecha(nota.f_pub)} />
          {/* FIN SECTOR AUTOR */}

          </div>
          <div className='col-auto'> 
            <BannerNegroVerticalMasLeidas notas = {notasBanner}/>
          </div>
          <div ///Banda gris de la derecha 
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
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Nota;
