import React from 'react';

import './Ranking.css';

import api from '../../../services/api';

export default class Ranking extends React.Component {
    state = {
        serverResponse: {},
        gamers: [],
        limit: 4,
        page: 1,
        buttons: false,
        colorPosition: '#a971e9'
    }

    async getRanking(page = 1, limit = 4) {
        const response = await api.get(`/ranking?page=${page}&limit=${limit}`);
        const gamers = Object.values(response.data.docs);
        this.setState({ serverResponse: response.data, gamers, page, limit });
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return
        const pageNumber  = page - 1;
        this.getRanking(pageNumber, this.props.limit);
    }

    nextPage = () => {
        const { page, serverResponse } = this.state;
        if (page === serverResponse.pages) return
        const pageNumber  = page + 1;
        this.getRanking(pageNumber, this.props.limit);
    }

    componentDidMount() {
        this.getRanking(1, this.props.limit);
        if (this.props.buttons === true) {
            this.setState({ buttons: true });
        }
    }

    render() {
        const { gamers, buttons, page } = this.state;

        return (
            <aside className="ranking">
                <div className="ranking-item">
                    <h3>Ranking</h3>
                </div>

                {gamers.map((gamer, index) => (
                    <div className="ranking-item" key={index}>
                        <p className="position">{index+1+((page-1)*10)}º</p>
                        <p className="player-name">{gamer.name}</p>
                        <p className="player-score">{gamer.score}</p>
                    </div>
                ))}

                {buttons &&
                    <div className="btns-ranking">
                        <button onClick={event => this.prevPage(event)}>Voltar</button>
                        <button onClick={event => this.nextPage(event)}>Avançar</button>
                    </div>
                }
            </aside>
        )
    }
}