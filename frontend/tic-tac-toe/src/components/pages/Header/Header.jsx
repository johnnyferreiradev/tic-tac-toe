import React from 'react';
import './Header.css';

const Header = props => (
    <h1 className="header-title">
        {props.title}
    </h1>
)

export default Header;