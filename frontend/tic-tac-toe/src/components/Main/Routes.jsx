import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Game from '../pages/Game/Game';
import Header from '../templates/Header/Header';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/game" component={Game} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
