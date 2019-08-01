import React from 'react';
import Board from '../../Main/Board/Board';

import './GameMulti.css';

export default class GameMulti extends React.Component {
    render(){
        const { player1, player2 } = this.props.location.state; // Recebe atravez do Link

        return (
            <div className="game-multi">
                <Board player1={player1} player2={player2} gamemode="multi"/>
            </div>
        )
    }
}