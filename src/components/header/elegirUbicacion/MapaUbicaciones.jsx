import React from 'react';

import { Link } from 'react-router-dom';

const apiKey = "AIzaSyD9NLEyj6YNOQige8uQEHLrTOOTSHL3c_s"


import { GoogleMap, Marker, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import CustomMarker from './CustomMarker';

const containerStyle = {
    width: '100%',
    height: '340px',
    margin: "0px 0px",
    borderRadius: "5px",
    
  };
  
  const center = {
    lat: -34.603722,
    lng: -58.381592,
  };

  const mapStyle = [
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }], ///Municipios
    },
  ];
  
  
  const MapaUbicaciones = () => {

    const ProvinciasDeArgentina = useSelector(state => state.datosHome.datoPais.provincias);
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: apiKey, // Reemplaza con tu clave de API
    });
  
    return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={{
        styles: mapStyle, // Aplica el estilo personalizado
        disableDefaultUI: true, // Opcional: desactiva la UI predeterminada
      }}>
        {ProvinciasDeArgentina && ProvinciasDeArgentina.map((provincia) => (
            <React.Fragment key={provincia.iso_id}>
                <CustomMarker 
                    key={provincia.iso_id}
                    id={provincia.iso_id}
                    position={{ lat: provincia.centroide_lat, lng: provincia.centroide_lon }}
                    name={provincia.iso_nombre}
                />
                {provincia.municipios.map((municipio) => (
                      <Link 
                      to={`/${provincia.cat_provincia}/${municipio.cat_municipio}`} 
                      target="_blank" 
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <CustomMarker 
                        key={municipio.municipio_id}
                        id={municipio.municipio_id}
                        position={{ lat: municipio.centroide_lat, lng: municipio.centroide_lon }}
                        name={municipio.nombre}
                    />
                    </Link>
                ))}
            </React.Fragment>
        ))}       
      </GoogleMap>
    ) : (
      <div>Cargando...</div>
    );
  };
  
  export default MapaUbicaciones;