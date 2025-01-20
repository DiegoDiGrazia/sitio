import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { useState } from 'react';

const apiKey = "AIzaSyD9NLEyj6YNOQige8uQEHLrTOOTSHL3c_s"


import { GoogleMap, Marker, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import CustomMarker from './CustomMarker';

const containerStyle = {
    width: '100vw',
    height: '100vh',
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
                    <CustomMarker 
                        key={municipio.municipio_id}
                        id={municipio.municipio_id}
                        position={{ lat: municipio.centroide_lat, lng: municipio.centroide_lon }}
                        name={municipio.nombre}
                    />
                ))}
            </React.Fragment>
        ))}       
      </GoogleMap>
    ) : (
      <div>Cargando...</div>
    );
  };
  
  export default MapaUbicaciones;