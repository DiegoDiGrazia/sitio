import { useState } from 'react';
import "./Navbar.css"

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src='images/logoNoticiasd.png' alt=''/>
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
              <button className="btn" type="submit">
                Elegir ubicacion
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
