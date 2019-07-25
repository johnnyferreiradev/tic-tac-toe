import React, { Component } from 'react';

import './Field.css';

export default class Field extends Component {

    state = {
        value: 'X'
    }

    render() {
        return (
            <div className="field">
                X
            </div>
        )
    }
}