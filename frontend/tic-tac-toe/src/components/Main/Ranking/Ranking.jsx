import React from 'react';

import './Ranking.css';

import api from '../../../services/api';

export default class Ranking extends React.Component {
    state = {
        gamers: [],
        limit: 4,
        page: 1
    }

    async getRanking(page = 1, limit = 4) {
        const response = await api.get(`/ranking?page=${page}&limit=${limit}`);
        const gamers = Object.values(response.data.docs);
        this.setState({ gamers });
    }

    componentDidMount() {
        this.getRanking(1, this.props.limit);
    }

    render() {
        const { gamers } = this.state;

        return (
            <aside className="ranking">
                <div className="ranking-item">
                    <h3>Ranking</h3>
                </div>

                {gamers.map((gamer, index) => (
                    <div className="ranking-item" key={index}>
                        <p className="position">{index+1}º</p>
                        <p className="player-name">{gamer.name}</p>
                        <p className="player-score">{gamer.score}</p>
                    </div>
                ))}
            </aside>
        )
    }
}