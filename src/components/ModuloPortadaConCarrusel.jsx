import { useState } from 'react';
import CarruselNotas from './CarruselNotas';
import MiniNotaConImagenVertical from './notasMini/miniNotaConImagenVertical';
import BotonVerMas from './common/BotonVerMas';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotaMiniGenerica from './notasMini/notaMiniGenerica';
import { obtenerNotaDelTipo } from './common/Api.jsx';




function ModuloPortadaConCarrusel({notasCarrusel, notasDerechaCarrusel, notasDebajoCarrusel}) {

  return (
    <>
        <div className='row moduloPortada mt-4'>
            <div className='col-auto'>
              <CarruselNotas notas={notasCarrusel.slice(0, 5)}  />
            </div>
            <div className='col-auto' style={{marginLeft: "40px"}}>
              <MiniNotaConImagenVertical border={true} nota={obtenerNotaDelTipo("pais")}/>
              <MiniNotaConImagenVertical border={true } nota={obtenerNotaDelTipo("pais")}/>
              <MiniNotaConImagenVertical nota={obtenerNotaDelTipo("pais")}/>
            </div>
        </div>
        <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[1]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[2]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[3]}/>
        </div>
        <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[4]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[5]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[6]}/>
        </div>
    </>
  );

}

export default ModuloPortadaConCarrusel;
