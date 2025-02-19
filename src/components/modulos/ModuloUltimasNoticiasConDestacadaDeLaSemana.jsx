import React from "react";


import BotonVerMas from '../common/BotonVerMas';

import NotaMiniGenerica from '../notasMini/notaMiniGenerica';
import DestacadaDeLaSemanaMini from '../notasMini/DestacadaDeLaSemanaMini';
function ModuloUltimasNoticiasConDestacadaDeLaSemana( {notasSuProvincia}) {
  return (
    <>
        <div className='row moduloPortada mt-4' style={{backgroundColor: "#ffffff", width: "1205px" }}>
            <div className='row' style={{paddingTop: "0px"}}>
                <div className='col-7' style={{marginRight: "32px"}}>
                    <p className = "ultimasNoticias"style={{fontSize: "36px", color: "black", fontWeight: "bold" }}>Ultimas noticias en  <span style={{color: "orange"}}>Buenos Aires</span></p>
                </div>
                <div className='col' style={{paddingTop: "10px", marginLeft: "42px"}}>

                    <BotonVerMas/>       
                </div>     
            </div>
            <div className="row" style={{ borderBottom: "1px solid #bababa" }}>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} nota={notasSuProvincia[0]} />
                </div>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} nota={notasSuProvincia[1]} />
                </div>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"361px"} tieneContenido={true} nota={notasSuProvincia[2]} />
                </div>
            </div>
            <div className='row d-flex flex-column flex-md-row' 
                style={{ borderBottom: "1px solid #bababa", marginTop: "40px", paddingBottom: "30px" }}>
                <DestacadaDeLaSemanaMini width={"338px"} height={"361px"} nota={notasSuProvincia[7]} />
                <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota={notasSuProvincia[3]} />
            </div>
            <div className='row' style={{ marginTop:"40px"}}>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota = {notasSuProvincia[4]}/>
                </div>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota = {notasSuProvincia[5]}/>
                </div>
                <div className="col-12 col-md-4">
                    <NotaMiniGenerica width={"338px"} height={"180px"} tieneContenido={false} nota = {notasSuProvincia[6]}/>
                </div>
            </div>
        </div>
    
    </>
  );
}

export default ModuloUltimasNoticiasConDestacadaDeLaSemana;
