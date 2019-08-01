import './Board.css';

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Field from '../Field/Field';

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
        winner: ''
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
        this.setState({...initialState}); // O state recebe todas as propriedades de initialState
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    leave() {
        this.setState({redirect: true});
    }

    checkDraw() {
        return this.state.squares.every(square => {
            return square !== ''
        })
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
            if (this.state.playValue === 'X') {
                winner = this.state.player1;
            } else if (this.state.playValue === 'O') {
                winner = this.state.player2;
            }

            setTimeout(() => {
                this.setState({showBoard: false, winner }); // esconde o tabuleiro e atualiza o vencedor
            }, 300);

        } else {
            if (this.checkDraw()) { // Valida o empate
                setTimeout(() => {
                    this.setState({ showBoard: false, draw: this.checkDraw()});
                }, 300);
                return
            }

            console.log('Próxima jogada...');
        }
    }

    toggleValue() {
        const playValue = this.state.playValue === 'X' ? 'O' : 'X';
        this.setState({ playValue })
    }

    renderSquare(i) {
        if (this.state.squares[i] !== '') {
            return
        }

        let squares = [];
        squares = this.state.squares

        this.toggleValue()
        squares[i] = this.state.playValue;

        this.setState({ squares });

        this.checkVictory();

        // Aqui será chamada a função que faz com que a IA realize sua jogada.
    }

    componentDidMount() {
        const { gamemode } = this.props;
        
        if (gamemode === 'multi') {
            const { player1, player2 } = this.props;

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


        } else if (gamemode === 'single') {
            console.log('modo singleplayer selecionado');
        }
    }

    render() {
        const {showBoard, draw} = this.state;

        return (
            <>
                {showBoard &&
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
                }

                {/* Este trecho de código será exibido apenas quando houver vitória */}
                {!showBoard && !draw &&
                    <>
                        <h1><span>{this.state.winner}</span> venceu!</h1> {/* Criar logica de exibir vencedor */}
                        <button onClick={() => this.restart()}>Reiniciar</button>

                        {this.renderRedirect()}
                        <button onClick={() => this.leave()}>Sair</button>
                    </>
                }

                {/* Este trecho de código será exibido apenas quando houver empate */}
                {draw &&
                    <>
                        <h1>Empate!</h1>
                        <button onClick={() => this.restart()}>Reiniciar</button>
                        
                        {this.renderRedirect()}
                        <button onClick={() => this.leave()}>Sair</button>
                    </>
                }
            </>
        )
    }
}