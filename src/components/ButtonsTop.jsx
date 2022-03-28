import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonsTop = () => {
    return (
        <div>
            <ul>
                <NavLink to="/don"> <li><img src="img/donations.png" alt="Don" /></li> </NavLink> 
                <NavLink to="/notification"> <li><img src="img/bell.png" alt="Notification" /></li> </NavLink> 
            </ul>
        </div>
    );
};

export default ButtonsTop;