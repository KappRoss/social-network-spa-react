import React from 'react';
import style from'./Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = {style.nav}>
            <ul>
                <li className={style.item}><NavLink to = "/Profile" activeClassName = {style.active} >Profile</NavLink></li>
                <li className={style.item}><NavLink to = "/Dialogs" activeClassName = {style.active} >Messages</NavLink></li>
                <li className={style.item}><NavLink to = "/News" activeClassName = {style.active} >News</NavLink></li>
                <li className={style.item}><NavLink to = "/Music" activeClassName = {style.active} >Music</NavLink></li>
                <li className={style.item}><NavLink to = "/Users" activeClassName = {style.active}>Users</NavLink></li> 
                <li className={style.item}><NavLink to = "">Settings</NavLink></li>
            </ul>
        </nav>
    )
} 

export default Navbar;