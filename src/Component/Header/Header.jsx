import React from 'react';
import './Header.css'
import logo from '../../Images/logo.png';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <hr width="80%"/>
        </div>
    );
};

export default Header;