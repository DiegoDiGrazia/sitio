import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'; // Asegúrate de que esté presente
import Sitio from './components/Sitio';
import Nota from './components/HomesyNota/Nota';


function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/nota/:id?" element={<Nota />} />
        <Route path="/:pais?/:provincia?/:municipio?" element={<Sitio />} />
        <Route path="/:pais?/:provincia?/:municipio?" element={<Sitio />} />
        <Route path="/:pais?/:provincia?/:municipio?" element={<Sitio />} />

      </Routes>
    </Router>
  );
}

export default App;
