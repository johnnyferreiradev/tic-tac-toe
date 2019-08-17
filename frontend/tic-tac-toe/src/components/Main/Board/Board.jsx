import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Board.css';

import Field from '../Field/Field';

import api from '../../../services/api';

const initialState = {
    squares: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
    playValue: 'X',
    draw: false,
    showBoard: true,
    redirect: false
}

export default class Board extends Component {

    state = {
        squares: [
            '', '', '',
            '', '', '',
            '', '', ''
        ],
        playValue: 'X',
        draw: false,
        showBoard: true,
        player1: '',
        player2: '',
        currentPlayer: '',
        winner: '',
        score: ''
    }

    constructor() { // Estratégia utilizada para resolver o problema da referencia do this
        super()
        this.toggleValue = this.toggleValue.bind(this)
    }

    restart() {
        const squares = this.state.squares;
        squares.forEach((square, index) => {
            squares[index] = '';
        })
        this.setState({ ...initialState }); // O state recebe todas as propriedades de initialState
        this.setState({ currentPlayer: this.state.player1 });
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    leave() {
        this.setState({ redirect: true });
    }

    checkDraw() {
        return this.state.squares.every(square => {
            return square !== ''
        })
    }

    toggleCurrentPlayer() {
        if (this.state.playValue === 'O') {
            this.setState({ currentPlayer: this.state.player1 });
        } else if (this.state.playValue === 'X') {
            this.setState({ currentPlayer: this.state.player2 });
        }
    }

    checkVictory() {
        const squares = this.state.squares

        if ((squares[0] === squares[1] && squares[1] === squares[2] && squares[1] !== '') ||
            (squares[3] === squares[4] && squares[4] === squares[5] && squares[4] !== '') ||
            (squares[6] === squares[7] && squares[7] === squares[8] && squares[7] !== '') ||
            (squares[0] === squares[3] && squares[3] === squares[6] && squares[3] !== '') ||
            (squares[1] === squares[4] && squares[4] === squares[7] && squares[4] !== '') ||
            (squares[2] === squares[5] && squares[5] === squares[8] && squares[5] !== '') ||
            (squares[0] === squares[4] && squares[4] === squares[8] && squares[4] !== '') ||
            (squares[2] === squares[4] && squares[4] === squares[6] && squares[4] !== '')) { // Inicio do bloco if

            // Verifica se quem venceu foi X ou O
            let winner;
            if (this.state.playValue === 'O') {
                winner = this.state.player2;
            } else if (this.state.playValue === 'X') {
                winner = this.state.player1;
            }

            setTimeout(() => {
                this.setState({ showBoard: false, winner }); // esconde o tabuleiro e atualiza o vencedor
            }, 300);

        } else {
            if (this.checkDraw()) { // Valida o empate
                setTimeout(() => {
                    this.setState({ showBoard: false, draw: this.checkDraw() });
                }, 300);
                return
            }
        }
    }

    toggleValue() {
        const playValue = this.state.playValue === 'X' ? 'O' : 'X';
        this.setState({ playValue })
    }

    // Essa função ira passar o estado atual do jogo e o numero de tentativas e retornará um novo estado
    // do tabuleiro e uma pontuação atualizada
    machineTurn() {
        console.log('faz a requisição ao back para a jogada da maquina');
    }

    renderSquare(i) {
        if (this.state.squares[i] !== '') {
            return
        }

        let squares = [];
        squares = this.state.squares

        this.toggleValue();

        this.toggleCurrentPlayer();

        squares[i] = this.state.playValue;

        this.setState({ squares });

        this.checkVictory();

        if (this.props.location.state.gamemode === 'single') {
            this.machineTurn();
        }
    }

    componentDidMount() {
        const { gamemode } = this.props.location.state;
        console.log(gamemode);

        if (gamemode === 'multi') {
            const { player1, player2 } = this.props.location.state;

            if (player1 === '') {
                this.setState({ player1: 'Jogador 1' });
            } else {
                this.setState({ player1 });
            }

            if (player2 === '') {
                this.setState({ player2: 'Jogador 2' });
            } else {
                this.setState({ player2 });
            }

            this.setState({ currentPlayer: player1 });

        } else if (gamemode === 'single') {
            const { player } = this.props.location.state;

            if (player === '') {
                this.setState({ player1: 'Você', player2: 'Máquina', currentPlayer: 'Você' });
            } else {
                this.setState({ player1: player, player2: 'Máquina', currentPlayer: player });
            }
        }
    }

    render() {
        const { showBoard, draw } = this.state;
        const { gamemode } = this.props.location.state;

        return (
            <>
                {showBoard &&
                    <div className="container-board">
                        <div className="next-player">
                            <span>Vez de:</span>
                            <h2>{this.state.currentPlayer} ({this.state.playValue})</h2>
                        </div>
                        <div className="board" onClick={this.props.onClick}>
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
                        <div className="actions">
                            <button onClick={() => this.restart()} className="restart">Reiniciar</button>
                            {this.renderRedirect()}
                            <button onClick={() => this.leave()} className="leave">Sair</button>
                        </div>
                    </div>
                }

                {/* Este trecho de código será exibido apenas quando houver vitória */}
                {!showBoard && !draw &&
                    <div className="show-winner">
                        <h1 className="game-result">{this.state.winner}</h1>
                        <h3 className="win">Venceu!</h3>
                        {gamemode === 'single' && this.state.winner !== 'Máquina' && <h3 className="win">pontuação: 3000!</h3>}
                        <div className="btns-game-result">
                            <button onClick={() => this.restart()} className="restart">Reiniciar</button>
                            {this.renderRedirect()}
                            <button onClick={() => this.leave()} className="leave">Sair</button>
                        </div>
                    </div>
                }

                {/* Este trecho de código será exibido apenas quando houver empate */}
                {draw &&
                    <div className="show-winner">
                        <h1 className="game-result">Empate!</h1>
                        <div className="btns-game-result">
                            <button onClick={() => this.restart()} className="restart">Reiniciar</button>
                            {this.renderRedirect()}
                            <button onClick={() => this.leave()} className="leave">Sair</button>
                        </div>
                    </div>
                }
            </>
        )
    }
}