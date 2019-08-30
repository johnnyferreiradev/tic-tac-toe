import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './LobbySingle.css';

import Title from '../../templates/Title/Title';
import Ranking from '../Ranking/Ranking';

import api from '../../../services/api';

export default class LobbySingle extends React.Component {
    state = {
        player: '',
        playerId: 0,
        gamemode: 'single',
        errorMessage: false,
        redirect: false
    }

    updateField(event) {
        this.setState({ player: event.target.value });
    }

    async createPlayer(e) {
        e.preventDefault();
        const newPlayer = await api.post('/ranking', {
            name: this.state.player,
            score: 0
        });

        this.setState({ playerId: newPlayer.data.id });

        if (this.state.playerId === -1) {
            this.setState({ errorMessage: true });
        } else {
            this.setState({ redirect: true });
        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            return (
                <Redirect
                    to={{
                        pathname: '/board',
                        state: {
                            player: this.state.player,
                            playerId: this.state.playerId,
                            gamemode: this.state.gamemode
                        }
                    }}
                />
            )
        }
    }

    render() {
        return (
            <>
                <Title title="Modo Singleplayer" />
                <main className="lobby-single">
                    <Ranking />
                    <form>
                        <div className="form-group">
                            <label htmlFor="player-name">Nome</label>
                            <input type="text" id="player-name" onChange={event => this.updateField(event)} />
                            {this.state.errorMessage && <p className="ms-err">Usuário já existe!</p>}
                        </div>
                        <div className="form-group">
                            <button
                                className="single-btn-play"
                                onClick={e => this.createPlayer(e)}>
                                Jogar
                            </button>
                            {this.renderRedirect()}
                        </div>
                    </form>
                </main>
            </>
        );
    }
}