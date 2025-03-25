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

      const paises = useSelector(state => state.datosHome?.datoGeo?.paises) || [];
      const argentina = paises.find(pais => pais.nombre === "Argentina");
      const ProvinciasDeArgentina = argentina?.provincias || [];
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
                    position={{ 
                        lat: Number(provincia.centroide_lat) || 0, 
                        lng: Number(provincia.centroide_lon) || 0 
                    }}
                    name={provincia.iso_nombre}
                />
                {provincia.municipios && provincia.municipios.map((municipio) => (
                <Link 
                    key={municipio.municipio_id} // ✅ Agregado aquí para evitar el warning
                    to={`/${provincia.cat_provincia}/${municipio.cat_municipio}`} 
                    target="_blank" 
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <CustomMarker 
                        id={municipio.municipio_id}
                        position={{ 
                            lat: Number(municipio.centroide_lat) || 0, 
                            lng: Number(municipio.centroide_lon) || 0 
                        }}
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