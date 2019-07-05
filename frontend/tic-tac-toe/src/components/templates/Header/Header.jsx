import React from 'react';
import logo from '../../../assets/imgs/header-logo.jpeg';

import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header-logo">
            <img src={logo} alt="Logo do cabeçalho"/>
        </div>
        <nav className="header-login">
            <a href>Login</a>
        </nav>
    </header>
);

export default Header;
