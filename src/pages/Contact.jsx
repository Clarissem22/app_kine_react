import React from 'react';
import CompContact from '../components/comp_pages/_Contact/Comp_contact';
import Container from '../components/Container';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <Container />
            <CompContact/>
        </div>
    );
};

export default Contact;