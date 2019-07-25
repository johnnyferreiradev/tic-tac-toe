import React from 'react';
import logo from '../../../assets/imgs/header-logo.jpeg';
import Login from '../../pages/Login/Login';

import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header-logo">
            <img src={logo} alt="Logo do cabeçalho"/>
        </div>
        <nav className="header-login">
            login
            <div className="login-drop-down">
                <Login></Login>
            </div>
        </nav>
    </header>
);

export default Header;
