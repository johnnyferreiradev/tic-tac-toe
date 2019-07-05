import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/header-logo.jpeg';

import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header-logo">
            <img src={logo} alt="Logo do cabeçalho"/>
        </div>
        <nav className="header-login">
            <Link to="/login">Login</Link>
        </nav>
    </header>
);

export default Header;
