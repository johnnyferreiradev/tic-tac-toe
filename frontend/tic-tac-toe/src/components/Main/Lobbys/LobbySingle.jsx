import React from 'react';
import { Link } from 'react-router-dom';

import './LobbySingle.css';

import Title from '../../templates/Title/Title';
import Ranking from '../Ranking/Ranking';

import api from '../../../services/api';

export default class LobbySingle extends React.Component {
    state = {
        player: '',
        playerId: '',
        gamemode: 'single'
    }

    updateField(event) {
        this.setState({ player: event.target.value });
    }

    async createPlayer() {
        const newPlayer = await api.post('/ranking', {
            name: this.state.player,
            score: 0
        });
        this.setState({ id: newPlayer.data._id });
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
                            <input type="text" id="player-name" onChange={ event => this.updateField(event) } />
                        </div>
                        <div className="form-group">
                            <Link 
                                to={{
                                    pathname: '/board',
                                    state: {
                                        player: this.state.player,
                                        gamemode: this.state.gamemode
                                    }
                                }} 
                                className="single-btn-play"
                                onClick={e => this.createPlayer(e)}
                            > Jogar! </Link>
                        </div>
                    </form>
                </main>
            </>
        );
    }
}