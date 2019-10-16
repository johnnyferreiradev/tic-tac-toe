import React from 'react';
import './Title.css';

const Title = props => (
    <h1 className="header-title">
        {props.title}
    </h1>
)

export default Title;