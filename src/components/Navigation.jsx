import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
            <NavLink to="/"> <li><img src="img/logo.png" alt="" /></li> </NavLink> 
            <NavLink to="/accueil"> <li><img src="img/home.png" alt="Accueil" /></li> </NavLink> 
            <NavLink to="/programme"> <li><img src="img/calendar.png" alt="Programme" /></li> </NavLink> 
            <NavLink to="/exercices"> <li><img src="img/bibliothèque.png" alt="Exercices" /></li> </NavLink> 
            <NavLink to="/profil"> <li><img src="img/patients.png" alt="Profil" /></li> </NavLink> 
            <NavLink to="/contact"> <li><img src="img/mail.png" alt="Contact" /></li> </NavLink> 
            <NavLink to="/parametres"> <li><img src="img/settings.png" alt="Parametres" /></li> </NavLink> 
            <NavLink to="/login"> <li><img src="img/logout.png" alt="Logout" /></li> </NavLink> 
                
               
            </ul>
        </div>
    );
};

export default Navigation;
