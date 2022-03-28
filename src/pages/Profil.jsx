import React from 'react';
import Calendar from '../components/comp_pages/_Home/Calendar';
import ProgrammeJour from '../components/comp_pages/_Home/ProgrammeJour';
import Progression from '../components/comp_pages/_Home/Progression';
import ProfilUser from '../components/comp_pages/_Profil/ProfilUser';
import Container from '../components/Container';
import Navigation from '../components/Navigation';

const Profil = () => {
    return (
        <div>
            <Navigation />
            <Container />
            <h1>Profil</h1>
            <ProfilUser/>
            <Calendar/>
            <Progression/>
        </div>
    );
};

export default Profil;