import React from 'react';
import Aides_asso from './Aides_asso';
import ContactKinésithérapeute from './Contact_kinés';
import Contact_us from './Contact_us';
import Faire_don from './Faire_don';
import FAQ from './FAQ';

const CompContact = () => {
    return (
        <>
        <div>
            <h1>Contact</h1>
        </div>
        <div>
            <h1>FAQ</h1>
            <FAQ/>
        </div>
        <div>
            <h1>Contact Kinésithérapeute</h1>
            <ContactKinésithérapeute/>
            
        </div>  
        <div>
            <h1>Aides et associations</h1>
            <Aides_asso/>
        </div>  
        <div>
            <h1>Contactez nous</h1>
            <Contact_us/>
        </div>  
        <div>
            <h1>Faire un don</h1>
            <Faire_don/>
        </div>

        </>
    );
};

export default CompContact;