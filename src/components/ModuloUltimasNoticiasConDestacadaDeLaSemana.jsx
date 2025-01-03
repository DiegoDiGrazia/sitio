import { useState } from 'react';
import CarruselNotas from './CarruselNotas';
import MiniNotaConImagenVertical from './notasMini/miniNotaConImagenVertical';
import BotonVerMas from './common/BotonVerMas';
import NotaConVideo from './notasMini/notaConVideo';
import NotaConVideoGrande from './notasMini/NotaConVideoGrande';
import NotaMiniGenerica from './notasMini/notaMiniGenerica';
import DestacadaDeLaSemanaMini from './notasMini/DestacadaDeLaSemanaMini';
function ModuloUltimasNoticiasConDestacadaDeLaSemana() {
  return (
    <>
        <div className='row moduloPortada mt-4' style={{backgroundColor: "#ffffff", width: "1205px" }}>
            <div className='row' style={{paddingTop: "0px"}}>
                <div className='col-7' style={{marginRight: "32px"}}>
                <p style={{fontSize: "36px", color: "black", fontWeight: "bold", transform: "scale(0.9, 1.3)" }}>Ultimas noticias en <span style={{color: "orange"}}>Buenos Aires</span></p>
                </div>
                <div className='col' style={{paddingTop: "10px", marginLeft: "42px"}}>

                    <BotonVerMas/>       
                </div>     
            </div>
            <div className='row' style={{borderBottom: "1px solid #bababa"}}>
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true}/>
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true}/>
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true}/>
            </div>
            <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px", paddingBottom:"30px"}}>
                <DestacadaDeLaSemanaMini width={"338px"} height={"361px"}/>
                <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false}/>
            </div>
            <div className='row' style={{borderBottom: "1px solid #bababa", marginTop:"40px"}}>
                <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false}/>
                <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false}/>
                <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false}/>

            </div>

        </div>
    
    </>
  );
}

export default ModuloUltimasNoticiasConDestacadaDeLaSemana;
