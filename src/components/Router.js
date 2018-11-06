import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Hero from "./Hero_Page/Hero";
import Home from "./Home";
import Page404 from "./Page404/page404";
import Tops from './Top/TopSuper/Top';
import TopBad from './Top/TopBad/TopBad';
import Indexx from "./Indexx/Indexx";

class RouterApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character/:id" component={Hero} />
          <Route path="/tops" component={Tops} />
          <Route path="/topvilains" component={TopBad} />
          <Route path="/index" component={Indexx} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterApp;
