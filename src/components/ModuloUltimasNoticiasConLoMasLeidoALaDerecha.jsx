import { useState } from 'react';
import CarruselNotas from './CarruselNotas';
import MiniNotaConImagenVertical from './notasMini/miniNotaConImagenVertical';
import BotonVerMas from './common/BotonVerMas';
import NotaConVideo from './notasMini/notaConVideo';
import NotaConVideoGrande from './notasMini/NotaConVideoGrande';
import NotaMiniGenerica from './notasMini/notaMiniGenerica';
import DestacadaDeLaSemanaMini from './notasMini/DestacadaDeLaSemanaMini';
import BannerNegroVerticalMasLeidas from './notasMini/BannerNegroVerticalMasLeidas';
import { useDispatch } from 'react-redux';
function ModuloUltimasNoticiasConLoMasLeidoALaDerecha({notas, notasScrollInfinito} ) {

    const renderRows = () => {
        const rows = [];
        for (let i = 0; i < notasScrollInfinito.length; i += 3) {
          rows.push(
            <div className='row' key={i}>
              <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"18px"} nota={notasScrollInfinito[i]} />
              {notasScrollInfinito[i + 1] && <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"18px"} nota={notasScrollInfinito[i + 1]} />}
              {notasScrollInfinito[i + 2] && <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"18px"} nota={notasScrollInfinito[i + 2]} />}
            </div>
          );
        }
        return rows;
      };


  return (
    <>
        <div className='row moduloPortada mt-4' style={{backgroundColor: "#ffffff", width: "1205px" }}>
            <div className='row' style={{paddingTop: "0px"}}>
                <div className='col-7' style={{marginRight: "32px"}}>
                <p style={{fontSize: "36px", color: "black", fontWeight: "bold", transform: "scale(0.9, 1.3)" }}>Ultimas noticias en <span style={{color: "#DD2590"}}>Argentina</span></p>
                </div>
                <div className='col' style={{paddingTop: "10px", marginLeft: "42px"}}>

                    <BotonVerMas/>       
                </div>     
            </div>
            <div className='row' style={{borderBottom: "1px solid #bababa"}}>
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"24px"} nota= {notas[5]}/>
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"24px"} nota= {notas[6]}/>
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"24px"} nota= {notas[7]}/>
            </div>
            <div className='row' style={{ marginTop:"40px", paddingBottom:"30px"}}>
                <NotaMiniGenerica width={"720px"} height={"316px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"30px"} nota= {notas[8]}/>
                <BannerNegroVerticalMasLeidas notas = {notas.slice(9 ,13)}/>
            </div>

            {renderRows()}

        </div>
    
    </>
  );
}

export default ModuloUltimasNoticiasConLoMasLeidoALaDerecha;
