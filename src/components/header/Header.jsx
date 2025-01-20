import { useState } from 'react';
import Navbar from './Navbar';
import NavbarCategorias from './NavbarCategorias';
import ContainerUbicacion from './elegirUbicacion/ContainerUbicacion';
import { useSelector } from 'react-redux';

function Header() {
    const SeleccionarUbicacion = useSelector((state) => state.datosHome.mostrarUbicacion);

  return (
    <>
        <div className='row row m-0 justify-content-center'>
            <div className="col-10 p-0" style={{width: "1560px"}}>
                <Navbar/>
                <NavbarCategorias/>
                {SeleccionarUbicacion && <ContainerUbicacion/>}
            </div>
        </div>
    </>
    )
    }

export default Header;