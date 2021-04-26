import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    
    return(
        <div className = "NavbarContainer">
            <NavLink to='/' className='NavbarLink'>Home</NavLink>
            <NavLink to='/products' className='NavbarLink'>All Skincare</NavLink>
            <NavLink to='/products/Owned' className='NavbarLink'>My Skincare</NavLink>
            <NavLink to='/products/wish-list' className='NavbarLink'>Wish List</NavLink>
        </div>
    )
}

export default NavBar;
