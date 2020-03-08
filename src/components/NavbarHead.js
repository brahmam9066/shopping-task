import React from 'react';
import { NavLink } from "react-router-dom";

 const NavbarHead = ()=>{
    return( 

          <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">All Items</NavLink></li>
                <li><NavLink to="/cart">My cart</NavLink></li>
            </ul>
        </nav> 
        
    )
}

export default NavbarHead;