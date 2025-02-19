import NotaConVideo from '../notasMini/notaConVideo';
import NotaConVideoGrande from '../notasMini/NotaConVideoGrande';
import React from "react";

function ModuloLoMasVisto({notas}) {
  return (
    <>
        <div className='row moduloPortada loMasVisto mt-4' style={{backgroundColor: "#131313", width: "1230px" }}>
            <div className='row' style={{padding: "40px"}}>
                <div className='col-7' style={{marginRight: "32px"}}>
                <p style={{fontSize: "36px",fontFamily: 'Big Shoulders Text, sans-serif', color: "white", fontWeight: "bold"}}>HIPERLOCALES</p>
                </div>
                {/* <div className='col' style={{marginLeft: "62px"}}>

                    <BotonVerMas/>       
                </div>      */}
            </div>
            <div className='row'>
                <div className="col-12 col-md-4">
                    <NotaConVideo nota = {notas[0]}/>
                </div>
                <div className="col-12 col-md-4">
                    <NotaConVideo nota = {notas[1]}/>
                </div>
                <div className="col-12 col-md-4">
                    <NotaConVideo nota = {notas[2]}/>
                </div>
            </div>
            <NotaConVideoGrande nota = {notas[3]}/>

        </div>
    
    </>
  );
}

export default ModuloLoMasVisto;
