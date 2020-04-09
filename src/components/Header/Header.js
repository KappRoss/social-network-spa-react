import React from 'react';
import h from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className = {h.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Office-2010-free-logo.svg/1024px-Office-2010-free-logo.svg.png"></img>
            <div className = {h.loginIcon}>
                {
                    props.isAuth 
                        ?<div>{props.login}
                            <div>
                                <button onClick = {props.logout}>Logout</button>
                            </div> 
                        </div> 
                        : <NavLink to = {'/login'}>LOGIN </NavLink>
                }
            </div>  
        </header>

    );
}

export default Header;