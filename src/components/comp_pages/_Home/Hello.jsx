import React from 'react';


const date = new Date()
const Hello = () => {
    return (
        <div>
            <img src="img/logo.png" alt="" />
            <h1>Hello, Xava</h1>
            <p>Nous sommes le {date.toLocaleDateString()} , il reste "nb exo" à faire aujourd'hui</p>
        </div>
    );
};

export default Hello;