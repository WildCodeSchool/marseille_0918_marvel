import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Hero from './Hero_Page/Hero';
import Home from './Home';


class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/character/:id" component={Hero}/>
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Router;
