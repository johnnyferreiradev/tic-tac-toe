import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import './Lobby.css';

export default class Lobby extends React.Component {
    state = {
        player1: '',
        player2: ''
    }

    updateField(event, player) {
        if (player === 1) {
            this.setState({ player1: event.target.value });
        } else if (player === 2) {
            this.setState({ player2: event.target.value });
        }
    }

    render() {
        return (
            <>
                <Header title="Modo Multiplayer" />
                <div className="lobby">
                    <div className="lobby-form">
                        <div className="lobby-form-group">
                            <label htmlFor="gamer1">Jogador 1 (X)</label>
                            <input type="text" id="gamer1" placeholder="Nome do jogador 1..." onChange={e => this.updateField(e, 1)} />
                        </div>
                        <p className="lobby-vs">VS.</p>
                        <div className="lobby-form-group">
                            <label htmlFor="gamer2">Jogador 2 (O)</label>
                            <input type="text" id="gamer2" placeholder="Nome do jogador 2..." onChange={e => this.updateField(e, 2)} />
                        </div>
                    </div>

                    {/* Estratégia utilizada para enviar props entre componentes por meio do Link */}
                    <Link to={{ // O state está sendo enviado por meio do Link...
                        pathname: '/game', // No componente <Game /> as informações passadas estarão disponíveis em this.props.location
                        state: {
                            player1: this.state.player1,
                            player2: this.state.player2
                        }
                    }} className="btn-start">Jogar!</Link>
                </div>
            </>
        )
    }
}