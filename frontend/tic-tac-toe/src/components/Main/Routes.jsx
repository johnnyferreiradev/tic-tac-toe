import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import GameMulti from '../pages/GameMulti/GameMulti';
import GameSingle from '../pages/GameSingle/GameSingle';
import Header from '../templates/Header/Header';
import Singleplayer from '../pages/Singleplayer/Singleplayer';
import Multiplayer from '../pages/Multiplayer/Multiplayer';
import Register from '../pages/Register/Register';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/gamemode1" component={GameSingle} />
            <Route path="/gamemode2" component={GameMulti} />
            <Route path="/singleplayer" component={Singleplayer} />
            <Route path="/multiplayer" component={Multiplayer} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
