import { useState } from 'react';
import PublicidadHorizontal from '../publicidad/PublicidadHorizontal.jsx';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from '../navbars y footer/Footer.jsx';
import Header from '../header/Header.jsx';
import { useParams } from 'react-router-dom';
import "./nota.css"
import BannerNegroVerticalMasLeidas from '../notasMini/BannerNegroVerticalMasLeidas.jsx';
import { formatearFecha } from '../common/formats.js';
import React from 'react';

function Nota({ pais }) {
  const [TOKEN, setTOKEN] = useState("");
  const [tokenLoaded, setTokenLoaded] = useState(false)
  const { id } = useParams();
  const [nota, setNota] = useState("")
  const [notaABM, setNotaABM] = useState("")
  const [notasBanner, setNotasBanner] = useState("")



 
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
    } else if(!nota){
        // Crear el FormData para enviar el token
        const formData = new FormData();
        formData.append('token', TOKEN);
        formData.append('id_noti', id);

        axios.post("https://panel.serviciosd.com/app_obtener_noticia", formData, { 
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
            if (response) {
              console.log(response)
              setNota(response.data.item[0])
              console.log(notasBanner, "notas banner")
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

  if(!nota){
    return <div>cargando</div>
  }

  return (
    <>
    <PublicidadHorizontal/>
    <Header/>
    
    <div className='row contenedorNota'>
      <div className='col-auto '>
        <div className='row justify-content-center mt-4'>
          <div className='col-12 col-md-6'> 
          <h1 className='tituloNota'>{nota.titulo}</h1>
          <h2 className='copete'>{nota.copete} </h2>
          <img src={nota.imagen}></img>

          <div className='contenidoNotaDanger' dangerouslySetInnerHTML={{ __html: nota.content }} />

          {/* SECTOR AUTOR */}
          <div className="row mt-3 filaDatosNota">
            <div className="col-auto p-0">
                <img src='/images/AvatarEditor.png' className='imagenAvatarNota'></img>
            </div>
            <div className="col-8 p-0" >
                <p style={{color: "black", fontWeight: "bold", marginBottom: "0px", marginLeft: "10px"}}>{nota.authors ? nota.authors : nota.cliente}</p>
                <p style={{color: "#BABABA" , marginLeft: "10px"}}>{formatearFecha(nota.f_pub)}</p>

            </div>
        </div>
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
