import React from 'react';
import Board from '../../Main/Board/Board';

import './GameMulti.css';

export default class GameMulti extends React.Component {
    state = {
        currentPlayer: '',
        teste: ''
    }

    // toggleCurrentPlayer() {
    //     const { player1, player2 } = this.props.location.state

    //     if(this.state.currentPlayer === player1) {
    //         this.setState({ currentPlayer: player2 });
    //     } else if (this.state.currentPlayer === player2) {
    //         this.setState({ currentPlayer: player1});
    //     }
    // }

    // componentDidMount() {
    //     const { player1, player2 } = this.props.location.state

    //     if (player1 === '') {
    //         this.props.location.state.player1 = 'Jogador 1';
    //         this.setState({ currentPlayer: this.props.location.state.player1 });
    //     } else {
    //         this.setState({ currentPlayer: player1 });
    //     }

    //     if (player2 === '') {
    //         this.props.location.state.player2 = 'Jogador 2';
    //     }
    // }

    render(){
        const { player1, player2 } = this.props.location.state; // Recebe atravez do Link

        return (
            <div className="game-multi">
                {/* <h1 className="current-player">--> {this.state.currentPlayer}</h1> */}
                <Board player1={player1} player2={player2} gamemode="multi"/>
            </div>
        )
    }
}