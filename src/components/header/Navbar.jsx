import { useState } from 'react';
import "./Navbar.css"
import ContainerUbicacion from './elegirUbicacion/ContainerUbicacion';
import { setMostrarUbicacion } from '../../redux/datosHome';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Navbar() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const SeleccionarUbicacion = useSelector((state) => state.datosHome.mostrarUbicacion);

  

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src='../images/logoNoticiasd.png' alt=''/>
          </a>
          <p className='nombreUbicacion'>Argentina</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto" role="search">
              <input
                className="buscador"
                type="search"
                placeholder="      Buscar noticias, palabras clave..."
                aria-label="Search"
              />
              <button className="btn" type="submit" onClick={""}>
                Elegir ubicacion
              </button>
            </form>
            <button className="btn" type="submit" onClick={() => dispatch(setMostrarUbicacion(!SeleccionarUbicacion))}>
                Elegir ubicacion
              </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
