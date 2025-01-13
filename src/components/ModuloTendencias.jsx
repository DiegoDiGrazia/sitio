import { useState } from 'react';
import CarruselNotas from './CarruselNotas';
import MiniNotaConImagenVertical from './notasMini/miniNotaConImagenVertical';
import BotonVerMas from './common/BotonVerMas';
import NotaConVideo from './notasMini/notaConVideo';
import NotaConVideoGrande from './notasMini/NotaConVideoGrande';
import NotaConFondoNegro from './notasMini/NotaConFondoNegro';
function ModuloTendencias() {
  return (
    <>
        <div className='row moduloPortada mt-4' style={{backgroundColor: "#131313", width: "720px", borderRadius: "8px", marginLeft: "40px" }}>
            <div className='row' style={{paddingTop: "20px"}}>
                <div className='col-7' style={{marginRight: "32px"}}>
                <p style={{color: "#16D7B4", fontSize: "36px", fontFamily: 'Big Shoulders Text, sans-serif', fontWeight: "bold", marginBottom: "20px", marginTop: "10px", marginLeft: "15px"}}>TENDENCIAS</p>
                </div>   
            </div>
            <div className='row'>
                <div className='col-6'>
                    <NotaConFondoNegro width={"330px"} height={"180px"} fontSizeTitulo={"18px"} tieneContenido={true}/>
                    <NotaConFondoNegro width={"330px"} height={"180px"} fontSizeTitulo={"18px"} tieneContenido={true}/>

                </div>
                <div className='col-6'>
                <NotaConFondoNegro width={"330px"} height={"180px"} fontSizeTitulo={"18px"} tieneContenido={true}/>
                <NotaConFondoNegro width={"330px"} height={"180px"} fontSizeTitulo={"18px"} tieneContenido={true}/>

                </div>

            </div>

        </div>
    
    </>
  );
}

export default ModuloTendencias;
