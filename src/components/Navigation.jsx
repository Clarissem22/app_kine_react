import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/components/navigation.scss";

const Navigation = () => {
    return (
        <nav>
            <div className="logo">
            <NavLink to="/"> <li><img src="img/logo.png" alt="" /></li> </NavLink> 
            </div>
        <div className="navbar">
            <ul>
            <NavLink to="/accueil"> <li><img src="img/home.png" alt="Accueil" /></li> </NavLink> 
            <NavLink to="/programme"> <li><img src="img/calendar.png" alt="Programme" /></li> </NavLink> 
            <NavLink to="/exercices"> <li><img src="img/bibliothèque.png" alt="Exercices" /></li> </NavLink> 
            <NavLink to="/profil"> <li><img src="img/patients.png" alt="Profil" /></li> </NavLink> 
            <NavLink to="/contact"> <li><img src="img/mail.png" alt="Contact" /></li> </NavLink> 
            <NavLink to="/parametres"> <li><img src="img/settings.png" alt="Parametres" /></li> </NavLink> 
            <NavLink to="/login"> <li><img src="img/logout.png" alt="Logout" /></li> </NavLink> 
            </ul>
        </div>
        </nav>
    );
};

export default Navigation;
