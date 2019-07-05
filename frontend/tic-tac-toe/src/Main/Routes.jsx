import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../components/pages/Login/Login';
import Home from '../components/pages/Home/Home';
import Game from '../components/pages/Game/Game';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/game" component={Game} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
