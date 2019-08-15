import React from 'react';

import './LobbySingle.css';

import Title from '../../templates/Title/Title';

export default class LobbySingle extends React.Component {


    render() {
        return (
            <>
                <Title title="Modo Singleplayer" />
                <main className="lobby-single">
                    <h1>Ranking</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="player-name">Nome</label>
                            <input type="text" id="player-name" />
                        </div>
                        <div className="form-group">
                            <button>Jogar!</button>
                        </div>
                    </form>
                </main>
            </>
        );
    }
}