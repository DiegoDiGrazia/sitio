import React from 'react';
import { Marker, OverlayView } from '@react-google-maps/api';

const CustomMarker = ({ id, position, name }) => {
  return (
    <React.Fragment key={id}>
      {/* Agregar el marcador */}
      <Marker position={position} />
      
      {/* Agregar el texto encima del marcador */}
      <OverlayView
        position={position}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
          }}
        >
            <img src='/images/pinMapaBuscador.png' alt='marker' style={{width: '20px', height: '20px'}}/>
          {name}
        </div>
      </OverlayView>
    </React.Fragment>
  );
};

export default CustomMarker;