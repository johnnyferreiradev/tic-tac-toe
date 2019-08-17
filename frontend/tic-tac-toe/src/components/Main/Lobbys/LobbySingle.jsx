import React from 'react';
import { Link } from 'react-router-dom';

import './LobbySingle.css';

import Title from '../../templates/Title/Title';

import Ranking from '../Ranking/Ranking';

export default class LobbySingle extends React.Component {
    state = {
        player: '',
        gamemode: 'single'
    }

    updateField(event) {
        this.setState({ player: event.target.value });
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
                            > Jogar! </Link>
                        </div>
                    </form>
                </main>
            </>
        );
    }
}