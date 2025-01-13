import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sitio from './components/Sitio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sitio/:pais?/:provincia?/:municipio?" element={<Sitio />} />
      </Routes>
    </Router>
  );
}

export default App;
