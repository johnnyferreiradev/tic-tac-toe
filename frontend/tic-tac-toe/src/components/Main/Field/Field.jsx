import React, { Component } from 'react';

import './Field.css';

export default class Field extends Component {

    state = {
        value: 'X'
    }

    render() {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
                <p className="play-value">{this.props.playValue}</p>
            </div>
        )
    }
}