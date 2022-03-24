import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
            <NavLink to="/"> <li><img src="../assets/img/logo.png" alt="" /></li> </NavLink> 
            <NavLink to="/accueil"> <li><img src="../assets/img/home.png" alt="" />Accueil</li> </NavLink> 
            <NavLink to="/programme"> <li><img src="../assets/img/calendar.png" alt="" />Programme</li> </NavLink> 
            <NavLink to="/exercices"> <li><img src="../assets/img/bibliothèque.png" alt="" />Exercices</li> </NavLink> 
            <NavLink to="/profil"> <li><img src="../assets/img/patients.png" alt="" />Profil</li> </NavLink> 
            <NavLink to="/contact"> <li><img src="../assets/img/mail.png" alt="" />Contact</li> </NavLink> 
            <NavLink to="/parametres"> <li><img src="../assets/img/settings.png" alt="" />Parametres</li> </NavLink> 
                
               
            </ul>
        </div>
    );
};

export default Navigation;
