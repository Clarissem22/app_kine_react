import React from 'react';
import ProgrammeJour from '../components/comp_pages/_Home/ProgrammeJour';
import AvisExercice from '../components/comp_pages/_Programme/AvisExercice';
import ChangerProgramme from '../components/comp_pages/_Programme/ChangerProgramme';
import Container from '../components/Container';
import Navigation from '../components/Navigation';

const Programme = () => {
    return (
        <div>
            <Navigation />
            <h1>Programme</h1>
            <Container /> 
            <ProgrammeJour />
            <ChangerProgramme/>
            <AvisExercice/> 
        </div>
    );
};

export default Programme;