import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    
    return(
        <div className = "NavbarContainer">
            <NavLink to='/' className='NavbarLink'>Home</NavLink>
            <NavLink to='/products' className='NavbarLink'>Skincare</NavLink>
            <NavLink to='/products/Owned' className='NavbarLink'>Owned</NavLink>
            <NavLink to='/products/wish-list' className='NavbarLink'>WishList</NavLink>
        </div>
    )
}

export default NavBar;
