import React from 'react';

import './Ranking.css';

import api from '../../../services/api';

export default class Ranking extends React.Component {
    state = {
        gamers: [],
        limit: 4,
        page: 1
    }

    async getRanking(page = 1, allElements = 0) {
        const response = await api.get(`/ranking?page=${page}&all=${allElements}`);
        let gamers;

        if (allElements === 1) {
            gamers = Object.values(response.data);
            this.setState({ gamers });
        } else {
            gamers = Object.values(response.data.docs);
            this.setState({ gamers });
        }
    }

    componentDidMount() {
        this.getRanking(1, this.props.allElements); // Define se vira todos os elementos ou não
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
                        <p className="position">{index}º</p>
                        <p className="player-name">{gamer.name}</p>
                        <p className="player-score">{gamer.score}</p>
                    </div>
                ))}
            </aside>
        )
    }
}