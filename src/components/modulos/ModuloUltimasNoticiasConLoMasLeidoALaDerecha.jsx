import React from "react";

import BotonVerMas from '../common/BotonVerMas';
import NotaMiniGenerica from '../notasMini/notaMiniGenerica';

import BannerNegroVerticalMasLeidas from '../notasMini/BannerNegroVerticalMasLeidas';
import { useDispatch } from 'react-redux';
function ModuloUltimasNoticiasConLoMasLeidoALaDerecha({notas, notasScrollInfinito} ) {

    const renderRows = () => {
        const rows = [];
        for (let i = 0; i < notasScrollInfinito.length; i += 3) {
          rows.push(
            <div className='row' key={i}>
              <div className="col-12 col-md-4">
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"18px"} nota={notasScrollInfinito[i]} />
              </div>
              {notasScrollInfinito[i + 1] && 
              <div className="col-12 col-md-4">
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"18px"} nota={notasScrollInfinito[i + 1]} />
              </div>
              }
              {notasScrollInfinito[i + 2] && 
              <div className="col-12 col-md-4">
                <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} fontSizeContenido={"18px"} fontSizeTitulo={"18px"} nota={notasScrollInfinito[i + 2]} />
              </div>
}
            </div>
          );
        }
        return rows;
      };


  if(!notas || !notas[0]){
    return(
        <div></div>
    )
  }
  return (
    <>
        <div className='row moduloPortada hiperlocales mt-4' style={{backgroundColor: "#ffffff", width: "1205px" }}>
            <div className='row' style={{paddingTop: "0px"}}>
                <div className='col-9' style={{marginRight: "32px"}}>
                <p className= "ultimasNoticias"style={{fontSize: "36px", color: "black", fontWeight: "bold" }}>Ultimas noticias en <span style={{color: "#DD2590"}}>{notas[0].cliente}</span></p>
                
                </div>
                {/* <div className='col' style={{paddingTop: "10px", marginLeft: "42px"}}>

                    <BotonVerMas/>       
                </div>      */}
            </div>
            <div className="row" style={{ borderBottom: "1px solid #bababa" }}>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} nota={notas[5]} />
                </div>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} nota={notas[6]} />
                </div>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} nota={notas[7]} />
                </div>
            </div>
            <div className='row ocultarNotaMini' style={{ marginTop:"40px", paddingBottom:"30px"}}>
                <NotaMiniGenerica width={"720px"} height={"316px"} tieneContenido={true} fontSizeContenido={"16px"} fontSizeTitulo={"30px"} nota= {notas[8]}/>
                <BannerNegroVerticalMasLeidas notas = {notas.slice(9 ,13)}/>
            </div>

            {renderRows()}

        </div>
    
    </>
  );
}

export default ModuloUltimasNoticiasConLoMasLeidoALaDerecha;
