import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Exercices from './pages/Exercices';
import Home from './pages/Home';
import Parametres from './pages/Parametres';
import Profil from './pages/Profil';
import Programme from './pages/Programme';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/accueil" element={< Home />} />
          <Route path="/programme" element={< Programme />} />
          <Route path="/exercices" element={< Exercices />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/parametres" element={< Parametres />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;