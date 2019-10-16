import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import Board from './Board/Board';
import Header from '../templates/Header/Header';
import LobbySingle from '../Main/Lobbys/LobbySingle';
import LobbyMulti from '../Main/Lobbys/LobbyMulti';
import FullRanking from '../pages/Ranking/FullRanking';


const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/board" component={Board} />
            <Route path="/singleplayer" component={LobbySingle} />
            <Route path="/multiplayer" component={LobbyMulti} />
            <Route path="/register" component={Register} />
            <Route path="/fullranking" component={FullRanking} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
