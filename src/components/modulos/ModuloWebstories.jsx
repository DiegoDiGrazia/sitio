import { useState } from 'react';
import NotaConVideoGrande from '../notasMini/NotaConVideoGrande';
function ModuloWebstories() {
  return (
    <>
        <div className='row moduloPortada mt-4' style={{backgroundColor: "#131313", width: "1230px" }}>
            <div className='row' style={{paddingTop: "20px"}}>
                <div className='col-7' style={{marginRight: "32px"}}>
                <p style={{fontSize: "36px", color: "#ffffff", fontWeight: "bold", transform: "scale(0.9, 1.3)" }}>WEBSTORIES</p>
                </div>   
            </div>
            <NotaConVideoGrande/>

        </div>
    
    </>
  );
}

export default ModuloWebstories;
