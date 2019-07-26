import './Board.css';

import React, { Component } from 'react';
import Field from '../Game/Field';

export default class Board extends Component {

    state = {
        squares: [
            '', '', '',
            '', '', '',
            '', '', ''
        ],
        playValue: 'X'
    }

    constructor() { // Estratégia utilizada para resolver o problema da referencia do this
        super()
        this.toggleValue = this.toggleValue.bind(this)
    }

    toggleValue() {
        const playValue = this.state.playValue == 'X' ? 'O' : 'X';
        this.setState({ playValue })
    }

    renderSquare(i) {
        if (this.state.squares[i] !== '') {
            return
        }

        let squares = new Array();
        squares = this.state.squares

        this.toggleValue()
        squares[i] = this.state.playValue;
        
        this.setState({ squares });
    }

    render() {
        return (
            <div className="board">
                <Field playValue={this.state.squares[0]} onClick={() => this.renderSquare(0)} className="field northwest-field all-limit right-limit bottom-limit" />
                <Field playValue={this.state.squares[1]} onClick={() => this.renderSquare(1)} className="field north-field left-limit bottom-limit right-limit" />
                <Field playValue={this.state.squares[2]} onClick={() => this.renderSquare(2)} className="field northeast-field left-limit bottom-limit" />
                <Field playValue={this.state.squares[3]} onClick={() => this.renderSquare(3)} className="field west-field top-limit right-limit bottom-limit" />
                <Field playValue={this.state.squares[4]} onClick={() => this.renderSquare(4)} className="field center-field top-limit right-limit bottom-limit left-limit" />
                <Field playValue={this.state.squares[5]} onClick={() => this.renderSquare(5)} className="field east-field left-limit top-limit bottom-limit" />
                <Field playValue={this.state.squares[6]} onClick={() => this.renderSquare(6)} className="field southwest-field right-limit top-limit" />
                <Field playValue={this.state.squares[7]} onClick={() => this.renderSquare(7)} className="field south-field right-limit top-limit left-limit" />
                <Field playValue={this.state.squares[8]} onClick={() => this.renderSquare(8)} className="field southeast-field left-limit top-limit" />
            </div>
        )
    }
}