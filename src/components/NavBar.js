import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <NavLink>Diva Skin Lounge</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>SkinCare Products</NavLink>
        </div>
    )
}

export default NavBar;
