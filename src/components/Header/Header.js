import React from 'react';
import h from'./Header.module.css';

const Header = () => {
    return(
        <header className = {h.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Office-2010-free-logo.svg/1024px-Office-2010-free-logo.svg.png"></img>
        </header>
    );
}

export default Header;