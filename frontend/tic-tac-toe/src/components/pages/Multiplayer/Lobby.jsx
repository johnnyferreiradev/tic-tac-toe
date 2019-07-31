import React from 'react';
import { Link } from 'react-router-dom';

export default class Lobby extends React.Component {
    render() {
        return (
            <>
                <div className="lobby">
                    <h1>Modo Multiplayer</h1>

                    <label htmlFor="gamer1">Jogador 1 (X)</label>
                    <input type="text" id="gamer1" placeholder="Nome do jogador 1..."/>

                    <label htmlFor="gamer2">Jogador 2 (O)</label>
                    <input type="text" id="gamer2" placeholder="Nome do jogador 2..."/>

                    {/* Estratégia utilizada para enviar props entre componentes por meio do Link */}
                    <Link to={{ // O state está sendo enviado por meio do Link...
                            pathname: '/game', // No componente <Game /> as informações passadas estarão disponíveis em this.props.location
                            state: {
                                player1: "Johnny",
                                player2: "John"
                            }
                        }} className="btn-start">Jogar!</Link>
                </div>
            </>
        )
    }
}