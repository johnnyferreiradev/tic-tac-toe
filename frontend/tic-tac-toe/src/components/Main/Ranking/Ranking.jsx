import React from 'react';

import './Ranking.css';

export default class Ranking extends React.Component {

    render() {
        return (
            <aside className="ranking">
                <div className="ranking-item">
                    <h3>Ranking</h3>
                </div>

                <div className="ranking-item">
                    <p className="position">1º</p>
                    <p className="player-name">Johnny</p>
                    <p className="player-score">198282</p>
                </div>

                <div className="ranking-item">
                    <p className="position">2º</p>
                    <p className="player-name">Johnny</p>
                    <p className="player-score">198282</p>
                </div>

                <div className="ranking-item">
                    <p className="position">3º</p>
                    <p className="player-name">Johnny</p>
                    <p className="player-score">198282</p>
                </div>

                <div className="ranking-item">
                    <p className="position">4º</p>
                    <p className="player-name">Johnny</p>
                    <p className="player-score">198282</p>
                </div>
            </aside>
        )
    }
}