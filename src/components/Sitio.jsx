import { useState } from 'react';
import Navbar from './navbars y footer/Navbar';
import NavbarCategorias from './navbars y footer/NavbarCategorias';
import PublicidadHorizontal from './publicidad/PublicidadHorizontal';
import ModuloPortadaConCarrusel from './ModuloPortadaConCarrusel';
import ModuloLoMasVisto from './ModuloLoMasVisto';
import ModuloUltimasNoticiasConDestacadaDeLaSemana from './ModuloUltimasNoticiasConDestacadaDeLaSemana';
import ModuloUltimasNoticiasConLoMasLeidoALaDerecha from './ModuloUltimasNoticiasConLoMasLeidoALaDerecha';

function Sitio() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <NavbarCategorias/>
    <PublicidadHorizontal/>
    <div style={{width: "1200px"}}>
    <ModuloPortadaConCarrusel/>
    <ModuloLoMasVisto/>
    <ModuloUltimasNoticiasConDestacadaDeLaSemana/>
    <PublicidadHorizontal/>
    <ModuloUltimasNoticiasConLoMasLeidoALaDerecha/>
    <PublicidadHorizontal/>

    </div>
    </>
  );
}

export default Sitio;
