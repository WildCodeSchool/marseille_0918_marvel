import React, {Component} from 'react';
import App from '../../../App'
import Top from './Top';
import {BrowserRouter} from 'react-router-dom';
import {Route, NavLink, Switch} from 'react-router-dom';


class TopLink extends Component (){
  render(){
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/top" component={Top} />
        </ Switch>

        <NavLink to="/top"> Go to Top </NavLink>
      </div>
        </ BrowserRouter>
    )
  }}

export default TopLink;
