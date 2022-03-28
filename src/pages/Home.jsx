import React from 'react';
import Calendar from '../components/comp_pages/_Home/Calendar';
import Hello from '../components/comp_pages/_Home/Hello';
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
        


        </div>
    );
};

export default Home;