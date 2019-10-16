import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import './LobbySingle.css';

import Title from '../../templates/Title/Title';
import Ranking from '../Ranking/Ranking';
import BackButton from '../../templates/BackButton/BackButton';

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

        console.log('Lobby');
        console.log(newPlayer.data);

        this.setState({ playerId: newPlayer.data._id });

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
                <BackButton page="/" />
                <Title title="Modo Singleplayer" />
                <main className="lobby-single">
                    <form>
                        <div className="form-group">
                            <label htmlFor="player-name">Nome</label>
                            <input type="text" id="player-name" onChange={event => this.updateField(event)} required />
                            {this.state.errorMessage && <p className="ms-err">Este nome de usuário já está sendo usado!</p>}
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
                    <div className="container-rkg">
                        <Ranking limit={4} buttons={false}/> {/* Se allElements for 1, então todos os gamers devem ser retornados */}
                        <Link to="/fullranking" className="btn-ranking">Ver ranking completo</Link>
                    </div>
                </main>
            </>
        );
    }
}