import React from 'react';
import { Link } from 'react-router-dom';
import Game from '../Game/Game';

import './Home.css';

const Home = () => (
    <section className="home">
        <Link to="/game_mode1" component={Game} className="button-mode">Um Jogador</Link>
        <Link to="/game_mode2" component={Game} className="button-mode">Dois Jogadores</Link>
    </section>
)

export default Home;