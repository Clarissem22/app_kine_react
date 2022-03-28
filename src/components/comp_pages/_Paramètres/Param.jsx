import React from 'react';
import About from './About';
import Accessibilite from './Accessibilite';
import Affichage from './Affichage';
import Gestion_notifications from './Gestion_notifications';
import Langues from './Langues';
import Param_profil from './Param_profil';

const Param = () => {
    return (
        <>
        <div>
            <h1>Paramètres</h1>
        </div>

        <div>
            <img src="img/translate.png"></img>
            <Langues/>
        </div>

        <div>
            <img src="img/Notifications.png"></img>
            <Gestion_notifications/>
        </div>

        <div>
            <img src="img/sun.png"></img>
            <Affichage/>
        </div>

        <div>
            <img src="img/Profil.png"></img>
            <Param_profil/>
        </div>

        <div>
            <img src="img/about.png"></img>
            <About/>
        </div>

        <div>
            <img src="img/accessible.png"></img>
            <Accessibilite/>
        </div>
       

        </>
    );
};

export default Param;