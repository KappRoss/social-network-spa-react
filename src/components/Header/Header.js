import React from 'react';
import style from'./Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return(
        <header className = {style.header}>
            <img className = {style.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Office-2010-free-logo.svg/1024px-Office-2010-free-logo.svg.png"></img>
            <div className = {style.loginIcon}>
                {
                    props.isAuth 
                        ?
                        
                        <div className = {style.divLogOut}>
                            <div className = {style.divAvatar}>
                                {!props.profile ? "" : <img className = {style.avatar} src = {props.profile.photos.small}/>}
                            </div>
                            <div className = {style.loginName}>
                                {props.login}   
                            </div>
                            <div className = {style.button}>
                                <button onClick = {props.logout}>Logout</button>
                            </div> 
                        </div> 
                        :
                        <div className = {style.divLogIn}>
                            <NavLink to = {'/login'} className = {style.login}>LOGIN</NavLink>
                        </div>
                }
            </div>  
        </header>

    );
}

export default Header;