import { useState } from 'react';
import CarruselNotas from './CarruselNotas';
import MiniNotaConImagenVertical from './notasMini/miniNotaConImagenVertical';
import BotonVerMas from './common/BotonVerMas';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotaMiniGenerica from './notasMini/notaMiniGenerica';
import { obtenerNotaDelTipo } from './common/Api.jsx';




function ModuloPortadaConCarrusel({notasPais, notasDebajoCarrusel}) {
  

  return (
    <>
        <div className='row moduloPortada mt-4'>
            <div className='col-auto'>
              <CarruselNotas notas={notasPais.slice(0, 2)}  />
            </div>
            <div className='col-auto' style={{marginLeft: "40px"}}>
              <MiniNotaConImagenVertical border={true} nota={notasPais[2]}/>
              <MiniNotaConImagenVertical border={true } nota={notasPais[3]}/>
              <MiniNotaConImagenVertical nota={notasPais[4]}/>
            </div>
        </div>
        <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[5]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[6]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[7]}/>
        </div>
        <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[8]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[9]}/>
            <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota ={notasDebajoCarrusel[10]}/>
        </div>
    </>
  );

}

export default ModuloPortadaConCarrusel;
