import React from 'react';
import { Link } from 'react-router-dom';


import './Home.css';

const Home = () => (
    <section className="home">
        <Link to="/singleplayer" className="button-mode">Um Jogador</Link>
        <Link to="/multiplayer" className="button-mode">Dois Jogadores</Link>
    </section>
)

export default Home;