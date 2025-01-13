import React, { useState, useEffect } from 'react';
import './Footer.css'; 
import Button from '@mui/material/Button';
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
            <img  src='../images/logoNoticiasDBlanco.png'/>
        </div>
        <div className="col-6 align-items-center">
            <button 
            className="botonVerMasFooter align-items-center" 
            onClick={toggleFooterExpansion}>
            {isExpanded 
            ? (<><span>Ver menos  </span><img src='../images/arrowblancoabajo.png' alt="Arrow" /></>) 
            : (<><span>Ver más  </span><img src='../images/arrowblancoabajo.png' style={{transform: "scaleY(-1)", marginBottom: "3x"}} alt="Arrow" /></>)
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
                      <li>Política</li>
                      <li>Deportes</li>
                      <li>Espectáculos</li>
                    </ul>
                  </div>
                  <div className='col-3'> 
                    <ul>
                      <li>Política</li>
                      <li>Deportes</li>
                      <li>Espectáculos</li>
                    </ul>
                  </div>
                  <div className='col-3'> 
                    <ul>
                      <li>Política</li>
                      <li>Deportes</li>
                      <li>Espectáculos</li>
                    </ul>
                  </div>
                  <div className='col-3'> 
                    <ul>
                      <li>Política</li>
                      <li>Deportes</li>
                      <li>Espectáculos</li>
                    </ul>
                  </div>
                </div>

            </div>
            <h5 className='derechos'>Noticiasd d es propiedad de Guia d SA. Todos los derechos reservados 2024</h5>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;