import React from 'react';
import n from'./Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = {n.nav}>
            <ul>
                <li className={n.item}><NavLink to = "/Profile" activeClassName = {n.active} >Profile</NavLink></li>
                <li className={n.item}><NavLink to = "/Dialogs" activeClassName = {n.active} >Messages</NavLink></li>
                <li className={n.item}><NavLink to = "/News" activeClassName = {n.active} >News</NavLink></li>
                <li className={n.item}><NavLink to = "/Music" activeClassName = {n.active} >Music</NavLink></li>
                <li className={n.item}><NavLink to = "">Settings</NavLink></li>
            </ul>
        </nav>
    )
} 

export default Navbar;