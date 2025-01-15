import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNotasMostradas } from '../../redux/datosHome';
import { useState } from 'react';
import { useEffect } from 'react';


// Función para obtener las notas
export const obtenerNotas = (pais, provincia) => {
  const formData = new FormData();
  formData.append('token', 1);
  formData.append('pais', pais);
  if (provincia) formData.append('provincia', provincia);

  return axios.post('https://panel.serviciosd.com/app_obtener_notas_portada', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};



export const fetchNotas = async (formData, action, dispatch) => {
  try {
    const response = await axios.post("https://panel.serviciosd.com/app_obtener_notas_portada", formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (response) {
      console.log(response, "FETCH NOTAS");
      if(action){
      dispatch(action(response.data.item.notas));
      }
      return response;
    } else {
      console.error('Error en login:', response.data.message);
    }
  } catch (error) {
    console.error('Error en login:', error);
  }
};
export const obtenerNotaDelTipo = (tipoNotas) => {
  const notas = useSelector((state) => state.datosHome.notasHome[tipoNotas]);
  const notasMostradas = useSelector((state) => state.datosHome.notasMostradas);
  const dispatch = useDispatch();

  const [nota, setNota] = useState(null);

  useEffect(() => {
    for (let nota of notas) {
      if (!notasMostradas.includes(nota.id_noti)) {
        dispatch(setNotasMostradas(nota.id_noti));
        setNota(nota);
        break;
      }
    }
  }, [notas]);

  return nota;
};
