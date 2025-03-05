import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PublicidadHorizontal from '../publicidad/PublicidadHorizontal.jsx';
import Footer from '../navbars y footer/Footer.jsx';
import Header from '../header/Header.jsx';
import BannerNegroVerticalMasLeidas from '../notasMini/BannerNegroVerticalMasLeidas.jsx';
import { formatearFecha } from '../common/formats.js';
import "./nota.css";
import React from 'react';

function NotaPrevisualizacion({ pais }) {
  const { id } = useParams();
  const [TOKEN, setTOKEN] = useState(null);
  const [nota, setNota] = useState(null);
  const [notasBanner, setNotasBanner] = useState(null);

  // Obtener el TOKEN solo una vez
  useEffect(() => {
    axios
      .post("https://builder.ntcias.de/public/index.php", {}, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        if (response?.data?.token) {
          console.log("Token recibido:", response.data.token);
          setTOKEN(response.data.token);
        } else {
          console.error('Error en login:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error en login:', error);
      });
  }, []);

  // Obtener la nota cuando ya tenemos el TOKEN (se ejecuta una sola vez cuando el TOKEN está disponible)
  useEffect(() => {
    if (TOKEN) {
      const formData = new FormData();
      formData.append('token', TOKEN);
      formData.append('categoria', "BORRADOR");
      formData.append('desde', "");
      formData.append('hasta', "");
      formData.append('cliente', "");
      formData.append('limit', 15);
      formData.append('offset', 0);
      formData.append('id', id); // Corrección: Se pasa id sin llaves

      axios
        .post("https://panel.serviciosd.com/app_obtener_noticias_abm", formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          if (response?.data?.item?.length) {
            console.log("Nota recibida:", response.data.item[0]);
            setNota(response.data.item[0]);
          } else {
            console.error('Error en obtener nota:', response.data.message);
          }
        })
        .catch((error) => {
          console.error('Error en obtener nota:', error);
        });
    }
  }, [TOKEN]); // Solo se ejecuta cuando TOKEN cambia (una vez que se obtiene)

  if (!nota) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <PublicidadHorizontal />
      <Header />

      <div className='row contenedorNota'>
        <div className='col-auto '>
          <div className='row justify-content-center mt-4'>
            <div className='col-6'>
              <h1 className='tituloNota'>{nota.titulo}</h1>
              <h2 className='copete'>{nota.copete}</h2>
              <img src={nota.imagen} alt="Imagen de la nota" />

              <div className='contenidoNotaDanger' dangerouslySetInnerHTML={{ __html: nota.content }} />

              {/* SECTOR AUTOR */}
              <div className="row mt-3 filaDatosNota">
                <div className="col-auto p-0">
                  <img src='/images/AvatarEditor.png' className='imagenAvatarNota' alt="Avatar del autor" />
                </div>
                <div className="col-8 p-0">
                  <p style={{ color: "black", fontWeight: "bold", marginBottom: "0px", marginLeft: "10px" }}>
                    {nota.authors ? nota.authors : nota.cliente}
                  </p>
                  <p style={{ color: "#BABABA", marginLeft: "10px" }}>{formatearFecha(nota.f_pub)}</p>
                </div>
              </div>
              {/* FIN SECTOR AUTOR */}
            </div>

            <div className='col-auto'>
              <BannerNegroVerticalMasLeidas notas={notasBanner} />
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
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NotaPrevisualizacion;
