import { useState } from 'react';
import CarruselNotas from './CarruselNotas';
import MiniNotaConImagenVertical from './notasMini/miniNotaConImagenVertical';
import BotonVerMas from './common/BotonVerMas';
import NotaConVideo from './notasMini/notaConVideo';
import NotaConVideoGrande from './notasMini/NotaConVideoGrande';
function ModuloLoMasVisto() {
  return (
    <>
        <div className='row moduloPortada mt-4' style={{backgroundColor: "#131313", width: "1230px" }}>
            <div className='row' style={{paddingTop: "20px"}}>
                <div className='col-7' style={{marginRight: "32px"}}>
                <p style={{fontSize: "36px", color: "#ffffff", fontWeight: "bold", transform: "scale(0.9, 1.3)" }}>LO MÁS VISTO</p>
                </div>
                <div className='col' style={{paddingTop: "10px", marginLeft: "62px"}}>

                    <BotonVerMas/>       
                </div>     
            </div>
            <div className='row'>
                <NotaConVideo/>
                <NotaConVideo/>
                <NotaConVideo/>
            </div>
            <NotaConVideoGrande/>

        </div>
    
    </>
  );
}

export default ModuloLoMasVisto;
