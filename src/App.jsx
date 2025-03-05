import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'; // Asegúrate de que esté presente
import Sitio from './components/Sitio';
import Nota from './components/HomesyNota/Nota';
import NotaPrevisualizacion from './components/HomesyNota/notaPrevisualizacion';


function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sitio />} />
        <Route path="/notaPreview/:id?" element={<NotaPrevisualizacion />} />
        <Route path="/nota/:id?" element={<Nota />} />
        <Route path="/:pais?/:provincia?/:municipio?" element={<Sitio />} />
        <Route path="/:pais?/:provincia?/:municipio?" element={<Sitio />} />
        <Route path="/:pais?/:provincia?/:municipio?" element={<Sitio />} />
      </Routes>
    </Router>
  );
}

export default App;
