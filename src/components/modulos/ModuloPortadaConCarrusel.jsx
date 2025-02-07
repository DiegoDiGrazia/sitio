import { useState } from 'react';
import CarruselNotas from '../CarruselNotas';
import MiniNotaConImagenVertical from '../notasMini/miniNotaConImagenVertical';
import NotaMiniGenerica from '../notasMini/notaMiniGenerica';




function ModuloPortadaConCarrusel({notasCarrusel, notasDebajoCarrusel,notasDebajoCarrusel1Fila,  notasDerechaCarrusel}) {
  

  return (
    <>
        <div className='row moduloPortada mt-4'>
            <div className='col-auto'>
              <CarruselNotas notas={notasCarrusel.slice(0, 2)}  />
            </div>
            <div className='col-auto' style={{marginLeft: "40px"}}>
              <MiniNotaConImagenVertical border={true} nota={notasDerechaCarrusel[0]}/>
              <MiniNotaConImagenVertical border={true } nota={notasDerechaCarrusel[1]}/>
              <MiniNotaConImagenVertical nota={notasDerechaCarrusel[2]}/>
            </div>
        </div>

        {notasDebajoCarrusel1Fila && 
          <>
            <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel1Fila[0]}/>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel1Fila[1]}/>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel1Fila[2]}/>
            </div>
          </>
        }
        {notasDebajoCarrusel && 
          <>
            <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel[0]}/>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel[1]}/>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel[2]}/>
            </div>
            <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel[3]}/>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel[4]}/>
              <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasDebajoCarrusel[5]}/>
            </div>
          </>
        }
    </>
  );

}

export default ModuloPortadaConCarrusel;
