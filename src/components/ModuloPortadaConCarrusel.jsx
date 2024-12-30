import { useState } from 'react';
import CarruselNotas from './CarruselNotas';
import MiniNotaConImagenVertical from './notasMini/miniNotaConImagenVertical';
import BotonVerMas from './common/BotonVerMas';
function ModuloPortadaConCarrusel() {
  return (
    <>
        <div className='row moduloPortada mt-4'>
            <div className='col-auto'>
              <CarruselNotas/>
            </div>
            <div className='col-auto' style={{marginLeft: "40px"}}>
              <MiniNotaConImagenVertical border={true}/>
              <MiniNotaConImagenVertical border={true}/>
              <MiniNotaConImagenVertical/>
              <BotonVerMas/>
            </div>

        </div>
    
    </>
  );
}

export default ModuloPortadaConCarrusel;
