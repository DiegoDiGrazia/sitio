import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const containerStyle = {
  width: '100%',
  height: '340px',
  margin: '0px 0px',
  borderRadius: '5px',
};

const center = {
  lat: -34.603722,
  lng: -58.381592,
};

const mapStyle = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];

const MapaUbicaciones = () => {
  const navigate = useNavigate(); // Hook para redirigir
  const paises = useSelector((state) => state.datosHome?.datoGeo?.paises) || [];
  const argentina = paises.find((pais) => pais.nombre === 'Argentina');
  const ProvinciasDeArgentina = argentina?.provincias || [];
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBy2CGd2OKMNiQwOm81yr_a3WdkjobzC3s', // Reemplaza con tu clave de API
  });

  // Función para manejar el clic en un marcador
  const handleMarkerClick = (cat_provincia, cat_municipio) => {
    const url = `/argentina/${cat_provincia}/${cat_municipio || ''}`;
    console.log(cat_provincia, cat_municipio, 'ADENTRO DEL MAPA');
    window.location.href = url.replace(/ /g, "-"); // Redirige y recarga la página
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={{
        styles: mapStyle,
        disableDefaultUI: true,
        gestureHandling: 'cooperative', // Permite clics y gestos limitados
      }}
    >
      {ProvinciasDeArgentina &&
        ProvinciasDeArgentina.map((provincia) => (
          <React.Fragment key={provincia.iso_id}>
            {/* Marcador para la provincia */}
            <Marker
              key={provincia.iso_id}
              position={{
                lat: Number(provincia.centroide_lat) || 0,
                lng: Number(provincia.centroide_lon) || 0,
              }}
              title={provincia.iso_nombre}
              icon={{
                url: "/images/pinMapaBuscador.png", // URL del ícono personalizado
                scaledSize: new window.google.maps.Size(25, 25), // Tamaño del ícono
              }}
              onClick={() => handleMarkerClick(provincia.nombre, null)} // Redirige a la provincia
            />
            {/* Marcadores para los municipios */}
            {provincia.municipios &&
              provincia.municipios.map((municipio) => (
                <Marker
                  position={{
                    lat: Number(municipio.centroide_lat) || 0,
                    lng: Number(municipio.centroide_lon) || 0,
                  }}
                  title={municipio.nombre}
                  icon={{
                    url: "/images/pinMapaBuscador.png", // URL del ícono personalizado
                    scaledSize: new window.google.maps.Size(25, 25), // Tamaño del ícono
                  }}
                  onClick={() => handleMarkerClick(provincia.nombre, municipio.nombre)}

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