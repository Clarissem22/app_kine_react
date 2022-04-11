import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Don from './pages/Don';
import Exercices from './pages/Exercices';
import Home from './pages/Home';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import Parametres from './pages/Parametres';
import Profil from './pages/Profil';
import Programme from './pages/Programme';



//recupération des données de l'application sans passer parHeroku pour l'instant
// async componentDidMount(){
// const response = await fetch ("http://127.0.0.1:8001/main")
// const datas = await response.json();
// }


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
          <Route path="/login" element={< Login />} />
          <Route path="/don" element={< Don />} />
          <Route path="/notification" element={< Notifications />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;