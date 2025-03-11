import React, { useState, useEffect } from 'react';
import './Footer.css'; 
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';
const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
        
      // Scroll hacia arriba: mostrar el footer
      setIsVisible(true);
    } else {
      // Scroll hacia abajo: ocultar el footer
      if(!isExpanded){
      setIsVisible(false);
    }
    }

    setLastScrollY(currentScrollY);
  };

  const toggleFooterExpansion = () => {
    setIsExpanded(prevState => !prevState); // Cambiar entre expandido y contraído
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="row">
        <div className="col-6">
            <img  src='/images/logoNoticiasDBlanco.png'/>
        </div>
        <div className="col-6 align-items-center">
            <button 
            className="botonVerMasFooter align-items-center" 
            onClick={toggleFooterExpansion}>
            {isExpanded 
            ? (<><span>Ver menos  </span><img src='/images/arrowblancoabajo.png' alt="Arrow" /></>) 
            : (<><span>Ver más  </span><img src='/images/arrowblancoabajo.png' style={{transform: "scaleY(-1)", marginBottom: "3x"}} alt="Arrow" /></>)
            }
            </button>
        </div>
        
        {isExpanded && (
          <div className="row expanded-content mt-3">
            <div className='col-6'>   
                <h4>Contenido Hiperlocal sin intermediar
                <Button
                  sx={{
                    padding: 0, // Elimina el relleno interno
                    minWidth: 'auto', // Elimina el ancho mínimo predeterminado
                  }}
                >
                  <img 
                    src="/images/logoIgFooter.png" 
                    alt="Instagram Logo" 
                    style={{ width: 'auto', height: '30px', objectFit: 'contain' }} 
                  />
                </Button>
                <Button
                  sx={{
                    padding: 0, // Elimina el relleno interno
                    minWidth: 'auto', // Elimina el ancho mínimo predeterminado
                  }}
                >
                  <img 
                    src="/images/logoFBFooter.png" 
                    alt="Facebook Logo" 
                    style={{ width: 'auto', height: '30px', objectFit: 'contain' }} 
                  />
                </Button>
                </h4>
                <div className='row'>
                  <div className='col-3'> 
                    <ul>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/politica">Política</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/sociedad-y-seguridad">Sociedad y Seguridad</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/salud-y-ciencia">Salud y Ciencia</Link>
                    </li>
                  
                    </ul>
                  </div>
                  <div className='col-3'> 
                    <ul>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/cultura-y-educacion">Cultura y educación</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/economia-y-negocios">Economía y negocios</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/campo">Campo</Link>
                    </li>
                    </ul>
                  </div>
                  <div className='col-3'> 
                    <ul>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/deportes">Deportes</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/mascotas">Mascotas</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/turismo">Turismo</Link>
                    </li>
                    </ul>
                  </div>
                  <div className='col-3'> 
                    <ul>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/medioambiente">Medioambiente</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/espectaculos">Espectáculos</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/categoria/tendencias">Tendencias</Link>
                    </li>
                    </ul>
                  </div>
                </div>

            </div>
            <h5 className='derechos'>Noticiasd d es propiedad de Guia d SA. Todos los derechos reservados 2024</h5>
            <h5 className="derechos mt-1">
            <a 
              href="https://www.noticiasd.com/ayuda/politica-de-privacidad/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Política de Privacidad  
            </a>
            <a href = "https://www.noticiasd.com/ayuda/terminos-y-condiciones/" target="_blank" rel="noopener noreferrer">{"       Términos y condiciones"}</a>
            <a href = "https://institucional.noticiasd.com/?_gl=1*1ojifm8*_gcl_au*MTkzMjEwMjgyNy4xNzM0MDEwMDA5*_ga*NzA3NDkzMDUzLjE3MDk2Njk4NTk.*_ga_H86EGX133X*MTc0MTcxNzk5Ny4xMTEuMS4xNzQxNzE4MjAwLjYwLjAuMA.." target="_blank" rel="noopener noreferrer">Institucional</a>
          </h5>

          <style jsx>{`
            a {
              color: inherit; /* Usa el color del texto padre */
              text-decoration: none; /* Quita el subrayado si lo deseas */
              margin-right: 20px;
              margin-bottom: 20px;
            }
          `}</style>

          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;