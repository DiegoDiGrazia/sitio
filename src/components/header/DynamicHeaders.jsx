import React from 'react';
import { Helmet } from 'react-helmet-async';

function DynamicHeaders({ title, description }) {
  return (
    <>
      <Helmet>
        {/* Título dinámico */}
        {title && <title>{title}</title>}
        {/* Descripción dinámica */}
        {description && <meta name="description" content={description} />}
        
        {/* Script de Google Ads */}
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script>
          {`
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
              googletag.defineSlot('/21867415041/Portada2025_300x250', [[300, 250], [300, 600]], 'div-gpt-ad-300x250_1')
                .setTargeting('seccion', ['Deportes'])
                .addService(googletag.pubads());
              googletag.defineSlot('/21867415041/Portada2025_300x250', [[300, 250], [300, 600]], 'div-gpt-ad-300x250_2')
                .setTargeting('seccion', ['Deportes'])
                .addService(googletag.pubads());
              googletag.defineSlot('/21867415041/Portada_2025_laderboard', [[970, 250], [970, 90], [728, 90]], 'div-gpt-ad-laderboard_1')
                .addService(googletag.pubads());
              googletag.pubads().enableSingleRequest();
              googletag.pubads().collapseEmptyDivs();
              googletag.pubads()
                .setTargeting('Municipio', ['Bella Vista'])
                .setTargeting('Provincia', ['La Rioja'])
                .setTargeting('Pais', ['AR']);
              googletag.enableServices();
            });
          `}
        </script>
      </Helmet>
    </>
  );
}

export default DynamicHeaders;