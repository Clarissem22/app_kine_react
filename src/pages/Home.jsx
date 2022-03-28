import React from 'react';
import Calendar from '../components/comp_pages/_Home/Calendar';
import Hello from '../components/comp_pages/_Home/Hello';
import ProgrammeJour from '../components/comp_pages/_Home/ProgrammeJour';
import Progression from '../components/comp_pages/_Home/Progression';
import Container from '../components/Container';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation/>
            <h1>Home</h1>
            <Container />
            <Hello />
            <Calendar />
            <Progression />
            <ProgrammeJour/>
        


        </div>
    );
};

export default Home;