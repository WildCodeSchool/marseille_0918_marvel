import React, { Component } from 'react';
import Search from './Search/Search';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Hero from './Hero_Page/Hero';


class SearchRouter extends Component {
    render() {
        return (
        <BrowserRouter>
            <Switch>
            <Route path="/search" component={Search}/>
            <Route path="/character/:id" component={Hero}/>
            </Switch>
        </BrowserRouter>
        );
    }
}

export default SearchRouter;

